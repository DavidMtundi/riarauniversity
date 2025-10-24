import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { NewsArticle } from "@shared/schema";

interface NewsSectionProps {
  articles: NewsArticle[];
}

export function NewsSection({ articles }: NewsSectionProps) {
  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured).slice(0, 5);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-wide text-primary font-semibold mb-2" data-testid="text-news-label">In the Spotlight</p>
          <h2 className="text-4xl font-serif font-bold" data-testid="text-news-heading">Latest News & Research</h2>
        </div>

        {featuredArticle && (
          <Card className="mb-8 overflow-hidden border-0 shadow-lg hover-elevate" data-testid="card-featured-article">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4" data-testid="badge-featured-category">{featuredArticle.category}</Badge>
                <h3 className="text-3xl font-serif font-semibold mb-4 leading-tight" data-testid="text-featured-title">
                  {featuredArticle.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed" data-testid="text-featured-excerpt">
                  {featuredArticle.excerpt}
                </p>
                <Button variant="ghost" className="p-0 h-auto font-semibold hover:bg-transparent" data-testid="button-featured-read-more">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {regularArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover-elevate cursor-pointer" data-testid={`card-article-${article.id}`}>
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3" data-testid={`badge-category-${article.id}`}>{article.category}</Badge>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2 leading-snug" data-testid={`text-title-${article.id}`}>
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed" data-testid={`text-excerpt-${article.id}`}>
                  {article.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" data-testid="button-more-news">
            More campus news <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
