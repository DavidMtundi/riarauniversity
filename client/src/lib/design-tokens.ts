/**
 * Riara University Design Tokens
 * Centralized design system for consistent styling across the application
 */

// Typography - Riara University System Font Stack
export const typography = {
  fontFamily: {
    primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    serif: 'serif',
  },
  fontSize: {
    // Stanford Heading Sizes
    h1: '3rem', // 48px (32-48px range)
    h2: '2.25rem', // 36px (28-36px range)
    h3: '1.75rem', // 28px (24-28px range)
    h4: '1.375rem', // 22px (20-22px range)
    h5: '1.125rem', // 18px (16-18px range)
    h6: '1rem', // 16px (14-16px range)
    // Stanford Paragraph Sizes
    body: '0.875rem', // 14px (14-16px range)
    bodyLarge: '1.125rem', // 18px (18-20px range)
    bodySmall: '0.75rem', // 12px (12-13px range)
    // Stanford Navigation Sizes
    navPrimary: '1rem', // 16px
    navSecondary: '0.875rem', // 14px
    navGateway: '0.8125rem', // 13px
    footer: '0.8125rem', // 13px
    // Standard sizes
    xs: '0.75rem', // 12px
    sm: '0.8125rem', // 13px
    base: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.375rem', // 22px
    '3xl': '1.5rem', // 24px
    '4xl': '1.75rem', // 28px
    '5xl': '2.25rem', // 36px
    '6xl': '3rem', // 48px
    // Legacy Mission section specific sizes (for backward compatibility)
    missionTitle: {
      base: '1.625em', // 26px
      responsive: '3.90625em', // 62.5px (≥576px)
    },
    missionText: {
      base: '1.5625em', // 25px
      responsive: '1.953125em', // 31.25px (≥576px)
    },
    // Header sizes
    headerTitle: '3rem', // 48px
    headerNav: '1.5rem', // 24px
    headerInfo: '1.125rem', // 18px
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  lineHeight: {
    // Stanford Heading Line Heights
    h1: '1.2', // 1.2-1.3 range
    h2: '1.25',
    h3: '1.3',
    h4: '1.35',
    h5: '1.4',
    h6: '1.4',
    // Stanford Paragraph Line Heights
    body: '1.6',
    bodyLarge: '1.7',
    bodySmall: '1.5',
    // Standard line heights
    tight: '1.2',
    snug: '1.25',
    normal: '1.3',
    relaxed: '1.35',
    loose: '1.4',
  },
  letterSpacing: {
    h1: '-0.5px',
    h2: '-0.3px',
    h3: '0px',
    h4: '0px',
    h5: '0px',
    h6: '0px',
    normal: '0px',
  },
} as const;

// Colors - Riara University Brand Colors
export const colors = {
  // Riara University Brand Colors (using Stanford red as base)
  stanford: {
    red: '#A21D25', // Cardinal Red
    redDark: '#7B1519', // Dark Red (hover/active)
    redLight: '#C92A33',
  },
  // Text Colors - Riara University
  text: {
    primary: '#000000',
    secondary: '#333333',
    tertiary: '#666666',
    h5h6: '#1B1B1B',
    muted: '#999999',
    copyright: '#CCCCCC',
    inverse: '#ffffff',
    inverseSecondary: '#f5f5f5',
  },
  // Background Colors - Riara University
  background: {
    primary: '#ffffff',
    secondary: '#fafafa',
    tertiary: '#f5f5f5',
    lightGray: '#F5F5F5',
    mediumGray: '#E8E8E8',
    darkGray: '#2E2E2E',
    footer: '#2E2E2E',
    copyright: '#1A1A1A',
    buttonPrimary: '#A21D25',
    buttonSecondary: '#F0F0F0',
    buttonSearch: '#E8E8E8',
    inverse: '#000000',
    maroon: '#800020', // For header background
  },
  // Border Colors - Riara University
  border: {
    light: '#D0D0D0',
    medium: '#CCCCCC',
    secondary: '#E8E8E8',
    dark: '#a3a3a3',
    maroon: '#A00030',
  },
  // Legacy Riara University colors (for backward compatibility)
  riara: {
    maroon: '#800020', // Riara Maroon
    maroonLight: '#A00030',
    maroonDark: '#600015',
    gold: '#F59E0B', // Riara Gold
    goldLight: '#FBBF24',
    goldDark: '#D97706',
  },
  // Semantic colors (legacy - for backward compatibility)
  primary: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  // Neutral colors (legacy - for backward compatibility)
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
} as const;

// Spacing
export const spacing = {
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
  '4xl': '6rem', // 96px
  '5xl': '8rem', // 128px
} as const;

// Shadows
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  // Riara specific shadow
  riara: '0 0 15px rgba(128, 0, 32, .2), 0 4px 6px rgba(128, 0, 32, .1)',
} as const;

// Border radius
export const borderRadius = {
  none: '0',
  sm: '0.125rem', // 2px
  base: '0.25rem', // 4px
  md: '0.375rem', // 6px
  lg: '0.5rem', // 8px
  xl: '0.75rem', // 12px
  '2xl': '1rem', // 16px
  '3xl': '1.5rem', // 24px
  full: '9999px',
} as const;

// Breakpoints
export const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Component-specific styles
export const components = {
  header: {
    height: {
      topBar: '2.5rem', // 40px
      mainNav: '4rem', // 64px
    },
    background: colors.background.maroon,
    textColor: colors.text.inverse,
    hoverColor: colors.text.inverseSecondary,
  },
  mission: {
    title: {
      fontSize: typography.fontSize.missionTitle,
      fontWeight: typography.fontWeight.black,
      fontFamily: typography.fontFamily.primary,
      color: colors.text.primary,
    },
    text: {
      fontSize: typography.fontSize.missionText,
      fontWeight: typography.fontWeight.light,
      fontFamily: typography.fontFamily.primary,
      color: colors.text.primary,
    },
  },
} as const;

// CSS-in-JS helper functions
export const createTypographyStyle = (variant: keyof typeof typography.fontSize, weight?: keyof typeof typography.fontWeight) => ({
  fontFamily: typography.fontFamily.primary,
  fontSize: typography.fontSize[variant],
  fontWeight: weight ? typography.fontWeight[weight] : typography.fontWeight.normal,
});

export const createColorStyle = (color: string) => ({
  color,
});

export const createBackgroundStyle = (background: string) => ({
  backgroundColor: background,
});

// Responsive font size helper
export const createResponsiveFontSize = (baseSize: string, responsiveSize: string) => ({
  fontSize: baseSize,
  [`@media (min-width: ${breakpoints.sm})`]: {
    fontSize: responsiveSize,
  },
});
