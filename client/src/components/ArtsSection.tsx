import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Building, Music, ArrowRight } from "lucide-react";
import type { ContentSection, Profile } from "@shared/schema";

interface ArtsSectionProps {
  sections: ContentSection[];
  profile?: Profile;
}

export function ArtsSection({ sections, profile }: ArtsSectionProps) {
  const icons = [Palette, Building, Music];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4" data-testid="text-arts-heading">Arts at Stanford</h2>
          <p className="text-lg text-muted-foreground max-w-3xl" data-testid="text-arts-description">
            From world-class museums to live performances and interdisciplinary scholarship, the arts are an integral part of the Stanford experience.
          </p>
        </div>

        {profile && (
          <Card className="mb-12 overflow-hidden border-0 shadow-lg" data-testid="card-arts-profile">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center">
                <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 mb-6"></div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-2xl font-serif italic mb-6 text-foreground leading-relaxed" data-testid="text-arts-profile-quote">
                  "{profile.quote}"
                </p>
                <div>
                  <p className="font-semibold text-lg mb-1" data-testid="text-arts-profile-name">{profile.name}</p>
                  <p className="text-muted-foreground mb-4" data-testid="text-arts-profile-title">{profile.title}</p>
                  <Button variant="ghost" className="p-0 h-auto font-semibold hover:bg-transparent" data-testid="button-arts-profile-read-more">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((section, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Card key={section.id} className="overflow-hidden hover-elevate" data-testid={`card-arts-${section.id}`}>
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 relative flex items-center justify-center">
                  <Icon className="h-16 w-16 text-primary/30" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3" data-testid={`text-arts-title-${section.id}`}>{section.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed" data-testid={`text-arts-description-${section.id}`}>
                    {section.description}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto font-semibold hover:bg-transparent" data-testid={`button-arts-link-${section.id}`}>
                    Explore <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" data-testid="button-more-arts">
            More about the arts <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
