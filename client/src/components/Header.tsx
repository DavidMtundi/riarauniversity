import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";
import { HEADER_LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

type HeaderVariant = "default" | "overlay";

interface HeaderProps {
  variant?: HeaderVariant;
}

export function Header({ variant = "default" }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
          "fixed top-0 w-full z-50 transition-colors duration-300",
          isOverlay
            ? "bg-gradient-to-b from-black/60 via-black/30 to-transparent shadow-none backdrop-blur-[2px]"
            : "bg-[var(--color-bg-primary)] shadow-riara"
        )}
      >
      {/* Top Bar - Riara Style */}
      <div
        className={cn(
          isOverlay
            ? "bg-gradient-to-b from-black/70 via-black/50 to-black/20"
            : "bg-[var(--color-bg-maroon)]"
        )}
      >
        <div className="w-full px-3 sm:px-4 md:px-6">
          <div className="flex h-12 sm:h-14 items-center justify-between text-white" style={{fontFamily: 'var(--font-family-primary)'}}>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
              <a
                href="/"
                className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold !text-white truncate no-underline hover:no-underline focus:no-underline active:no-underline visited:no-underline focus-visible:outline-none"
                data-testid="link-riara-home"
              >
                Riara University
              </a>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-white flex-shrink-0">
              {/* Information for links - hidden on mobile, shown on tablet+ */}
              <div className="hidden sm:flex items-center gap-2 md:gap-4 lg:gap-6">
                <span className="text-xs md:text-sm text-white">Information for:</span>
                <a href={HEADER_LINKS.students} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm !text-white hover:text-[var(--color-text-inverse-secondary)] transition-colors">Students</a>
                <a href={HEADER_LINKS.facultyStaff} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm !text-white hover:text-[var(--color-text-inverse-secondary)] transition-colors">Faculty & Staff</a>
                <a href={HEADER_LINKS.virtualCampus} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm !text-white hover:text-[var(--color-text-inverse-secondary)] transition-colors hidden md:inline">Virtual Campus</a>
                <a href={HEADER_LINKS.studentEmail} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm !text-white hover:text-[var(--color-text-inverse-secondary)] transition-colors hidden lg:inline">Student Email</a>
                <a href={HEADER_LINKS.alumni} className="text-xs md:text-sm !text-white hover:text-[var(--color-text-inverse-secondary)] transition-colors hidden lg:inline">Alumni</a>
                <a href={HEADER_LINKS.ruShop} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm !text-white hover:text-[var(--color-text-inverse-secondary)] transition-colors hidden xl:inline">Ru-Shop</a>
              </div>
              {/* Search button - hidden on very small mobile, shown on larger screens */}
              <Button size="icon" variant="ghost" className="hidden sm:flex text-white hover:text-[var(--color-text-inverse-secondary)] hover:bg-[var(--overlay-inverse-hover)]" data-testid="button-search">
                <Search className="h-4 w-4" />
              </Button>
              {/* Mobile menu button */}
              <Button 
                size="icon" 
                variant="ghost" 
                className="md:hidden text-white hover:text-[var(--color-text-inverse-secondary)] hover:bg-[var(--overlay-inverse-hover)] flex-shrink-0" 
                data-testid="button-menu-mobile"
                onClick={toggleMobileMenu}
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
          "hidden md:block border-b",
          isOverlay
            ? "bg-transparent border-white/20"
            : "bg-[var(--color-bg-primary)] border-[var(--color-border-secondary)]"
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
                { href: "/research", label: "Research", testId: "link-research" },
                { href: "/healthcare", label: "Health Care", testId: "link-healthcare" },
                { href: "/campus-life", label: "Campus Life", testId: "link-campus-life" },
                { href: "/athletics", label: "Athletics", testId: "link-athletics" },
                { href: "/admission", label: "Admission", testId: "link-admission" },
                { href: "/about", label: "About", testId: "link-about" },
                { href: "/news", label: "News", testId: "link-news" },
                { href: "/events", label: "Events", testId: "link-events" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm lg:text-base xl:text-lg font-bold no-underline hover:no-underline transition-colors border-b-2 border-transparent",
                    isOverlay
                      ? "text-white hover:text-white hover:border-white/80"
                      : "text-[var(--color-text-primary)] hover:text-[var(--color-stanford-red)] hover:border-[var(--color-stanford-red)]"
                  )}
                  data-testid={link.testId}
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
    <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}
