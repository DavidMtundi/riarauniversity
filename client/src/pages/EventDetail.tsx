import { useQuery } from "@tanstack/react-query";
import { useLocation, useRoute } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { RetryButton } from "@/components/RetryButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, MapPin, ExternalLink } from "lucide-react";
import type { Event } from "@shared/schema";
import { parse, format } from "date-fns";

export default function EventDetail() {
  const [, setLocation] = useLocation();
  const [, params] = useRoute("/events/:id");
  const eventId = params?.id;
  const { data: events = [], isLoading: eventsLoading, error: eventsError } = useQuery<Event[]>({
    queryKey: ['/api/events']
  });

  // Find the event by ID
  const event = eventId ? events.find(e => e.id === eventId) : undefined;

  // Parse event date
  const parsedDate = event ? (() => {
    try {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      const formats = ["MMM d", "MMMM d", "MMM dd", "MMMM dd", "d MMM", "dd MMM"];
      
      for (const formatStr of formats) {
        try {
          const testDate = parse(event.date.trim(), formatStr, new Date(currentYear, currentMonth, 1));
          if (!isNaN(testDate.getTime())) {
            return testDate;
          }
        } catch {
          continue;
        }
      }
      return null;
    } catch {
      return null;
    }
  })() : null;

  if (eventsLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-12 sm:pt-14 md:pt-24">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--color-riara-red)] border-r-transparent mb-4"></div>
            <p className="text-[var(--color-text-secondary)]">Loading Event...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (eventsError) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-12 sm:pt-14 md:pt-24">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="mb-4 text-[var(--color-riara-red)]">
              <svg className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-2">Unable to Load Event</h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
              We're experiencing technical difficulties loading this event. Please try again.
            </p>
            <RetryButton
              onClick={() => window.location.reload()}
              data-testid="button-reload"
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-12 sm:pt-14 md:pt-24">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="mb-4 text-[var(--color-riara-red)]">
              <svg className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-2">Event Not Found</h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
              The event you're looking for doesn't exist or has been removed.
            </p>
            <Button
              onClick={() => setLocation("/events")}
              className="bg-[var(--color-riara-red)] text-white hover:bg-[var(--color-riara-red-dark)]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-12 sm:pt-14 md:pt-24">
        {/* Back Button */}
        <section className="bg-[var(--color-bg-secondary)] py-4 border-b">
          <Container>
            <Button
              variant="ghost"
              onClick={() => setLocation("/events")}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Button>
          </Container>
        </section>

        {/* Event Header */}
        <section className="bg-gradient-to-br from-[var(--color-bg-secondary)] to-white py-16 md:py-20">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Badge variant="secondary" className="text-base px-4 py-2">
                  {event.type}
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--color-text-primary)] mb-6 leading-tight">
                {event.title}
              </h1>
              
              <div className="flex flex-wrap gap-6 text-[var(--color-text-secondary)]">
                {parsedDate && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[var(--color-riara-red)]" />
                    <span className="font-semibold">
                      {format(parsedDate, "EEEE, MMMM d, yyyy")}
                    </span>
                  </div>
                )}
                {event.time && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[var(--color-riara-red)]" />
                    <span className="font-semibold">{event.time}</span>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* Event Content */}
        <section className="py-16 md:py-20">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="md:col-span-2">
                  {event.imageUrl && event.imageUrl !== "" ? (
                    <div className="mb-8 rounded-lg overflow-hidden">
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ) : (
                    <div className="mb-8 aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                      <Calendar className="h-24 w-24 text-primary/40" />
                    </div>
                  )}

                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                      About This Event
                    </h2>
                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                      Join us for this exciting {event.type.toLowerCase()} at Riara University. 
                      {parsedDate && (
                        <> This event takes place on {format(parsedDate, "MMMM d, yyyy")}.</>
                      )}
                      {event.time && (
                        <> The event begins at {event.time}.</>
                      )}
                    </p>
                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                      We look forward to seeing you there! For more information or questions, 
                      please contact the event organizers or visit our events page.
                    </p>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="md:col-span-1">
                  <Card className="sticky top-24">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                        Event Details
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-[var(--color-text-secondary)] mb-1">
                            Event Type
                          </p>
                          <p className="text-base text-[var(--color-text-primary)]">
                            {event.type}
                          </p>
                        </div>

                        {parsedDate && (
                          <div>
                            <p className="text-sm font-semibold text-[var(--color-text-secondary)] mb-1">
                              Date
                            </p>
                            <p className="text-base text-[var(--color-text-primary)]">
                              {format(parsedDate, "EEEE, MMMM d, yyyy")}
                            </p>
                          </div>
                        )}

                        {event.time && (
                          <div>
                            <p className="text-sm font-semibold text-[var(--color-text-secondary)] mb-1">
                              Time
                            </p>
                            <p className="text-base text-[var(--color-text-primary)]">
                              {event.time}
                            </p>
                          </div>
                        )}

                        {event.link && event.link !== "#" && (
                          <div className="pt-4 border-t">
                            <Button
                              asChild
                              className="w-full bg-[var(--color-riara-red)] text-white hover:bg-[var(--color-riara-red-dark)]"
                            >
                              <a href={event.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Learn More
                              </a>
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

