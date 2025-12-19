import { ArrowRight } from "lucide-react";
import type { NewsArticle } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import { NewsCard } from "./NewsCard";

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

  return (
    <section className="bg-[var(--color-bg-secondary)] py-14 sm:py-16 md:py-20">
      <Container>
        {showHeader && (
        <header className="text-center mb-10 md:mb-14 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black leading-snug text-[var(--color-text-primary)]" data-testid="text-news-heading">
              Campus News
            </h2>
          <p className="mt-3 text-base sm:text-lg md:text-xl font-semibold text-[var(--color-text-secondary)]" data-testid="text-news-subheading">
              Stories about people, research, and innovation at Riara University
            </p>
          </header>
        )}

        {featuredArticle && (
          <div className="grid gap-6 lg:grid-cols-3 mb-8 md:mb-12">
            <div className="lg:col-span-2">
              <NewsCard article={featuredArticle} variant="featured" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {highlightArticles.map((article) => (
                <NewsCard
                  key={article.id}
                  article={article}
                  variant="highlight"
                />
              ))}
            </div>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
          {regularArticles.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              variant="regular"
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-[var(--color-riara-red)] hover:bg-[var(--color-riara-red-dark)] text-[var(--color-text-inverse)] px-8 sm:px-10 text-base sm:text-lg font-semibold"
            data-testid="button-more-news"
            asChild
          >
            <a href="/news-events" className="!text-white">
              More campus news
              <ArrowRight className="ml-2 h-4 w-4 !text-white" aria-hidden />
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
