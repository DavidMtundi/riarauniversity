import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { LeadershipSection } from "@/components/LeadershipSection";
import { RetryButton } from "@/components/RetryButton";
import type { LeadershipMember } from "@shared/schema";

export default function Leadership() {
  const { data: leadership = [], isLoading: leadershipLoading, error: leadershipError, refetch } = useQuery<LeadershipMember[]>({
    queryKey: ['/api/leadership'],
    retry: 2,
    retryDelay: 1000,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-12 sm:pt-14 md:pt-24">
        {/* Hero Image Section */}
        <section className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[url('https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg')] bg-cover bg-center bg-no-repeat opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-riara-red)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-riara-red)]/5 rounded-full blur-3xl"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-4 md:mb-6 drop-shadow-2xl">
                Leadership and Governance
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
                Meet the leadership team guiding Riara University's mission
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 md:py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Riara University is governed by a Board of Trustees, Vice Chancellor, and a number of other academic and administrative officers. Our leadership team is committed to fostering academic excellence, innovation, and transformative learning experiences that prepare students for leadership and engaged citizenship in the world.
                </p>
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                  The university's governance structure ensures strategic oversight, academic integrity, and operational excellence across all schools and departments. Our leaders bring extensive experience in higher education, research, and administration, guiding Riara's mission to nurture innovators and ethical leaders.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Leadership Content */}
        <section className="py-12 md:py-16 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-7xl mx-auto">
              {leadershipLoading ? (
                <div className="text-center py-12">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--color-riara-red)] border-r-transparent mb-4"></div>
                  <p className="text-[var(--color-text-secondary)]">Loading Leadership...</p>
                </div>
              ) : leadershipError ? (
                <div className="text-center py-12">
                  <p className="text-[var(--color-text-secondary)] mb-4">Unable to load leadership information.</p>
                  <RetryButton
                    onClick={() => refetch()}
                    data-testid="button-reload"
                  />
                </div>
              ) : leadership.length > 0 ? (
                <LeadershipSection members={leadership} showHeader={false} />
              ) : (
                <div className="text-center py-12">
                  <p className="text-[var(--color-text-secondary)]">Leadership information coming soon.</p>
                </div>
              )}
            </div>
          </Container>
        </section>

        {/* Governance Structure Section */}
        <section className="py-12 md:py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8 text-[var(--color-text-primary)] text-center">
                Governance Structure
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-[var(--color-bg-secondary)] rounded-lg">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold mb-3 text-[var(--color-text-primary)]">
                    Board of Trustees
                  </h3>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                    Provides strategic oversight and governance, ensuring the university's mission and values are upheld while supporting long-term growth and excellence.
                  </p>
                </div>
                <div className="p-6 bg-[var(--color-bg-secondary)] rounded-lg">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold mb-3 text-[var(--color-text-primary)]">
                    University Council
                  </h3>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                    Oversees academic policies, curriculum development, and ensures the highest standards of teaching, learning, and research across all programs.
                  </p>
                </div>
                <div className="p-6 bg-[var(--color-bg-secondary)] rounded-lg">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold mb-3 text-[var(--color-text-primary)]">
                    Vice Chancellor
                  </h3>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                    Leads the university's executive team, providing vision and direction for academic excellence, innovation, and institutional development.
                  </p>
                </div>
                <div className="p-6 bg-[var(--color-bg-secondary)] rounded-lg">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold mb-3 text-[var(--color-text-primary)]">
                    University Management
                  </h3>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                    Manages day-to-day operations, administrative functions, and ensures efficient delivery of services to students, faculty, and staff.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
