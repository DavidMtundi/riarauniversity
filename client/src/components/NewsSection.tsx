import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { NewsArticle } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import { NewsCard } from "./NewsCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface NewsSectionProps {
  articles: NewsArticle[];
  showHeader?: boolean;
}

export function NewsSection({ articles, showHeader = true }: NewsSectionProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Use all articles in the carousel
  const carouselArticles = articles.slice(0, 12); // Show up to 12 articles in carousel
  const itemsPerView = 3; // Show 3 items at a time on desktop
  const totalSlides = Math.ceil(carouselArticles.length / itemsPerView);
  const currentPage = Math.floor(selectedIndex / itemsPerView);

  useEffect(() => {
    if (!api) {
      return;
    }

    // Set initial scroll snaps for pagination
    setScrollSnaps(api.scrollSnapList());
    setSelectedIndex(api.selectedScrollSnap());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    const updateState = () => {
      setSelectedIndex(api.selectedScrollSnap());
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    updateState();
    api.on("select", updateState);
    api.on("reInit", () => {
      setScrollSnaps(api.scrollSnapList());
      updateState();
    });

    return () => {
      api.off("select", updateState);
      api.off("reInit", updateState);
    };
  }, [api]);

  // Auto-scroll functionality (paused on hover)
  useEffect(() => {
    if (!api || !isAutoPlaying || carouselArticles.length <= itemsPerView) {
      return;
    }

    const autoplay = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        // Loop back to start
        api.scrollTo(0);
      }
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(autoplay);
  }, [api, isAutoPlaying, carouselArticles.length]);

  const scrollTo = useCallback(
    (index: number) => {
      if (api) {
        api.scrollTo(index);
        setIsAutoPlaying(false); // Pause autoplay when user manually navigates
        setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds
      }
    },
    [api]
  );

  return (
    <section className="bg-[var(--color-bg-secondary)] py-14 sm:py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-riara-red)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-riara-red)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <Container className="relative z-10">
        {showHeader && (
          <header className="text-center mb-12 md:mb-16 space-y-4">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-12 bg-[var(--color-riara-red)]"></div>
              <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-riara-red)]">News & Updates</span>
              <div className="h-1 w-12 bg-[var(--color-riara-red)]"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black leading-tight text-[var(--color-text-primary)]" data-testid="text-news-heading">
              Campus News
            </h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed" data-testid="text-news-subheading">
              Stories about people, research, and innovation at Riara University
            </p>
          </header>
        )}

        {/* Enhanced Carousel with better controls */}
        {carouselArticles.length > 0 && (
          <div 
            className="mb-10 md:mb-14 relative group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: carouselArticles.length > itemsPerView,
                skipSnaps: false,
                dragFree: false,
              }}
              className="w-full"
            >
              <div className="relative">
                <CarouselContent className="-ml-2 md:-ml-4 lg:-ml-6">
                  {carouselArticles.map((article, index) => (
                    <CarouselItem 
                      key={article.id} 
                      className="pl-2 md:pl-4 lg:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
                    >
                      <div className="h-full transition-transform duration-300 hover:scale-[1.02]">
                        <NewsCard article={article} variant="regular" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Enhanced Navigation Buttons */}
                {carouselArticles.length > itemsPerView && (
                  <>
                    <CarouselPrevious 
                      className={cn(
                        "hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 h-12 w-12 rounded-full bg-white/95 backdrop-blur-sm border-2 border-gray-200 shadow-xl hover:border-[var(--color-riara-red)] hover:bg-[var(--color-riara-red)] hover:text-white transition-all duration-300 z-10",
                        !canScrollPrev && "opacity-50 cursor-not-allowed"
                      )}
                      onClick={() => setIsAutoPlaying(false)}
                    >
                      <ChevronLeft className="h-6 w-6" />
                      <span className="sr-only">Previous news</span>
                    </CarouselPrevious>
                    
                    <CarouselNext
                      className={cn(
                        "hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 h-12 w-12 rounded-full bg-white/95 backdrop-blur-sm border-2 border-gray-200 shadow-xl hover:border-[var(--color-riara-red)] hover:bg-[var(--color-riara-red)] hover:text-white transition-all duration-300 z-10",
                        !canScrollNext && "opacity-50 cursor-not-allowed"
                      )}
                      onClick={() => setIsAutoPlaying(false)}
                    >
                      <ChevronRight className="h-6 w-6" />
                      <span className="sr-only">Next news</span>
                    </CarouselNext>
                  </>
                )}
              </div>

              {/* Pagination Dots */}
              {totalSlides > 1 && (
                <div className="flex justify-center items-center gap-3 mt-8 md:mt-10">
                  {Array.from({ length: totalSlides }).map((_, pageIndex) => {
                    const isActive = pageIndex === currentPage;
                    const targetScrollIndex = pageIndex * itemsPerView;
                    
                    return (
                      <button
                        key={pageIndex}
                        type="button"
                        onClick={() => scrollTo(Math.min(targetScrollIndex, scrollSnaps.length - 1))}
                        className={cn(
                          "h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-riara-red)] focus:ring-offset-2",
                          isActive
                            ? "w-8 bg-[var(--color-riara-red)] shadow-md"
                            : "w-2.5 bg-gray-300 hover:bg-gray-400 hover:w-3"
                        )}
                        aria-label={`Go to page ${pageIndex + 1}`}
                        aria-current={isActive ? "true" : "false"}
                      />
                    );
                  })}
                  
                  {/* Page counter */}
                  <div className="ml-4 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-[var(--color-text-secondary)] border border-gray-200">
                    {currentPage + 1} / {totalSlides}
                  </div>
                </div>
              )}

              {/* Mobile swipe indicator */}
              <div className="md:hidden flex justify-center gap-2 mt-6">
                {carouselArticles.length > 1 && (
                  <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                    <ChevronLeft className="h-4 w-4" />
                    <span>Swipe to see more</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                )}
              </div>
            </Carousel>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <Button
            size="lg"
            className="group bg-[var(--color-riara-red)] hover:bg-[var(--color-riara-red-dark)] text-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            data-testid="button-more-news"
            asChild
          >
            <a href="/news-events" className="!text-white inline-flex items-center gap-2">
              View All Campus News
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
