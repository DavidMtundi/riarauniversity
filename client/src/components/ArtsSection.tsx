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
            <div className="relative group overflow-hidden rounded-lg aspect-[16/9] md:aspect-[21/9]">
              {/* Background image - blurred on hover */}
              {profile.imageUrl && (
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:blur-md group-hover:scale-110"
                  style={{ backgroundImage: `url(${profile.imageUrl})` }}
                />
              )}
              
              {/* Dark overlay - appears on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500" />
              
              {/* Default state - show image */}
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-500">
                {profile.imageUrl ? (
                  <img 
                    src={profile.imageUrl} 
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-white border-2 border-[var(--color-border-secondary)] flex items-center justify-center">
                    <div className="text-center text-[var(--color-text-secondary)]">
                      <svg className="w-16 h-16 mx-auto mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-xs font-medium">Image Placeholder</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Hover state - show content overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                {/* Quote */}
                <p className="text-2xl md:text-4xl lg:text-5xl font-serif italic mb-8 md:mb-12 text-white text-center leading-relaxed max-w-4xl" data-testid="text-arts-profile-quote">
                  "{profile.quote}"
                </p>
                
                {/* Profile picture - circular */}
                <div className="mb-6 md:mb-8">
                  {profile.imageUrl ? (
                    <img 
                      src={profile.imageUrl} 
                      alt={profile.name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white/30 shadow-lg"
                    />
                  ) : (
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center">
                      <svg className="w-12 h-12 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* Name and title */}
                <div className="text-center mb-6">
                  <p className="font-bold text-xl md:text-2xl mb-2 text-white" data-testid="text-arts-profile-name">{profile.name}</p>
                  <p className="text-base md:text-lg text-white/90" data-testid="text-arts-profile-title">{profile.title}</p>
                </div>
                
                {/* Learn more link */}
                <a 
                  href="/arts"
                  className="text-white text-base md:text-lg font-semibold hover:text-white/80 transition-colors flex items-center gap-2"
                  data-testid="button-arts-profile-read-more"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
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

        <div className="text-center pt-8 md:pt-12">
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
