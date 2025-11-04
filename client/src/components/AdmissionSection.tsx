import { Button } from "@/components/ui/button";
import { GraduationCap, DollarSign, ArrowRight } from "lucide-react";

export function AdmissionSection() {
  return (
    <section id="admission" className="py-20 bg-gray-50">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
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
      </div>
    </section>
  );
}
