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
    <section id="research" className="py-14 sm:py-16 md:py-24 bg-[var(--color-bg-secondary)]">
      <Container>
        {showHeader && (
          <AnimatedSection direction="fade-up">
            <header className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-4" data-testid="text-research-heading">
                Research That Matters
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto" data-testid="text-research-subheading">
                Every day, our faculty and students ask tough questions, challenge assumptions, and create knowledge that transforms communities across Kenya and beyond.
              </p>
            </header>
          </AnimatedSection>
        )}

        {/* Story Section - More Human Touch */}
        <AnimatedSection direction="fade-up" delay={100}>
          <div className="relative overflow-hidden bg-gradient-to-br from-white via-[var(--color-bg-secondary)] to-white p-8 md:p-12 rounded-2xl mb-12 md:mb-16 border border-[var(--color-border-secondary)] shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-riara-red)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-riara-red)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="max-w-4xl mx-auto text-center mb-8">
                <p className="text-lg md:text-xl lg:text-2xl text-[var(--color-text-primary)] leading-relaxed font-medium mb-6">
                  When we talk about research at Riara, we're talking about real people solving real problems. Our researchers aren't just publishing papers—they're transforming lives, shaping policies, and building a better future for Kenya and the world.
                </p>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  From understanding conflict patterns in East Africa to developing innovative technologies and exploring solutions to everyday challenges, every research project starts with a question: "How can we make a difference?"
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Value Propositions with Icons */}
        <AnimatedSection direction="fade-up" delay={150}>
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-8 md:mb-10 text-[var(--color-text-primary)]">
              What Makes Our Research Different
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
              <div className="group bg-white p-6 md:p-8 rounded-xl border-2 border-[var(--color-border-secondary)] hover:border-[var(--color-riara-red)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h4 className="text-xl md:text-2xl font-serif font-bold mb-3 text-[var(--color-text-primary)]">Solves Real Problems</h4>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                  Policy-shaping insights and community-focused research that tackles the challenges people face every day. We don't just study problems—we solve them.
                </p>
              </div>
              
              <div className="group bg-white p-6 md:p-8 rounded-xl border-2 border-[var(--color-border-secondary)] hover:border-[var(--color-riara-red)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h4 className="text-xl md:text-2xl font-serif font-bold mb-3 text-[var(--color-text-primary)]">Pushes Boundaries</h4>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                  Interdisciplinary teams connecting law, business, technology, and international relations to create innovative solutions that wouldn't be possible in isolation.
                </p>
              </div>
              
              <div className="group bg-white p-6 md:p-8 rounded-xl border-2 border-[var(--color-border-secondary)] hover:border-[var(--color-riara-red)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h4 className="text-xl md:text-2xl font-serif font-bold mb-3 text-[var(--color-text-primary)]">Stays Human</h4>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                  Research that improves lives—practical, empathetic, and impact-driven work that makes a real difference in communities and beyond.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {profile && (
          <AnimatedSection direction="fade-up" delay={200}>
            <div className="mb-16 md:mb-20" data-testid="card-research-profile">
              <div className="relative overflow-hidden bg-gradient-to-br from-white to-[var(--color-bg-secondary)] rounded-2xl shadow-xl border border-[var(--color-border-secondary)]">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-riara-red)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10 p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                    {/* Image with enhanced styling */}
                    <div className="flex-shrink-0 w-full lg:w-64 xl:w-72">
                      {profile.imageUrl ? (
                        <div className="relative group">
                          <div className="absolute inset-0 bg-[var(--color-riara-red)]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                          <img 
                            src={profile.imageUrl} 
                            alt={profile.name}
                            className="relative w-full aspect-square rounded-2xl object-cover shadow-2xl ring-4 ring-white/50 group-hover:ring-[var(--color-riara-red)]/30 transition-all duration-300"
                          />
                        </div>
                      ) : (
                        <div className="w-full aspect-square bg-gradient-to-br from-[var(--color-bg-secondary)] to-white border-2 border-[var(--color-border-secondary)] rounded-2xl shadow-lg"></div>
                      )}
                    </div>
                    
                    {/* Content with better typography */}
                    <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
                      <div className="mb-6">
                        <div className="inline-flex items-center gap-2 mb-4 text-[var(--color-riara-red)]">
                          <div className="h-1 w-8 bg-[var(--color-riara-red)]"></div>
                          <span className="text-sm font-semibold uppercase tracking-wide">Leadership Insight</span>
                        </div>
                        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif italic mb-6 text-[var(--color-text-primary)] leading-tight" data-testid="text-profile-quote">
                          "{profile.quote}"
                        </blockquote>
                      </div>
                      
                      <div className="mb-6">
                        <p className="font-bold text-xl md:text-2xl mb-2 text-[var(--color-text-primary)]" data-testid="text-profile-name">
                          {profile.name}
                        </p>
                        <p className="text-base md:text-lg text-[var(--color-text-secondary)] font-medium" data-testid="text-profile-title">
                          {profile.title}
                        </p>
                      </div>
                      
                      <Button
                        variant="outline"
                        className="self-center lg:self-start border-2 border-[var(--color-riara-red)] text-[var(--color-riara-red)] hover:bg-[var(--color-riara-red)] hover:text-white transition-all duration-200 px-6 py-2.5 font-semibold"
                        data-testid="button-profile-read-more"
                        asChild
                      >
                        <a href="/research">
                          Learn more about our research <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Research Impact Stats - Enhanced */}
        <AnimatedSection direction="fade-up" delay={250}>
          <div className="mb-12 md:mb-16">
            <div className="text-center mb-10 md:mb-12">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-text-primary)] mb-4" data-testid="text-research-impact-heading">
                Our Research Impact
              </h3>
              <p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Numbers that tell a story of innovation, transformation, and real-world change
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {stats.map((stat, index) => {
                // Extract number from stat.value (could be "50+" or "100" or "1,000" or "kshs 94B")
                const numericValue = parseInt(stat.value.replace(/[^0-9]/g, '')) || 0;
                const hasPlus = stat.value.includes('+');
                const isCurrency = stat.value.toLowerCase().includes('kshs') || stat.value.includes('B') || stat.value.includes('T');
                
                // If value is not numeric or is 0, just display the original value
                if (numericValue === 0 || !numericValue || isCurrency) {
                  return (
                    <AnimatedSection key={stat.id} direction="fade-up" delay={index * 50}>
                      <div className="group bg-white p-6 md:p-8 rounded-xl border-2 border-[var(--color-border-secondary)] hover:border-[var(--color-riara-red)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center" data-testid={`stat-${stat.id}`}>
                        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-riara-red)] mb-3 leading-none" data-testid={`text-stat-value-${stat.id}`}>
                          {stat.value}
                        </p>
                        <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed font-medium" data-testid={`text-stat-label-${stat.id}`}>
                          {stat.label}
                        </p>
                      </div>
                    </AnimatedSection>
                  );
                }
                
                return (
                  <AnimatedSection key={stat.id} direction="fade-up" delay={index * 50}>
                    <div className="group bg-white p-6 md:p-8 rounded-xl border-2 border-[var(--color-border-secondary)] hover:border-[var(--color-riara-red)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center" data-testid={`stat-${stat.id}`}>
                      <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-riara-red)] mb-3 leading-none" data-testid={`text-stat-value-${stat.id}`}>
                        <CountUp end={numericValue} suffix={hasPlus ? '+' : ''} />
                      </p>
                      <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed font-medium" data-testid={`text-stat-label-${stat.id}`}>
                        {stat.label}
                      </p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="fade-up" delay={350}>
          <div className="text-center bg-gradient-to-br from-[var(--color-riara-red)]/10 via-[var(--color-riara-red)]/5 to-transparent p-8 md:p-10 rounded-2xl border border-[var(--color-riara-red)]/20">
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-6 max-w-2xl mx-auto">
              Ready to explore how our research is making a difference? Discover our projects, meet our researchers, and learn how we're building knowledge that transforms communities.
            </p>
            <Button
              variant="outline"
              className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 text-base sm:text-lg font-semibold border-2 border-[var(--color-riara-red)] bg-[var(--color-riara-red)] !text-white hover:bg-[var(--color-riara-red-dark)] hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              data-testid="button-more-research"
              asChild
            >
              <a href="/research" className="!text-white">
                <span className="!text-white">Explore Our Research</span> 
                <ArrowRight className="h-5 w-5 !text-white" />
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
