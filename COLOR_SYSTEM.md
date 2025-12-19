# Riara University Color System

This document explains how to use colors in the Riara University application to ensure easy maintenance and updates.

## Overview

All brand colors are centralized in two places:
1. **CSS Variables** (`client/src/styles/theme.css`) - Single source of truth for color values
2. **Tailwind Config** (`tailwind.config.ts`) - Maps CSS variables to Tailwind utilities

## How to Use Colors

### ✅ Recommended: Use Tailwind Brand Utilities

Instead of using inline CSS variables, use the Tailwind brand utilities:

```tsx
// ✅ Good - Easy to update, clean code
<button className="bg-brand hover:bg-brand-dark text-white">
  Click me
</button>

<div className="border-2 border-brand text-brand">
  Content
</div>

// ❌ Avoid - Harder to maintain
<button className="bg-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red-dark)]">
  Click me
</button>
```

### Available Brand Utilities

#### Background Colors
- `bg-brand` - Primary brand color (purple/magenta)
- `bg-brand-dark` - Darker variant (for hover/active states)
- `bg-brand-light` - Lighter variant (for accents)
- `bg-riara-maroon` - Header/maroon background
- `bg-riara-primary` - White background
- `bg-riara-secondary` - Light gray background
- `bg-riara-tertiary` - Lighter gray background

#### Text Colors
- `text-brand` - Primary brand color text
- `text-brand-dark` - Darker variant text
- `text-riara-text-primary` - Primary text color
- `text-riara-text-secondary` - Secondary text color
- `text-riara-text-tertiary` - Tertiary text color
- `text-riara-text-inverse` - White text

#### Border Colors
- `border-brand` - Primary brand border
- `border-brand-dark` - Darker variant border
- `border-riara-border` - Primary brand border (same as border-brand)
- `border-riara-border-dark` - Darker variant border
- `border-riara-border-maroon` - Maroon border
- `border-riara-border-light` - Light border

### Using CSS Variables Directly (When Needed)

For cases where Tailwind utilities aren't sufficient, you can still use CSS variables:

```tsx
// For opacity or complex calculations
<div className="bg-[var(--color-stanford-red)]/10">
  Light background
</div>
```

## Updating Colors

To update the brand colors across the entire application:

1. **Update CSS Variables** in `client/src/styles/theme.css`:
   ```css
   --color-stanford-red: #a10e83; /* Change this value */
   --color-stanford-red-dark: #7d0a65; /* Change this value */
   --color-stanford-red-light: #c515a0; /* Change this value */
   ```

2. **Update Design Tokens** in `client/src/lib/design-tokens.ts`:
   ```typescript
   stanford: {
     red: '#a10e83', // Change this value
     redDark: '#7d0a65', // Change this value
     redLight: '#c515a0', // Change this value
   },
   ```

3. **Update HSL Values** in `theme.css` (for Tailwind's primary color system):
   ```css
   --primary: 312 84% 34%; /* Update if needed */
   ```

That's it! All components using `bg-brand`, `text-brand`, etc. will automatically use the new colors.

## Migration Guide

To migrate existing components from inline CSS variables to Tailwind utilities:

### Before:
```tsx
<div className="bg-[var(--color-stanford-red)] text-[var(--color-text-inverse)]">
  Content
</div>

<button className="border-[var(--color-stanford-red)] text-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red-dark)]">
  Click me
</button>
```

### After:
```tsx
<div className="bg-brand text-riara-text-inverse">
  Content
</div>

<button className="border-brand text-brand hover:bg-brand-dark">
  Click me
</button>
```

## JavaScript/TypeScript Usage

For cases where you need color values in JavaScript/TypeScript code, use the utility functions:

```tsx
import { getBrandColor, getBrandColorDark } from '@/lib/color-utils';

const brandColor = getBrandColor(); // Returns current brand color value
const darkColor = getBrandColorDark(); // Returns dark variant
```

## Examples

### Button with Brand Colors
```tsx
<button className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded">
  Primary Button
</button>
```

### Card with Brand Border
```tsx
<div className="border-2 border-brand p-4 rounded-lg">
  <h3 className="text-brand">Card Title</h3>
  <p className="text-riara-text-secondary">Card content</p>
</div>
```

### Header with Maroon Background
```tsx
<header className="bg-riara-maroon text-riara-text-inverse">
  Header Content
</header>
```

## Benefits

1. **Single Source of Truth**: Colors defined once in CSS variables
2. **Easy Updates**: Change colors in one place, updates everywhere
3. **Type Safety**: Tailwind utilities provide autocomplete and type checking
4. **Cleaner Code**: Shorter, more readable class names
5. **Consistency**: Ensures all components use the same color system

