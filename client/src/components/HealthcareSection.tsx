import { Button } from "@/components/ui/button";
import { Activity, Heart, Baby, ArrowRight } from "lucide-react";
import type { ContentSection } from "@shared/schema";

interface HealthcareSectionProps {
  sections: ContentSection[];
  showHeader?: boolean;
}

export function HealthcareSection({ sections, showHeader = true }: HealthcareSectionProps) {
  const icons = [Activity, Heart, Baby];

  return (
    <section className="py-20 bg-gray-50">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        {showHeader && (
          <header className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-4" data-testid="text-healthcare-heading">Health Care Excellence</h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto" data-testid="text-healthcare-description">
              Leading innovations in medicine and delivering exceptional patient care through our world-class health care institutions.
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
                  <Button variant="ghost" className="p-0 h-auto font-semibold hover:bg-transparent" data-testid={`button-healthcare-link-${section.id}`}>
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" data-testid="button-more-healthcare">
            More about health care <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
