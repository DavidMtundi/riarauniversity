import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { ResearchStat, Profile } from "@shared/schema";
import { Container } from "@/components/Container";

interface ResearchSectionProps {
  stats: ResearchStat[];
  profile?: Profile;
  showHeader?: boolean;
}

export function ResearchSection({ stats, profile, showHeader = true }: ResearchSectionProps) {
  return (
    <section id="research" className="py-20 bg-gray-50">
      <Container>
        {showHeader && (
          <header className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black leading-snug text-[var(--color-text-primary)]" data-testid="text-research-heading">
              Research
            </h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl font-semibold text-[var(--color-text-secondary)]" data-testid="text-research-subheading">
              Advancing knowledge and solving the world's greatest challenges
            </p>
          </header>
        )}

        {profile && (
          <div className="mb-16" data-testid="card-research-profile">
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
                <p className="text-2xl font-serif italic mb-6 text-foreground leading-relaxed" data-testid="text-profile-quote">
                  "{profile.quote}"
                </p>
                <div>
                  <p className="font-semibold text-lg mb-1" data-testid="text-profile-name">{profile.name}</p>
                  <p className="text-muted-foreground mb-4" data-testid="text-profile-title">{profile.title}</p>
                  <Button
                    variant="outline"
                    className="group inline-flex items-center gap-2 rounded-full border-[var(--color-stanford-red)] px-4 sm:px-5 py-2 text-sm font-semibold text-[var(--color-stanford-red)] transition-all duration-200 hover:bg-[var(--color-stanford-red)] hover:text-white shadow-sm hover:shadow-md"
                    data-testid="button-profile-read-more"
                  >
                    Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mb-8">
          <h3 className="text-3xl font-serif font-bold text-center mb-12" data-testid="text-research-impact-heading">Research Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center" data-testid={`stat-${stat.id}`}>
                <p className="text-4xl font-bold text-primary mb-2" data-testid={`text-stat-value-${stat.id}`}>{stat.value}</p>
                <p className="text-sm text-muted-foreground leading-snug" data-testid={`text-stat-label-${stat.id}`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold border-[var(--color-stanford-red)] bg-[var(--color-stanford-red)] text-white hover:bg-[var(--color-stanford-red-dark)] transition-all duration-200 shadow-sm hover:shadow-md"
            data-testid="button-more-research"
          >
            More about research <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
