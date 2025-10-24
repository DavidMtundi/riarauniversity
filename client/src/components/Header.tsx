import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2" data-testid="link-home">
              <div className="text-2xl font-bold text-primary font-serif">STANFORD</div>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-about">About</a>
              <a href="#academics" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-academics">Academics</a>
              <a href="#research" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-research">Research</a>
              <a href="#campus-life" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-campus-life">Campus Life</a>
              <a href="#admission" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-admission">Admission</a>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost" data-testid="button-search">
              <Search className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="md:hidden" data-testid="button-menu">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
