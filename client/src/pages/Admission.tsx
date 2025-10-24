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
        <section className="bg-muted/30 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Admission</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Offering extraordinary freedom to explore, to collaborate, and to challenge yourself
              </p>
            </div>
          </div>
        </section>

        <AdmissionSection />
      </main>
      <Footer />
    </div>
  );
}
