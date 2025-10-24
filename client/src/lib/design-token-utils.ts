/**
 * Design Token Utilities
 * Helper functions for using centralized design tokens in components
 */

import { typography, colors, spacing, shadows, borderRadius } from './design-tokens';

// Typography helpers
export const getFontFamily = (variant: 'primary' | 'serif' = 'primary') => {
  return typography.fontFamily[variant];
};

export const getFontSize = (size: keyof typeof typography.fontSize) => {
  return typography.fontSize[size];
};

export const getFontWeight = (weight: keyof typeof typography.fontWeight) => {
  return typography.fontWeight[weight];
};

// Color helpers
export const getColor = (colorPath: string) => {
  const keys = colorPath.split('.');
  let result: any = colors;
  
  for (const key of keys) {
    result = result[key];
    if (result === undefined) {
      console.warn(`Color path "${colorPath}" not found in design tokens`);
      return '#000000'; // fallback
    }
  }
  
  return result;
};

// Spacing helpers
export const getSpacing = (size: keyof typeof spacing) => {
  return spacing[size];
};

// Shadow helpers
export const getShadow = (shadow: keyof typeof shadows) => {
  return shadows[shadow];
};

// Border radius helpers
export const getBorderRadius = (radius: keyof typeof borderRadius) => {
  return borderRadius[radius];
};

// Component style generators
export const createTypographyStyle = (
  fontSize: keyof typeof typography.fontSize,
  fontWeight?: keyof typeof typography.fontWeight,
  fontFamily?: 'primary' | 'serif'
) => ({
  fontFamily: getFontFamily(fontFamily || 'primary'),
  fontSize: getFontSize(fontSize),
  fontWeight: fontWeight ? getFontWeight(fontWeight) : typography.fontWeight.normal,
});

export const createColorStyle = (colorPath: string) => ({
  color: getColor(colorPath),
});

export const createBackgroundStyle = (colorPath: string) => ({
  backgroundColor: getColor(colorPath),
});

// CSS-in-JS style objects for common patterns
export const styles = {
  // Header styles
  headerTopBar: {
    fontFamily: getFontFamily('primary'),
    fontSize: getFontSize('lg'),
    color: colors.text.inverse,
    backgroundColor: colors.background.red,
  },
  
  headerMainNav: {
    fontFamily: getFontFamily('primary'),
    fontSize: getFontSize('2xl'),
    fontWeight: getFontWeight('bold'),
    color: colors.text.primary,
  },
  
  // Mission section styles
  missionTitle: {
    fontFamily: getFontFamily('primary'),
    fontSize: typography.fontSize.missionTitle.base,
    fontWeight: getFontWeight('black'),
    color: colors.text.primary,
  },
  
  missionText: {
    fontFamily: getFontFamily('primary'),
    fontSize: typography.fontSize.missionText.base,
    fontWeight: getFontWeight('light'),
    color: colors.text.primary,
  },
  
  // Common button styles
  primaryButton: {
    fontFamily: getFontFamily('primary'),
    fontSize: getFontSize('base'),
    fontWeight: getFontWeight('medium'),
    backgroundColor: colors.primary[600],
    color: colors.text.inverse,
    borderRadius: getBorderRadius('md'),
    padding: `${getSpacing('sm')} ${getSpacing('lg')}`,
  },
  
  // Common text styles
  heading1: createTypographyStyle('5xl', 'bold'),
  heading2: createTypographyStyle('4xl', 'bold'),
  heading3: createTypographyStyle('3xl', 'semibold'),
  body: createTypographyStyle('base', 'normal'),
  caption: createTypographyStyle('sm', 'normal'),
};

// Responsive font size helper
export const createResponsiveFontSize = (baseSize: string, responsiveSize: string) => ({
  fontSize: baseSize,
  [`@media (min-width: 576px)`]: {
    fontSize: responsiveSize,
  },
});

// Stanford-specific styles
export const stanfordStyles = {
  header: {
    shadow: shadows.stanford,
    redBackground: colors.background.red,
    whiteText: colors.text.inverse,
  },
  mission: {
    titleSize: typography.fontSize.missionTitle,
    textSize: typography.fontSize.missionText,
  },
};
