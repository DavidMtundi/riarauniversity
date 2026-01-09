import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Lightbulb, ArrowRight } from "lucide-react";
import type { EducationPath, School } from "@shared/schema";
import { Container } from "@/components/Container";

interface EducationSectionProps {
  paths: EducationPath[];
  schools: School[];
  showHeader?: boolean;
  showSchools?: boolean;
}

export function EducationSection({ paths, schools, showHeader = true, showSchools = true }: EducationSectionProps) {
  const icons = [GraduationCap, BookOpen, Lightbulb];

  // Sort paths to ensure correct display order: Graduate, Undergraduate, Professional Development, Diploma, Certificate
  const sortedPaths = [...paths].sort((a, b) => {
    const order = ['graduate', 'undergraduate', 'lifelong', 'diploma', 'certificates'];
    const getIndex = (path: typeof paths[0]) => {
      // First try exact id match
      let index = order.indexOf(path.id);
      if (index !== -1) return index;
      
      // Then try title matching
      const titleLower = path.title.toLowerCase();
      if (titleLower.includes('graduate')) return 0;
      if (titleLower.includes('undergraduate')) return 1;
      if (titleLower.includes('professional') || titleLower.includes('lifelong')) return 2;
      if (titleLower.includes('diploma')) return 3;
      if (titleLower.includes('certificate')) return 4;
      
      // Not found, put at end
      return 999;
    };
    
    return getIndex(a) - getIndex(b);
  });

  const content = (
    <>
        {showHeader && (
          <header className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black leading-snug text-[var(--color-text-primary)]" data-testid="text-education-heading">
              Programs
            </h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl font-semibold text-[var(--color-text-secondary)]" data-testid="text-education-subheading">
              Discover your path to academic excellence and intellectual growth
            </p>
          </header>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {sortedPaths.map((path, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={path.id} data-testid={`card-education-${path.id}`}>
                <div className="aspect-[4/3] relative flex items-center justify-center overflow-hidden rounded-t-lg">
                  {path.imageUrl ? (
                    <>
                      <img 
                        src={path.imageUrl} 
                        alt={path.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/10"></div>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10"></div>
                      <div className="relative z-10 flex flex-col items-center">
                        <Icon className="h-24 w-24 text-white/80 mb-2" />
                        <p className="text-xs font-medium text-white/60">Image Placeholder</p>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-4 sm:p-6 bg-white">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold mb-2 sm:mb-3 text-[var(--color-text-primary)]" data-testid={`text-education-title-${path.id}`}>{path.title}</h3>
                  <p className="text-sm sm:text-base text-[var(--color-text-secondary)] mb-3 sm:mb-4 leading-relaxed" data-testid={`text-education-description-${path.id}`}>
                    {path.description}
                  </p>
                  <Button
                    variant="outline"
                    className="group inline-flex items-center gap-2 rounded-full border-[var(--color-riara-red)] px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-semibold text-[var(--color-riara-red)] transition-all duration-200 hover:bg-[var(--color-riara-red)] hover:text-white shadow-sm hover:shadow-md"
                    data-testid={`button-education-link-${path.id}`}
                    asChild
                  >
                    <a href={path.link && path.link !== '#' ? path.link : `/academics#${path.id}`}>
                      Learn more <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {showSchools && (
          <div className="mt-12 md:mt-16 p-6 md:p-8 bg-gradient-to-br from-[var(--color-bg-secondary)] to-white rounded-lg border border-[var(--color-border-secondary)] shadow-sm">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8 md:mb-10 text-center text-[var(--color-text-primary)]" data-testid="text-schools-heading">
              Six schools in which to pursue your passions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
              {schools.map((school) => {
                const url = school?.url && typeof school.url === 'string' && school.url.trim()
                  ? school.url.trim()
                  : '#';
                const validUrl = url && url !== '#' && (url.startsWith('http://') || url.startsWith('https://'))
                  ? url
                  : url && url !== '#'
                    ? `https://${url.replace(/^\/+/, '')}`
                    : '#';
                
                return (
                  <a
                    key={school.id}
                    href={validUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 md:p-5 bg-white rounded-lg border-2 border-[var(--color-border-secondary)] hover:border-[var(--color-riara-red)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    data-testid={`link-school-${school.id}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm md:text-base font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-riara-red)] transition-colors">
                        {school.name}
                      </span>
                      <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-riara-red)] group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="text-center">
              <Button
                variant="outline"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold border-[var(--color-riara-red)] bg-[var(--color-riara-red)] text-white hover:bg-[var(--color-riara-red-dark)] transition-all duration-200 shadow-sm hover:shadow-md"
                data-testid="button-more-academics"
                asChild
              >
                <a href="/academics" className="!text-white">
                  More about programs <ArrowRight className="h-4 w-4 !text-white" />
                </a>
              </Button>
            </div>
          </div>
        )}
    </>
  );

  // Wrap in section only if showHeader is true (for standalone use)
  if (showHeader) {
    return (
      <section id="academics" className="py-12 sm:py-16 md:py-20 bg-white">
        <Container>
          {content}
        </Container>
      </section>
    );
  }

  // Return content without section/container wrapper when embedded in another page
  // (parent page will provide Container)
  return <>{content}</>;
}
