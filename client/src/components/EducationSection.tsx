import { Card, CardContent } from "@/components/ui/card";
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
    <section id="academics" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {paths.map((path, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Card key={path.id} className="overflow-hidden hover-elevate" data-testid={`card-education-${path.id}`}>
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/10 relative flex items-center justify-center">
                  <Icon className="h-24 w-24 text-primary/30" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-semibold mb-3" data-testid={`text-education-title-${path.id}`}>{path.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`text-education-description-${path.id}`}>
                    {path.description}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto font-semibold hover:bg-transparent" data-testid={`button-education-link-${path.id}`}>
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-card border rounded-lg p-8">
          <h3 className="text-2xl font-serif font-semibold mb-6" data-testid="text-schools-heading">Seven schools in which to pursue your passions</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {schools.map((school) => (
              <a
                key={school.id}
                href={school.url}
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
