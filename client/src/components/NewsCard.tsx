import { useState } from "react";
import { useLocation } from "wouter";
import { ArrowRight, Calendar, User, ChevronDown, ChevronUp } from "lucide-react";
import type { NewsArticle } from "@shared/schema";
import { cn } from "@/lib/utils";
import { ImageContainer } from "@/components/ImageContainer";

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
    <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] bg-[var(--color-riara-red)]/10 text-[var(--color-riara-red)] rounded-full">
      {category}
    </span>
  );

  if (variant === "featured") {
    return (
      <article
        className="group relative block overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-riara-red)] cursor-pointer shadow-2xl hover:shadow-3xl transition-all duration-300"
        data-testid={`card-featured-${article.id}`}
        onClick={() => setLocation(`/news/${article.id}`)}
      >
        <div className="block">
          <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
            <ImageContainer
              src={article.imageUrl}
              alt={article.title}
              aspectRatio="16/9"
              objectFit="cover"
              hoverEffect="scale"
              containerClassName="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 transition-all duration-300" />
            <div className="absolute top-6 left-6">
              {renderCategory(article.category)}
            </div>
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 lg:p-12 text-left text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-3 group-hover:text-[var(--color-riara-red)]/90 transition-colors duration-300">
                {article.title}
              </h2>
              {article.subtitle && (
                <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-4 font-medium">
                  {article.subtitle}
                </p>
              )}
              <p className="text-base sm:text-lg text-white/85 leading-relaxed line-clamp-2 mb-6">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-6 text-white/80 text-sm sm:text-base">
                {article.publishedDate && (
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                    <Calendar className="h-4 w-4" />
                    <span>{article.publishedDate}</span>
                  </div>
                )}
                {article.author && (
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                )}
              </div>
              <div className="mt-6 flex items-center gap-2 text-white/90 font-semibold group-hover:text-[var(--color-riara-red)] transition-colors duration-300">
                <span>Read full story</span>
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" />
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
        "group flex flex-col h-full overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-riara-red)] cursor-pointer border border-gray-100",
        variant === "highlight" ? "border-2 border-[var(--color-riara-red)]/30 shadow-lg" : ""
      )}
      data-testid={`card-${variant}-${article.id}`}
      onClick={() => setLocation(`/news/${article.id}`)}
    >
        <div className="block relative">
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
          {article.imageUrl ? (
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col p-6 min-h-0">
        <div className="mb-3 flex-shrink-0">
          {renderCategory(article.category)}
        </div>
        
        <div className="block flex-shrink-0">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--color-text-primary)] leading-tight mb-3 group-hover:text-[var(--color-riara-red)] transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>
          
          {article.subtitle && (
            <p className="text-base font-medium text-[var(--color-text-secondary)] mb-4 line-clamp-1">
              {article.subtitle}
            </p>
          )}
        </div>

        <div className="flex-1 min-h-0 flex flex-col">
          <p className={cn(
            "text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1",
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
              className="mt-3 text-sm font-semibold text-[var(--color-riara-red)] hover:text-[var(--color-riara-red-dark)] transition-colors inline-flex items-center gap-1 flex-shrink-0"
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
              className="mt-3 text-sm font-semibold text-[var(--color-riara-red)] hover:text-[var(--color-riara-red-dark)] transition-colors inline-flex items-center gap-1 flex-shrink-0"
              data-testid={`button-read-less-${article.id}`}
            >
              Read less
              <ChevronUp className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="mt-6 pt-5 border-t border-gray-200 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-4 text-xs sm:text-sm text-[var(--color-text-tertiary)]">
            {article.publishedDate && (
              <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-md">
                <Calendar className="h-3.5 w-3.5" />
                <span>{article.publishedDate}</span>
              </div>
            )}
            {article.author && (
              <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-md">
                <User className="h-3.5 w-3.5" />
                <span>{article.author}</span>
              </div>
            )}
          </div>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLocation(`/news/${article.id}`);
            }}
            className="text-sm font-semibold text-[var(--color-riara-red)] hover:text-[var(--color-riara-red-dark)] transition-all duration-300 inline-flex items-center gap-1.5 group/link bg-[var(--color-riara-red)]/5 hover:bg-[var(--color-riara-red)]/10 px-3 py-1.5 rounded-md"
            data-testid={`link-read-full-${article.id}`}
          >
            Read full story
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
}

