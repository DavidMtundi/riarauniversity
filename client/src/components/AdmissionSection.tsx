import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Container } from "@/components/Container";

interface AdmissionSectionProps {
  showHeader?: boolean;
}

export function AdmissionSection({ showHeader = true }: AdmissionSectionProps) {
  return (
    <section id="admission" className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
      <Container className={showHeader ? undefined : "px-2 sm:px-2 md:px-2 lg:px-2 xl:px-2 2xl:px-2"}>
        {showHeader && (
          <header className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-4" data-testid="text-admission-heading">
              Admission
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto mb-8" data-testid="text-admission-subheading">
              Join a community of scholars, innovators, and leaders shaping the future
            </p>
            <a
              href="/admission/apply"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold bg-[var(--color-riara-red)] !text-white rounded-lg hover:bg-[var(--color-riara-red-dark)] transition-all duration-200 shadow-md hover:shadow-lg"
              data-testid="button-apply-admission-section"
            >
              <span className="!text-white">Apply for Admission</span>
            </a>
          </header>
        )}

        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
          {/* Background Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <img 
              src="https://pub-9dae0f05d1fc4e96997fa47a670a3841.r2.dev/PARASOL%20GARDEN/VKCL8999.jpg" 
              alt="Students in the garden at Riara University" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 md:bg-gradient-to-r md:from-black/70 md:via-black/50 md:to-transparent"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-riara-red)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-riara-red)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          </div>

          {/* Floating Content Card */}
          <div className="absolute inset-0 flex items-center p-6 md:p-12 lg:p-16">
            <div className="max-w-2xl">
              <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-xl shadow-2xl border-l-4 border-[var(--color-riara-red)] transform transition-all duration-300 hover:bg-white hover:shadow-3xl" data-testid="card-admission-explore">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-4 md:mb-6 text-[var(--color-text-primary)]" data-testid="text-admission-explore-title">
                  Explore the possibilities of a Riara education
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-[var(--color-text-secondary)] mb-6 md:mb-8 leading-relaxed" data-testid="text-admission-explore-description">
                  We look for distinctive students who exhibit an abundance of energy and curiosity in their classes, activities, projects, research, and lives.
                </p>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-[var(--color-riara-red)] text-[var(--color-riara-red)] hover:bg-[var(--color-riara-red)] hover:text-white text-base md:text-lg px-6 md:px-8 py-3 md:py-4 transition-all duration-200 shadow-md hover:shadow-lg"
                  data-testid="button-admission-explore"
                  asChild
                >
                  <a href="/admission">
                    Explore admission <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
