import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { Event } from "@shared/schema";

interface EventsSectionProps {
  events: Event[];
  showHeader?: boolean;
}

export function EventsSection({ events, showHeader = true }: EventsSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        {showHeader && (
          <header className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-4" data-testid="text-events-heading">Upcoming Events</h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)]" data-testid="text-events-description">
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
          <Button variant="outline" size="lg" data-testid="button-more-events">
            More events <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
