import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Dumbbell, ArrowRight } from "lucide-react";
import type { ContentSection, Profile } from "@shared/schema";

interface CampusLifeSectionProps {
  sections: ContentSection[];
  profile?: Profile;
}

export function CampusLifeSection({ sections, profile }: CampusLifeSectionProps) {
  const icons = [Users, MessageCircle, Dumbbell];

  return (
    <section id="campus-life" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {profile && (
          <Card className="mb-16 overflow-hidden border-0 shadow-lg" data-testid="card-campus-profile">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center order-2 md:order-1">
                <p className="text-2xl font-serif italic mb-6 text-foreground leading-relaxed" data-testid="text-campus-profile-quote">
                  "{profile.quote}"
                </p>
                <div>
                  <p className="font-semibold text-lg mb-1" data-testid="text-campus-profile-name">{profile.name}</p>
                  <p className="text-muted-foreground mb-4" data-testid="text-campus-profile-title">{profile.title}</p>
                  <Button variant="link" className="p-0 h-auto font-semibold" data-testid="button-campus-profile-read-more">
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col justify-center order-1 md:order-2">
                <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 ml-auto"></div>
              </div>
            </div>
          </Card>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((section, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Card key={section.id} className="overflow-hidden hover-elevate" data-testid={`card-campus-${section.id}`}>
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/10 relative flex items-center justify-center">
                  <Icon className="h-20 w-20 text-primary/30" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3" data-testid={`text-campus-title-${section.id}`}>{section.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed" data-testid={`text-campus-description-${section.id}`}>
                    {section.description}
                  </p>
                  <Button variant="link" className="p-0 h-auto font-semibold" data-testid={`button-campus-link-${section.id}`}>
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" data-testid="button-more-campus-life">
            More about campus life <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
