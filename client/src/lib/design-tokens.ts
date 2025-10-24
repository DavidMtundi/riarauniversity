/**
 * Riara University Design Tokens
 * Centralized design system for consistent styling across the application
 */

// Typography
export const typography = {
  fontFamily: {
    primary: 'Source Sans Pro, Helvetica Neue, Helvetica, Arial, sans-serif',
    serif: 'serif',
  },
  fontSize: {
    // Mission section specific sizes (matching Stanford's actual CSS)
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
    // Standard sizes
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    '6xl': '3.75rem', // 60px
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
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
} as const;

// Colors (Riara University brand colors)
export const colors = {
  // Primary Riara University colors
  riara: {
    maroon: '#800020', // Riara Maroon
    maroonLight: '#A00030',
    maroonDark: '#600015',
    gold: '#F59E0B', // Riara Gold
    goldLight: '#FBBF24',
    goldDark: '#D97706',
  },
  // Semantic colors
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
  // Neutral colors
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
  // Text colors
  text: {
    primary: '#000000',
    secondary: '#404040',
    tertiary: '#737373',
    inverse: '#ffffff',
    inverseSecondary: '#f5f5f5',
  },
  // Background colors
  background: {
    primary: '#ffffff',
    secondary: '#fafafa',
    tertiary: '#f5f5f5',
    inverse: '#000000',
    maroon: '#800020', // For header background
  },
  // Border colors
  border: {
    light: '#e5e5e5',
    medium: '#d4d4d4',
    dark: '#a3a3a3',
    maroon: '#A00030',
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
