import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { Event } from "@shared/schema";
import { Container } from "@/components/Container";

interface EventsSectionProps {
  events: Event[];
  showHeader?: boolean;
  ctaLabel?: string;
  ctaTestId?: string;
}

export function EventsSection({ events, showHeader = true, ctaLabel = "More events", ctaTestId = "button-more-events" }: EventsSectionProps) {
  return (
    <section className="py-20 bg-white">
      <Container>
        {showHeader && (
          <header className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black leading-snug text-[var(--color-text-primary)] mb-4" data-testid="text-events-heading">Upcoming Events</h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl font-semibold text-[var(--color-text-secondary)]" data-testid="text-events-description">
              Discover lectures, performances, exhibitions, and community gatherings at Riara.
            </p>
          </header>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {events.slice(0, 4).map((event) => (
            <div key={event.id} className="cursor-pointer" data-testid={`card-event-${event.id}`}>
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 relative">
                <div className="absolute top-4 left-4">
                  <div className="bg-primary text-primary-foreground px-3 py-2 text-center">
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
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold border-[var(--color-stanford-red)] bg-[var(--color-stanford-red)] text-white hover:bg-[var(--color-stanford-red-dark)] transition-all duration-200 shadow-sm hover:shadow-md"
            data-testid={ctaTestId}
          >
            {ctaLabel} <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
