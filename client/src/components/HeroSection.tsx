import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 sm:pt-14 md:pt-30">
      {/* Riara University Background Image with Parallax */}
      <div className="absolute inset-0 bg-[url('/riara-logo.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed"></div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[var(--overlay-dark)]"></div>
      
      {/* Riara University Logo/Title Overlay */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-[var(--color-text-inverse)] mb-8 leading-none" style={{fontFamily: 'var(--font-family-primary)'}} data-testid="text-hero-title">
          Riara
        </h1>
      </div>
      
      {/* Call to Action Bar at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-[var(--color-bg-maroon)] text-[var(--color-text-inverse)]">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48 py-4">
          <div className="flex items-center justify-center gap-2 text-base sm:text-lg font-medium">
            <span>Explore Riara University</span>
            <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
