import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RiaraLogo, RiaraLogoFallback } from "./RiaraLogo";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";
import { HEADER_LINKS } from "@/lib/links";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-[var(--color-bg-primary)] shadow-riara z-50">
      {/* Top Bar - Riara Style */}
      <div className="bg-[var(--color-bg-maroon)]">
        <div className="w-full px-4 sm:px-6">
          <div className="flex h-12 sm:h-14 items-center justify-between text-white" style={{fontFamily: 'var(--font-family-primary)'}}>
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="/" className="text-lg sm:text-2xl md:text-3xl font-bold !text-white hover:text-[var(--color-text-inverse-secondary)] transition-colors cursor-pointer" data-testid="link-riara-home">
                Riara University
              </a>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 text-white">
              <div className="flex items-center gap-2 md:gap-4 lg:gap-6 overflow-x-auto whitespace-nowrap pr-2 sm:pr-0">
                <span className="text-xs md:text-sm flex-shrink-0 text-white">Information for:</span>
                <a href={HEADER_LINKS.students} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm !text-white hover:text-[var(--color-text-inverse-secondary)] transition-colors flex-shrink-0">Students</a>
                <a href={HEADER_LINKS.facultyStaff} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm !text-white hover:text-[var(--color-text-inverse-secondary)] transition-colors flex-shrink-0">Faculty & Staff</a>
                <a href={HEADER_LINKS.virtualCampus} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm !text-white hover:text-[var(--color-text-inverse-secondary)] transition-colors flex-shrink-0">Virtual Campus</a>
                <a href={HEADER_LINKS.studentEmail} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm !text-white hover:text-[var(--color-text-inverse-secondary)] transition-colors flex-shrink-0">Student Email</a>
                <a href={HEADER_LINKS.alumni} className="text-xs md:text-sm !text-white hover:text-[var(--color-text-inverse-secondary)] transition-colors flex-shrink-0">Alumni</a>
                <a href={HEADER_LINKS.ruShop} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm !text-white hover:text-[var(--color-text-inverse-secondary)] transition-colors flex-shrink-0">Ru-Shop</a>
              </div>
              <Button size="icon" variant="ghost" className="text-white hover:text-[var(--color-text-inverse-secondary)] hover:bg-[var(--overlay-inverse-hover)]" data-testid="button-search">
                <Search className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="md:hidden text-white hover:text-[var(--color-text-inverse-secondary)] hover:bg-[var(--overlay-inverse-hover)]" 
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
      <div className="hidden md:block bg-[var(--color-bg-primary)] border-b border-[var(--color-border-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex h-16 items-center justify-center" style={{fontFamily: 'var(--font-family-primary)'}}>
            <nav className="flex items-center gap-6 lg:gap-8 xl:gap-10 text-[var(--color-text-primary)]">
              <a href="/academics" className="text-sm lg:text-base xl:text-lg font-bold no-underline hover:no-underline hover:text-[var(--color-stanford-red)] hover:border-b-2 hover:border-[var(--color-stanford-red)] transition-colors" data-testid="link-academics">Academics</a>
              <a href="/research" className="text-sm lg:text-base xl:text-lg font-bold no-underline hover:no-underline hover:text-[var(--color-stanford-red)] hover:border-b-2 hover:border-[var(--color-stanford-red)] transition-colors" data-testid="link-research">Research</a>
              <a href="/healthcare" className="text-sm lg:text-base xl:text-lg font-bold no-underline hover:no-underline hover:text-[var(--color-stanford-red)] hover:border-b-2 hover:border-[var(--color-stanford-red)] transition-colors" data-testid="link-healthcare">Health Care</a>
              <a href="/campus-life" className="text-sm lg:text-base xl:text-lg font-bold no-underline hover:no-underline hover:text-[var(--color-stanford-red)] hover:border-b-2 hover:border-[var(--color-stanford-red)] transition-colors" data-testid="link-campus-life">Campus Life</a>
              <a href="/athletics" className="text-sm lg:text-base xl:text-lg font-bold no-underline hover:no-underline hover:text-[var(--color-stanford-red)] hover:border-b-2 hover:border-[var(--color-stanford-red)] transition-colors" data-testid="link-athletics">Athletics</a>
              <a href="/admission" className="text-sm lg:text-base xl:text-lg font-bold no-underline hover:no-underline hover:text-[var(--color-stanford-red)] hover:border-b-2 hover:border-[var(--color-stanford-red)] transition-colors" data-testid="link-admission">Admission</a>
              <a href="/about" className="text-sm lg:text-base xl:text-lg font-bold no-underline hover:no-underline hover:text-[var(--color-stanford-red)] hover:border-b-2 hover:border-[var(--color-stanford-red)] transition-colors" data-testid="link-about">About</a>
              <a href="/news" className="text-sm lg:text-base xl:text-lg font-bold no-underline hover:no-underline hover:text-[var(--color-stanford-red)] hover:border-b-2 hover:border-[var(--color-stanford-red)] transition-colors" data-testid="link-news">News</a>
              <a href="/events" className="text-sm lg:text-base xl:text-lg font-bold no-underline hover:no-underline hover:text-[var(--color-stanford-red)] hover:border-b-2 hover:border-[var(--color-stanford-red)] transition-colors" data-testid="link-events">Events</a>
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
