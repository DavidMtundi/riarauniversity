import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdmissionSection } from "@/components/AdmissionSection";

export default function Admission() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <section className="bg-[var(--color-bg-secondary)] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--color-text-primary)] mb-4 md:mb-6">
                Admission
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                Offering extraordinary freedom to explore, to collaborate, and to challenge yourself
              </p>
            </div>
          </div>
        </section>

        <AdmissionSection showHeader={false} />
      </main>
      <Footer />
    </div>
  );
}
