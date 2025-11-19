import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Lightbulb, ArrowRight } from "lucide-react";
import type { EducationPath, School } from "@shared/schema";
import { Container } from "@/components/Container";

interface EducationSectionProps {
  paths: EducationPath[];
  schools: School[];
  showHeader?: boolean;
}

export function EducationSection({ paths, schools, showHeader = true }: EducationSectionProps) {
  const icons = [GraduationCap, BookOpen, Lightbulb];

  return (
    <section id="academics" className="py-12 sm:py-16 md:py-20 bg-white">
      <Container>
        {showHeader && (
          <header className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black leading-snug text-[var(--color-text-primary)]" data-testid="text-education-heading">
              Academics
            </h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl font-semibold text-[var(--color-text-secondary)]" data-testid="text-education-subheading">
              Discover your path to academic excellence and intellectual growth
            </p>
          </header>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {paths.map((path, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={path.id} data-testid={`card-education-${path.id}`}>
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/10 relative flex items-center justify-center overflow-hidden">
                  <img 
                    src={path.imageUrl || `https://images.unsplash.com/photo-${1520000000000 + (index + 1) * 2000000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                    alt={path.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10"></div>
                  <Icon className="h-24 w-24 text-white/80 relative z-10" />
                </div>
                <div className="p-4 sm:p-6 bg-white">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold mb-2 sm:mb-3 text-[var(--color-text-primary)]" data-testid={`text-education-title-${path.id}`}>{path.title}</h3>
                  <p className="text-sm sm:text-base text-[var(--color-text-secondary)] mb-3 sm:mb-4 leading-relaxed" data-testid={`text-education-description-${path.id}`}>
                    {path.description}
                  </p>
                  <Button
                    variant="outline"
                    className="group inline-flex items-center gap-2 rounded-full border-[var(--color-stanford-red)] px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-semibold text-[var(--color-stanford-red)] transition-all duration-200 hover:bg-[var(--color-stanford-red)] hover:text-white shadow-sm hover:shadow-md"
                    data-testid={`button-education-link-${path.id}`}
                  >
                    Learn more <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 p-6 md:p-8 bg-[var(--color-bg-secondary)] rounded-lg">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-center" data-testid="text-schools-heading">
            Six schools in which to pursue your passions
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-center mb-6 md:mb-8 py-4 md:py-6">
            {schools.map((school, index) => {
              const url = school?.url && typeof school.url === 'string' && school.url.trim()
                ? school.url.trim()
                : '#';
              const validUrl = url && url !== '#' && (url.startsWith('http://') || url.startsWith('https://'))
                ? url
                : url && url !== '#'
                  ? `https://${url.replace(/^\/+/, '')}`
                  : '#';
              
              return (
                <div key={school.id} className="flex items-center gap-4 text-sm md:text-base font-semibold text-[var(--color-stanford-red)]">
                  <a
                    href={validUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--color-stanford-red-dark)] hover:underline transition-colors"
                    data-testid={`link-school-${school.id}`}
                  >
                    {school.name}
                  </a>
                  {index < schools.length - 1 && <span className="text-[var(--color-border-dark)]">|</span>}
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <Button
              variant="outline"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold border-[var(--color-stanford-red)] bg-[var(--color-stanford-red)] text-white hover:bg-[var(--color-stanford-red-dark)] transition-all duration-200 shadow-sm hover:shadow-md"
              data-testid="button-more-academics"
            >
              More about academics <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
