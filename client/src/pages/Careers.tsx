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
import { Search, Briefcase, ChevronUp, ChevronDown, X, ArrowRight, MapPin, Clock, Calendar } from "lucide-react";
import type { Career } from "@shared/schema";

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
        <main className="flex-1 flex items-center justify-center pt-12 sm:pt-14 md:pt-24">
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
        <main className="flex-1 flex items-center justify-center pt-12 sm:pt-14 md:pt-24">
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
      <main className="flex-1 pt-12 sm:pt-14 md:pt-24">
        {/* Hero Banner Section */}
        <section className="relative min-h-[450px] md:min-h-[550px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[url('https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-stanford-red)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-stanford-red)]/5 rounded-full blur-3xl"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 w-full">
            <Container>
              <div className="max-w-5xl mx-auto px-4">
                {/* Title with Subtitle */}
                <div className="text-center mb-10 md:mb-12">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 leading-tight">
                    Careers at Riara
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light max-w-2xl mx-auto">
                    Join our community of scholars, innovators, and leaders shaping the future of education
                  </p>
                </div>
                
                {/* Enhanced Search Bar */}
                <div className="max-w-3xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative group">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-[var(--color-stanford-red)] transition-colors" />
                      <Input
                        type="text"
                        placeholder="Search jobs by title, department, or keyword..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-12 pr-4 py-6 md:py-7 text-base md:text-lg bg-white/95 backdrop-blur-sm border-2 border-white/50 rounded-xl focus:ring-2 focus:ring-[var(--color-stanford-red)] focus:border-[var(--color-stanford-red)] shadow-xl transition-all"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            document.getElementById('job-listings')?.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      />
                    </div>
                    <Button
                      onClick={() => {
                        document.getElementById('job-listings')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-[var(--color-stanford-red)] text-white hover:bg-[var(--color-stanford-red-dark)] px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-semibold rounded-xl whitespace-nowrap shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                    >
                      Search
                    </Button>
                  </div>
                  
                  {/* Quick Search Suggestions */}
                  {!searchQuery && JOB_TYPES.length > 0 && (
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                      <span className="text-sm text-white/70">Popular:</span>
                      {JOB_TYPES.slice(0, 4).map((type) => (
                        <button
                          key={type}
                          onClick={() => {
                            setSelectedJobTypes([type]);
                            document.getElementById('job-listings')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="px-3 py-1 text-sm text-white/90 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all border border-white/20"
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/* Informational Text Section */}
        <section className="bg-gradient-to-b from-white to-[var(--color-bg-secondary)]/30 py-10 md:py-12">
          <Container>
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Thank you for your interest in Riara University. We are actively recruiting for positions 
                across our academic and administrative departments. Explore opportunities to join our 
                community of scholars, innovators, and leaders.
              </p>
            </div>
            
            {/* Employment Policy Statement */}
            <div className="bg-white rounded-xl border-l-4 border-[var(--color-stanford-red)] p-6 md:p-8 shadow-sm">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                  Employment Policy Statement
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  In line with its values and the Employment Act 2007 provisions, Riara University is an <strong className="text-[var(--color-text-primary)]">Equal Opportunity Employer</strong> who strives to promote good and fair employment practices which are intended to achieve the most effective use of all its human resources by tapping the widest sources of talent and eliminating all types of unfair discrimination based on race, colour, sex, language, religion, political or other opinion, nationality, ethnic or social origin, disability, pregnancy, or HIV status.
                </p>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Particular attention will be paid to monitoring the recruitment process. It is the policy of Riara University that <strong className="text-[var(--color-text-primary)]">performance is linked to rewards</strong>.
                </p>
                <div className="bg-[var(--color-bg-secondary)] p-4 rounded-lg mt-4">
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                    <strong className="text-[var(--color-text-primary)]">The Importance of Employees to Riara University:</strong> It is now universally recognized that the people in the organization provide the most important competitive advantage of that organization. The concept of "talent management" has been developed to summarize the aim of human resource management policies and practices of searching, identifying, attracting, acquiring, developing, motivating and retaining the organization's key employees who create and sustain the organization's competitive edge.
                  </p>
                </div>
            </div>
          </Container>
        </section>

        {/* Page Header */}
        <section className="bg-gradient-to-b from-white to-[var(--color-bg-secondary)]/30 border-b border-gray-200 py-8 md:py-10" id="job-listings">
          <Container>
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-2">
                    All Jobs
                  </h2>
                  <div className="flex items-center gap-4">
                    <p className="text-base text-[var(--color-text-secondary)]">
                      <span className="font-semibold text-[var(--color-stanford-red)]">{filteredCareers.length}</span> {filteredCareers.length === 1 ? 'open position' : 'open positions'}
                      {hasActiveFilters && (
                        <span className="ml-2 text-sm">matching your filters</span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearFilters}
                    className="text-[var(--color-stanford-red)] hover:text-white hover:bg-[var(--color-stanford-red)] border-[var(--color-stanford-red)]/30"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Clear filters
                  </Button>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* Main Content - Two Column Layout */}
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-[var(--color-bg-secondary)]/20">
          <Container>
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
                {/* Left Sidebar - Filters */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-1 w-12 bg-[var(--color-stanford-red)]"></div>
                        <h2 className="text-xl font-serif font-bold text-[var(--color-text-primary)]">
                          Refine Search
                        </h2>
                      </div>
                      <div className="border-b-2 border-gray-200 mb-6"></div>
                    </div>

                    {/* Category Filter */}
                    <div className="mb-8 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                      <button
                        onClick={() => toggleCategory('category')}
                        className="w-full flex items-center justify-between text-left mb-4 text-base font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-stanford-red)] transition-colors"
                      >
                        <span>Job Category</span>
                        {expandedCategories.category ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </button>
                      
                      {expandedCategories.category && (
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
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
                              className="text-sm text-[var(--color-text-secondary)] cursor-pointer font-medium"
                            >
                              All Categories
                            </Label>
                          </div>
                          {JOB_TYPES.map((type) => (
                            <div key={type} className="flex items-center space-x-3">
                              <Checkbox
                                id={`category-${type}`}
                                checked={selectedJobTypes.includes(type)}
                                onCheckedChange={() => handleJobTypeToggle(type)}
                              />
                              <Label
                                htmlFor={`category-${type}`}
                                className="text-sm text-[var(--color-text-secondary)] cursor-pointer font-normal flex-1"
                              >
                                {type} <span className="text-xs text-gray-400 ml-1">({categoryCounts[type] || 0})</span>
                              </Label>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Employment Type Filter */}
                    <div className="mb-8 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                      <button
                        onClick={() => toggleCategory('employment')}
                        className="w-full flex items-center justify-between text-left mb-4 text-base font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-stanford-red)] transition-colors"
                      >
                        <span>Employment Type</span>
                        {expandedCategories.employment ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </button>
                      
                      {expandedCategories.employment && (
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
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
                              className="text-sm text-[var(--color-text-secondary)] cursor-pointer font-medium"
                            >
                              All Types
                            </Label>
                          </div>
                          {EMPLOYMENT_TYPES.map((type) => (
                            <div key={type} className="flex items-center space-x-3">
                              <Checkbox
                                id={`employment-${type}`}
                                checked={selectedEmploymentTypes.includes(type)}
                                onCheckedChange={() => handleEmploymentTypeToggle(type)}
                              />
                              <Label
                                htmlFor={`employment-${type}`}
                                className="text-sm text-[var(--color-text-secondary)] cursor-pointer font-normal flex-1"
                              >
                                {type} <span className="text-xs text-gray-400 ml-1">({employmentTypeCounts[type] || 0})</span>
                              </Label>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column - Job Listings */}
                <div className="lg:col-span-3">
                  {filteredCareers.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-200">
                      <div className="mb-6">
                        <Briefcase className="h-24 w-24 mx-auto text-gray-300" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-3">
                        No positions found
                      </h3>
                      <p className="text-lg text-[var(--color-text-secondary)] mb-6 max-w-md mx-auto">
                        {hasActiveFilters
                          ? "No positions match your current filters. Try adjusting your search criteria."
                          : "There are currently no open positions. Please check back later."}
                      </p>
                      {hasActiveFilters && (
                        <Button 
                          variant="outline" 
                          onClick={clearFilters}
                          className="border-2 border-[var(--color-stanford-red)] text-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red)] hover:text-white"
                        >
                          <X className="h-4 w-4 mr-2" />
                          Clear all filters
                        </Button>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredCareers.map((career, index) => (
                        <div
                          key={career.id}
                          className="group bg-white rounded-xl border-2 border-gray-200 hover:border-[var(--color-stanford-red)]/50 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                          onClick={() => setLocation(`/careers/${career.id}`)}
                        >
                          <div className="p-6 md:p-8">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                  <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-[var(--color-stanford-red)]/10 text-[var(--color-stanford-red)] rounded-full">
                                    {career.type}
                                  </span>
                                  {career.time && (
                                    <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-[var(--color-text-secondary)] rounded-full flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      {career.time}
                                    </span>
                                  )}
                                </div>
                                <h3 className="text-xl md:text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-stanford-red)] transition-colors duration-300">
                                  {career.title}
                                </h3>
                                <div className="flex items-center gap-4 text-sm text-[var(--color-text-secondary)] mb-4">
                                  {career.date && (
                                    <div className="flex items-center gap-1.5">
                                      <Calendar className="h-4 w-4" />
                                      <span>{career.date}</span>
                                    </div>
                                  )}
                                  <div className="flex items-center gap-1.5">
                                    <MapPin className="h-4 w-4" />
                                    <span>Nairobi, Kenya</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 text-[var(--color-stanford-red)] font-semibold group-hover:gap-3 transition-all duration-300">
                                  <span>View Details</span>
                                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                              </div>
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

        {/* Newsletter Subscription Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[var(--color-stanford-red)] to-[var(--color-stanford-red-dark)] text-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
                  Stay Updated
                </h2>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                  Subscribe to our career newsletter and be the first to know about new opportunities at Riara University
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 py-6 text-base bg-white/95 border-0 rounded-lg focus:ring-2 focus:ring-white/50"
                />
                <Button
                  className="bg-white text-[var(--color-stanford-red)] hover:bg-white/90 px-8 py-6 text-base font-semibold rounded-lg whitespace-nowrap shadow-lg"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
