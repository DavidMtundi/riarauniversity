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
            <CarouselContent className="-ml-2 md:-ml-4">
              {allPartners.map((partner) => (
                <CarouselItem
                  key={partner.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="p-5 md:p-6 h-full border-2 border-[var(--color-border-secondary)] rounded-xl hover:border-[var(--color-stanford-red)] hover:shadow-lg transition-all duration-300 bg-white flex flex-col group">
                    <div className="mb-4 flex-1">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[var(--color-stanford-red)]/10 to-[var(--color-stanford-red)]/5 rounded-xl flex items-center justify-center mb-4 group-hover:from-[var(--color-stanford-red)]/20 group-hover:to-[var(--color-stanford-red)]/10 transition-all duration-300">
                        <div className="text-center text-muted-foreground">
                          <svg className="w-7 h-7 md:w-8 md:h-8 mx-auto mb-1 opacity-60 group-hover:opacity-80 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <p className="text-xs font-medium hidden md:block text-[var(--color-text-secondary)]">Logo</p>
                        </div>
                      </div>
                      <h4 className="text-base md:text-lg font-bold text-[var(--color-text-primary)] mb-2 line-clamp-2 group-hover:text-[var(--color-stanford-red)] transition-colors" data-testid={`text-partner-name-${partner.id}`}>
                        {partner.name}
                      </h4>
                      <p className="text-xs md:text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-3" data-testid={`text-partner-description-${partner.id}`}>
                        {partner.description}
                      </p>
                    </div>
                    {partner.website && partner.website !== "#" && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs md:text-sm font-semibold text-[var(--color-stanford-red)] hover:text-[var(--color-stanford-red-dark)] transition-colors inline-flex items-center gap-1 mt-auto group/link"
                        data-testid={`link-partner-website-${partner.id}`}
                      >
                        Visit website
                        <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    )}
                  </div>
                </CarouselItem>
              ))}
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

