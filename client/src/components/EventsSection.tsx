import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { Event } from "@shared/schema";

interface EventsSectionProps {
  events: Event[];
}

export function EventsSection({ events }: EventsSectionProps) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4" data-testid="text-events-heading">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground" data-testid="text-events-description">
            Discover lectures, performances, exhibitions, and community gatherings at Stanford.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {events.slice(0, 4).map((event) => (
            <Card key={event.id} className="overflow-hidden hover-elevate cursor-pointer" data-testid={`card-event-${event.id}`}>
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 relative">
                <div className="absolute top-4 left-4">
                  <div className="bg-primary text-primary-foreground px-3 py-2 rounded-md text-center">
                    <p className="text-xs font-semibold uppercase" data-testid={`text-event-date-${event.id}`}>{event.date}</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
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
              </CardContent>
            </Card>
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
