import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { RetryButton } from "@/components/RetryButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Search, Briefcase, ChevronUp, ChevronDown, X } from "lucide-react";
import type { Event } from "@shared/schema";

// Career uses Event interface for now
type Career = Event;

const EMPLOYMENT_TYPES = ["Full-time", "Contract", "Part-time", "Temporary"] as const;
const JOB_TYPES = ["Faculty", "Research", "Administration", "Staff"] as const;

export default function Careers() {
  const [, setLocation] = useLocation();
  const { data: careers = [], isLoading: careersLoading, error: careersError } = useQuery<Career[]>({
    queryKey: ['/api/careers']
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEmploymentTypes, setSelectedEmploymentTypes] = useState<string[]>([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    category: true,
    employment: true,
  });

  // Get counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    JOB_TYPES.forEach(type => {
      counts[type] = careers.filter(c => c.type === type).length;
    });
    return counts;
  }, [careers]);

  const employmentTypeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    EMPLOYMENT_TYPES.forEach(type => {
      counts[type] = careers.filter(c => (c.time || "") === type).length;
    });
    return counts;
  }, [careers]);

  // Filter careers based on search and filters
  const filteredCareers = useMemo(() => {
    return careers.filter(career => {
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          career.title.toLowerCase().includes(query) ||
          career.type.toLowerCase().includes(query) ||
          career.date.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Employment type filter
      if (selectedEmploymentTypes.length > 0) {
        const employmentType = career.time || "";
        if (!selectedEmploymentTypes.includes(employmentType)) return false;
      }

      // Job type filter
      if (selectedJobTypes.length > 0) {
        if (!selectedJobTypes.includes(career.type)) return false;
      }

      return true;
    });
  }, [careers, searchQuery, selectedEmploymentTypes, selectedJobTypes]);

  const handleEmploymentTypeToggle = (type: string) => {
    setSelectedEmploymentTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleJobTypeToggle = (type: string) => {
    setSelectedJobTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedEmploymentTypes([]);
    setSelectedJobTypes([]);
  };

  const hasActiveFilters = searchQuery.trim() !== "" || selectedEmploymentTypes.length > 0 || selectedJobTypes.length > 0;
  const allCategoriesSelected = selectedJobTypes.length === 0;
  const allEmploymentSelected = selectedEmploymentTypes.length === 0;

  if (careersLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-24">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--color-stanford-red)] border-r-transparent mb-4"></div>
            <p className="text-[var(--color-text-secondary)]">Loading Careers...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (careersError) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-24">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="mb-4 text-[var(--color-stanford-red)]">
              <svg className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-2">Unable to Load Careers</h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
              We're experiencing technical difficulties loading our current career opportunities.
            </p>
            <RetryButton
              onClick={() => window.location.reload()}
              data-testid="button-reload"
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero Banner Section */}
        <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[url('/riara-logo.jpeg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 w-full">
            <Container>
              <div className="max-w-4xl mx-auto px-4">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8">
                  Careers at Riara
                </h1>
                
                {/* Search Bar */}
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Find jobs by keyword"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 pr-4 py-6 text-base bg-white border-white rounded-lg focus:ring-2 focus:ring-white"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          // Search is already handled by the filter
                        }
                      }}
                    />
                  </div>
                  <Button
                    onClick={() => {
                      // Search is handled by the filter, but we can scroll to results
                      document.getElementById('job-listings')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-[var(--color-stanford-red)] text-white hover:bg-[var(--color-stanford-red-dark)] px-8 py-6 text-base font-semibold rounded-lg whitespace-nowrap"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/* Informational Text Section */}
        <section className="bg-white py-8">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                Thank you for your interest in Riara University. We are actively recruiting for positions 
                across our academic and administrative departments. Explore opportunities to join our 
                community of scholars, innovators, and leaders.
              </p>
            </div>
          </Container>
        </section>

        {/* Page Header */}
        <section className="bg-white border-b py-6" id="job-listings">
          <Container>
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-stanford-red)] mb-2">
                All jobs
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)]">
                All locations
              </p>
            </div>
          </Container>
        </section>

        {/* Main Content - Two Column Layout */}
        <section className="py-8 bg-white">
          <Container>
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Left Sidebar - Filters */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <div className="mb-6">
                      <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
                        Refine Search Results
                      </h2>
                      <div className="border-b border-gray-200 mb-4"></div>
                    </div>

                    {/* Category Filter */}
                    <div className="mb-6">
                      <button
                        onClick={() => toggleCategory('category')}
                        className="w-full flex items-center justify-between text-left mb-3 text-sm font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-stanford-red)] transition-colors"
                      >
                        <span>Category</span>
                        {expandedCategories.category ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                      
                      {expandedCategories.category && (
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="category-all"
                              checked={allCategoriesSelected}
                              onCheckedChange={() => {
                                if (!allCategoriesSelected) {
                                  setSelectedJobTypes([]);
                                }
                              }}
                            />
                            <Label
                              htmlFor="category-all"
                              className="text-sm text-[var(--color-text-secondary)] cursor-pointer font-normal"
                            >
                              All
                            </Label>
                          </div>
                          {JOB_TYPES.map((type) => (
                            <div key={type} className="flex items-center space-x-2">
                              <Checkbox
                                id={`category-${type}`}
                                checked={selectedJobTypes.includes(type)}
                                onCheckedChange={() => handleJobTypeToggle(type)}
                              />
                              <Label
                                htmlFor={`category-${type}`}
                                className="text-sm text-[var(--color-text-secondary)] cursor-pointer font-normal"
                              >
                                {type} ({categoryCounts[type] || 0})
                              </Label>
                            </div>
                          ))}
                          <button className="text-sm text-[var(--color-stanford-red)] hover:underline mt-2">
                            View More
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Employment Type Filter */}
                    <div className="mb-6">
                      <button
                        onClick={() => toggleCategory('employment')}
                        className="w-full flex items-center justify-between text-left mb-3 text-sm font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-stanford-red)] transition-colors"
                      >
                        <span>Employment Type</span>
                        {expandedCategories.employment ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                      
                      {expandedCategories.employment && (
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="employment-all"
                              checked={allEmploymentSelected}
                              onCheckedChange={() => {
                                if (!allEmploymentSelected) {
                                  setSelectedEmploymentTypes([]);
                                }
                              }}
                            />
                            <Label
                              htmlFor="employment-all"
                              className="text-sm text-[var(--color-text-secondary)] cursor-pointer font-normal"
                            >
                              All
                            </Label>
                          </div>
                          {EMPLOYMENT_TYPES.map((type) => (
                            <div key={type} className="flex items-center space-x-2">
                              <Checkbox
                                id={`employment-${type}`}
                                checked={selectedEmploymentTypes.includes(type)}
                                onCheckedChange={() => handleEmploymentTypeToggle(type)}
                              />
                              <Label
                                htmlFor={`employment-${type}`}
                                className="text-sm text-[var(--color-text-secondary)] cursor-pointer font-normal"
                              >
                                {type} ({employmentTypeCounts[type] || 0})
                              </Label>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Clear Filters */}
                    {hasActiveFilters && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearFilters}
                        className="text-[var(--color-stanford-red)] hover:text-[var(--color-stanford-red-dark)]"
                      >
                        <X className="h-4 w-4 mr-2" />
                        Clear filters
                      </Button>
                    )}
                  </div>
                </div>

                {/* Right Column - Job Listings */}
                <div className="lg:col-span-3">
                  <div className="mb-6">
                    <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                      Showing {filteredCareers.length} {filteredCareers.length === 1 ? 'Open Role' : 'Open Roles'}
                    </h2>
                  </div>

                  {filteredCareers.length === 0 ? (
                    <div className="text-center py-12">
                      <Briefcase className="h-12 w-12 mx-auto mb-4 text-[var(--color-text-secondary)]" />
                      <h3 className="text-xl font-serif font-semibold text-[var(--color-text-primary)] mb-2">
                        No positions found
                      </h3>
                      <p className="text-[var(--color-text-secondary)] mb-4">
                        {hasActiveFilters
                          ? "Try adjusting your search or filters to see more results."
                          : "There are currently no open positions. Please check back later."}
                      </p>
                      {hasActiveFilters && (
                        <Button variant="outline" onClick={clearFilters}>
                          Clear filters
                        </Button>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-0">
                      {filteredCareers.map((career, index) => (
                        <div
                          key={career.id}
                          className={`py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer ${
                            index === 0 ? 'border-t' : ''
                          }`}
                          onClick={() => setLocation(`/careers/${career.id}`)}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <p className="text-xs uppercase tracking-wide text-[var(--color-text-secondary)] mb-2">
                                {career.type}
                              </p>
                              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2 hover:text-[var(--color-stanford-red)] transition-colors">
                                {career.title}
                              </h3>
                              <p className="text-sm text-[var(--color-text-secondary)]">
                                {career.date}
                                {career.time && ` • ${career.time}`}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
