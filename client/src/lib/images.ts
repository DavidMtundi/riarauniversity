/**
 * Centralized Images Configuration
 * 
 * This file manages all image URLs used throughout the application.
 * Update images here to make changes across the entire application.
 * 
 * Usage:
 * - Import the specific image constant you need
 * - Example: import { HERO_IMAGES } from '@/lib/images';
 * - Use: src={HERO_IMAGES.drone}
 */

// ============================================================================
// HERO SECTION IMAGES
// ============================================================================
export const HERO_IMAGES = {
  /** Primary drone image for homepage hero */
  drone: "https://pub-9dae0f05d1fc4e96997fa47a670a3841.r2.dev/drone-images/DJI_0634.JPG",
  
  /** Local hero images (fallbacks) */
  localWebp: "/images/hero-background.webp",
  localJpg: "/images/hero-background.jpg",
  
  /** External fallback hero image */
  externalFallback: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg",
} as const;

// ============================================================================
// PAGE HERO BACKGROUNDS
// ============================================================================
export const PAGE_HERO_IMAGES = {
  /** Default hero background used across multiple pages */
  default: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg",
  
  /** Student life hero background */
  studentLife: "https://riarauniversity.ac.ke/wp-content/uploads/2023/12/Student-Life-2.jpg",
  
  /** Student life alternative */
  studentLifeAlt: "https://riarauniversity.ac.ke/wp-content/uploads/2023/12/Student-Life-4.jpg",
} as const;

// ============================================================================
// COMMON CONTENT IMAGES
// ============================================================================
export const CONTENT_IMAGES = {
  /** Default campus image */
  campus: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg",
  
  /** Student life images */
  studentLife1: "https://riarauniversity.ac.ke/wp-content/uploads/2023/12/Student-Life-2.jpg",
  studentLife2: "https://riarauniversity.ac.ke/wp-content/uploads/2023/12/Student-Life-4.jpg",
  
  /** Academic/education images */
  academics: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  
  /** Research images */
  research: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
} as const;

// ============================================================================
// PROFILE & LEADERSHIP IMAGES
// ============================================================================
export const PROFILE_IMAGES = {
  /** Founders */
  danielGachukia: "https://riarauniversity.ac.ke/wp-content/uploads/2017/07/Mr.-Daniel-Gachukia-Chairman.jpg",
  eddahGachukia: "https://riarauniversity.ac.ke/wp-content/uploads/2021/08/EG.jpg",
  
  /** Staff/Leadership */
  dorothyOduor: "https://riarauniversity.ac.ke/wp-content/uploads/2023/11/Ms.-Dorothy-Oduor-255x340.jpg",
  leahMbuyah: "https://ru.ac.ke/wp-content/uploads/2025/06/nurse-2.jpg",
  
  /** Student activities */
  studentActivity1: "https://ru.ac.ke/wp-content/uploads/2025/06/IMG_5189-800x533.jpg",
} as const;

// ============================================================================
// ACCREDITATION LOGOS
// ============================================================================
export const ACCREDITATION_LOGOS = {
  cue: "https://www.cue.or.ke/images/logo/logo.png",
  cle: "https://www.counciloflegaleducation.or.ke/wp-content/uploads/2021/06/cle-logo.png",
  kasneb: "https://www.kasneb.or.ke/images/kasneb-logo.png",
} as const;

// ============================================================================
// EXTERNAL/THIRD-PARTY IMAGES
// ============================================================================
export const EXTERNAL_IMAGES = {
  /** Partner/external organization images */
  symbion: "https://www.symbion-int.com/wp-content/uploads/2023/09/1-1.jpg?width=588&quality=95",
} as const;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get hero image with fallback chain
 * Priority: drone > local WebP > local JPG > external fallback
 */
export function getHeroImage(fallbackToLocal = false): string {
  if (fallbackToLocal) {
    return HERO_IMAGES.localJpg || HERO_IMAGES.externalFallback;
  }
  return HERO_IMAGES.drone;
}

/**
 * Get page hero background image
 * @param page - Page identifier (default, studentLife, etc.)
 */
export function getPageHeroImage(page: keyof typeof PAGE_HERO_IMAGES = "default"): string {
  return PAGE_HERO_IMAGES[page];
}

