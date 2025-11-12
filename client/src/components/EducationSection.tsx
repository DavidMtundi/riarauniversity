import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Lightbulb, ArrowRight } from "lucide-react";
import type { EducationPath, School } from "@shared/schema";

interface EducationSectionProps {
  paths: EducationPath[];
  schools: School[];
  showHeader?: boolean;
}

export function EducationSection({ paths, schools, showHeader = true }: EducationSectionProps) {
  const icons = [GraduationCap, BookOpen, Lightbulb];

  return (
    <section id="academics" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        {showHeader && (
          <header className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[var(--color-text-primary)]" data-testid="text-education-heading">
              Academics
            </h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)]" data-testid="text-education-subheading">
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
                  <Button variant="ghost" className="p-0 h-auto font-semibold hover:bg-transparent text-[var(--color-stanford-red)] hover:text-[var(--color-stanford-red-dark)] text-sm sm:text-base transition-colors" data-testid={`button-education-link-${path.id}`}>
                    Learn more <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 p-6 md:p-8 bg-[var(--color-bg-secondary)] rounded-lg">
          <h3 className="text-xl md:text-2xl font-serif font-semibold mb-6 text-center md:text-left" data-testid="text-schools-heading">
            Six schools in which to pursue your passions
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
            {schools.map((school) => {
              // Ensure URL is valid and absolute
              const url = school?.url && typeof school.url === 'string' && school.url.trim() 
                ? school.url.trim()
                : '#';
              
              // Ensure URL starts with http/https
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
                  className="text-[var(--color-stanford-red)] hover:text-[var(--color-stanford-red-dark)] hover:underline font-semibold transition-colors text-sm md:text-base"
                  data-testid={`link-school-${school.id}`}
                >
                  {school.name}
                </a>
              );
            })}
          </div>
          <div className="text-center md:text-left">
            <Button variant="ghost" className="p-0 h-auto font-semibold hover:bg-transparent text-[var(--color-stanford-red)] hover:text-[var(--color-stanford-red-dark)]" data-testid="button-more-academics">
              More about academics <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
