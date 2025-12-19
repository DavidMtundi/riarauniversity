import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { ResearchStat, Profile } from "@shared/schema";
import { Container } from "@/components/Container";
import { CountUp } from "@/components/CountUp";
import { AnimatedSection } from "@/components/AnimatedSection";

interface ResearchSectionProps {
  stats: ResearchStat[];
  profile?: Profile;
  showHeader?: boolean;
}

export function ResearchSection({ stats, profile, showHeader = true }: ResearchSectionProps) {
  return (
    <section id="research" className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
      <Container>
        {showHeader && (
          <AnimatedSection direction="fade-up">
            <header className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-3" data-testid="text-research-heading">
              Research
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto" data-testid="text-research-subheading">
              Research isn't just something we do—it's who we are. We connect labs and classrooms to real-world impact for Kenya and beyond.
            </p>
          </header>
          </AnimatedSection>
        )}

        {/* Intro from Research page (document content) */}
        <AnimatedSection direction="fade-up" delay={100}>
          <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg mb-12 md:mb-16">
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
            At Riara University, research isn't just something we do—it's who we are. Every day, our faculty and students are asking tough questions, challenging assumptions, and working on research that actually matters. Whether it's understanding conflict patterns in East Africa, developing new technologies, or exploring solutions to real-world problems, our research makes a difference.
          </p>
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
            We're not just publishing papers for the sake of it. We're building knowledge that helps communities, informs policy, and creates lasting change. That's what drives us.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-sm md:text-base text-[var(--color-text-secondary)]">
            <div className="bg-[var(--color-bg-secondary)] p-4 rounded-lg">
              <p className="font-semibold text-[var(--color-text-primary)] mb-1">Solves Real Problems</p>
              <p>Policy-shaping insights, community-focused research that tackles challenges people face every day.</p>
            </div>
            <div className="bg-[var(--color-bg-secondary)] p-4 rounded-lg">
              <p className="font-semibold text-[var(--color-text-primary)] mb-1">Pushes Boundaries</p>
              <p>Interdisciplinary teams linking law, business, tech, and international relations to create innovative solutions.</p>
            </div>
            <div className="bg-[var(--color-bg-secondary)] p-4 rounded-lg">
              <p className="font-semibold text-[var(--color-text-primary)] mb-1">Stays Human</p>
              <p>Research that improves lives—practical, empathetic, impact-driven work that makes a real difference.</p>
            </div>
          </div>
        </div>
        </AnimatedSection>

        {profile && (
          <AnimatedSection direction="fade-up" delay={200}>
          <div className="mb-16 md:mb-20" data-testid="card-research-profile">
            <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                {/* Image - smaller, positioned on the left */}
                <div className="flex-shrink-0 w-full md:w-48 lg:w-56">
                  {profile.imageUrl ? (
                    <img 
                      src={profile.imageUrl} 
                      alt={profile.name}
                      className="w-full aspect-square rounded-lg object-cover shadow-md"
                    />
                  ) : (
                    <div className="w-full aspect-square bg-white border-2 border-[var(--color-border-secondary)] rounded-lg flex items-center justify-center">
                      <div className="text-center text-[var(--color-text-secondary)]">
                        <svg className="w-12 h-12 mx-auto mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-xs font-medium">Image Placeholder</p>
                      </div>
                    </div>
                  )}
                </div>
                {/* Content - takes remaining space */}
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-xl md:text-2xl font-serif italic mb-6 text-[var(--color-text-primary)] leading-relaxed" data-testid="text-profile-quote">
                    "{profile.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-lg md:text-xl mb-1 text-[var(--color-text-primary)]" data-testid="text-profile-name">{profile.name}</p>
                    <p className="text-[var(--color-text-secondary)] mb-6" data-testid="text-profile-title">{profile.title}</p>
                    <Button
                      variant="outline"
                      className="border-[var(--color-riara-red)] text-[var(--color-riara-red)] hover:bg-[var(--color-riara-red)] hover:text-white"
                      data-testid="button-profile-read-more"
                      asChild
                    >
                      <a href="/research">
                        Read more <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </AnimatedSection>
        )}

        <AnimatedSection direction="fade-up" delay={300}>
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-10 md:mb-12 text-[var(--color-text-primary)]" data-testid="text-research-impact-heading">Research Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
              {stats.map((stat, index) => {
                // Extract number from stat.value (could be "50+" or "100" or "1,000")
                const numericValue = parseInt(stat.value.replace(/[^0-9]/g, '')) || 0;
                const hasPlus = stat.value.includes('+');
                const hasComma = stat.value.includes(',');
                
                // If value is not numeric or is 0, just display the original value
                if (numericValue === 0 || !numericValue) {
                  return (
                    <AnimatedSection key={stat.id} direction="fade-up" delay={index * 100}>
                      <div className="text-center" data-testid={`stat-${stat.id}`}>
                        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-riara-red)] mb-3" data-testid={`text-stat-value-${stat.id}`}>
                          {stat.value}
                        </p>
                        <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed" data-testid={`text-stat-label-${stat.id}`}>{stat.label}</p>
                      </div>
                    </AnimatedSection>
                  );
                }
                
                return (
                  <AnimatedSection key={stat.id} direction="fade-up" delay={index * 100}>
                    <div className="text-center" data-testid={`stat-${stat.id}`}>
                      <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-riara-red)] mb-3" data-testid={`text-stat-value-${stat.id}`}>
                        <CountUp end={numericValue} suffix={hasPlus ? '+' : ''} />
                      </p>
                      <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed" data-testid={`text-stat-label-${stat.id}`}>{stat.label}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center">
          <Button
            variant="outline"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold border-[var(--color-riara-red)] bg-[var(--color-riara-red)] !text-white hover:bg-[var(--color-riara-red-dark)] transition-all duration-200"
            data-testid="button-more-research"
            asChild
          >
            <a href="/research" className="!text-white">
              <span className="!text-white">More about research</span> <ArrowRight className="h-4 w-4 !text-white" />
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
