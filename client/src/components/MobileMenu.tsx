import { X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white">
      {/* Header Bar */}
      <div className="bg-red-800 px-4 py-4">
        <div className="flex items-center justify-between text-white">
          <span className="text-xl font-bold">Riara University</span>
          <div className="flex items-center gap-4">
            <Button size="icon" variant="ghost" className="text-white hover:text-gray-300 hover:bg-white/10">
              <Search className="h-4 w-4" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="text-white hover:text-gray-300 hover:bg-white/10"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation Grid */}
      <div className="flex-1 p-4">
        <div className="grid grid-cols-2 gap-0 border border-gray-200 rounded-lg overflow-hidden">
          {/* Left Column */}
          <div className="flex flex-col">
            <a 
              href="/academics" 
              className="p-6 text-center border-b border-r border-gray-200 hover:bg-gray-50 transition-colors"
              onClick={onClose}
            >
              Academics
            </a>
            <a 
              href="/healthcare" 
              className="p-6 text-center border-b border-r border-gray-200 hover:bg-gray-50 transition-colors"
              onClick={onClose}
            >
              Health Care
            </a>
            <a 
              href="/athletics" 
              className="p-6 text-center border-b border-r border-gray-200 hover:bg-gray-50 transition-colors"
              onClick={onClose}
            >
              Athletics
            </a>
            <a 
              href="/about" 
              className="p-6 text-center border-b border-r border-gray-200 hover:bg-gray-50 transition-colors"
              onClick={onClose}
            >
              About
            </a>
            <a 
              href="/events" 
              className="p-6 text-center border-r border-gray-200 hover:bg-gray-50 transition-colors"
              onClick={onClose}
            >
              Events
            </a>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <a 
              href="/research" 
              className="p-6 text-center border-b border-gray-200 hover:bg-gray-50 transition-colors"
              onClick={onClose}
            >
              Research
            </a>
            <a 
              href="/campus-life" 
              className="p-6 text-center border-b border-gray-200 hover:bg-gray-50 transition-colors"
              onClick={onClose}
            >
              Campus Life
            </a>
            <a 
              href="/admission" 
              className="p-6 text-center border-b border-gray-200 hover:bg-gray-50 transition-colors"
              onClick={onClose}
            >
              Admission
            </a>
            <a 
              href="/news" 
              className="p-6 text-center border-b border-gray-200 hover:bg-gray-50 transition-colors"
              onClick={onClose}
            >
              News
            </a>
            <a 
              href="/arts" 
              className="p-6 text-center hover:bg-gray-50 transition-colors"
              onClick={onClose}
            >
              Arts
            </a>
          </div>
        </div>
      </div>

      {/* Information For Section */}
      <div className="bg-gray-100 p-4">
        <div className="text-center">
          <p className="text-sm font-medium text-gray-700 mb-3">Information for:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="https://students.ru.ac.ke/Login/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">Students</a>
            <a href="https://staff.ru.ac.ke/login" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">Faculty & Staff</a>
            <a href="https://odel.riarauniversity.ac.ke/?redirect=0" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">Virtual Campus</a>
            <a href="https://accounts.google.com/v3/signin/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">Student Email</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Alumni</a>
          </div>
        </div>
      </div>
    </div>
  );
}
