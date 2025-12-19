import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Globe, Lightbulb, Network, GraduationCap, Scale } from "lucide-react";
import { Container } from "@/components/Container";

export interface Partner {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  website: string;
}

export interface PartnerCategory {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  partners: Partner[];
}

interface PartnersSectionProps {
  categories: PartnerCategory[];
  showHeader?: boolean;
}

export function PartnersSection({ categories, showHeader = true }: PartnersSectionProps) {
  const categoryIcons: Record<string, React.ComponentType<any>> = {
    corporate: Building2,
    international: Globe,
    research: Lightbulb,
    networks: Network,
    training: GraduationCap,
    legal: Scale,
  };

  return (
    <section id="partners" className="py-20 bg-white">
      <Container>
        {showHeader && (
          <header className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black leading-snug text-[var(--color-text-primary)]" data-testid="text-partners-heading">
              Partners
            </h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl font-semibold text-[var(--color-text-secondary)]" data-testid="text-partners-subheading">
              Building strategic partnerships for innovation, research, and global impact
            </p>
          </header>
        )}

        <div className="space-y-16">
          {categories && categories.length > 0 ? (
            categories.map((category) => {
              const Icon = categoryIcons[category.id] || Building2;
              return (
                <div key={category.id} className="mb-16" data-testid={`category-${category.id}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-[var(--color-riara-red)]/10 rounded-lg">
                    <Icon className="h-6 w-6 text-[var(--color-riara-red)]" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-text-primary)]" data-testid={`text-category-title-${category.id}`}>
                      {category.title}
                    </h3>
                    <p className="text-base text-[var(--color-text-secondary)] mt-1" data-testid={`text-category-description-${category.id}`}>
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {category.partners.map((partner) => (
                    <div
                      key={partner.id}
                      className="p-4 border border-[var(--color-border-secondary)] rounded-lg hover:border-[var(--color-riara-red)] hover:shadow-md transition-all duration-200 flex flex-col items-center text-center"
                      data-testid={`partner-${partner.id}`}
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-white border border-[var(--color-border-secondary)] rounded-lg flex items-center justify-center mb-3 overflow-hidden">
                        {partner.logoUrl && partner.logoUrl !== "" ? (
                          <img 
                            src={partner.logoUrl} 
                            alt={`${partner.name} logo`}
                            className="w-full h-full object-contain p-2"
                            onError={(e) => {
                              // Fallback to placeholder if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `
                                  <div class="text-center text-muted-foreground w-full h-full flex items-center justify-center">
                                    <svg class="w-6 h-6 mx-auto opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                  </div>
                                `;
                              }
                            }}
                          />
                        ) : (
                          <div className="text-center text-muted-foreground w-full h-full flex items-center justify-center">
                            <svg className="w-6 h-6 mx-auto opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <h4 className="text-sm font-semibold text-[var(--color-text-primary)]" data-testid={`text-partner-name-${partner.id}`}>
                        {partner.name}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            );
            })
          ) : (
            <p className="text-center text-[var(--color-text-secondary)]">No categories available</p>
          )}
        </div>

        {showHeader && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold border-[var(--color-riara-red)] bg-[var(--color-riara-red)] text-white hover:bg-[var(--color-riara-red-dark)] transition-all duration-200 shadow-sm hover:shadow-md"
              data-testid="button-more-partners"
              asChild
            >
              <a href="/partners" className="!text-white">
                View all partners <ArrowRight className="h-4 w-4 !text-white" />
              </a>
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}

