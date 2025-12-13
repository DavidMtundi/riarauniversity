import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
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

  useEffect(() => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    api.on("select", () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    });
  }, [api]);

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
          {/* Navigation Buttons - Positioned on same row */}
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-2 border-[var(--color-stanford-red)] bg-white hover:bg-[var(--color-stanford-red)] hover:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => api?.scrollPrev()}
                disabled={!canScrollPrev}
                aria-label="Previous partners"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-2 border-[var(--color-stanford-red)] bg-white hover:bg-[var(--color-stanford-red)] hover:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => api?.scrollNext()}
                disabled={!canScrollNext}
                aria-label="Next partners"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="text-sm text-[var(--color-text-secondary)] hidden md:block">
              {allPartners.length} partners
            </div>
          </div>

          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1 md:-ml-2">
              {allPartners.map((partner) => {
                // Split name into words and format for 2 words per line
                const words = partner.name.split(' ');
                const formattedName = words.reduce((acc: string[], word: string, index: number) => {
                  if (index % 2 === 0) {
                    acc.push(word);
                  } else {
                    acc[acc.length - 1] += ' ' + word;
                  }
                  return acc;
                }, []);

                return (
                  <CarouselItem
                    key={partner.id}
                    className="pl-1 md:pl-2 basis-1/6 sm:basis-1/8 md:basis-1/10 lg:basis-1/12 xl:basis-1/14 2xl:basis-1/16"
                  >
                    <div className="p-0.5 h-full border border-[var(--color-border-secondary)] rounded-lg hover:border-[var(--color-stanford-red)] hover:shadow-md transition-all duration-200 bg-white flex flex-col items-center text-center group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white border border-[var(--color-border-secondary)] rounded-lg flex items-center justify-center mb-0.5 overflow-hidden group-hover:border-[var(--color-stanford-red)] transition-all duration-200">
                        {partner.logoUrl && partner.logoUrl !== "" ? (
                          <img 
                            src={partner.logoUrl} 
                            alt={`${partner.name} logo`}
                            className="w-full h-full object-contain p-1.5"
                            onError={(e) => {
                              // Fallback to placeholder if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `
                                  <div class="text-center text-muted-foreground w-full h-full flex items-center justify-center">
                                    <svg class="w-4 h-4 sm:w-5 sm:h-5 mx-auto opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                  </div>
                                `;
                              }
                            }}
                          />
                        ) : (
                          <div className="text-center text-muted-foreground w-full h-full flex items-center justify-center">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 mx-auto opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-[var(--color-text-primary)] leading-tight min-h-[2.5em] flex flex-col justify-center" data-testid={`text-partner-name-${partner.id}`}>
                        {formattedName.map((line, index) => (
                          <span key={index}>{line}</span>
                        ))}
                      </h4>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Button
            variant="outline"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold border-[var(--color-stanford-red)] bg-[var(--color-stanford-red)] text-white hover:bg-[var(--color-stanford-red-dark)] transition-all duration-200 shadow-sm hover:shadow-md"
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

