import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useLocation } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EventsSection } from "@/components/EventsSection";
import { Container } from "@/components/Container";
import { RetryButton } from "@/components/RetryButton";
import { Clock } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { Event } from "@shared/schema";
import { parse, format, isBefore, startOfDay } from "date-fns";

export default function Events() {
  const [, setLocation] = useLocation();
  const { data: events = [], isLoading: eventsLoading, error: eventsError } = useQuery<Event[]>({
    queryKey: ['/api/events']
  });

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

  // Separate events into upcoming and previous
  const { upcomingEvents, previousEvents } = useMemo(() => {
    const now = startOfDay(new Date());
    const upcoming: (Event & { parsedDate: Date })[] = [];
    const previous: (Event & { parsedDate: Date })[] = [];
    
    eventsWithDates.forEach(event => {
      const eventDate = startOfDay(event.parsedDate);
      if (isBefore(eventDate, now)) {
        previous.push(event);
      } else {
        upcoming.push(event);
      }
    });
    
    // Sort upcoming events by date (earliest first)
    upcoming.sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime());
    // Sort previous events by date (most recent first)
    previous.sort((a, b) => b.parsedDate.getTime() - a.parsedDate.getTime());
    
    return { upcomingEvents: upcoming, previousEvents: previous };
  }, [eventsWithDates]);

  if (eventsLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-12 sm:pt-14 md:pt-24">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--color-riara-red)] border-r-transparent mb-4"></div>
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
        <main className="flex-1 flex items-center justify-center pt-12 sm:pt-14 md:pt-24">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="mb-4 text-[var(--color-riara-red)]">
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
      <main className="flex-1 pt-12 sm:pt-14 md:pt-24">
        {/* Hero Section */}
        <section className="relative w-full h-[32.5vh] md:h-[37.5vh] overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[url('https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-riara-red)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-riara-red)]/5 rounded-full blur-3xl"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-4 md:mb-6 drop-shadow-2xl">
                Events
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
                Discover what's happening at Riara
              </p>
            </div>
          </div>
        </section>

        {/* Events Section with Tabs */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10 md:mb-12">
                <TabsTrigger value="upcoming" className="text-base md:text-lg">
                  Upcoming ({upcomingEvents.length})
                </TabsTrigger>
                <TabsTrigger value="previous" className="text-base md:text-lg">
                  Previous ({previousEvents.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="mt-0">
                {upcomingEvents.length === 0 ? (
                  <div className="bg-[var(--color-bg-secondary)] p-12 text-center border-l-4 border-[var(--color-riara-red)]">
                    <p className="text-lg text-[var(--color-text-secondary)]">
                      No upcoming events available
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6 md:space-y-8">
                    {upcomingEvents.map((event) => (
                      <div 
                        key={event.id} 
                        className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] cursor-pointer hover:bg-[var(--color-bg-secondary)]/80 transition-colors"
                        onClick={() => setLocation(`/events/${event.id}`)}
                      >
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center border-2 border-[var(--color-riara-red)]">
                              <div className="text-center">
                                <p className="text-xs font-semibold uppercase text-[var(--color-riara-red)]">
                                  {format(event.parsedDate, "MMM")}
                                </p>
                                <p className="text-2xl font-bold text-[var(--color-text-primary)]">
                                  {format(event.parsedDate, "d")}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="mb-3">
                              <span className="text-sm font-semibold text-[var(--color-riara-red)] uppercase">
                                {event.type}
                              </span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 text-[var(--color-text-primary)]">
                              {event.title}
                            </h3>
                            {event.time && (
                              <div className="flex items-center gap-2 text-base text-[var(--color-text-secondary)] mb-4">
                                <Clock className="h-4 w-4" />
                                <span>{event.time}</span>
                              </div>
                            )}
                            <div className="text-sm font-semibold text-[var(--color-riara-red)] hover:text-[var(--color-riara-red-dark)] transition-colors">
                              View details →
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="previous" className="mt-0">
                {previousEvents.length === 0 ? (
                  <div className="bg-[var(--color-bg-secondary)] p-12 text-center border-l-4 border-[var(--color-riara-red)]">
                    <p className="text-lg text-[var(--color-text-secondary)]">
                      No previous events available
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6 md:space-y-8">
                    {previousEvents.map((event) => (
                      <div 
                        key={event.id} 
                        className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] cursor-pointer hover:bg-[var(--color-bg-secondary)]/80 transition-colors opacity-90"
                        onClick={() => setLocation(`/events/${event.id}`)}
                      >
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center border-2 border-[var(--color-riara-red)] opacity-75">
                              <div className="text-center">
                                <p className="text-xs font-semibold uppercase text-[var(--color-riara-red)]">
                                  {format(event.parsedDate, "MMM")}
                                </p>
                                <p className="text-2xl font-bold text-[var(--color-text-primary)]">
                                  {format(event.parsedDate, "d")}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="mb-3">
                              <span className="text-sm font-semibold text-[var(--color-riara-red)] uppercase">
                                {event.type}
                              </span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 text-[var(--color-text-primary)]">
                              {event.title}
                            </h3>
                            {event.time && (
                              <div className="flex items-center gap-2 text-base text-[var(--color-text-secondary)] mb-4">
                                <Clock className="h-4 w-4" />
                                <span>{event.time}</span>
                              </div>
                            )}
                            <div className="text-sm font-semibold text-[var(--color-riara-red)] hover:text-[var(--color-riara-red-dark)] transition-colors">
                              View details →
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
