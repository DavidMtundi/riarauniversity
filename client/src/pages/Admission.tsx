import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdmissionSection } from "@/components/AdmissionSection";
import { AdmissionActions } from "@/components/AdmissionActions";
import { Container } from "@/components/Container";

export default function Admission() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <section className="bg-[var(--color-bg-secondary)] py-16 md:py-20">
          <Container className="px-2 sm:px-2 md:px-2 lg:px-2 xl:px-2 2xl:px-2">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--color-text-primary)] mb-4 md:mb-6">
                Admission
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8">
                Offering extraordinary freedom to explore, to collaborate, and to challenge yourself
              </p>
              <a
                href="https://admissions.ru.ac.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold bg-[var(--color-stanford-red)] text-white rounded-lg hover:bg-[var(--color-stanford-red-dark)] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                data-testid="button-apply-admission-page"
              >
                Apply Online
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </Container>
        </section>

        {/* Admission Actions Section */}
        <section className="py-12 md:py-16 bg-white">
          <Container className="px-2 sm:px-2 md:px-2 lg:px-2 xl:px-2 2xl:px-2">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
                {/* Admission Actions Sidebar */}
                <div className="lg:col-span-1 order-2 lg:order-1">
                  <AdmissionActions />
                </div>
                
                {/* Main Content */}
                <div className="lg:col-span-2 order-1 lg:order-2">
                  <AdmissionSection showHeader={false} />
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
