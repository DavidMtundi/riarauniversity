/**
 * Color Utility Functions
 * 
 * This file provides helper functions for working with Riara University brand colors.
 * These functions use CSS variables, ensuring colors are always up-to-date.
 * 
 * For most cases, prefer using Tailwind utilities (bg-brand, text-brand, etc.)
 * Use these functions when you need to work with colors in JavaScript/TypeScript.
 */

/**
 * Get the primary brand color value
 */
export function getBrandColor(): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue('--color-riara-red')
    .trim();
}

/**
 * Get the dark variant of the brand color
 */
export function getBrandColorDark(): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue('--color-riara-red-dark')
    .trim();
}

/**
 * Get the light variant of the brand color
 */
export function getBrandColorLight(): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue('--color-riara-red-light')
    .trim();
}

/**
 * Get a CSS variable value by name
 */
export function getCSSVariable(variableName: string): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
}

/**
 * Set a CSS variable value (useful for dynamic theming)
 */
export function setCSSVariable(variableName: string, value: string): void {
  document.documentElement.style.setProperty(variableName, value);
}

