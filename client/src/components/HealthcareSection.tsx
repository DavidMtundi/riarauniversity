import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Users, ArrowRight } from "lucide-react";
import type { ContentSection } from "@shared/schema";
import { Container } from "@/components/Container";

interface HealthcareSectionProps {
  sections: ContentSection[];
  showHeader?: boolean;
}

export function HealthcareSection({ sections, showHeader = true }: HealthcareSectionProps) {
  const icons = [Heart, BookOpen, Users];

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        {showHeader && (
          <header className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[var(--color-text-primary)] mb-4" data-testid="text-healthcare-heading">Riara Health Unit</h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl font-semibold text-[var(--color-text-secondary)] max-w-3xl mx-auto" data-testid="text-healthcare-description">
              Promoting mental, emotional, and social well-being for academic success.
            </p>
          </header>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((section, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={section.id} data-testid={`card-healthcare-${section.id}`}>
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/10 relative flex items-center justify-center">
                  <Icon className="h-20 w-20 text-primary/30" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3" data-testid={`text-healthcare-title-${section.id}`}>{section.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed" data-testid={`text-healthcare-description-${section.id}`}>
                    {section.description}
                  </p>
                  <Button
                    variant="outline"
                    className="group inline-flex items-center gap-2 rounded-full border-[var(--color-stanford-red)] px-4 sm:px-5 py-2 text-sm font-semibold text-[var(--color-stanford-red)] transition-all duration-200 hover:bg-[var(--color-stanford-red)] hover:text-white shadow-sm hover:shadow-md"
                    data-testid={`button-healthcare-link-${section.id}`}
                    asChild
                  >
                    <a href={section.link || "/healthcare"}>
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold border-[var(--color-stanford-red)] bg-[var(--color-stanford-red)] text-white hover:bg-[var(--color-stanford-red-dark)] transition-all duration-200 shadow-sm hover:shadow-md"
            data-testid="button-more-healthcare"
            asChild
          >
            <a href="/healthcare" className="!text-white">
              More about health care <ArrowRight className="h-4 w-4 !text-white" />
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
