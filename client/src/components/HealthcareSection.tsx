import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { ContentSection } from "@shared/schema";
import { Container } from "@/components/Container";

interface HealthcareSectionProps {
  sections: ContentSection[];
  showHeader?: boolean;
}

export function HealthcareSection({ sections, showHeader = true }: HealthcareSectionProps) {

  return (
    <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
      <Container>
        {showHeader && (
          <header className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-4" data-testid="text-healthcare-heading">Riara Health Unit</h2>
            <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto" data-testid="text-healthcare-description">
              Promoting mental, emotional, and social well-being for academic success.
            </p>
          </header>
        )}

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {sections.map((section) => {
            return (
              <div key={section.id} className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]" data-testid={`card-healthcare-${section.id}`}>
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-[var(--color-text-primary)]" data-testid={`text-healthcare-title-${section.id}`}>{section.title}</h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed" data-testid={`text-healthcare-description-${section.id}`}>
                  {section.description}
                </p>
                {section.link && section.link !== "#" && (
                  <Button
                    variant="outline"
                    className="border-[var(--color-riara-red)] text-[var(--color-riara-red)] hover:bg-[var(--color-riara-red)] hover:text-white"
                    data-testid={`button-healthcare-link-${section.id}`}
                    asChild
                  >
                    <a href={section.link || "/healthcare"}>
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center pt-8 md:pt-12">
          <Button
            variant="outline"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold border-[var(--color-riara-red)] bg-[var(--color-riara-red)] !text-white hover:bg-[var(--color-riara-red-dark)] transition-all duration-200"
            data-testid="button-more-healthcare"
            asChild
          >
            <a href="/healthcare" className="!text-white">
              <span className="!text-white">More about health care</span> <ArrowRight className="h-4 w-4 !text-white" />
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
