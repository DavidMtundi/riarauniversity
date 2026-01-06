import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PartnersSection, type PartnerCategory } from "@/components/PartnersSection";
import { Container } from "@/components/Container";
import { RetryButton } from "@/components/RetryButton";

export default function Partners() {
  const { data: partnerCategories = [], isLoading, error } = useQuery<PartnerCategory[]>({
    queryKey: ['/api/partners'],
    retry: 1, // Retry once on failure
    retryDelay: 1000,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-12 sm:pt-14 md:pt-24">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--color-riara-red)] border-r-transparent mb-4"></div>
            <p className="text-[var(--color-text-secondary)]">Loading Partners...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const isForbidden = errorMessage.includes('403') || errorMessage.includes('Forbidden');
    
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-12 sm:pt-14 md:pt-24">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="mb-4 text-[var(--color-riara-red)]">
              <svg className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-2">
              {isForbidden ? 'Access Forbidden' : 'Unable to Load Content'}
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
              {isForbidden 
                ? 'Unable to access the partners data. This may be a server configuration issue. Please contact support if the problem persists.'
                : 'We\'re experiencing technical difficulties loading the Partners page. Please try refreshing the page.'}
            </p>
            {!isForbidden && (
              <RetryButton
                onClick={() => window.location.reload()}
                data-testid="button-reload"
              />
            )}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-12 sm:pt-14 md:pt-24">
        {/* Page Header */}
        <section className="bg-[var(--color-bg-secondary)] py-16 md:py-20">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--color-text-primary)] mb-4 md:mb-6">
                Distinguished Partners
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Collaborating with leading organizations worldwide to advance education, research, and innovation
              </p>
              <div className="bg-white p-6 md:p-8 rounded-lg border-l-4 border-[var(--color-riara-red)] text-left max-w-3xl mx-auto">
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Riara University is a training and research institution committed to developing knowledge, research and excellence in various areas of study including business Administration, International relations and Diplomacy, Law, Education, Multimedia Journalism, Computing Sciences and Education. RU is focused on producing a graduate that is well rounded, confident and equipped for self-development.
                </p>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  RU has strong commitment to excellence in teaching, academic integrity and learning and education of students in general. RU also recognizes the importance of research to expand and build on the areas of its academic interests and places a high value on collaborative activities between itself and other academic parties and industry.
                </p>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  And RU does not work alone in this endeavor, it has partnered with both Public and Private organizations to ensure excellent delivery of a world class learning and research environment. Some of the partners we have worked with and continue to work with are mentioned below.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <PartnersSection categories={partnerCategories} showHeader={false} />
      </main>
      <Footer />
    </div>
  );
}

