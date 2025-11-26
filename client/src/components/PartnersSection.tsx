import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Globe, Lightbulb, Network } from "lucide-react";
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
                  <div className="p-3 bg-[var(--color-stanford-red)]/10 rounded-lg">
                    <Icon className="h-6 w-6 text-[var(--color-stanford-red)]" />
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

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.partners.map((partner) => (
                    <div
                      key={partner.id}
                      className="p-6 border border-[var(--color-border-secondary)] rounded-lg hover:border-[var(--color-stanford-red)] hover:shadow-md transition-all duration-200"
                      data-testid={`partner-${partner.id}`}
                    >
                      <div className="mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-4">
                          <div className="text-center text-muted-foreground">
                            <svg className="w-8 h-8 mx-auto mb-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <p className="text-xs font-medium">Logo</p>
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2" data-testid={`text-partner-name-${partner.id}`}>
                          {partner.name}
                        </h4>
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed" data-testid={`text-partner-description-${partner.id}`}>
                          {partner.description}
                        </p>
                      </div>
                      {partner.website && partner.website !== "#" && (
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-[var(--color-stanford-red)] hover:text-[var(--color-stanford-red-dark)] transition-colors inline-flex items-center gap-1"
                          data-testid={`link-partner-website-${partner.id}`}
                        >
                          Visit website <ArrowRight className="h-3 w-3" />
                        </a>
                      )}
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
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold border-[var(--color-stanford-red)] bg-[var(--color-stanford-red)] text-white hover:bg-[var(--color-stanford-red-dark)] transition-all duration-200 shadow-sm hover:shadow-md"
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

