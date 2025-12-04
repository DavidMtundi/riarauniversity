import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { ContentSection, Profile } from "@shared/schema";
import { Container } from "@/components/Container";

interface ArtsSectionProps {
  sections: ContentSection[];
  profile?: Profile;
}

export function ArtsSection({ sections, profile }: ArtsSectionProps) {

  return (
    <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
      <Container>
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-4" data-testid="text-arts-heading">Arts at Riara</h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto" data-testid="text-arts-description">
            From world-class museums to live performances and interdisciplinary scholarship, the arts are an integral part of the Riara experience.
          </p>
        </header>

        {profile && (
          <div className="mb-16 md:mb-20" data-testid="card-arts-profile">
            <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col justify-center">
                  {profile.imageUrl ? (
                    <img 
                      src={profile.imageUrl} 
                      alt={profile.name}
                      className="w-full max-w-md mx-auto rounded-lg object-cover"
                    />
                  ) : (
                    <div className="w-full max-w-md mx-auto aspect-[4/3] bg-white border-2 border-[var(--color-border-secondary)] rounded-lg flex items-center justify-center">
                      <div className="text-center text-[var(--color-text-secondary)]">
                        <svg className="w-16 h-16 mx-auto mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-xs font-medium">Image Placeholder</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xl md:text-2xl font-serif italic mb-6 text-[var(--color-text-primary)] leading-relaxed" data-testid="text-arts-profile-quote">
                    "{profile.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-lg md:text-xl mb-1 text-[var(--color-text-primary)]" data-testid="text-arts-profile-name">{profile.name}</p>
                    <p className="text-[var(--color-text-secondary)] mb-6" data-testid="text-arts-profile-title">{profile.title}</p>
                    <Button
                      variant="outline"
                      className="border-[var(--color-stanford-red)] text-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red)] hover:text-white"
                      data-testid="button-arts-profile-read-more"
                      asChild
                    >
                      <a href="/arts">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {sections.map((section) => {
            return (
              <div key={section.id} className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]" data-testid={`card-arts-${section.id}`}>
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-[var(--color-text-primary)]" data-testid={`text-arts-title-${section.id}`}>{section.title}</h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed" data-testid={`text-arts-description-${section.id}`}>
                  {section.description}
                </p>
                {section.link && section.link !== "#" && (
                  <Button
                    variant="outline"
                    className="border-[var(--color-stanford-red)] text-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red)] hover:text-white"
                    data-testid={`button-arts-link-${section.id}`}
                    asChild
                  >
                    <a href={section.link}>
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold border-[var(--color-stanford-red)] bg-[var(--color-stanford-red)] !text-white hover:bg-[var(--color-stanford-red-dark)] transition-all duration-200"
            data-testid="button-more-arts"
            asChild
          >
            <a href="/arts" className="!text-white">
              <span className="!text-white">More about the arts</span> <ArrowRight className="h-4 w-4 !text-white" />
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
