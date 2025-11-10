import React from 'react';

interface RiaraLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function RiaraLogo({ size = 'md', className = '' }: RiaraLogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  return (
    <img 
      src="/riara-logo.jpeg" 
      alt="Riara University Logo"
      className={`${sizeClasses[size]} object-contain ${className}`}
      onError={(e) => {
        // Fallback to text logo if image fails to load
        e.currentTarget.style.display = 'none';
        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
        if (fallback) {
          fallback.style.display = 'flex';
        }
      }}
    />
  );
}

// Fallback text logo component
export function RiaraLogoFallback({ size = 'md', className = '' }: RiaraLogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} bg-[var(--color-bg-maroon)] rounded-full flex items-center justify-center hidden`}>
      <span className="text-[var(--color-text-inverse)] font-bold text-lg">R</span>
    </div>
  );
}