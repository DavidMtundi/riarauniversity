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
        <main className="flex-1 flex items-center justify-center pt-24">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--color-stanford-red)] border-r-transparent mb-4"></div>
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
        <main className="flex-1 flex items-center justify-center pt-24">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="mb-4 text-[var(--color-stanford-red)]">
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
      <main className="flex-1 pt-24">
        {/* Hero Banner Section */}
        <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[url('/riara-logo.jpeg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 w-full">
            <Container>
              <div className="max-w-4xl mx-auto px-4">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8">
                  Campus News
                </h1>
                
                {/* Search Bar */}
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search news articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 pr-4 py-6 text-base bg-white border-white rounded-lg focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <Button
                    onClick={() => {
                      document.getElementById('news-content')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-[var(--color-stanford-red)] text-white hover:bg-[var(--color-stanford-red-dark)] px-8 py-6 text-base font-semibold rounded-lg whitespace-nowrap"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/* Filters and Sort Section */}
        <section className="bg-white border-b py-6" id="news-content">
          <Container>
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-stanford-red)] mb-2">
                    All news
                  </h2>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {/* Sort Dropdown */}
                  <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                    <SelectTrigger className="w-[180px]">
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
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="text-[var(--color-stanford-red)] hover:text-[var(--color-stanford-red-dark)]"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Clear filters
                    </Button>
                  )}
                </div>
              </div>

              {/* Category and Author Filters */}
              <div className="flex flex-wrap items-center gap-3">
                <Filter className="h-4 w-4 text-[var(--color-text-secondary)]" />
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                    selectedCategory === null
                      ? 'bg-[var(--color-stanford-red)] text-white shadow-md'
                      : 'bg-gray-100 text-[var(--color-text-secondary)] hover:bg-gray-200'
                  }`}
                >
                  All News
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                      selectedCategory === category
                        ? 'bg-[var(--color-stanford-red)] text-white shadow-md'
                        : 'bg-gray-100 text-[var(--color-text-secondary)] hover:bg-gray-200'
                    }`}
                  >
                    {category} ({categoryCounts[category] || 0})
                  </button>
                ))}
                
                {authors.length > 0 && (
                  <>
                    <div className="w-px h-6 bg-gray-300 mx-2"></div>
                    <Select value={selectedAuthor || "all"} onValueChange={(value) => setSelectedAuthor(value === "all" ? null : value)}>
                      <SelectTrigger className="w-[200px]">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
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
                  </>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* News Content */}
        <section className="py-12 md:py-16 bg-white">
          <Container>
            {/* Featured Article */}
            {featuredArticle && (
              <div className="mb-12">
                <NewsCard article={featuredArticle} variant="featured" />
              </div>
            )}

            {/* Regular Articles Grid */}
            {regularArticles.length > 0 ? (
              <>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
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
                  <div className="text-center">
                    <Button
                      onClick={() => setVisibleCount(prev => prev + 12)}
                      size="lg"
                      className="bg-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red-dark)] text-white px-8 sm:px-10 text-base sm:text-lg font-semibold"
                      data-testid="button-load-more"
                    >
                      Load More News
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-[var(--color-text-secondary)] mb-4">
                  No news articles found{hasActiveFilters ? ' matching your filters' : ''}.
                </p>
                {hasActiveFilters && (
                  <Button variant="outline" onClick={clearFilters}>
                    Clear filters
                  </Button>
                )}
              </div>
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
