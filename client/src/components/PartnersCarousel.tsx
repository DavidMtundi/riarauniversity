import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import type { PartnerCategory } from "./PartnersSection";

interface PartnersCarouselProps {
  categories: PartnerCategory[];
}

export function PartnersCarousel({ categories }: PartnersCarouselProps) {
  // Flatten all partners from all categories for the carousel
  const allPartners = categories.flatMap((category) =>
    category.partners.map((partner) => ({
      ...partner,
      categoryTitle: category.title,
      categoryId: category.id,
    }))
  );

  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    const updateState = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
      setCurrentIndex(api.selectedScrollSnap());
    };

    updateState();
    api.on("select", updateState);
    api.on("reInit", updateState);

    return () => {
      api.off("select", updateState);
      api.off("reInit", updateState);
    };
  }, [api]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!api || !isAutoScrolling) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        // Loop back to start
        api.scrollTo(0);
      }
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, [api, isAutoScrolling]);

  if (!allPartners || allPartners.length === 0) {
    return null;
  }

  return (
    <section id="partners" className="py-20 bg-white">
      <Container>
        <header className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black leading-snug text-[var(--color-text-primary)]" data-testid="text-partners-heading">
            Partners
          </h2>
          <p className="mt-3 text-base sm:text-lg md:text-xl font-semibold text-[var(--color-text-secondary)]" data-testid="text-partners-subheading">
            Building strategic partnerships for innovation, research, and global impact
          </p>
        </header>

        <div className="relative">
          {/* Navigation Buttons and Info */}
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-2 border-[var(--color-riara-red)] bg-white hover:bg-[var(--color-riara-red)] hover:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                onClick={() => {
                  setIsAutoScrolling(false);
                  api?.scrollPrev();
                }}
                disabled={!canScrollPrev}
                aria-label="Previous partners"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-2 border-[var(--color-riara-red)] bg-white hover:bg-[var(--color-riara-red)] hover:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                onClick={() => {
                  setIsAutoScrolling(false);
                  api?.scrollNext();
                }}
                disabled={!canScrollNext}
                aria-label="Next partners"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-[var(--color-text-secondary)] hidden md:block font-medium">
                {currentIndex + 1} / {allPartners.length}
              </div>
              <div className="text-xs text-[var(--color-text-tertiary)] hidden lg:block">
                {allPartners.length} partners
              </div>
            </div>
          </div>

          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
              duration: 25,
            }}
            className="w-full"
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {allPartners.map((partner, index) => {
                const isExternalLink = partner.website && partner.website !== "#" && !partner.website.startsWith("/");
                
                return (
                  <CarouselItem
                    key={partner.id}
                    className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-1/8"
                  >
                    <a
                      href={partner.website || "#"}
                      target={isExternalLink ? "_blank" : undefined}
                      rel={isExternalLink ? "noopener noreferrer" : undefined}
                      className="block h-full"
                      onClick={() => setIsAutoScrolling(false)}
                    >
                      <div className="h-full p-4 md:p-5 border-2 border-[var(--color-border-secondary)] rounded-xl hover:border-[var(--color-riara-red)] hover:shadow-lg transition-all duration-300 bg-white flex flex-col items-center text-center group cursor-pointer transform hover:-translate-y-1">
                        {/* Logo Container */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-[var(--color-bg-tertiary)] to-white border-2 border-[var(--color-border-light)] rounded-xl flex items-center justify-center mb-3 md:mb-4 overflow-hidden group-hover:border-[var(--color-riara-red)] group-hover:shadow-md transition-all duration-300 p-1">
                          {partner.logoUrl && partner.logoUrl !== "" ? (
                            <img 
                              src={partner.logoUrl} 
                              alt={`${partner.name} logo`}
                              className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-110"
                              loading="lazy"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `
                                    <div class="text-center text-muted-foreground w-full h-full flex items-center justify-center">
                                      <svg class="w-6 h-6 sm:w-8 sm:h-8 mx-auto opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                      </svg>
                                    </div>
                                  `;
                                }
                              }}
                            />
                          ) : (
                            <div className="text-center text-muted-foreground w-full h-full flex items-center justify-center">
                              <svg className="w-6 h-6 sm:w-8 sm:h-8 mx-auto opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                          )}
                        </div>
                        
                        {/* Partner Name */}
                        <h4 
                          className="text-xs sm:text-sm md:text-base font-semibold text-[var(--color-text-primary)] leading-tight mb-2 group-hover:text-[var(--color-riara-red)] transition-colors duration-300 line-clamp-2" 
                          data-testid={`text-partner-name-${partner.id}`}
                        >
                          {partner.name}
                        </h4>
                        
                        {/* Category Badge */}
                        <div className="mt-auto pt-2">
                          <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs px-2 py-1 rounded-full bg-[var(--color-riara-red)]/10 text-[var(--color-riara-red)] font-medium">
                            {partner.categoryTitle}
                            {isExternalLink && (
                              <ExternalLink className="w-3 h-3 opacity-70" />
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
          
          {/* Progress Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6 md:mt-8">
            {Array.from({ length: Math.min(allPartners.length, 10) }).map((_, index) => {
              const isActive = Math.floor(currentIndex / Math.ceil(allPartners.length / 10)) === index;
              return (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'w-8 bg-[var(--color-riara-red)]' 
                      : 'w-2 bg-[var(--color-border-medium)] hover:bg-[var(--color-riara-red)]/50'
                  }`}
                  onClick={() => {
                    setIsAutoScrolling(false);
                    const targetIndex = Math.floor((index / 10) * allPartners.length);
                    api?.scrollTo(targetIndex);
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              );
            })}
          </div>
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Button
            variant="outline"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold border-[var(--color-riara-red)] bg-[var(--color-riara-red)] text-white hover:bg-[var(--color-riara-red-dark)] transition-all duration-200 shadow-sm hover:shadow-md"
            data-testid="button-view-all-partners"
            asChild
          >
            <a href="/partners" className="!text-white">
              View all partners <ArrowRight className="h-4 w-4 !text-white" />
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}

