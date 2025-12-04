import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { ContentSection } from "@shared/schema";
import { Container } from "@/components/Container";

interface AthleticsSectionProps {
  sections: ContentSection[];
  showHeader?: boolean;
}

export function AthleticsSection({ sections, showHeader = true }: AthleticsSectionProps) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        {showHeader && (
          <header className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-4" data-testid="text-athletics-heading">Cardinal Athletics</h2>
            <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed" data-testid="text-athletics-description">
              Home to champions, Riara Athletics combines competitive excellence with academic achievement.
            </p>
          </header>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {sections.map((section) => {
            return (
              <div key={section.id} className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]" data-testid={`card-athletics-${section.id}`}>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-4" data-testid={`text-athletics-title-${section.id}`}>
                  {section.title}
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed" data-testid={`text-athletics-description-${section.id}`}>
                  {section.description}
                </p>
                {section.link && section.link !== "#" && (
                  <Button
                    variant="outline"
                    className="border-[var(--color-stanford-red)] text-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red)] hover:text-white"
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
