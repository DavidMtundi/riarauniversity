import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import type { Event } from "@shared/schema";
import { Container } from "@/components/Container";

interface EventsSectionProps {
  events: Event[];
  showHeader?: boolean;
  ctaLabel?: string;
  ctaTestId?: string;
  ctaHref?: string;
}

export function EventsSection({ events, showHeader = true, ctaLabel = "More events", ctaTestId = "button-more-events", ctaHref = "/events" }: EventsSectionProps) {
  const [, setLocation] = useLocation();
  
  return (
    <section className="py-14 sm:py-16 md:py-24 bg-white">
      <Container>
        {showHeader && (
          <header className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black leading-snug text-[var(--color-text-primary)] mb-4" data-testid="text-events-heading">Upcoming Events</h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl font-semibold text-[var(--color-text-secondary)]" data-testid="text-events-description">
              Discover lectures, performances, exhibitions, and community gatherings at Riara.
            </p>
          </header>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {events.slice(0, 4).map((event) => (
            <div 
              key={event.id} 
              className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden bg-white" 
              data-testid={`card-event-${event.id}`}
              onClick={() => setLocation(`/events/${event.id}`)}
            >
              <div className="aspect-square relative overflow-hidden">
                {event.imageUrl ? (
                  <>
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = parent.querySelector('.fallback-gradient');
                          if (fallback) {
                            (fallback as HTMLElement).style.display = 'flex';
                          }
                        }
                      }}
                    />
                    <div className="fallback-gradient absolute inset-0 bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-secondary)]/80 hidden"></div>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-secondary)]/80"></div>
                )}
                <div className="absolute top-4 left-4">
                  <div className="bg-[var(--color-riara-red)] text-white px-3 py-2 text-center rounded shadow-lg">
                    <p className="text-xs font-semibold uppercase" data-testid={`text-event-date-${event.id}`}>{event.date}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <Badge variant="secondary" className="mb-3" data-testid={`badge-event-type-${event.id}`}>{event.type}</Badge>
                <h3 className="text-lg font-semibold mb-3 line-clamp-2 leading-snug" data-testid={`text-event-title-${event.id}`}>
                  {event.title}
                </h3>
                {event.time && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid={`text-event-time-${event.id}`}>
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold border-[var(--color-riara-red)] bg-[var(--color-riara-red)] text-white hover:bg-[var(--color-riara-red-dark)] transition-all duration-200 shadow-sm hover:shadow-md"
            data-testid={ctaTestId}
            asChild
          >
            <a href={ctaHref} className="!text-white">
              {ctaLabel} <ArrowRight className="h-4 w-4 !text-white" />
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
