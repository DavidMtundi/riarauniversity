import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

/**
 * Reusable ImageContainer component with loading states, error handling, and customizable options.
 * 
 * @example
 * // Basic usage with aspect ratio
 * <ImageContainer
 *   src="/path/to/image.jpg"
 *   alt="Description"
 *   aspectRatio="16/9"
 * />
 * 
 * @example
 * // With hover effect and custom placeholder
 * <ImageContainer
 *   src="/path/to/image.jpg"
 *   alt="Description"
 *   aspectRatio="4/3"
 *   hoverEffect="scale"
 *   placeholderText="Image Placeholder"
 * />
 * 
 * @example
 * // Full-width image without aspect ratio
 * <ImageContainer
 *   src="/path/to/image.jpg"
 *   alt="Description"
 *   containerClassName="h-[40vh] md:h-[50vh]"
 * />
 */
interface ImageContainerProps {
  src?: string | null;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string; // e.g., "16/9", "4/3", "1/1", "21/9"
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  showSkeleton?: boolean;
  showPlaceholder?: boolean;
  placeholderIcon?: React.ReactNode;
  placeholderText?: string;
  onLoad?: () => void;
  onError?: () => void;
  lazy?: boolean;
  hoverEffect?: "scale" | "none";
  fallbackSrc?: string;
}

export function ImageContainer({
  src,
  alt,
  className = "",
  containerClassName = "",
  aspectRatio,
  objectFit = "cover",
  showSkeleton = true,
  showPlaceholder = true,
  placeholderIcon,
  placeholderText,
  onLoad,
  onError,
  lazy = true,
  hoverEffect = "none",
  fallbackSrc,
}: ImageContainerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null | undefined>(src);

  useEffect(() => {
    // Reset state when src changes
    if (src !== imageSrc) {
      setIsLoading(true);
      setHasError(false);
      setImageSrc(src);
    }
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    
    // Try fallback if available
    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setIsLoading(true);
      setHasError(false);
      return;
    }
    
    onError?.();
  };

  // Default placeholder icon
  const defaultPlaceholderIcon = (
    <svg
      className="w-16 h-16 md:w-24 md:h-24 opacity-30"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );

  const placeholder = (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
      <div className="text-center text-muted-foreground">
        {placeholderIcon || defaultPlaceholderIcon}
        {placeholderText && (
          <p className="text-xs font-medium mt-2">{placeholderText}</p>
        )}
      </div>
    </div>
  );

  // Loading spinner icon
  const loadingSpinner = (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
      <div className="relative">
        {/* Spinning circle */}
        <svg
          className="w-12 h-12 md:w-16 md:h-16 text-[var(--color-riara-red)] animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    </div>
  );

  // Calculate aspect ratio style
  const aspectRatioStyle = aspectRatio
    ? {
        aspectRatio: aspectRatio.includes("/")
          ? aspectRatio
          : `${aspectRatio}/1`,
      }
    : {};

  const containerClasses = cn(
    "relative overflow-hidden",
    hoverEffect === "scale" && "group",
    containerClassName
  );

  const objectFitClasses = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill",
    none: "object-none",
    "scale-down": "object-scale-down",
  };

  const imageClasses = cn(
    "w-full h-full",
    objectFitClasses[objectFit],
    hoverEffect === "scale" && "transition-transform duration-700 group-hover:scale-110",
    className
  );

  // No image source provided
  if (!imageSrc) {
    return (
      <div className={containerClasses} style={aspectRatioStyle}>
        {showPlaceholder && placeholder}
      </div>
    );
  }

  return (
    <div className={containerClasses} style={aspectRatioStyle}>
      {/* Loading spinner */}
      {isLoading && showSkeleton && loadingSpinner}

      {/* Image */}
      <img
        src={imageSrc}
        alt={alt}
        className={cn(
          imageClasses,
          isLoading && "opacity-0",
          hasError && "hidden"
        )}
        onLoad={handleLoad}
        onError={handleError}
        loading={lazy ? "lazy" : "eager"}
      />

      {/* Error state - show placeholder */}
      {hasError && showPlaceholder && placeholder}
    </div>
  );
}

