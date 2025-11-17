import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "7xl" | "6xl" | "5xl" | "4xl" | "3xl" | "2xl" | "xl" | "lg" | "full";
}

/**
 * Container component with centralized responsive padding
 * 
 * To update padding across the entire site, modify the padding classes below:
 * Current: px-2 sm:px-2 md:px-1 lg:px-2 xl:px-2
 * 
 * @param children - Content to wrap
 * @param className - Additional CSS classes
 * @param maxWidth - Maximum width of the container (default: "7xl")
 */
export function Container({ 
  children, 
  className,
  maxWidth = "7xl"
}: ContainerProps) {
  // Centralized padding configuration - update here to change padding site-wide
  const paddingClasses = "px-2 sm:px-2 md:px-1 lg:px-2 xl:px-2";
  
  const maxWidthClasses = {
    "7xl": "max-w-7xl",
    "6xl": "max-w-6xl",
    "5xl": "max-w-5xl",
    "4xl": "max-w-4xl",
    "3xl": "max-w-3xl",
    "2xl": "max-w-2xl",
    "xl": "max-w-xl",
    "lg": "max-w-lg",
    "full": "max-w-full",
  };

  return (
    <div 
      className={cn(
        maxWidthClasses[maxWidth],
        "mx-auto",
        paddingClasses,
        className
      )}
    >
      {children}
    </div>
  );
}

