import { Button } from "@/components/ui/button";
import { Activity, Heart, Baby, ArrowRight } from "lucide-react";
import type { ContentSection } from "@shared/schema";

interface HealthcareSectionProps {
  sections: ContentSection[];
}

export function HealthcareSection({ sections }: HealthcareSectionProps) {
  const icons = [Activity, Heart, Baby];

  return (
    <section className="py-20 bg-gray-50">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        <div className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4" data-testid="text-healthcare-heading">Health Care Excellence</h2>
          <p className="text-lg text-muted-foreground max-w-3xl" data-testid="text-healthcare-description">
            Leading innovations in medicine and delivering exceptional patient care through our world-class health care institutions.
          </p>
        </div>

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
