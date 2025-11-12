import { Button } from "@/components/ui/button";
import { Trophy, Medal, Users, ArrowRight } from "lucide-react";
import type { ContentSection } from "@shared/schema";

interface AthleticsSectionProps {
  sections: ContentSection[];
  showHeader?: boolean;
}

export function AthleticsSection({ sections, showHeader = true }: AthleticsSectionProps) {
  const icons = [Trophy, Medal, Users];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        {showHeader && (
          <header className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-4" data-testid="text-athletics-heading">Cardinal Athletics</h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto" data-testid="text-athletics-description">
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
                  <Button variant="ghost" className="p-0 h-auto font-semibold hover:bg-transparent" data-testid={`button-athletics-link-${section.id}`}>
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" data-testid="button-more-athletics">
            More about athletics <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
