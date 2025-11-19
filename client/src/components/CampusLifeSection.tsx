import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Dumbbell, ArrowRight } from "lucide-react";
import type { ContentSection, Profile } from "@shared/schema";
import { Container } from "@/components/Container";

interface CampusLifeSectionProps {
  sections: ContentSection[];
  profile?: Profile;
  showHeader?: boolean;
}

export function CampusLifeSection({ sections, profile, showHeader = true }: CampusLifeSectionProps) {
  const icons = [Users, MessageCircle, Dumbbell];

  return (
    <section id="campus-life" className="py-20 bg-white">
      <Container>
        {showHeader && (
          <header className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black leading-snug text-[var(--color-text-primary)]" data-testid="text-campus-life-heading">
              Campus Life
            </h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl font-semibold text-[var(--color-text-secondary)]" data-testid="text-campus-life-subheading">
              Building a vibrant community of creative and accomplished people from around the world
            </p>
          </header>
        )}

        {profile && (
          <div className="mb-16" data-testid="card-campus-profile">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center order-2 md:order-1">
                <p className="text-2xl font-serif italic mb-6 text-foreground leading-relaxed" data-testid="text-campus-profile-quote">
                  "{profile.quote}"
                </p>
                <div>
                  <p className="font-semibold text-lg mb-1" data-testid="text-campus-profile-name">{profile.name}</p>
                  <p className="text-muted-foreground mb-4" data-testid="text-campus-profile-title">{profile.title}</p>
                  <Button
                    variant="outline"
                    className="group inline-flex items-center gap-2 rounded-full border-[var(--color-stanford-red)] px-4 sm:px-5 py-2 text-sm font-semibold text-[var(--color-stanford-red)] transition-all duration-200 hover:bg-[var(--color-stanford-red)] hover:text-white shadow-sm hover:shadow-md"
                    data-testid="button-campus-profile-read-more"
                  >
                    Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col justify-center order-1 md:order-2">
                <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-primary/5 ml-auto overflow-hidden rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs font-medium">Image Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((section, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={section.id} data-testid={`card-campus-${section.id}`}>
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/10 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <Icon className="h-20 w-20 text-white/80 mb-2" />
                    <p className="text-xs font-medium text-white/60">Image Placeholder</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3" data-testid={`text-campus-title-${section.id}`}>{section.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed" data-testid={`text-campus-description-${section.id}`}>
                    {section.description}
                  </p>
                  <Button
                    variant="outline"
                    className="group inline-flex items-center gap-2 rounded-full border-[var(--color-stanford-red)] px-4 sm:px-5 py-2 text-sm font-semibold text-[var(--color-stanford-red)] transition-all duration-200 hover:bg-[var(--color-stanford-red)] hover:text-white shadow-sm hover:shadow-md"
                    data-testid={`button-campus-link-${section.id}`}
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
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold border-[var(--color-stanford-red)] bg-[var(--color-stanford-red)] text-white hover:bg-[var(--color-stanford-red-dark)] transition-all duration-200 shadow-sm hover:shadow-md"
            data-testid="button-more-campus-life"
          >
            More about campus life <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
