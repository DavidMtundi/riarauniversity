/**
 * Base Repository Interface
 * Defines the contract for all data repositories
 * This makes it easy to swap implementations (memory -> database)
 */

export interface BaseRepository<T> {
  /**
   * Get all items
   */
  findAll(): Promise<T[]>;
  
  /**
   * Get item by ID
   */
  findById(id: string): Promise<T | undefined>;
  
  /**
   * Create new item
   */
  create(item: Omit<T, 'id'>): Promise<T>;
  
  /**
   * Update existing item
   */
  update(id: string, item: Partial<T>): Promise<T | undefined>;
  
  /**
   * Delete item by ID
   */
  delete(id: string): Promise<boolean>;
}

/**
 * Repository with search capability
 */
export interface SearchableRepository<T> extends BaseRepository<T> {
  /**
   * Search items by query
   */
  search(query: string, limit?: number): Promise<T[]>;
}

/**
 * Repository with pagination
 */
export interface PaginatedRepository<T> extends BaseRepository<T> {
  /**
   * Get paginated items
   */
  findPaginated(page: number, pageSize: number): Promise<{ items: T[]; total: number; page: number; pageSize: number }>;
}

