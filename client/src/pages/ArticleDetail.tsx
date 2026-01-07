import { useQuery } from "@tanstack/react-query";
import { useLocation, useRoute } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { RetryButton } from "@/components/RetryButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";
import type { NewsArticle } from "@shared/schema";
import { parse, format } from "date-fns";

export default function ArticleDetail() {
  const [, setLocation] = useLocation();
  const [, params] = useRoute("/news/:id");
  const articleId = params?.id;
  
  const { data: articles = [], isLoading: articlesLoading, error: articlesError } = useQuery<NewsArticle[]>({
    queryKey: ['/api/news']
  });

  // Find the article by ID
  const article = articleId ? articles.find(a => a.id === articleId) : undefined;

  // Parse article date
  const parsedDate = article?.publishedDate ? (() => {
    try {
      const formats = ["MMM d, yyyy", "MMMM d, yyyy", "MMM d yyyy", "yyyy-MM-dd"];
      for (const formatStr of formats) {
        try {
          const testDate = parse(article.publishedDate, formatStr, new Date());
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

  if (articlesLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-12 sm:pt-14 md:pt-24">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--color-riara-red)] border-r-transparent mb-4"></div>
            <p className="text-[var(--color-text-secondary)]">Loading Article...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (articlesError) {
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
            <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-2">Unable to Load Article</h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
              We're experiencing technical difficulties loading this article. Please try again.
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

  if (!article) {
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
            <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-2">Article Not Found</h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Button
              onClick={() => setLocation("/news")}
              className="bg-[var(--color-riara-red)] text-white hover:bg-[var(--color-riara-red-dark)]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
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
              onClick={() => setLocation("/news")}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Button>
          </Container>
        </section>

        {/* Article Header */}
        <section className="bg-gradient-to-br from-[var(--color-bg-secondary)] to-white py-16 md:py-20">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Badge variant="secondary" className="text-base px-4 py-2">
                  {article.category}
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--color-text-primary)] mb-4 leading-tight">
                {article.title}
              </h1>
              {article.subtitle && (
                <p className="text-xl md:text-2xl font-medium text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                  {article.subtitle}
                </p>
              )}
              
              <div className="flex flex-wrap gap-6 text-[var(--color-text-secondary)]">
                {parsedDate && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[var(--color-riara-red)]" />
                    <span className="font-semibold">
                      {format(parsedDate, "MMMM d, yyyy")}
                    </span>
                  </div>
                )}
                {article.author && (
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-[var(--color-riara-red)]" />
                    <span className="font-semibold">{article.author}</span>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* Article Content */}
        <section className="py-16 md:py-20">
          <Container>
            <div className="max-w-4xl mx-auto">
              {article.imageUrl && article.imageUrl !== "" ? (
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ) : (
                <div className="mb-8 aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                  <svg className="h-24 w-24 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}

              <div className="prose prose-lg max-w-none">
                <div className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  {article.excerpt}
                </div>
                
                {article.content && (
                  <div className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    {article.content}
                  </div>
                )}

                {!article.content && article.link && article.link !== "#" && (
                  <div className="mt-8 pt-8 border-t border-[var(--color-border-secondary)]">
                    <Button
                      asChild
                      className="bg-[var(--color-riara-red)] text-white hover:bg-[var(--color-riara-red-dark)]"
                    >
                      <a href={article.link} target="_blank" rel="noopener noreferrer">
                        Read Full Story
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
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

