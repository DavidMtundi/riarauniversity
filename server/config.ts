/**
 * Application Configuration
 * Centralized configuration for easy environment-based customization
 */

export interface AppConfig {
  images: {
    baseUrl: string;
    cdnUrl?: string;
    defaultPlaceholder?: string;
  };
  api: {
    defaultPageSize: number;
    maxPageSize: number;
  };
  storage: {
    type: 'memory' | 'database';
    database?: {
      connectionString?: string;
    };
  };
}

/**
 * Get image URL - handles both relative and absolute URLs
 * If imageUrl is empty or relative, prepends baseUrl
 * If imageUrl is absolute, returns as-is
 */
export function getImageUrl(imageUrl: string, baseUrl?: string): string {
  if (!imageUrl || imageUrl.trim() === '') {
    return config.images.defaultPlaceholder || '';
  }

  // If already absolute URL, return as-is
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }

  // If starts with /, it's a root-relative path
  if (imageUrl.startsWith('/')) {
    return imageUrl;
  }

  // Otherwise, prepend base URL
  const base = baseUrl || config.images.baseUrl || '';
  return base ? `${base}/${imageUrl}`.replace(/\/+/g, '/') : imageUrl;
}

/**
 * Get CDN URL if configured, otherwise use regular image URL
 */
export function getCdnImageUrl(imageUrl: string): string {
  const regularUrl = getImageUrl(imageUrl);
  
  if (config.images.cdnUrl && regularUrl && !regularUrl.startsWith('http')) {
    return `${config.images.cdnUrl}${regularUrl}`;
  }
  
  return regularUrl;
}

// Default configuration
export const config: AppConfig = {
  images: {
    baseUrl: process.env.IMAGE_BASE_URL || '/images',
    cdnUrl: process.env.CDN_URL,
    defaultPlaceholder: '/images/placeholder.png',
  },
  api: {
    defaultPageSize: 20,
    maxPageSize: 100,
  },
  storage: {
    type: (process.env.STORAGE_TYPE as 'memory' | 'database') || 'memory',
    database: {
      connectionString: process.env.DATABASE_URL,
    },
  },
};

