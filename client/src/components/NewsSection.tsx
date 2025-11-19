import { ArrowRight } from "lucide-react";
import type { NewsArticle } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";

interface NewsSectionProps {
  articles: NewsArticle[];
  showHeader?: boolean;
}

export function NewsSection({ articles, showHeader = true }: NewsSectionProps) {
  const featuredArticle = articles.find((article) => article.featured) ?? articles[0];
  const remainingArticles = articles
    .filter((article) => article.id !== featuredArticle?.id)
    .slice(0, 6);

  const highlightArticles = remainingArticles.slice(0, 2);
  const regularArticles = remainingArticles.slice(2);

  const renderCategory = (category: string) => (
    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-stanford-red)]">
      {category}
    </span>
  );

  return (
    <section className="bg-[var(--color-bg-secondary)] py-14 sm:py-16 md:py-20">
      <Container>
        {showHeader && (
        <header className="text-center mb-10 md:mb-14 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black leading-snug text-[var(--color-text-primary)]" data-testid="text-news-heading">
              Campus News
            </h2>
          <p className="mt-3 text-base sm:text-lg md:text-xl font-semibold text-[var(--color-text-secondary)]" data-testid="text-news-subheading">
              Stories about people, research, and innovation across the Farm
            </p>
          </header>
        )}

        {featuredArticle && (
          <div className="grid gap-6 lg:grid-cols-3 mb-8 md:mb-12">
            <a
              href={featuredArticle.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-lg lg:col-span-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-stanford-red)] bg-gradient-to-br from-primary/10 to-primary/5"
              data-testid="card-featured-article"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <svg className="w-24 h-24 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm font-medium">Image Placeholder</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-left text-[var(--color-text-inverse)]">
                {renderCategory("In the Spotlight")}
                <h3 className="mt-3 text-2xl sm:text-3xl font-serif font-bold leading-tight">
                  {featuredArticle.title}
                </h3>
              </div>
            </a>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {highlightArticles.map((article) => (
                <a
                  key={article.id}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col overflow-hidden rounded-lg bg-[var(--color-bg-primary)] shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-stanford-red)]"
                  data-testid={`card-highlight-${article.id}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-xs font-medium">Image Placeholder</p>
                    </div>
                  </div>
                  <div className="p-6">
                    {renderCategory(article.category)}
                    <h3 className="mt-3 text-lg sm:text-xl font-semibold text-[var(--color-text-primary)] leading-snug">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
          {regularArticles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-lg bg-[var(--color-bg-primary)] shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-stanford-red)]"
              data-testid={`card-article-${article.id}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs font-medium">Image Placeholder</p>
                </div>
              </div>
              <div className="p-6">
                {renderCategory(article.category)}
                <h3 className="mt-3 text-lg font-semibold text-[var(--color-text-primary)] leading-snug line-clamp-2">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red-dark)] text-[var(--color-text-inverse)] px-8 sm:px-10 text-base sm:text-lg font-semibold"
            data-testid="button-more-news"
            asChild
          >
            <a href="/news" className="!text-white">
              More campus news
              <ArrowRight className="ml-2 h-4 w-4 !text-white" aria-hidden />
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
