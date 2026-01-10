import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/Container";

interface RegistrySectionProps {
  showHeader?: boolean;
}

export function RegistrySection({ showHeader = true }: RegistrySectionProps) {
  return (
    <section id="registry" className="py-14 sm:py-16 md:py-24 bg-white">
      <Container>
        {showHeader && (
          <header className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-3" data-testid="text-registry-heading">
              Registry
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto" data-testid="text-registry-subheading">
              Your academic guidebook from enrollment to graduation and beyond
            </p>
          </header>
        )}

        {/* Welcome Message with Image */}
        <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg mb-8 md:mb-12 overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start lg:items-center">
            {/* Registry Image */}
            <div className="flex-shrink-0 w-full lg:w-80 xl:w-96">
              <div className="relative group">
                <div className="absolute inset-0 bg-[var(--color-riara-red)]/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img 
                  src="https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg"
                  alt="Riara University Registry Department"
                  className="relative w-full aspect-[4/3] rounded-xl object-cover shadow-2xl ring-4 ring-white/50 group-hover:ring-[var(--color-riara-red)]/30 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>

            {/* Welcome Message Content */}
            <div className="flex-1 flex flex-col">
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-3" data-testid="text-welcome-heading">
                  Welcome Message from Deputy Registrar, Academics
                </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    Welcome to the Registrar's corner here at Riara University. I'm excited to connect with all of you—our incredible students, esteemed faculty, devoted alumni, and those peeking in to see what makes our university tick.
                  </p>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    For those already part of our tight-knit community, rest assured we're here to back you up. Need help with enrollment, transcripts, or navigating the academic terrain? Consider us your go-to crew. From enrollment to graduation and beyond, our services encompass a wide range of vital resources designed to facilitate your path to success.
                  </p>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    To our potential future students, take a stroll through our website. Dive into our course schedules, wrap your head around registration tricks, and mark those important academic dates. We've got your back as you envision your future here.
                  </p>
              </div>
            </div>
          </div>
        </div>

        {/* Three Key Areas */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {/* Academic Integrity Policy */}
          <div className="group bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid="card-academic-integrity">
            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-[var(--color-text-primary)]" data-testid="text-academic-integrity-title">
              Academic Integrity Policy
            </h3>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed" data-testid="text-academic-integrity-description">
              Upholding the highest standards of academic honesty and ethical conduct. Learn about our policies, procedures, and commitment to maintaining academic integrity across all programs.
            </p>
            <Button
              variant="outline"
              className="border-[var(--color-riara-red)] text-[var(--color-riara-red)] hover:bg-[var(--color-riara-red)] hover:text-white transition-all duration-200"
              data-testid="button-academic-integrity-link"
              asChild
            >
              <a href="https://registry.ru.ac.ke/exams/academic-integrity-policy" target="_blank" rel="noopener noreferrer">
                Learn more <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Commencement */}
          <div className="group bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid="card-commencement">
            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-[var(--color-text-primary)]" data-testid="text-commencement-title">
              Commencement
            </h3>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed" data-testid="text-commencement-description">
              Celebrate your academic achievements. Access commencement applications, graduation audit forms, commencement policies, and booklets to guide you through the graduation process.
            </p>
            <Button
              variant="outline"
              className="border-[var(--color-riara-red)] text-[var(--color-riara-red)] hover:bg-[var(--color-riara-red)] hover:text-white transition-all duration-200"
              data-testid="button-commencement-link"
              asChild
            >
              <a href="https://registry.ru.ac.ke/commencement" target="_blank" rel="noopener noreferrer">
                Learn more <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Registry Services Overview */}
          <div className="group bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-testid="card-registry-services">
            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-[var(--color-text-primary)]" data-testid="text-registry-services-title">
              Registry Services
            </h3>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed" data-testid="text-registry-services-description">
              Comprehensive academic support services including admission, exams, forms, policies, and procedures. Access all resources to navigate your academic journey successfully.
            </p>
            <Button
              variant="outline"
              className="border-[var(--color-riara-red)] text-[var(--color-riara-red)] hover:bg-[var(--color-riara-red)] hover:text-white transition-all duration-200"
              data-testid="button-registry-services-link"
              asChild
            >
              <a href="https://registry.ru.ac.ke/" target="_blank" rel="noopener noreferrer">
                Visit Registry <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Main CTA to Registry Site */}
        <div className="text-center bg-gradient-to-br from-[var(--color-riara-red)]/10 to-[var(--color-riara-red)]/5 p-8 md:p-10 rounded-lg border border-[var(--color-riara-red)]/20">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-[var(--color-text-primary)]" data-testid="text-registry-cta-heading">
            Explore All Registry Resources
          </h3>
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-6 max-w-2xl mx-auto" data-testid="text-registry-cta-description">
            Access admission requirements, academic calendars, forms, policies, and more. Everything you need for your academic journey is available on the Registry website.
          </p>
          <Button
            variant="outline"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold border-[var(--color-riara-red)] bg-[var(--color-riara-red)] !text-white hover:bg-[var(--color-riara-red-dark)] transition-all duration-200 shadow-sm hover:shadow-md"
            data-testid="button-registry-main-link"
            asChild
          >
            <a href="https://registry.ru.ac.ke/" target="_blank" rel="noopener noreferrer" className="!text-white">
              <span className="!text-white">Visit Registry Portal</span>
              <ExternalLink className="h-4 w-4 !text-white" />
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
