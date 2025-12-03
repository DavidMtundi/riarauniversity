import { Button } from "@/components/ui/button";
import { GraduationCap, DollarSign, ArrowRight, CheckCircle } from "lucide-react";
import { Container } from "@/components/Container";

interface AdmissionSectionProps {
  showHeader?: boolean;
}

export function AdmissionSection({ showHeader = true }: AdmissionSectionProps) {
  return (
    <section id="admission" className="py-20 bg-gray-50">
      <Container className={showHeader ? undefined : "px-2 sm:px-2 md:px-2 lg:px-2 xl:px-2 2xl:px-2"}>
        {showHeader && (
          <header className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[var(--color-text-primary)]" data-testid="text-admission-heading">
              Admission
            </h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl font-semibold text-[var(--color-text-secondary)] mb-8" data-testid="text-admission-subheading">
              Join a community of scholars, innovators, and leaders shaping the future
            </p>
            <a
              href="/admission/apply"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold bg-[var(--color-stanford-red)] text-white rounded-lg hover:bg-[var(--color-stanford-red-dark)] transition-all duration-200 shadow-md hover:shadow-lg"
              data-testid="button-apply-admission-section"
            >
              <CheckCircle className="h-5 w-5" />
              Apply for Admission
            </a>
          </header>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          <div data-testid="card-admission-explore">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 relative flex items-center justify-center">
              <GraduationCap className="h-24 w-24 text-primary/40" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif font-semibold mb-4" data-testid="text-admission-explore-title">
                Explore the possibilities of a Riara education
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed" data-testid="text-admission-explore-description">
                We look for distinctive students who exhibit an abundance of energy and curiosity in their classes, activities, projects, research, and lives.
              </p>
              <Button data-testid="button-admission-explore">
                Explore admission <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div data-testid="card-admission-financial">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 relative flex items-center justify-center">
              <DollarSign className="h-24 w-24 text-primary/40" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif font-semibold mb-4" data-testid="text-admission-financial-title">
                Riara meets the full financial need of every admitted undergrad
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed" data-testid="text-admission-financial-description">
                More than two-thirds of undergrads receive some form of financial assistance. Generally, tuition is covered for families with incomes below $150,000.
              </p>
              <Button data-testid="button-admission-financial">
                Learn about financial aid <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
