import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { ContentSection } from "@shared/schema";
import { Container } from "@/components/Container";
import { ImageContainer } from "@/components/ImageContainer";
import { PAGE_HERO_IMAGES } from "@/lib/images";

interface AthleticsSectionProps {
  sections: ContentSection[];
  showHeader?: boolean;
}

export function AthleticsSection({ sections, showHeader = true }: AthleticsSectionProps) {
  return (
    <section className="py-14 sm:py-16 md:py-24 bg-white">
      <Container>
        {showHeader && (
          <header className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-4" data-testid="text-athletics-heading">Cardinal Sports</h2>
            <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed" data-testid="text-athletics-description">
              Home to champions, Riara Sports combines competitive excellence with academic achievement.
            </p>
          </header>
        )}

        {/* Large Sports Image */}
        <div className="mb-12 md:mb-16 relative group overflow-hidden rounded-2xl shadow-xl">
          <div className="relative aspect-[21/9] md:aspect-[16/6] overflow-hidden">
            <ImageContainer
              src={PAGE_HERO_IMAGES.sports}
              alt="Riara University Sports - Cardinal Athletics in Action"
              containerClassName="absolute inset-0 w-full h-full"
              objectFit="cover"
              showSkeleton={true}
            />
            {/* Overlay gradient for better text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            {/* Hover effect */}
            <div className="absolute inset-0 bg-[var(--color-riara-red)]/0 group-hover:bg-[var(--color-riara-red)]/10 transition-all duration-500"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {sections.map((section) => {
            return (
              <div key={section.id} className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]" data-testid={`card-athletics-${section.id}`}>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-4" data-testid={`text-athletics-title-${section.id}`}>
                  {section.title}
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed" data-testid={`text-athletics-description-${section.id}`}>
                  {section.description}
                </p>
                {section.link && section.link !== "#" && (
                  <Button
                    variant="outline"
                    className="border-[var(--color-riara-red)] text-[var(--color-riara-red)] hover:bg-[var(--color-riara-red)] hover:text-white"
                    data-testid={`button-athletics-link-${section.id}`}
                    asChild
                  >
                    <a href={section.link}>
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
