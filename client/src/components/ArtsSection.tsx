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
    <section className="py-20 bg-gray-50">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        <header className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-4" data-testid="text-arts-heading">Arts at Riara</h2>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto" data-testid="text-arts-description">
            From world-class museums to live performances and interdisciplinary scholarship, the arts are an integral part of the Riara experience.
          </p>
        </header>

        {profile && (
          <div className="mb-12" data-testid="card-arts-profile">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-primary/5 mb-6 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Arts at Riara"
                    className="w-full h-full object-cover"
                  />
                </div>
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
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((section, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={section.id} data-testid={`card-arts-${section.id}`}>
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 relative flex items-center justify-center overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${1560000000000 + Number(section.id) * 4000000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                    alt={section.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10"></div>
                  <Icon className="h-16 w-16 text-white/80 relative z-10" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3" data-testid={`text-arts-title-${section.id}`}>{section.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed" data-testid={`text-arts-description-${section.id}`}>
                    {section.description}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto font-semibold hover:bg-transparent" data-testid={`button-arts-link-${section.id}`}>
                    Explore <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
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
