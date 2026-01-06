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

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]" data-testid="card-admission-explore">
            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-[var(--color-text-primary)]" data-testid="text-admission-explore-title">
              Explore the possibilities of a Riara education
            </h3>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed" data-testid="text-admission-explore-description">
              We look for distinctive students who exhibit an abundance of energy and curiosity in their classes, activities, projects, research, and lives.
            </p>
            <Button 
              variant="outline"
              className="border-[var(--color-riara-red)] text-[var(--color-riara-red)] hover:bg-[var(--color-riara-red)] hover:text-white"
              data-testid="button-admission-explore"
              asChild
            >
              <a href="/admission">
                Explore admission <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]" data-testid="card-admission-financial">
            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-[var(--color-text-primary)]" data-testid="text-admission-financial-title">
              Riara meets the full financial need of every admitted undergrad
            </h3>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed" data-testid="text-admission-financial-description">
              More than two-thirds of undergrads receive some form of financial assistance. Generally, tuition is covered for families with incomes below $150,000.
            </p>
            <Button 
              variant="outline"
              className="border-[var(--color-riara-red)] text-[var(--color-riara-red)] hover:bg-[var(--color-riara-red)] hover:text-white"
              data-testid="button-admission-financial"
              asChild
            >
              <a href="/admission">
                Learn about financial aid <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div> */}
        </div>
      </Container>
    </section>
  );
}
