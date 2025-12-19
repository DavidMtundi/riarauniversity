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
    .slice(0, 5);
  
  // Reuse articles if needed to fill all rows
  const getArticle = (index: number) => remainingArticles[index % remainingArticles.length];
  
  // Row 1: 1 article (featured)
  // Row 2: 2 articles (short + long)
  const row2Articles = [
    getArticle(0), // Short (left)
    getArticle(1) // Long (right)
  ];
  // Row 3: 3 articles
  const row3Articles = [
    getArticle(2),
    getArticle(3),
    getArticle(4)
  ];

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

        {/* Row 1: 1 article (featured, full width) */}
        {featuredArticle && (
          <div className="mb-8 md:mb-12">
            <NewsCard article={featuredArticle} variant="featured" />
          </div>
        )}

        {/* Row 2: 2 articles (short + long) */}
        {row2Articles.length === 2 && (
          <div className="grid gap-6 md:grid-cols-3 mb-8 md:mb-10 items-stretch">
            <div className="md:col-span-1 flex">
              <NewsCard article={row2Articles[0]} variant="regular" />
            </div>
            <div className="md:col-span-2 flex">
              <NewsCard article={row2Articles[1]} variant="regular" />
            </div>
          </div>
        )}

        {/* Row 3: 3 equal articles */}
        {row3Articles.length === 3 && (
          <div className="grid gap-6 md:grid-cols-3 mb-10 items-stretch">
            {row3Articles.map((article, index) => (
              <NewsCard
                key={`${article.id}-${index}`}
                article={article}
                variant="regular"
              />
            ))}
          </div>
        )}

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
