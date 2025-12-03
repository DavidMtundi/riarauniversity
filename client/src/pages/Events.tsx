import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EventsSection } from "@/components/EventsSection";
import { Container } from "@/components/Container";
import { RetryButton } from "@/components/RetryButton";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Event } from "@shared/schema";
import { parse, format, isSameDay, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";

export default function Events() {
  const [, setLocation] = useLocation();
  const { data: events = [], isLoading: eventsLoading, error: eventsError } = useQuery<Event[]>({
    queryKey: ['/api/events']
  });

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  // Parse event dates and create Date objects
  const eventsWithDates = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    
    return events.map(event => {
      try {
        // Try multiple date formats
        const formats = [
          "MMM d",      // "Oct 24"
          "MMMM d",     // "October 24"
          "MMM dd",     // "Oct 24" (with leading zero)
          "MMMM dd",    // "October 24" (with leading zero)
          "d MMM",      // "24 Oct"
          "dd MMM",     // "24 Oct" (with leading zero)
        ];
        
        let parsedDate: Date | null = null;
        for (const formatStr of formats) {
          try {
            const testDate = parse(event.date.trim(), formatStr, new Date(currentYear, currentMonth, 1));
            if (!isNaN(testDate.getTime())) {
              parsedDate = testDate;
              break;
            }
          } catch {
            continue;
          }
        }
        
        // If still not parsed, try to extract month and day manually
        if (!parsedDate) {
          const monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
          const dateLower = event.date.toLowerCase().trim();
          for (let i = 0; i < monthNames.length; i++) {
            if (dateLower.includes(monthNames[i])) {
              const dayMatch = event.date.match(/\d+/);
              if (dayMatch) {
                const day = parseInt(dayMatch[0], 10);
                parsedDate = new Date(currentYear, i, day);
                break;
              }
            }
          }
        }
        
        return { ...event, parsedDate };
      } catch {
        return { ...event, parsedDate: null };
      }
    }).filter(event => event.parsedDate !== null) as (Event & { parsedDate: Date })[];
  }, [events]);

  // Get dates that have events for calendar highlighting
  const datesWithEvents = useMemo(() => {
    const uniqueDates = new Set<string>();
    eventsWithDates.forEach(event => {
      const dateKey = format(event.parsedDate, "yyyy-MM-dd");
      uniqueDates.add(dateKey);
    });
    return Array.from(uniqueDates).map(dateStr => {
      const [year, month, day] = dateStr.split("-").map(Number);
      return new Date(year, month - 1, day);
    });
  }, [eventsWithDates]);

  // Filter events by selected date
  const filteredEvents = useMemo(() => {
    if (!selectedDate) return eventsWithDates;
    return eventsWithDates.filter(event => 
      isSameDay(event.parsedDate, selectedDate)
    );
  }, [eventsWithDates, selectedDate]);

  // Get month range for calendar - show current month or month with earliest event
  const calendarMonth = useMemo(() => {
    if (eventsWithDates.length === 0) return new Date();
    const dates = eventsWithDates.map(e => e.parsedDate);
    const minDate = new Date(Math.min(...dates.map(d => d.getTime())));
    // If earliest event is in the past, show current month instead
    const now = new Date();
    if (minDate < now && minDate.getMonth() !== now.getMonth()) {
      return now;
    }
    return minDate;
  }, [eventsWithDates]);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const clearFilter = () => {
    setSelectedDate(undefined);
  };

  if (eventsLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-24">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--color-stanford-red)] border-r-transparent mb-4"></div>
            <p className="text-[var(--color-text-secondary)]">Loading Events...</p>
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
        <main className="flex-1 flex items-center justify-center pt-24">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="mb-4 text-[var(--color-stanford-red)]">
              <svg className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-2">Unable to Load Content</h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
              We're experiencing technical difficulties loading the Events page. Please try refreshing the page.
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <section className="bg-[var(--color-bg-secondary)] py-16 md:py-20">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--color-text-primary)] mb-4 md:mb-6">
                Upcoming Events
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                Discover what's happening at Riara
              </p>
            </div>
          </Container>
        </section>

        {/* Calendar and Events Section */}
        <section className="py-12 md:py-16 bg-white">
          <Container>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Calendar View */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-serif">Calendar</CardTitle>
                      {selectedDate && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={clearFilter}
                          className="h-8 w-8 p-0"
                          aria-label="Clear date filter"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <CardDescription>
                      Click on a date to filter events
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={handleDateSelect}
                      month={calendarMonth}
                      modifiers={{
                        hasEvents: datesWithEvents
                      }}
                      modifiersClassNames={{
                        hasEvents: "bg-[var(--color-stanford-red)]/20 text-[var(--color-stanford-red)] font-semibold hover:bg-[var(--color-stanford-red)]/30 rounded-md"
                      }}
                      className="rounded-md border-0"
                    />
                    {selectedDate && (
                      <div className="mt-4 p-3 bg-[var(--color-bg-secondary)] rounded-lg">
                        <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                          Showing events for {format(selectedDate, "MMMM d, yyyy")}
                        </p>
                        <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                          {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Events List */}
              <div className="lg:col-span-2">
                {filteredEvents.length === 0 ? (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <p className="text-[var(--color-text-secondary)]">
                        {selectedDate 
                          ? `No events found for ${format(selectedDate, "MMMM d, yyyy")}`
                          : "No events available"}
                      </p>
                      {selectedDate && (
                        <Button
                          variant="outline"
                          onClick={clearFilter}
                          className="mt-4"
                        >
                          Clear filter
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ) : (
                  <div className="space-y-6">
                    {filteredEvents.map((event) => (
                      <Card 
                        key={event.id} 
                        className="hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => setLocation(`/events/${event.id}`)}
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-shrink-0">
                              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                  <p className="text-xs font-semibold uppercase text-[var(--color-stanford-red)]">
                                    {format(event.parsedDate, "MMM")}
                                  </p>
                                  <p className="text-2xl font-bold text-[var(--color-text-primary)]">
                                    {format(event.parsedDate, "d")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between gap-4 mb-2">
                                <Badge variant="secondary" className="mb-2">
                                  {event.type}
                                </Badge>
                              </div>
                              <h3 className="text-xl font-serif font-semibold mb-2 text-[var(--color-text-primary)]">
                                {event.title}
                              </h3>
                              {event.time && (
                                <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                                  <Clock className="h-4 w-4" />
                                  <span>{event.time}</span>
                                </div>
                              )}
                              <div className="mt-4 text-sm font-semibold text-[var(--color-stanford-red)] hover:text-[var(--color-stanford-red-dark)] transition-colors">
                                View details →
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
