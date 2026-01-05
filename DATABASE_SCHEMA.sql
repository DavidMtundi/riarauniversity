-- Riara University Backend API - Database Schema
-- PostgreSQL Database Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- USERS / ADMINS
-- ============================================

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin' CHECK (role IN ('super_admin', 'admin', 'editor')),
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  is_active BOOLEAN DEFAULT TRUE,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);

-- ============================================
-- NEWS ARTICLES
-- ============================================

CREATE TABLE news_articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category VARCHAR(100) NOT NULL,
  title VARCHAR(500) NOT NULL,
  subtitle VARCHAR(500),
  excerpt TEXT NOT NULL,
  content TEXT,
  image_url VARCHAR(500),
  link VARCHAR(500),
  featured BOOLEAN DEFAULT FALSE,
  published_date TIMESTAMP,
  author VARCHAR(255),
  status VARCHAR(50) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  created_by UUID REFERENCES users(id) ON DELETE SET NULL,
  updated_by UUID REFERENCES users(id) ON DELETE SET NULL
);

CREATE INDEX idx_news_status ON news_articles(status);
CREATE INDEX idx_news_featured ON news_articles(featured);
CREATE INDEX idx_news_published_date ON news_articles(published_date DESC);
CREATE INDEX idx_news_category ON news_articles(category);
CREATE INDEX idx_news_created_at ON news_articles(created_at DESC);

-- ============================================
-- EVENTS
-- ============================================

CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  type VARCHAR(100) NOT NULL, -- Workshop, Conference, Seminar, Exhibition, Performance, etc.
  title VARCHAR(500) NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  time VARCHAR(50), -- e.g., "09:00 am EAT"
  end_date DATE, -- For multi-day events
  end_time VARCHAR(50),
  image_url VARCHAR(500),
  link VARCHAR(500),
  location VARCHAR(255),
  venue VARCHAR(255),
  status VARCHAR(50) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived', 'cancelled')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  created_by UUID REFERENCES users(id) ON DELETE SET NULL,
  updated_by UUID REFERENCES users(id) ON DELETE SET NULL
);

CREATE INDEX idx_events_status ON events(status);
CREATE INDEX idx_events_date ON events(date DESC);
CREATE INDEX idx_events_type ON events(type);
CREATE INDEX idx_events_created_at ON events(created_at DESC);

-- ============================================
-- CAREERS / JOB POSTINGS
-- ============================================

CREATE TABLE careers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  type VARCHAR(100) NOT NULL, -- Faculty, Research, Administration, Staff
  title VARCHAR(500) NOT NULL,
  department VARCHAR(255),
  location VARCHAR(255),
  date DATE NOT NULL, -- Application deadline
  time VARCHAR(50), -- Full-time, Contract, Part-time, Temporary
  image_url VARCHAR(500),
  link VARCHAR(500), -- Link to job description PDF or application form
  description TEXT,
  requirements TEXT,
  responsibilities TEXT,
  qualifications TEXT,
  status VARCHAR(50) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'closed', 'archived')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  created_by UUID REFERENCES users(id) ON DELETE SET NULL,
  updated_by UUID REFERENCES users(id) ON DELETE SET NULL
);

CREATE INDEX idx_careers_status ON careers(status);
CREATE INDEX idx_careers_type ON careers(type);
CREATE INDEX idx_careers_date ON careers(date DESC);
CREATE INDEX idx_careers_department ON careers(department);
CREATE INDEX idx_careers_created_at ON careers(created_at DESC);

-- ============================================
-- PARTNER CATEGORIES
-- ============================================

CREATE TABLE partner_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url VARCHAR(500),
  link VARCHAR(500),
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_partner_categories_display_order ON partner_categories(display_order);

-- ============================================
-- PARTNERS
-- ============================================

CREATE TABLE partners (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  logo_url VARCHAR(500),
  website VARCHAR(500),
  category_id UUID REFERENCES partner_categories(id) ON DELETE SET NULL,
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  created_by UUID REFERENCES users(id) ON DELETE SET NULL
);

CREATE INDEX idx_partners_category ON partners(category_id);
CREATE INDEX idx_partners_status ON partners(status);
CREATE INDEX idx_partners_display_order ON partners(display_order);

-- ============================================
-- MEDIA / FILE UPLOADS
-- ============================================

CREATE TABLE media (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  filename VARCHAR(255) NOT NULL,
  original_filename VARCHAR(255) NOT NULL,
  mime_type VARCHAR(100),
  file_size BIGINT, -- Size in bytes
  file_path VARCHAR(500) NOT NULL, -- Server file path
  file_url VARCHAR(500) NOT NULL, -- Public URL
  file_type VARCHAR(50), -- image, document, video, etc.
  width INTEGER, -- For images
  height INTEGER, -- For images
  uploaded_by UUID REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_media_file_type ON media(file_type);
CREATE INDEX idx_media_uploaded_by ON media(uploaded_by);
CREATE INDEX idx_media_created_at ON media(created_at DESC);

-- ============================================
-- AUDIT LOG (Optional - for tracking changes)
-- ============================================

CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  action VARCHAR(100) NOT NULL, -- create, update, delete, login, etc.
  entity_type VARCHAR(100) NOT NULL, -- news_article, event, career, etc.
  entity_id UUID,
  changes JSONB, -- Store before/after values
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_audit_logs_user ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_entity ON audit_logs(entity_type, entity_id);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at DESC);

-- ============================================
-- FUNCTIONS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers to auto-update updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_news_articles_updated_at BEFORE UPDATE ON news_articles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_careers_updated_at BEFORE UPDATE ON careers
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_partner_categories_updated_at BEFORE UPDATE ON partner_categories
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_partners_updated_at BEFORE UPDATE ON partners
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- INITIAL DATA (Optional)
-- ============================================

-- Create default admin user (password should be changed immediately)
-- Password hash for "admin123" (bcrypt, rounds=10)
-- Use: INSERT INTO users (username, email, password_hash, role) 
--      VALUES ('admin', 'admin@riarauniversity.ac.ke', '$2b$10$...', 'super_admin');
-- Generate password hash in application code

-- ============================================
-- NOTES
-- ============================================

-- 1. All timestamps use TIMESTAMP type (timezone-aware)
-- 2. UUIDs are used for all primary keys
-- 3. Foreign keys use ON DELETE SET NULL for audit trail preservation
-- 4. Indexes are created for common query patterns
-- 5. Status fields use CHECK constraints for data integrity
-- 6. Updated_at is automatically managed by triggers
-- 7. Consider adding soft deletes (deleted_at column) if needed
-- 8. Consider adding full-text search indexes (GIN) for search functionality
-- 9. Consider adding database-level row-level security (RLS) for multi-tenancy




