import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";
import { SearchDialog } from "./SearchDialog";
import { useState } from "react";
import { HEADER_LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

type HeaderVariant = "default" | "overlay";

interface HeaderProps {
  variant?: HeaderVariant;
}

export function Header({ variant = "default" }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isOverlay = variant === "overlay";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-50 transition-colors duration-300",
          isOverlay
            ? "bg-gradient-to-b from-black/60 via-black/30 to-transparent shadow-none backdrop-blur-[2px]"
            : "md:bg-[var(--color-bg-primary)] bg-[var(--color-bg-maroon)] md:shadow-riara"
        )}
        style={{ touchAction: 'manipulation' }}
      >
      {/* Top Bar - Riara Style */}
      <div
        className={cn(
          "w-full",
          isOverlay
          ? "text-white"
          : "bg-[var(--color-bg-maroon)]"
        )}
      >
        <div className="w-full px-3 sm:px-4 md:px-6">
          <div className="flex h-12 sm:h-14 items-center justify-between text-white" style={{fontFamily: 'var(--font-family-primary)'}}>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
              <a
                href="/"
                className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold !text-white truncate no-underline hover:no-underline focus:no-underline active:no-underline visited:no-underline focus-visible:outline-none touch-manipulation"
                data-testid="link-riara-home"
                style={{ touchAction: 'manipulation' }}
              >
                Riara University
              </a>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-white flex-shrink-0">
              {/* Information for links - hidden on mobile, shown on tablet+ */}
              <div className="hidden sm:flex items-center gap-2 md:gap-4 lg:gap-6">
                <a href="/admission" className="text-xs md:text-sm !text-white hover:text-[var(--color-text-inverse-secondary)] transition-colors touch-manipulation" style={{ touchAction: 'manipulation' }} data-testid="link-future-students">Future Students</a>
                <a href={HEADER_LINKS.students} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm !text-white hover:text-[var(--color-text-inverse-secondary)] transition-colors touch-manipulation" style={{ touchAction: 'manipulation' }}>Current Students</a>
                <a href={HEADER_LINKS.facultyStaff} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm !text-white hover:text-[var(--color-text-inverse-secondary)] transition-colors touch-manipulation" style={{ touchAction: 'manipulation' }}>Faculty & Staff</a>
                <a href="https://library.riarauniversity.ac.ke/" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm !text-white hover:text-[var(--color-text-inverse-secondary)] transition-colors font-semibold touch-manipulation" style={{ touchAction: 'manipulation' }}>Library</a>
                <a href={HEADER_LINKS.virtualCampus} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm !text-white hover:text-[var(--color-text-inverse-secondary)] transition-colors hidden md:inline touch-manipulation" style={{ touchAction: 'manipulation' }}>Virtual Campus</a>
                <a href={HEADER_LINKS.studentEmail} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm !text-white hover:text-[var(--color-text-inverse-secondary)] transition-colors hidden lg:inline touch-manipulation" style={{ touchAction: 'manipulation' }}>Student Email</a>
                <a href={HEADER_LINKS.alumni} className="text-xs md:text-sm !text-white hover:text-[var(--color-text-inverse-secondary)] transition-colors hidden lg:inline touch-manipulation" style={{ touchAction: 'manipulation' }}>Alumni</a>
                <a href={HEADER_LINKS.ruShop} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm !text-white hover:text-[var(--color-text-inverse-secondary)] transition-colors hidden xl:inline touch-manipulation" style={{ touchAction: 'manipulation' }}>Ru-Shop</a>
              </div>
              {/* Search button - hidden on very small mobile, shown on larger screens */}
              <Button 
                size="icon" 
                variant="ghost" 
                className="hidden sm:flex text-white hover:text-[var(--color-text-inverse-secondary)] hover:bg-[var(--overlay-inverse-hover)] touch-manipulation" 
                data-testid="button-search"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsSearchOpen(true);
                }}
                style={{ touchAction: 'manipulation' }}
              >
                <Search className="h-4 w-4" />
              </Button>
              {/* Mobile menu button */}
              <Button 
                size="icon" 
                variant="ghost" 
                className="md:hidden text-white hover:text-[var(--color-text-inverse-secondary)] hover:bg-[var(--overlay-inverse-hover)] flex-shrink-0 touch-manipulation" 
                data-testid="button-menu-mobile"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleMobileMenu();
                }}
                style={{ touchAction: 'manipulation' }}
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation - Desktop Only */}
      <div
        className={cn(
          "hidden md:block",
          isOverlay
            ? "bg-transparent"
            : "bg-[var(--color-bg-primary)]"
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex h-16 items-center justify-center" style={{fontFamily: 'var(--font-family-primary)'}}>
            <nav
              className={cn(
                "flex items-center gap-6 lg:gap-8 xl:gap-10",
                isOverlay ? "text-white" : "text-[var(--color-text-primary)]"
              )}
            >
              {[
                { href: "/academics", label: "Academics", testId: "link-academics" },
                { href: "/admission", label: "Admission", testId: "link-admission" },
                { href: "/campus-life", label: "Student Life", testId: "link-campus-life" },
                { href: "/research", label: "Research", testId: "link-research" },
                { href: "/news-events", label: "News & Events", testId: "link-news-events" },
                { href: "/healthcare", label: "Health Care", testId: "link-healthcare" },
                { href: "/athletics", label: "Athletics", testId: "link-athletics" },
                { href: "/careers", label: "Careers", testId: "link-careers" },
                { href: "/about", label: "About", testId: "link-about" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-base lg:text-lg xl:text-xl font-bold no-underline hover:no-underline transition-colors touch-manipulation",
                    isOverlay
                      ? "!text-white hover:!text-white"
                      : "text-[var(--color-riara-red)] hover:text-[var(--color-riara-red-dark)]"
                  )}
                  data-testid={link.testId}
                  style={{ touchAction: 'manipulation' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
    
    {/* Mobile Menu Overlay */}
    <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} onSearchOpen={() => setIsSearchOpen(true)} />
    
    {/* Search Dialog */}
    <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </>
  );
}
