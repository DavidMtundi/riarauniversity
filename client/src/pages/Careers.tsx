import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EventsSection } from "@/components/EventsSection";
import { Container } from "@/components/Container";
import { RetryButton } from "@/components/RetryButton";
import type { Event } from "@shared/schema";

export default function Careers() {
  const { data: careers = [], isLoading: careersLoading, error: careersError } = useQuery<Event[]>({
    queryKey: ['/api/careers']
  });

  if (careersLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-24">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--color-stanford-red)] border-r-transparent mb-4"></div>
            <p className="text-[var(--color-text-secondary)]">Loading Careers...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (careersError) {
    console.error("Careers loading error:", careersError);
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-24">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="mb-4 text-[var(--color-stanford-red)]">
              <svg className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-2">Unable to Load Careers</h2>
            <p className="text-[var(--color-text-secondary)] mb-2">
              We're experiencing technical difficulties loading our current career opportunities.
            </p>
            {careersError instanceof Error && (
              <p className="text-sm text-[var(--color-text-tertiary)] mb-6">
                Error: {careersError.message}
              </p>
            )}
            <p className="text-[var(--color-text-secondary)] mb-6">
              Please ensure the server is running and try refreshing the page.
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
        <section className="bg-[var(--color-bg-secondary)] py-16 md:py-20">
          <Container>
            <div className="text-center max-w-4xl mx-auto space-y-4 md:space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-text-tertiary)]">
                Join Riara
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--color-text-primary)]">
                Careers at Riara University
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                Explore faculty and staff opportunities that advance innovation, excellence in education, and community impact.
              </p>
            </div>
          </Container>
        </section>

        <EventsSection 
          events={careers} 
          showHeader={false} 
          ctaLabel="See all careers" 
          ctaTestId="button-more-careers" 
        />
      </main>
      <Footer />
    </div>
  );
}

