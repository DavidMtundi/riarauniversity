import { Button } from "@/components/ui/button";
import { Trophy, Medal, Users, ArrowRight } from "lucide-react";
import type { ContentSection } from "@shared/schema";
import { Container } from "@/components/Container";

interface AthleticsSectionProps {
  sections: ContentSection[];
  showHeader?: boolean;
}

export function AthleticsSection({ sections, showHeader = true }: AthleticsSectionProps) {
  const icons = [Trophy, Medal, Users];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <Container>
        {showHeader && (
          <header className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black leading-snug text-[var(--color-text-primary)] mb-4" data-testid="text-athletics-heading">Cardinal Athletics</h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl font-semibold text-[var(--color-text-secondary)] max-w-3xl mx-auto" data-testid="text-athletics-description">
              Home to champions, Riara Athletics combines competitive excellence with academic achievement.
            </p>
          </header>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {sections.map((section, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={section.id} data-testid={`card-athletics-${section.id}`}>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 relative flex items-center justify-center">
                  <Icon className="h-16 w-16 text-primary/30" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3" data-testid={`text-athletics-title-${section.id}`}>{section.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed" data-testid={`text-athletics-description-${section.id}`}>
                    {section.description}
                  </p>
                  <Button
                    variant="outline"
                    className="group inline-flex items-center gap-2 rounded-full border-[var(--color-stanford-red)] px-4 sm:px-5 py-2 text-sm font-semibold text-[var(--color-stanford-red)] transition-all duration-200 hover:bg-[var(--color-stanford-red)] hover:text-white shadow-sm hover:shadow-md"
                    data-testid={`button-athletics-link-${section.id}`}
                  >
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold border-[var(--color-stanford-red)] bg-[var(--color-stanford-red)] text-white hover:bg-[var(--color-stanford-red-dark)] transition-all duration-200 shadow-sm hover:shadow-md"
            data-testid="button-more-athletics"
          >
            More about athletics <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
