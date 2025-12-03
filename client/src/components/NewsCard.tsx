import { useState } from "react";
import { useLocation } from "wouter";
import { ArrowRight, Calendar, User, ChevronDown, ChevronUp } from "lucide-react";
import type { NewsArticle } from "@shared/schema";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  article: NewsArticle;
  variant?: "featured" | "highlight" | "regular";
  showFullContent?: boolean;
}

export function NewsCard({ article, variant = "regular", showFullContent = false }: NewsCardProps) {
  const [, setLocation] = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const hasFullContent = article.content && article.content.length > article.excerpt.length;
  const displayContent = isExpanded && article.content ? article.content : article.excerpt;
  const shouldShowReadMore = hasFullContent && !isExpanded;

  const renderCategory = (category: string) => (
    <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] bg-[var(--color-stanford-red)]/10 text-[var(--color-stanford-red)] rounded-full">
      {category}
    </span>
  );

  if (variant === "featured") {
    return (
      <article
        className="group relative block overflow-hidden rounded-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-stanford-red)] cursor-pointer"
        data-testid={`card-featured-${article.id}`}
        onClick={() => setLocation(`/news/${article.id}`)}
      >
        <div className="block">
          <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
            {article.imageUrl ? (
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                        <div class="text-center text-muted-foreground">
                          <svg class="w-24 h-24 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    `;
                  }
                }}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                <div className="text-center text-muted-foreground">
                  <svg className="w-24 h-24 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute top-4 left-4">
              {renderCategory(article.category)}
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-left text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold leading-tight mb-2">
                {article.title}
              </h2>
              {article.subtitle && (
                <p className="text-base sm:text-lg text-white/90 mb-3 font-medium">
                  {article.subtitle}
                </p>
              )}
              <p className="text-sm sm:text-base text-white/80 leading-relaxed line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-4 mt-4 text-white/70 text-sm">
                {article.publishedDate && (
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.publishedDate}</span>
                  </div>
                )}
                {article.author && (
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-stanford-red)] cursor-pointer",
        variant === "highlight" ? "border-2 border-[var(--color-stanford-red)]/20" : ""
      )}
      data-testid={`card-${variant}-${article.id}`}
      onClick={() => setLocation(`/news/${article.id}`)}
    >
      <div className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
          {article.imageUrl ? (
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                      <div class="text-center text-muted-foreground">
                        <svg class="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  `;
                }
              }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
              <div className="text-center text-muted-foreground">
                <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex-1 flex flex-col p-6">
        <div className="mb-3">
          {renderCategory(article.category)}
        </div>
        
        <div className="block flex-1">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--color-text-primary)] leading-tight mb-2 group-hover:text-[var(--color-stanford-red)] transition-colors line-clamp-2">
            {article.title}
          </h3>
          
          {article.subtitle && (
            <p className="text-base font-medium text-[var(--color-text-secondary)] mb-3 line-clamp-1">
              {article.subtitle}
            </p>
          )}
        </div>

        <div className="flex-1">
          <p className={cn(
            "text-sm text-[var(--color-text-secondary)] leading-relaxed",
            !isExpanded && !showFullContent ? "line-clamp-3" : ""
          )}>
            {displayContent}
          </p>
          
          {shouldShowReadMore && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsExpanded(true);
              }}
              className="mt-3 text-sm font-semibold text-[var(--color-stanford-red)] hover:text-[var(--color-stanford-red-dark)] transition-colors inline-flex items-center gap-1"
              data-testid={`button-read-more-${article.id}`}
            >
              Read more
              <ChevronDown className="h-4 w-4" />
            </button>
          )}
          
          {isExpanded && article.content && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsExpanded(false);
              }}
              className="mt-3 text-sm font-semibold text-[var(--color-stanford-red)] hover:text-[var(--color-stanford-red-dark)] transition-colors inline-flex items-center gap-1"
              data-testid={`button-read-less-${article.id}`}
            >
              Read less
              <ChevronUp className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-[var(--color-border-secondary)] flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-[var(--color-text-tertiary)]">
            {article.publishedDate && (
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{article.publishedDate}</span>
              </div>
            )}
            {article.author && (
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span>{article.author}</span>
              </div>
            )}
          </div>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLocation(`/news/${article.id}`);
            }}
            className="text-sm font-semibold text-[var(--color-stanford-red)] hover:text-[var(--color-stanford-red-dark)] transition-colors inline-flex items-center gap-1 group/link"
            data-testid={`link-read-full-${article.id}`}
          >
            Read full story
            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
}

