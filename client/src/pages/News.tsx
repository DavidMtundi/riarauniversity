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
import { Search, Filter, ArrowRight, Calendar, User, X } from "lucide-react";
import type { NewsArticle } from "@shared/schema";
import { parse, format, compareDesc } from "date-fns";

type SortOption = "newest" | "oldest" | "relevance";

export default function News() {
  const [, setLocation] = useLocation();
  const { data: newsArticles = [], isLoading: newsLoading, error: newsError } = useQuery<NewsArticle[]>({
    queryKey: ['/api/news']
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [visibleCount, setVisibleCount] = useState(12);

  // Get unique categories and authors
  const categories = useMemo(() => {
    const cats = Array.from(new Set(newsArticles.map(article => article.category)));
    return cats.sort();
  }, [newsArticles]);

  const authors = useMemo(() => {
    const auths = Array.from(new Set(newsArticles.map(article => article.author).filter(Boolean) as string[]));
    return auths.sort();
  }, [newsArticles]);

  // Parse dates for sorting
  const articlesWithDates = useMemo(() => {
    return newsArticles.map(article => {
      let parsedDate: Date | null = null;
      if (article.publishedDate) {
        try {
          // Try multiple date formats
          const formats = [
            "MMM d, yyyy",  // "Nov 8, 2024"
            "MMMM d, yyyy", // "November 8, 2024"
            "MMM d yyyy",   // "Nov 8 2024"
            "yyyy-MM-dd",   // "2024-11-08"
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

  // Filter and sort articles
  const filteredArticles = useMemo(() => {
    let filtered = articlesWithDates.filter(article => {
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.category.toLowerCase().includes(query) ||
          (article.subtitle && article.subtitle.toLowerCase().includes(query)) ||
          (article.author && article.author.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      // Category filter
      if (selectedCategory) {
        if (article.category !== selectedCategory) return false;
      }

      // Author filter
      if (selectedAuthor) {
        if (article.author !== selectedAuthor) return false;
      }

      return true;
    });

    // Sort articles
    if (sortBy === "newest") {
      filtered = filtered.sort((a, b) => {
        if (!a.parsedDate && !b.parsedDate) return 0;
        if (!a.parsedDate) return 1;
        if (!b.parsedDate) return -1;
        return compareDesc(a.parsedDate, b.parsedDate);
      });
    } else if (sortBy === "oldest") {
      filtered = filtered.sort((a, b) => {
        if (!a.parsedDate && !b.parsedDate) return 0;
        if (!a.parsedDate) return 1;
        if (!b.parsedDate) return -1;
        return a.parsedDate.getTime() - b.parsedDate.getTime();
      });
    } else if (sortBy === "relevance") {
      // Sort by featured first, then by date
      filtered = filtered.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        if (!a.parsedDate && !b.parsedDate) return 0;
        if (!a.parsedDate) return 1;
        if (!b.parsedDate) return -1;
        return compareDesc(a.parsedDate, b.parsedDate);
      });
    }

    return filtered;
  }, [articlesWithDates, searchQuery, selectedCategory, selectedAuthor, sortBy]);

  // Get featured article
  const featuredArticle = useMemo(() => {
    return filteredArticles.find(article => article.featured) || filteredArticles[0];
  }, [filteredArticles]);

  // Get remaining articles (excluding featured)
  const regularArticles = useMemo(() => {
    return filteredArticles
      .filter(article => article.id !== featuredArticle?.id)
      .slice(0, visibleCount);
  }, [filteredArticles, featuredArticle, visibleCount]);

  const hasMore = filteredArticles.length > visibleCount + (featuredArticle ? 1 : 0);
  const hasActiveFilters = searchQuery.trim() !== "" || selectedCategory !== null || selectedAuthor !== null;

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedAuthor(null);
  };

  // Get category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach(cat => {
      counts[cat] = newsArticles.filter(a => a.category === cat).length;
    });
    return counts;
  }, [categories, newsArticles]);

  if (newsLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-12 sm:pt-14 md:pt-24">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--color-riara-red)] border-r-transparent mb-4"></div>
            <p className="text-[var(--color-text-secondary)]">Loading News...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (newsError) {
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
              We're experiencing technical difficulties loading the News page. Please try refreshing the page.
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
        {/* Hero Banner Section */}
        <section className="relative min-h-[450px] md:min-h-[550px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
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
          <div className="relative z-10 w-full">
          <Container>
              <div className="max-w-5xl mx-auto">
                {/* Title with Subtitle */}
                <div className="text-center mb-10 md:mb-12">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 leading-tight">
                Campus News
              </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light max-w-2xl mx-auto">
                    Stay informed with the latest updates, stories, and achievements from Riara University
              </p>
            </div>

                {/* Enhanced Search Bar */}
                <div className="max-w-3xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative group">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-[var(--color-riara-red)] transition-colors" />
                      <Input
                        type="text"
                        placeholder="Search news articles, topics, or authors..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-12 pr-4 py-6 md:py-7 text-base md:text-lg bg-white/95 backdrop-blur-sm border-2 border-white/50 rounded-xl focus:ring-2 focus:ring-[var(--color-riara-red)] focus:border-[var(--color-riara-red)] shadow-xl transition-all"
                      />
                    </div>
                    <Button
                      onClick={() => {
                        document.getElementById('news-content')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-[var(--color-riara-red)] text-white hover:bg-[var(--color-riara-red-dark)] px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-semibold rounded-xl whitespace-nowrap shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                    >
                      Search
                    </Button>
                  </div>
                  
                  {/* Quick Search Suggestions */}
                  {!searchQuery && categories.length > 0 && (
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                      <span className="text-sm text-white/70">Popular:</span>
                      {categories.slice(0, 4).map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            document.getElementById('news-content')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="px-3 py-1 text-sm text-white/90 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all border border-white/20"
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/* Filters and Sort Section */}
        <section className="bg-gradient-to-b from-white to-[var(--color-bg-secondary)]/30 border-b border-gray-200 py-8 md:py-10" id="news-content">
          <Container>
            <div className="max-w-7xl mx-auto">
              {/* Header with Stats */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-2">
                    All News
                  </h2>
                  <div className="flex items-center gap-4">
                    <p className="text-base text-[var(--color-text-secondary)]">
                      <span className="font-semibold text-[var(--color-riara-red)]">{filteredArticles.length}</span> {filteredArticles.length === 1 ? 'article' : 'articles'}
                      {hasActiveFilters && (
                        <span className="ml-2 text-sm">matching your filters</span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {/* Sort Dropdown */}
                  <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                    <SelectTrigger className="w-[180px] bg-white border-2 border-gray-200 hover:border-[var(--color-riara-red)]/50 transition-colors">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="relevance">Most Relevant</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Clear Filters */}
                  {hasActiveFilters && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearFilters}
                      className="text-[var(--color-riara-red)] hover:text-white hover:bg-[var(--color-riara-red)] border-[var(--color-riara-red)]/30"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Clear filters
                    </Button>
                  )}
                </div>
              </div>

              {/* Enhanced Category and Author Filters */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
                    <Filter className="h-5 w-5" />
                    <span className="text-sm font-semibold">Filter by:</span>
                  </div>
                <button
                  onClick={() => setSelectedCategory(null)}
                    className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                    selectedCategory === null
                        ? 'bg-[var(--color-riara-red)] text-white shadow-lg shadow-[var(--color-riara-red)]/20'
                        : 'bg-white text-[var(--color-text-secondary)] hover:bg-gray-50 border-2 border-gray-200 hover:border-[var(--color-riara-red)]/30'
                  }`}
                >
                  All News
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                      className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                      selectedCategory === category
                          ? 'bg-[var(--color-riara-red)] text-white shadow-lg shadow-[var(--color-riara-red)]/20'
                          : 'bg-white text-[var(--color-text-secondary)] hover:bg-gray-50 border-2 border-gray-200 hover:border-[var(--color-riara-red)]/30'
                    }`}
                  >
                      {category} <span className="ml-1.5 opacity-70">({categoryCounts[category] || 0})</span>
                  </button>
                ))}
                </div>
                
                {authors.length > 0 && (
                  <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
                      <User className="h-4 w-4" />
                      <span className="text-sm font-semibold">Author:</span>
                    </div>
                    <Select value={selectedAuthor || "all"} onValueChange={(value) => setSelectedAuthor(value === "all" ? null : value)}>
                      <SelectTrigger className="w-[220px] bg-white border-2 border-gray-200 hover:border-[var(--color-riara-red)]/50 transition-colors">
                        <div className="flex items-center gap-2">
                          <SelectValue placeholder="All Authors" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Authors</SelectItem>
                        {authors.map((author) => (
                          <SelectItem key={author} value={author}>{author}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* News Content */}
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-[var(--color-bg-secondary)]/20">
          <Container>
            <div className="max-w-7xl mx-auto">
            {/* Featured Article */}
            {featuredArticle && (
                <div className="mb-16">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-1 w-12 bg-[var(--color-riara-red)]"></div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-[var(--color-text-primary)] uppercase tracking-wide">
                      Featured Story
                    </h3>
                  </div>
                <NewsCard article={featuredArticle} variant="featured" />
              </div>
            )}

            {/* Regular Articles Grid */}
            {regularArticles.length > 0 ? (
              <>
                  {featuredArticle && (
                    <div className="mb-8 flex items-center gap-3">
                      <div className="h-1 w-12 bg-[var(--color-riara-red)]"></div>
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-[var(--color-text-primary)] uppercase tracking-wide">
                        Latest News
                      </h3>
                    </div>
                  )}
                  
                <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
                  {regularArticles.map((article) => (
                    <NewsCard
                      key={article.id}
                      article={article}
                      variant="regular"
                    />
                  ))}
                </div>

                {/* Load More Button */}
                {hasMore && (
                    <div className="text-center pt-8">
                    <Button
                      onClick={() => setVisibleCount(prev => prev + 12)}
                      size="lg"
                        className="bg-[var(--color-riara-red)] hover:bg-[var(--color-riara-red-dark)] text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                      data-testid="button-load-more"
                    >
                      Load More News
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                )}
              </>
            ) : (
                <div className="text-center py-20">
                  <div className="mb-6">
                    <svg className="h-24 w-24 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 4a2 2 0 002 2h2a2 2 0 002-2V9a2 2 0 00-2-2h-2a2 2 0 00-2 2v4z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-3">
                    No articles found
                  </h3>
                  <p className="text-lg text-[var(--color-text-secondary)] mb-6 max-w-md mx-auto">
                    {hasActiveFilters ? 'No news articles match your current filters. Try adjusting your search criteria.' : 'No news articles are available at this time.'}
                  </p>
                  {hasActiveFilters && (
                    <Button 
                      variant="outline" 
                      onClick={clearFilters}
                      className="border-2 border-[var(--color-riara-red)] text-[var(--color-riara-red)] hover:bg-[var(--color-riara-red)] hover:text-white"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Clear all filters
                    </Button>
                  )}
                </div>
              )}
            </div>
          </Container>
        </section>

        {/* Newsletter Subscription Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[var(--color-riara-red)] to-[var(--color-riara-red-dark)] text-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
                  Stay Connected
                </h2>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                  Subscribe to our newsletter and never miss an update from Riara University
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 py-6 text-base bg-white/95 border-0 rounded-lg focus:ring-2 focus:ring-white/50"
                />
                <Button
                  className="bg-white text-[var(--color-riara-red)] hover:bg-white/90 px-8 py-6 text-base font-semibold rounded-lg whitespace-nowrap shadow-lg"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
