import { forwardRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/Container";

export const HeroSection = forwardRef<HTMLElement>(function HeroSection(_props, ref) {
  const [imageError, setImageError] = useState(false);
  // Use fallback URL directly - it's more reliable
  const imageUrl = "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg";
  const fallbackGradient = "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800";

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 sm:pt-14 md:pt-30"
    >
      {/* Riara University Background Image with fallback */}
      <div className={`absolute inset-0 ${fallbackGradient}`}>
        {!imageError && (
          <img
            src={imageUrl}
            alt="Riara University Campus"
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setImageError(true)}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        )}
      </div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[var(--overlay-dark)]"></div>
      
      {/* Riara University Logo/Title Overlay */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-[var(--color-text-inverse)] mb-8 leading-none" style={{fontFamily: 'var(--font-family-primary)'}} data-testid="text-hero-title">
          Riara
        </h1>
      </div>
      
      {/* Call to Action Bar at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-[var(--color-bg-maroon)] text-white z-20 shadow-lg">
        <Container className="py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg font-medium !text-white">
              <span className="!text-white">Explore Riara University</span>
              <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 !text-white flex-shrink-0" />
            </div>
            <a
              href="/admission"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-bold bg-white text-[var(--color-riara-red)] rounded-md hover:bg-gray-100 transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
              data-testid="button-apply-hero"
            >
              Apply for Admission
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
});
