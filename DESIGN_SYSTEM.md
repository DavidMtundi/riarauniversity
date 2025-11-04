# Riara University Design System

This document explains how to use the centralized design system for the Riara Clone project.

## Overview

The design system provides centralized fonts, colors, spacing, and other design tokens to ensure consistency across the application. All styling can be updated from a single location for easy maintenance and reusability.

## Files Structure

```
client/src/
├── lib/
│   ├── design-tokens.ts          # Core design tokens (TypeScript)
│   └── design-token-utils.ts     # Helper functions and utilities
├── styles/
│   └── design-system.css         # CSS custom properties and classes
└── index.css                     # Main CSS file (imports design system)
```

## Usage Methods

### 1. CSS Custom Properties (Recommended)

Use CSS custom properties in your components:

```tsx
// In your component
<div style={{fontFamily: 'var(--font-family-primary)'}}>
  <h1 style={{fontSize: 'var(--font-size-mission-title)'}}>
    Title
  </h1>
</div>
```

### 2. CSS Classes

Use predefined CSS classes:

```tsx
<h2 className="mission-title">Mission Statement</h2>
<p className="mission-text">Description text</p>
```

### 3. TypeScript Design Tokens

Import and use design tokens directly:

```tsx
import { typography, colors, spacing } from '@/lib/design-tokens';

const styles = {
  fontFamily: typography.fontFamily.primary,
  fontSize: typography.fontSize.lg,
  color: colors.text.primary,
  padding: spacing.lg,
};
```

### 4. Utility Functions

Use helper functions for common patterns:

```tsx
import { createTypographyStyle, getColor } from '@/lib/design-token-utils';

const titleStyle = createTypographyStyle('2xl', 'bold');
const textColor = getColor('text.primary');
```

## Available Design Tokens

### Typography

- **Font Families**: `primary`, `serif`
- **Font Sizes**: `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`
- **Mission Specific**: `missionTitle`, `missionText` (with responsive variants)
- **Header Specific**: `headerTitle`, `headerNav`, `headerInfo`
- **Font Weights**: `light`, `normal`, `medium`, `semibold`, `bold`, `extrabold`, `black`

### Colors

- **Riara Brand**: `Riara.red`, `Riara.redLight`, `Riara.redDark`
- **Primary**: `primary.50` through `primary.900`
- **Neutral**: `neutral.50` through `neutral.900`
- **Text**: `text.primary`, `text.secondary`, `text.tertiary`, `text.inverse`
- **Background**: `background.primary`, `background.secondary`, `background.red`
- **Border**: `border.light`, `border.medium`, `border.dark`, `border.red`

### Spacing

- **Sizes**: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`

### Shadows

- **Standard**: `sm`, `base`, `md`, `lg`, `xl`
- **Riara**: `Riara` (custom Riara shadow)

### Border Radius

- **Sizes**: `none`, `sm`, `base`, `md`, `lg`, `xl`, `2xl`, `3xl`, `full`

## Component Examples

### Header Component

```tsx
// Using CSS custom properties
<header className="shadow-Riara" style={{fontFamily: 'var(--font-family-primary)'}}>
  <div className="bg-red-600 text-white">
    <h1 style={{fontSize: 'var(--font-size-header-title)'}}>
      Riara University
    </h1>
  </div>
</header>
```

### Mission Section

```tsx
// Using CSS classes
<section>
  <h2 className="mission-title">A Mission Defined by Possibility</h2>
  <p className="mission-text">Mission description...</p>
</section>
```

### Custom Component

```tsx
// Using TypeScript design tokens
import { typography, colors } from '@/lib/design-tokens';

const CustomComponent = () => {
  const styles = {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.lg,
    color: colors.text.primary,
    fontWeight: typography.fontWeight.semibold,
  };

  return <div style={styles}>Custom content</div>;
};
```

## Responsive Design

The design system includes responsive font sizes for mission section:

```css
.mission-title {
  font-size: var(--font-size-mission-title); /* 1.625em */
}

@media (min-width: 576px) {
  .mission-title {
    font-size: var(--font-size-mission-title-responsive); /* 3.90625em */
  }
}
```

## Updating Design Tokens

To update fonts, colors, or other design elements:

1. **For CSS Custom Properties**: Edit `client/src/styles/design-system.css`
2. **For TypeScript Tokens**: Edit `client/src/lib/design-tokens.ts`
3. **For Utility Functions**: Edit `client/src/lib/design-token-utils.ts`

All components using these tokens will automatically update when you change the centralized values.

## Migration Guide

To migrate existing components to use the design system:

1. Replace hardcoded font families with `var(--font-family-primary)`
2. Replace hardcoded colors with CSS custom properties
3. Replace hardcoded font sizes with design token values
4. Use predefined CSS classes where available
5. Import and use TypeScript design tokens for complex styling

## Best Practices

1. **Use CSS custom properties** for simple styling
2. **Use CSS classes** for common patterns (mission-title, mission-text)
3. **Use TypeScript tokens** for complex or dynamic styling
4. **Avoid hardcoded values** - always use design tokens
5. **Test responsive behavior** when using responsive design tokens
6. **Document custom components** that use design tokens

## Benefits

- ✅ **Consistency**: All components use the same design tokens
- ✅ **Maintainability**: Update design from a single location
- ✅ **Reusability**: Design tokens can be used across components
- ✅ **Type Safety**: TypeScript design tokens provide autocomplete and validation
- ✅ **Performance**: CSS custom properties are optimized by browsers
- ✅ **Scalability**: Easy to add new design tokens as needed
