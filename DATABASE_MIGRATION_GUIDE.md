# Database Migration Guide

This guide explains how to migrate from in-memory storage to a database backend.

## Current Architecture

The application uses a **Repository Pattern** with clear abstractions:

1. **Storage Interface** (`server/storage.ts`) - High-level API used by routes
2. **Repository Interfaces** (`server/repositories/ContentRepository.ts`) - Data access contracts
3. **Memory Implementations** (`server/repositories/MemoryRepositories.ts`) - Current in-memory storage
4. **Configuration** (`server/config.ts`) - Centralized config including image URL handling

## Key Features for Database Migration

### 1. Image URL Handling

All image URLs are automatically transformed through `getImageUrl()` function:
- Supports relative paths (prepends base URL)
- Supports absolute URLs (returns as-is)
- Supports CDN URLs (via `getCdnImageUrl()`)
- Configurable via environment variables

**Environment Variables:**
```bash
IMAGE_BASE_URL=/images          # Base URL for relative image paths
CDN_URL=https://cdn.example.com # Optional CDN URL
```

### 2. Repository Pattern

Each content type has a repository interface that can be swapped:

```typescript
// Current: Memory implementation
const newsRepo = new MemoryNewsRepository(initialData);

// Future: Database implementation
const newsRepo = new DatabaseNewsRepository(dbConnection);
```

### 3. Data Transformation

All data is transformed before being returned:
- Image URLs are normalized
- Empty strings are handled gracefully
- CDN URLs can be applied automatically

## Migration Steps

### Step 1: Create Database Schema

Create tables matching the TypeScript interfaces in `shared/schema.ts`:

```sql
-- Example: News Articles table
CREATE TABLE news_articles (
  id VARCHAR PRIMARY KEY,
  category VARCHAR NOT NULL,
  title VARCHAR NOT NULL,
  excerpt TEXT,
  image_url VARCHAR,
  link VARCHAR,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Similar tables for:
-- - events
-- - education_paths
-- - schools
-- - research_stats
-- - profiles
-- - content_sections
-- - partners
-- - partner_categories
```

### Step 2: Create Database Repository Implementations

Create new files in `server/repositories/`:

```typescript
// server/repositories/DatabaseRepositories.ts
import { DatabaseNewsRepository } from './DatabaseNewsRepository';

export class DatabaseNewsRepository implements INewsRepository {
  constructor(private db: DatabaseConnection) {}
  
  async findAll(): Promise<NewsArticle[]> {
    const rows = await this.db.query('SELECT * FROM news_articles');
    return rows.map(transformRowToNewsArticle);
  }
  
  // Implement all interface methods...
}
```

### Step 3: Update Storage Implementation

Modify `server/storage.ts` to use database repositories:

```typescript
// server/storage.ts
import { config } from './config';
import { DatabaseNewsRepository } from './repositories/DatabaseRepositories';

export class DatabaseStorage implements IStorage {
  private newsRepo: INewsRepository;
  
  constructor() {
    if (config.storage.type === 'database') {
      const db = createDatabaseConnection(config.storage.database.connectionString);
      this.newsRepo = new DatabaseNewsRepository(db);
    } else {
      // Fallback to memory
      this.newsRepo = new MemoryNewsRepository();
    }
  }
  
  async getNewsArticles(): Promise<NewsArticle[]> {
    const articles = await this.newsRepo.findAll();
    return transformImageUrls(articles);
  }
}
```

### Step 4: Update Configuration

Set environment variable:

```bash
STORAGE_TYPE=database
DATABASE_URL=postgresql://user:pass@localhost:5432/riara_db
```

### Step 5: Update Routes (No Changes Needed!)

Routes continue to work the same way:

```typescript
app.get("/api/news", async (_req, res) => {
  const articles = await storage.getNewsArticles(); // Works with both!
  res.json(articles);
});
```

## Image URL Best Practices

### Storing in Database

Store image URLs in one of these formats:

1. **Relative paths** (recommended):
   ```
   /images/news/article-1.jpg
   /partners/logos/company.png
   ```

2. **Absolute URLs** (for external images):
   ```
   https://example.com/image.jpg
   ```

3. **Database paths** (will be transformed):
   ```
   news/article-1.jpg  → /images/news/article-1.jpg
   ```

### Image URL Transformation

The `getImageUrl()` function automatically:
- Handles empty strings (returns placeholder or empty)
- Prepends base URL to relative paths
- Leaves absolute URLs unchanged
- Supports CDN URLs

## Content Types and Image URLs

All content types support `imageUrl`:

- **NewsArticle**: `imageUrl` - Article featured image
- **Event**: `imageUrl` - Event banner/thumbnail
- **EducationPath**: `imageUrl` - Program image
- **ContentSection**: `imageUrl` - Section image
- **Profile**: `imageUrl` - Profile photo
- **PartnerCategory**: `imageUrl` - Category image
- **Partner**: `logoUrl` - Partner logo (special field name)

## Testing Database Migration

1. **Start with Memory Storage**: Ensure all tests pass
2. **Add Database Layer**: Create database repositories
3. **Switch Configuration**: Change `STORAGE_TYPE=database`
4. **Verify**: All endpoints return same data structure
5. **Test Image URLs**: Verify image URLs are correctly transformed

## Benefits of This Architecture

✅ **Zero Breaking Changes**: Routes don't need modification
✅ **Easy Testing**: Can switch between memory and database
✅ **Image URL Flexibility**: Supports multiple URL formats
✅ **Type Safety**: TypeScript interfaces ensure consistency
✅ **Future-Proof**: Easy to add caching, CDN, etc.

## Next Steps

1. Create database schema
2. Implement database repositories
3. Add database connection pooling
4. Add migration scripts
5. Add data seeding scripts
6. Update environment configuration

---

**Note**: The current implementation works perfectly with in-memory storage. This architecture makes it trivial to swap to a database when ready.

