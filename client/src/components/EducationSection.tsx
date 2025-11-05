import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Lightbulb, ArrowRight } from "lucide-react";
import type { EducationPath, School } from "@shared/schema";

interface EducationSectionProps {
  paths: EducationPath[];
  schools: School[];
}

export function EducationSection({ paths, schools }: EducationSectionProps) {
  const icons = [GraduationCap, BookOpen, Lightbulb];

  return (
    <section id="academics" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
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
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold mb-2 sm:mb-3" data-testid={`text-education-title-${path.id}`}>{path.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed" data-testid={`text-education-description-${path.id}`}>
                    {path.description}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto font-semibold hover:bg-transparent text-sm sm:text-base" data-testid={`button-education-link-${path.id}`}>
                    Learn more <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-serif font-semibold mb-6" data-testid="text-schools-heading">Six schools in which to pursue your passions</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {schools.map((school) => (
              <a
                key={school.id}
                href={school.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
                data-testid={`link-school-${school.id}`}
              >
                {school.name}
              </a>
            ))}
          </div>
          <Button variant="ghost" className="p-0 h-auto font-semibold hover:bg-transparent" data-testid="button-more-academics">
            More about academics <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
