import { forwardRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/Container";

export const HeroSection = forwardRef<HTMLElement>(function HeroSection(_props, ref) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageUrl = "https://businesstoday.co.ke/wp-content/uploads/2024/06/Riara-University.png";
  const fallbackImageUrl = "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg";

  // Preload the image for faster display
  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      // Try fallback if primary fails
      const fallbackImg = new Image();
      fallbackImg.src = fallbackImageUrl;
      fallbackImg.onload = () => {
        setImageLoaded(true);
        setImageError(true);
      };
    };
  }, [imageUrl, fallbackImageUrl]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 sm:pt-14 md:pt-30"
    >
      {/* Riara University Background Image with fallback */}
      <div className="absolute inset-0">
        {/* Placeholder background color while image loads */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 transition-opacity duration-500 ${
            imageLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          src={imageError ? fallbackImageUrl : imageUrl}
          alt="Riara University Campus"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onError={() => setImageError(true)}
          onLoad={() => setImageLoaded(true)}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
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
