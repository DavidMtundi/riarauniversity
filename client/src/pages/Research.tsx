import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ResearchSection } from "@/components/ResearchSection";
import { Container } from "@/components/Container";
import { RetryButton } from "@/components/RetryButton";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { ResearchStat, Profile } from "@shared/schema";

export default function Research() {
  const { data: researchStats = [], isLoading: statsLoading, error: statsError } = useQuery<ResearchStat[]>({
    queryKey: ['/api/research-stats']
  });

  const { data: researchProfile, isLoading: researchProfileLoading, error: researchProfileError } = useQuery<Profile>({
    queryKey: ['/api/profiles/research']
  });

  const isLoading = statsLoading || researchProfileLoading;
  const hasError = statsError || researchProfileError;

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-24">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--color-stanford-red)] border-r-transparent mb-4"></div>
            <p className="text-[var(--color-text-secondary)]">Loading Research...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-24">
          <div className="text-center max-w-md mx-auto px-2 sm:px-3">
            <div className="mb-4 text-[var(--color-stanford-red)]">
              <svg className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-2">Unable to Load Content</h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
              We're experiencing technical difficulties loading the Research page. Please try refreshing the page.
            </p>
            <RetryButton
              onClick={() => window.location.reload()}
              data-testid="button-reload"
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative w-full h-[32.5vh] md:h-[37.5vh] overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-stanford-red)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-stanford-red)]/5 rounded-full blur-3xl"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-4 md:mb-6 drop-shadow-2xl">
                Research
              </h1>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <p className="text-xl md:text-2xl text-[var(--color-text-primary)] leading-relaxed mb-6 font-light">
                At Riara University, research is not just a requirement—it is a pillar of our academic identity.
              </p>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-6">
                We believe that impactful research drives societal progress, informs practice, and transforms lives. As a forward-looking institution, we are committed to nurturing a research culture that addresses the complex challenges of our time and shapes a sustainable future.
              </p>
            </div>
          </Container>
        </section>

        {/* Vision Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-8">
                Our Vision for Research
              </h2>
              <div className="space-y-6 border-l-4 border-[var(--color-stanford-red)] pl-6 md:pl-8">
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                  Guided by the university's vision <span className="font-semibold text-[var(--color-text-primary)]">"to be a leading university in the world and a Centre of Excellence in Scholarship, Research, and Training,"</span> Riara University actively fosters an environment where research flourishes.
                </p>
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                  We aim to be a hub of critical inquiry, innovation, and knowledge generation that contributes to national and global development.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Research Focus Areas Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Research Focus Areas
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-10">
                Riara University supports multidisciplinary research across all its Schools—Law, Business, Education, Computing Sciences, International Relations, and Communication & Multimedia Journalism. Our focus is on producing research that is:
              </p>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="pb-6 border-b border-[var(--color-border-secondary)] md:border-b-0 md:border-r md:pr-8 md:pb-0">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                    Relevant to societal needs
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Research that addresses real-world challenges and makes a meaningful impact on society.
                  </p>
                </div>

                <div className="pb-6 border-b border-[var(--color-border-secondary)] md:border-b-0 md:pb-0">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                    Ethically sound and innovative
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Groundbreaking research conducted with the highest ethical standards and innovative methodologies.
                  </p>
                </div>

                <div className="pt-6 border-t border-[var(--color-border-secondary)] md:border-t-0 md:border-r md:pr-8 md:pt-0">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                    Collaborative and multidisciplinary
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Cross-disciplinary collaboration that brings together diverse perspectives and expertise.
                  </p>
                </div>

                <div className="pt-6 border-t border-[var(--color-border-secondary)] md:border-t-0 md:pt-0">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                    Sustainable and solutions-oriented
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Research that creates lasting solutions and contributes to sustainable development.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Research Initiatives & Activities Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Research Initiatives & Activities
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-10">
                Our research office, under the leadership of the Deputy Vice-Chancellor (Academic Affairs), actively promotes and supports:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Encouragement of faculty and student-led research that tackles real-world issues
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Establishing collaborative research partnerships with local and international institutions
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Pursuit of funding opportunities from both internal and external sources
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Oversight of academic journal publications within the university's various Schools
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Organization of regular faculty seminars, symposiums, and roundtable discussions
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Engagement in community-based research projects and participatory studies
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Research Publications Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Our Research Publications
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-3xl mx-auto">
                Our faculty and researchers contribute to the global body of knowledge through publications in peer-reviewed journals, conference proceedings, and other academic outlets across all Schools.
              </p>
              <Button
                size="lg"
                className="bg-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red-dark)] text-white font-semibold text-base md:text-lg px-8 py-6"
                asChild
              >
                <a href="https://repository.ru.ac.ke/communities/1a3fbb88-440d-40af-8cd0-fe7d7f5ad253" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 !text-white hover:!text-white">
                  Browse Research Papers <ExternalLink className="h-5 w-5 !text-white" />
                </a>
              </Button>
            </div>
          </Container>
        </section>

        {/* Research Stats Section (if available) */}
        {researchStats.length > 0 && (
          <ResearchSection stats={researchStats} profile={researchProfile} showHeader={false} />
        )}
      </main>
      <Footer />
    </div>
  );
}
