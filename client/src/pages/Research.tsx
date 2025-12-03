import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ResearchSection } from "@/components/ResearchSection";
import { Container } from "@/components/Container";
import { RetryButton } from "@/components/RetryButton";
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
      <main className="flex-1 pt-10">
        {/* Hero Section */}
        <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[url('/riara-logo.jpeg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
          </div>
          <div className="relative z-10 w-full">
            <Container className="px-0 sm:px-1 md:px-1 lg:px-2 xl:px-2 2xl:px-3">
              <div className="text-center max-w-4xl mx-auto px-2 sm:px-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                  Research at Riara University
                </h1>
              </div>
            </Container>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-10 md:py-12 lg:py-14 bg-white">
          <Container className="px-0 sm:px-1 md:px-1 lg:px-2 xl:px-2 2xl:px-3">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg md:prose-xl max-w-none">
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Research is an integral part of any institution of higher learning the world over and institutions that are strong in research work are highly ranked across the world. Any credible institution takes pride in being home to recognizable research that produces insights toward the various challenges and problems in the society.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Vision Section */}
        <section className="py-10 md:py-12 bg-gradient-to-b from-white to-[var(--color-bg-secondary)]/30">
          <Container className="px-0 sm:px-1 md:px-1 lg:px-2 xl:px-2 2xl:px-3">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
                  Our Vision
                </h2>
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed italic">
                  "To be a leading university in the world and a Centre of Excellence in Scholarship, Research, and Training"
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Research Policy Section */}
        <section className="py-10 md:py-12 bg-white">
          <Container className="px-0 sm:px-1 md:px-1 lg:px-2 xl:px-2 2xl:px-3">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Research Policy
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8">
                Riara University aspires to be such an institution that engages in research for the sole purpose of generating knowledge and questioning practice. The research policy at Riara University seeks to develop and encourage faculty and students to conduct research that is responsive to the contemporary needs of the 21st century society.
              </p>

              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[var(--color-text-primary)] mb-6">
                Research Activities
              </h3>
              <p className="text-lg text-[var(--color-text-secondary)] mb-6">
                In summary, some of the activities that the research section seeks to engage in include, but are not limited to, the following:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-6 bg-[var(--color-bg-secondary)]/50 rounded-lg border-l-4 border-[var(--color-stanford-red)]">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-stanford-red)] text-white flex items-center justify-center font-bold mt-1">
                    1
                  </div>
                  <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Encouraging faculty and students to conduct research that is relevant to the wider society
                  </p>
                </div>

                <div className="flex items-start gap-4 p-6 bg-[var(--color-bg-secondary)]/50 rounded-lg border-l-4 border-[var(--color-stanford-red)]">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-stanford-red)] text-white flex items-center justify-center font-bold mt-1">
                    2
                  </div>
                  <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Seeking collaboration with other academic institutions towards collaborative research
                  </p>
                </div>

                <div className="flex items-start gap-4 p-6 bg-[var(--color-bg-secondary)]/50 rounded-lg border-l-4 border-[var(--color-stanford-red)]">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-stanford-red)] text-white flex items-center justify-center font-bold mt-1">
                    3
                  </div>
                  <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Seeking funding for research from both internal and external sources
                  </p>
                </div>

                <div className="flex items-start gap-4 p-6 bg-[var(--color-bg-secondary)]/50 rounded-lg border-l-4 border-[var(--color-stanford-red)]">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-stanford-red)] text-white flex items-center justify-center font-bold mt-1">
                    4
                  </div>
                  <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Overseeing the publication of journals by the various Schools at the university
                  </p>
                </div>

                <div className="flex items-start gap-4 p-6 bg-[var(--color-bg-secondary)]/50 rounded-lg border-l-4 border-[var(--color-stanford-red)]">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-stanford-red)] text-white flex items-center justify-center font-bold mt-1">
                    5
                  </div>
                  <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Holding faculty seminars on a regular basis to enable faculty and students interact on topical issues and engage in ongoing research projects
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Research Committee Section */}
        <section className="py-10 md:py-12 bg-gradient-to-b from-white to-[var(--color-bg-secondary)]/30">
          <Container className="px-0 sm:px-1 md:px-1 lg:px-2 xl:px-2 2xl:px-3">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[var(--color-stanford-red)]/10 to-[var(--color-stanford-red)]/5 rounded-2xl p-6 md:p-8 border border-[var(--color-stanford-red)]/20">
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  The research committee welcomes new ideas that will contribute to the growth of research activities at Riara University.
                </p>
                <div className="bg-white rounded-lg p-6 border-l-4 border-[var(--color-stanford-red)]">
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)]">
                    <strong className="text-[var(--color-text-primary)]">Detailed information</strong> on the Riara University Research Policy can be accessed from the office of the <strong className="text-[var(--color-text-primary)]">Deputy Vice-Chancellor's (Academic Affairs)</strong> office.
                  </p>
                </div>
              </div>
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
