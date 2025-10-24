import { ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  zIndex?: number;
  stickyTop?: string;
}

export function ParallaxSection({ children, className = "", zIndex = 1, stickyTop = "0" }: ParallaxSectionProps) {
  return (
    <div 
      className={`sticky ${className}`}
      style={{ 
        zIndex,
        top: stickyTop
      }}
    >
      {children}
    </div>
  );
}

interface ParallaxContainerProps {
  children: ReactNode;
}

export function ParallaxContainer({ children }: ParallaxContainerProps) {
  return (
    <div className="relative">
      {children}
    </div>
  );
}
