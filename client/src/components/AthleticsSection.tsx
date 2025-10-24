import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Medal, Users, ArrowRight } from "lucide-react";
import type { ContentSection } from "@shared/schema";

interface AthleticsSectionProps {
  sections: ContentSection[];
}

export function AthleticsSection({ sections }: AthleticsSectionProps) {
  const icons = [Trophy, Medal, Users];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4" data-testid="text-athletics-heading">Cardinal Athletics</h2>
          <p className="text-lg text-muted-foreground max-w-3xl" data-testid="text-athletics-description">
            Home to champions, Stanford Athletics combines competitive excellence with academic achievement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((section, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Card key={section.id} className="overflow-hidden hover-elevate" data-testid={`card-athletics-${section.id}`}>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 relative flex items-center justify-center">
                  <Icon className="h-16 w-16 text-primary/30" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3" data-testid={`text-athletics-title-${section.id}`}>{section.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed" data-testid={`text-athletics-description-${section.id}`}>
                    {section.description}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto font-semibold hover:bg-transparent" data-testid={`button-athletics-link-${section.id}`}>
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
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
