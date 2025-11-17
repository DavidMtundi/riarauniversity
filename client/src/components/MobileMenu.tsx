import { X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HEADER_LINKS } from "@/lib/links";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[var(--color-bg-primary)]">
      {/* Header Bar */}
      <div className="bg-[var(--color-bg-maroon)] px-4 py-4">
        <div className="flex items-center justify-between text-[var(--color-text-inverse)]">
          <span className="text-xl font-bold text-[var(--color-text-inverse)]">Riara University</span>
          <div className="flex items-center gap-4">
            <Button size="icon" variant="ghost" className="text-[var(--color-text-inverse)] hover:text-[var(--color-text-inverse-secondary)] hover:bg-[var(--overlay-inverse-hover)]">
              <Search className="h-4 w-4" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="text-[var(--color-text-inverse)] hover:text-[var(--color-text-inverse-secondary)] hover:bg-[var(--overlay-inverse-hover)]"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation Grid */}
      <div className="flex-1 p-4">
        <div className="grid grid-cols-2 gap-0 border border-[var(--color-border-secondary)] rounded-lg overflow-hidden">
          {/* Left Column */}
          <div className="flex flex-col">
            <a 
              href="/academics" 
              className="p-6 text-center border-b border-r border-[var(--color-border-secondary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
              onClick={onClose}
            >
              Academics
            </a>
            <a 
              href="/healthcare" 
              className="p-6 text-center border-b border-r border-[var(--color-border-secondary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
              onClick={onClose}
            >
              Health Care
            </a>
            <a 
              href="/athletics" 
              className="p-6 text-center border-b border-r border-[var(--color-border-secondary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
              onClick={onClose}
            >
              Athletics
            </a>
            <a 
              href="/about" 
              className="p-6 text-center border-b border-r border-[var(--color-border-secondary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
              onClick={onClose}
            >
              About
            </a>
            <a 
              href="/events" 
              className="p-6 text-center border-r border-[var(--color-border-secondary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
              onClick={onClose}
            >
              Events
            </a>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <a 
              href="/research" 
              className="p-6 text-center border-b border-[var(--color-border-secondary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
              onClick={onClose}
            >
              Research
            </a>
            <a 
              href="/campus-life" 
              className="p-6 text-center border-b border-[var(--color-border-secondary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
              onClick={onClose}
            >
              Campus Life
            </a>
            <a 
              href="/admission" 
              className="p-6 text-center border-b border-[var(--color-border-secondary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
              onClick={onClose}
            >
              Admission
            </a>
            <a 
              href="/news" 
              className="p-6 text-center border-b border-[var(--color-border-secondary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
              onClick={onClose}
            >
              News
            </a>
            <a 
              href="/arts" 
              className="p-6 text-center hover:bg-[var(--color-bg-secondary)] transition-colors"
              onClick={onClose}
            >
              Arts
            </a>
          </div>
        </div>
      </div>

      {/* Information For Section */}
      <div className="bg-[var(--color-bg-secondary)] p-4">
        <div className="text-center">
          <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">Information for:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[var(--color-text-tertiary)]">
            <a href={HEADER_LINKS.students} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-primary)] transition-colors">Students</a>
            <a href={HEADER_LINKS.facultyStaff} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-primary)] transition-colors">Faculty & Staff</a>
            <a href={HEADER_LINKS.virtualCampus} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-primary)] transition-colors">Virtual Campus</a>
            <a href={HEADER_LINKS.studentEmail} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-primary)] transition-colors">Student Email</a>
            <a href={HEADER_LINKS.alumni} className="hover:text-[var(--color-text-primary)] transition-colors">Alumni</a>
            <a href={HEADER_LINKS.ruShop} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-primary)] transition-colors">Ru-Shop</a>
          </div>
        </div>
      </div>
    </div>
  );
}
