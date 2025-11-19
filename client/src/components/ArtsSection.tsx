import { Button } from "@/components/ui/button";
import { Palette, Building, Music, ArrowRight } from "lucide-react";
import type { ContentSection, Profile } from "@shared/schema";
import { Container } from "@/components/Container";

interface ArtsSectionProps {
  sections: ContentSection[];
  profile?: Profile;
}

export function ArtsSection({ sections, profile }: ArtsSectionProps) {
  const icons = [Palette, Building, Music];

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <header className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black leading-snug text-[var(--color-text-primary)] mb-4" data-testid="text-arts-heading">Arts at Riara</h2>
          <p className="mt-3 text-base sm:text-lg md:text-xl font-semibold text-[var(--color-text-secondary)] max-w-3xl mx-auto" data-testid="text-arts-description">
            From world-class museums to live performances and interdisciplinary scholarship, the arts are an integral part of the Riara experience.
          </p>
        </header>

        {profile && (
          <div className="mb-12" data-testid="card-arts-profile">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-primary/5 mb-6 overflow-hidden rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs font-medium">Image Placeholder</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-2xl font-serif italic mb-6 text-foreground leading-relaxed" data-testid="text-arts-profile-quote">
                  "{profile.quote}"
                </p>
                <div>
                  <p className="font-semibold text-lg mb-1" data-testid="text-arts-profile-name">{profile.name}</p>
                  <p className="text-muted-foreground mb-4" data-testid="text-arts-profile-title">{profile.title}</p>
                  <Button
                    variant="outline"
                    className="group inline-flex items-center gap-2 rounded-full border-[var(--color-stanford-red)] px-4 sm:px-5 py-2 text-sm font-semibold text-[var(--color-stanford-red)] transition-all duration-200 hover:bg-[var(--color-stanford-red)] hover:text-white shadow-sm hover:shadow-md"
                    data-testid="button-arts-profile-read-more"
                  >
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <Icon className="h-16 w-16 text-white/80 mb-2" />
                    <p className="text-xs font-medium text-white/60">Image Placeholder</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3" data-testid={`text-arts-title-${section.id}`}>{section.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed" data-testid={`text-arts-description-${section.id}`}>
                    {section.description}
                  </p>
                  <Button
                    variant="outline"
                    className="group inline-flex items-center gap-2 rounded-full border-[var(--color-stanford-red)] px-4 sm:px-5 py-2 text-sm font-semibold text-[var(--color-stanford-red)] transition-all duration-200 hover:bg-[var(--color-stanford-red)] hover:text-white shadow-sm hover:shadow-md"
                    data-testid={`button-arts-link-${section.id}`}
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
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold border-[var(--color-stanford-red)] bg-[var(--color-stanford-red)] text-white hover:bg-[var(--color-stanford-red-dark)] transition-all duration-200 shadow-sm hover:shadow-md"
            data-testid="button-more-arts"
            asChild
          >
            <a href="/arts" className="!text-white">
              More about the arts <ArrowRight className="h-4 w-4 !text-white" />
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
