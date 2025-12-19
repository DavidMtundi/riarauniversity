import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewsCard } from "@/components/NewsCard";
import { Container } from "@/components/Container";
import { RetryButton } from "@/components/RetryButton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search, Filter, ArrowRight, Calendar, Clock, Newspaper, X } from "lucide-react";
import type { NewsArticle, Event } from "@shared/schema";
import { parse, format, compareDesc, isBefore, startOfDay } from "date-fns";

type ContentType = "all" | "news" | "events";
type SortOption = "newest" | "oldest" | "relevance";

interface TimelineItem {
  id: string;
  type: "news" | "event";
  date: Date | null;
  content: NewsArticle | Event;
}

export default function NewsAndEvents() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<ContentType>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [visibleCount, setVisibleCount] = useState(12);

  // Fetch news and events
  const { data: newsArticles = [], isLoading: newsLoading, error: newsError } = useQuery<NewsArticle[]>({
    queryKey: ['/api/news']
  });

  const { data: events = [], isLoading: eventsLoading, error: eventsError } = useQuery<Event[]>({
    queryKey: ['/api/events']
  });

  const isLoading = newsLoading || eventsLoading;
  const hasError = newsError || eventsError;

  // Parse news article dates
  const articlesWithDates = useMemo(() => {
    return newsArticles.map(article => {
      let parsedDate: Date | null = null;
      if (article.publishedDate) {
        try {
          const formats = [
            "MMM d, yyyy",
            "MMMM d, yyyy",
            "MMM d yyyy",
            "yyyy-MM-dd",
          ];
          
          for (const formatStr of formats) {
            try {
              const testDate = parse(article.publishedDate, formatStr, new Date());
              if (!isNaN(testDate.getTime())) {
                parsedDate = testDate;
                break;
              }
            } catch {
              continue;
            }
          }
        } catch {
          // If parsing fails, keep null
        }
      }
      return { ...article, parsedDate };
    });
  }, [newsArticles]);

  // Parse event dates
  const eventsWithDates = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    
    return events.map(event => {
      try {
        const formats = [
          "MMM d",
          "MMMM d",
          "MMM dd",
          "MMMM dd",
          "d MMM",
          "dd MMM",
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

  // Create unified timeline items
  const timelineItems = useMemo(() => {
    const items: TimelineItem[] = [];

    // Add news articles
    articlesWithDates.forEach(article => {
      items.push({
        id: `news-${article.id}`,
        type: "news",
        date: article.parsedDate,
        content: article
      });
    });

    // Add events
    eventsWithDates.forEach(event => {
      items.push({
        id: `event-${event.id}`,
        type: "event",
        date: event.parsedDate,
        content: event
      });
    });

    return items;
  }, [articlesWithDates, eventsWithDates]);

  // Filter timeline items
  const filteredItems = useMemo(() => {
    let filtered = timelineItems.filter(item => {
      // Type filter
      if (activeTab === "news" && item.type !== "news") return false;
      if (activeTab === "events" && item.type !== "event") return false;

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        if (item.type === "news") {
          const article = item.content as NewsArticle;
          const matchesSearch = 
            article.title.toLowerCase().includes(query) ||
            article.excerpt.toLowerCase().includes(query) ||
            article.category.toLowerCase().includes(query) ||
            (article.subtitle && article.subtitle.toLowerCase().includes(query)) ||
            (article.author && article.author.toLowerCase().includes(query));
          if (!matchesSearch) return false;
        } else {
          const event = item.content as Event;
          const matchesSearch = 
            event.title.toLowerCase().includes(query) ||
            (event.description && event.description.toLowerCase().includes(query)) ||
            (event.type && event.type.toLowerCase().includes(query));
          if (!matchesSearch) return false;
        }
      }

      // Category filter (for news only)
      if (selectedCategory && item.type === "news") {
        const article = item.content as NewsArticle;
        if (article.category !== selectedCategory) return false;
      }

      return true;
    });

    // Sort items
    if (sortBy === "newest") {
      filtered = filtered.sort((a, b) => {
        if (!a.date && !b.date) return 0;
        if (!a.date) return 1;
        if (!b.date) return -1;
        return compareDesc(a.date, b.date);
      });
    } else if (sortBy === "oldest") {
      filtered = filtered.sort((a, b) => {
        if (!a.date && !b.date) return 0;
        if (!a.date) return 1;
        if (!b.date) return -1;
        return a.date.getTime() - b.date.getTime();
      });
    } else if (sortBy === "relevance") {
      filtered = filtered.sort((a, b) => {
        if (a.type === "news" && b.type === "event") {
          const article = a.content as NewsArticle;
          if (article.featured) return -1;
        }
        if (a.type === "event" && b.type === "news") {
          const article = b.content as NewsArticle;
          if (article.featured) return 1;
        }
        if (!a.date && !b.date) return 0;
        if (!a.date) return 1;
        if (!b.date) return -1;
        return compareDesc(a.date, b.date);
      });
    }

    return filtered;
  }, [timelineItems, activeTab, searchQuery, selectedCategory, sortBy]);

  // Get visible items
  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const hasMore = filteredItems.length > visibleCount;
  const hasActiveFilters = searchQuery.trim() !== "" || selectedCategory !== null;

  // Get unique categories from news
  const categories = useMemo(() => {
    const cats = Array.from(new Set(newsArticles.map(article => article.category)));
    return cats.sort();
  }, [newsArticles]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-12 sm:pt-14 md:pt-24">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--color-stanford-red)] border-r-transparent mb-4"></div>
            <p className="text-[var(--color-text-secondary)]">Loading News & Events...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-12 sm:pt-14 md:pt-24">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="mb-4 text-[var(--color-stanford-red)]">
              <svg className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-2">Unable to Load Content</h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
              We're experiencing technical difficulties. Please try refreshing the page.
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
        <section className="relative min-h-[450px] md:min-h-[550px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[url('https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
          </div>
          
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-stanford-red)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-stanford-red)]/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 w-full">
            <Container>
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10 md:mb-12">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 leading-tight">
                    News & Events
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light max-w-2xl mx-auto">
                    Stay connected with the latest stories, updates, and happenings at Riara University
                  </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-3xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative group">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-[var(--color-stanford-red)] transition-colors" />
                      <Input
                        type="text"
                        placeholder="Search news, events, topics..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-12 pr-4 py-6 md:py-7 text-base md:text-lg bg-white/95 backdrop-blur-sm border-2 border-white/50 rounded-xl focus:ring-2 focus:ring-[var(--color-stanford-red)] focus:border-[var(--color-stanford-red)] shadow-xl transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            {/* Tabs and Filters */}
            <div className="mb-8 md:mb-12">
              <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ContentType)} className="w-full">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <TabsList className="grid w-full md:w-auto grid-cols-3">
                    <TabsTrigger value="all" className="flex items-center gap-2">
                      <span>All</span>
                      <span className="text-xs bg-[var(--color-stanford-red)]/10 text-[var(--color-stanford-red)] px-2 py-0.5 rounded-full">
                        {timelineItems.length}
                      </span>
                    </TabsTrigger>
                    <TabsTrigger value="news" className="flex items-center gap-2">
                      <Newspaper className="h-4 w-4" />
                      <span>News</span>
                      <span className="text-xs bg-[var(--color-stanford-red)]/10 text-[var(--color-stanford-red)] px-2 py-0.5 rounded-full">
                        {newsArticles.length}
                      </span>
                    </TabsTrigger>
                    <TabsTrigger value="events" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Events</span>
                      <span className="text-xs bg-[var(--color-stanford-red)]/10 text-[var(--color-stanford-red)] px-2 py-0.5 rounded-full">
                        {events.length}
                      </span>
                    </TabsTrigger>
                  </TabsList>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {activeTab === "news" && (
                      <Select value={selectedCategory || "all"} onValueChange={(value) => setSelectedCategory(value === "all" ? null : value)}>
                        <SelectTrigger className="w-full sm:w-[200px]">
                          <Filter className="h-4 w-4 mr-2" />
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          {categories.map(cat => (
                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                    
                    <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="oldest">Oldest First</SelectItem>
                        <SelectItem value="relevance">Most Relevant</SelectItem>
                      </SelectContent>
                    </Select>

                    {hasActiveFilters && (
                      <Button
                        variant="outline"
                        onClick={clearFilters}
                        className="flex items-center gap-2"
                      >
                        <X className="h-4 w-4" />
                        Clear
                      </Button>
                    )}
                  </div>
                </div>

                {/* Timeline Content */}
                <TabsContent value={activeTab} className="mt-0">
                  {visibleItems.length === 0 ? (
                    <div className="bg-[var(--color-bg-secondary)] p-12 text-center border-l-4 border-[var(--color-stanford-red)] rounded-lg">
                      <p className="text-lg text-[var(--color-text-secondary)]">
                        No {activeTab === "all" ? "content" : activeTab} found matching your criteria.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-6 md:space-y-8">
                      {visibleItems.map((item) => {
                        if (item.type === "news") {
                          const article = item.content as NewsArticle;
                          return (
                            <div key={item.id} className="relative">
                              <div className="flex gap-4">
                                <div className="flex-shrink-0 w-1 bg-[var(--color-stanford-red)] rounded-full"></div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Newspaper className="h-4 w-4 text-[var(--color-stanford-red)]" />
                                    <span className="text-xs font-semibold text-[var(--color-stanford-red)] uppercase">
                                      News
                                    </span>
                                    {item.date && (
                                      <span className="text-xs text-[var(--color-text-tertiary)]">
                                        • {format(item.date, "MMM d, yyyy")}
                                      </span>
                                    )}
                                  </div>
                                  <NewsCard 
                                    article={article} 
                                    variant="regular"
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        } else {
                          const event = item.content as Event & { parsedDate: Date };
                          const isUpcoming = !isBefore(startOfDay(event.parsedDate), startOfDay(new Date()));
                          
                          return (
                            <div key={item.id} className="relative">
                              <div className="flex gap-4">
                                <div className="flex-shrink-0 w-1 bg-[var(--color-stanford-red)] rounded-full"></div>
                                <div className="flex-1">
                                  <div 
                                    className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)] rounded-lg cursor-pointer hover:bg-[var(--color-bg-secondary)]/80 transition-colors"
                                    onClick={() => setLocation(`/events/${event.id}`)}
                                  >
                                    <div className="flex flex-col md:flex-row gap-6">
                                      <div className="flex-shrink-0">
                                        <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center border-2 border-[var(--color-stanford-red)]">
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
                                        <div className="flex items-center gap-2 mb-2">
                                          <Calendar className="h-4 w-4 text-[var(--color-stanford-red)]" />
                                          <span className="text-xs font-semibold text-[var(--color-stanford-red)] uppercase">
                                            {isUpcoming ? "Upcoming Event" : "Past Event"}
                                          </span>
                                        </div>
                                        <div className="mb-3">
                                          <span className="text-sm font-semibold text-[var(--color-stanford-red)] uppercase">
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
                                        {event.description && (
                                          <p className="text-base text-[var(--color-text-secondary)] mb-4 line-clamp-2">
                                            {event.description}
                                          </p>
                                        )}
                                        <div className="text-sm font-semibold text-[var(--color-stanford-red)] hover:text-[var(--color-stanford-red-dark)] transition-colors flex items-center gap-2">
                                          View details <ArrowRight className="h-4 w-4" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      })}
                    </div>
                  )}

                  {/* Load More Button */}
                  {hasMore && (
                    <div className="text-center mt-10">
                      <Button
                        variant="outline"
                        onClick={() => setVisibleCount(prev => prev + 12)}
                        className="px-8 py-6 text-base font-semibold border-[var(--color-stanford-red)] text-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red)] hover:text-white"
                      >
                        Load More
                      </Button>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

