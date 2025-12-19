import { useState, useEffect, useMemo, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Search, Clock, FileText, Calendar, GraduationCap, Building2, Briefcase, Heart, Trophy, Users, Sparkles, ArrowRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: SearchResultType;
  url: string;
  category?: string;
  date?: string;
  time?: string;
  icon?: React.ReactNode;
  relevance?: number;
  content?: string;
  pageUrl?: string;
  pageTitle?: string;
}

type SearchResultType = 
  | "page"
  | "news"
  | "event"
  | "academic"
  | "school"
  | "career"
  | "campus-life"
  | "research"
  | "healthcare"
  | "athletics"
  | "arts";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Static page routes for search
const STATIC_PAGES: SearchResult[] = [
  { id: "academics", title: "Academics", description: "Undergraduate and graduate programs", type: "page", url: "/academics", pageUrl: "/academics", pageTitle: "Academics", icon: <GraduationCap className="h-4 w-4" /> },
  { id: "research", title: "Research", description: "Research centers and initiatives", type: "page", url: "/research", pageUrl: "/research", pageTitle: "Research", icon: <Sparkles className="h-4 w-4" /> },
  { id: "admission", title: "Admission", description: "Apply to Riara University", type: "page", url: "/admission", pageUrl: "/admission", pageTitle: "Admission", icon: <FileText className="h-4 w-4" /> },
  { id: "campus-life", title: "Student Life", description: "Campus activities and student resources", type: "page", url: "/campus-life", pageUrl: "/campus-life", pageTitle: "Student Life", icon: <Users className="h-4 w-4" /> },
  { id: "healthcare", title: "Health Care", description: "Health services and resources", type: "page", url: "/healthcare", pageUrl: "/healthcare", pageTitle: "Health Care", icon: <Heart className="h-4 w-4" /> },
  { id: "athletics", title: "Athletics", description: "Sports and athletic programs", type: "page", url: "/athletics", pageUrl: "/athletics", pageTitle: "Athletics", icon: <Trophy className="h-4 w-4" /> },
  { id: "careers", title: "Careers", description: "Job opportunities and career services", type: "page", url: "/careers", pageUrl: "/careers", pageTitle: "Careers", icon: <Briefcase className="h-4 w-4" /> },
  { id: "news", title: "News", description: "Latest university news and updates", type: "page", url: "/news", pageUrl: "/news", pageTitle: "News", icon: <FileText className="h-4 w-4" /> },
  { id: "events", title: "Events", description: "Upcoming events and activities", type: "page", url: "/events", pageUrl: "/events", pageTitle: "Events", icon: <Calendar className="h-4 w-4" /> },
  { id: "about", title: "About", description: "About Riara University", type: "page", url: "/about", pageUrl: "/about", pageTitle: "About", icon: <Building2 className="h-4 w-4" /> },
  { id: "partners", title: "Partners", description: "University partners and collaborations", type: "page", url: "/partners", pageUrl: "/partners", pageTitle: "Partners", icon: <Users className="h-4 w-4" /> },
];

const TYPE_LABELS: Record<SearchResultType, string> = {
  page: "Page",
  news: "News",
  event: "Event",
  academic: "Academic Program",
  school: "School",
  career: "Career",
  "campus-life": "Campus Life",
  research: "Research",
  healthcare: "Healthcare",
  athletics: "Athletics",
  arts: "Arts",
};

const TYPE_COLORS: Record<SearchResultType, string> = {
  page: "bg-blue-100 text-blue-800",
  news: "bg-purple-100 text-purple-800",
  event: "bg-orange-100 text-orange-800",
  academic: "bg-green-100 text-green-800",
  school: "bg-indigo-100 text-indigo-800",
  career: "bg-pink-100 text-pink-800",
  "campus-life": "bg-yellow-100 text-yellow-800",
  research: "bg-cyan-100 text-cyan-800",
  healthcare: "bg-red-100 text-red-800",
  athletics: "bg-emerald-100 text-emerald-800",
  arts: "bg-violet-100 text-violet-800",
};

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(null);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [, setLocation] = useLocation();

  // Fetch search results from API
  const { data: searchResults = [], isLoading: isSearching } = useQuery<SearchResult[]>({
    queryKey: ['/api/search', searchQuery],
    queryFn: async () => {
      if (!searchQuery.trim()) return [];
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
      if (!response.ok) throw new Error('Search failed');
      return response.json();
    },
    enabled: open && searchQuery.trim().length > 0,
    staleTime: 30000, // Cache for 30 seconds
  });

  // Load recent searches from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("riara-recent-searches");
    if (stored) {
      try {
        setRecentSearches(JSON.parse(stored));
      } catch {
        setRecentSearches([]);
      }
    }
  }, []);

  // Add icons to search results
  const resultsWithIcons = useMemo(() => {
    return searchResults.map((result) => {
      let icon = <FileText className="h-4 w-4" />;
      switch (result.type) {
        case "news":
          icon = <FileText className="h-4 w-4" />;
          break;
        case "event":
          icon = <Calendar className="h-4 w-4" />;
          break;
        case "academic":
          icon = <GraduationCap className="h-4 w-4" />;
          break;
        case "school":
          icon = <Building2 className="h-4 w-4" />;
          break;
        case "career":
          icon = <Briefcase className="h-4 w-4" />;
          break;
        case "campus-life":
          icon = <Users className="h-4 w-4" />;
          break;
        case "research":
          icon = <Sparkles className="h-4 w-4" />;
          break;
        case "healthcare":
          icon = <Heart className="h-4 w-4" />;
          break;
        case "athletics":
          icon = <Trophy className="h-4 w-4" />;
          break;
        case "arts":
          icon = <Sparkles className="h-4 w-4" />;
          break;
        case "page":
          icon = <FileText className="h-4 w-4" />;
          break;
      }
      return { ...result, icon };
    });
  }, [searchResults]);

  // Group results by type
  const groupedResults = useMemo(() => {
    const groups: Record<SearchResultType, SearchResult[]> = {
      page: [],
      news: [],
      event: [],
      academic: [],
      school: [],
      career: [],
      "campus-life": [],
      research: [],
      healthcare: [],
      athletics: [],
      arts: [],
    };

    resultsWithIcons.forEach((result) => {
      if (groups[result.type]) {
        groups[result.type].push(result);
      }
    });

    return Object.entries(groups).filter(([_, results]) => results.length > 0);
  }, [resultsWithIcons]);

  const handleSelect = useCallback((result: SearchResult) => {
    // Save to recent searches
    const updated = [result.title, ...recentSearches.filter(s => s !== result.title)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem("riara-recent-searches", JSON.stringify(updated));

    // Close search dialog first
    onOpenChange(false);
    setSearchQuery("");

    // Navigate to the page URL (the actual page, not the item link)
    // This ensures users see the full page with all content
    const targetUrl = result.pageUrl || result.url;
    
    // Small delay to ensure dialog closes before navigation
    setTimeout(() => {
      // Use wouter's setLocation for client-side navigation
      if (targetUrl && targetUrl.startsWith('/')) {
        setLocation(targetUrl);
      } else if (targetUrl && targetUrl.startsWith('http')) {
        // External links
        window.location.href = targetUrl;
      } else if (targetUrl) {
        // Relative paths
        setLocation(targetUrl);
      }
    }, 100);
  }, [recentSearches, onOpenChange, setLocation]);

  const handleClearRecent = useCallback(() => {
    setRecentSearches([]);
    localStorage.removeItem("riara-recent-searches");
  }, []);

  // Keyboard shortcut: Cmd/Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === 'Escape' && open) {
        onOpenChange(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 gap-0 overflow-hidden">
        <Command className="rounded-lg border-none" shouldFilter={false}>
          <div className="flex items-center border-b px-3">
            <CommandInput
              placeholder="Search pages, news, events, programs, and more..."
              value={searchQuery}
              onValueChange={setSearchQuery}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="ml-2 p-1 hover:bg-muted rounded"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <kbd className="pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 ml-2">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
          <CommandList className="max-h-[400px] overflow-y-auto">
            {!searchQuery && recentSearches.length > 0 && (
              <CommandGroup heading="Recent Searches">
                {recentSearches.map((search, idx) => (
                  <CommandItem
                    key={idx}
                    onSelect={() => setSearchQuery(search)}
                    className="flex items-center gap-2"
                  >
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{search}</span>
                  </CommandItem>
                ))}
                <CommandItem onSelect={handleClearRecent} className="text-muted-foreground">
                  <X className="h-4 w-4 mr-2" />
                  Clear recent searches
                </CommandItem>
              </CommandGroup>
            )}

            {!searchQuery && (
              <CommandGroup heading="Quick Links">
                {STATIC_PAGES.slice(0, 6).map((page) => (
                  <CommandItem
                    key={page.id}
                    onSelect={() => handleSelect(page)}
                    className="flex items-center gap-2"
                  >
                    {page.icon}
                    <span>{page.title}</span>
                    <Badge variant="outline" className="ml-auto text-xs">
                      {TYPE_LABELS[page.type]}
                    </Badge>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}

            {searchQuery && isSearching && (
              <CommandEmpty>
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent mb-4"></div>
                  <p className="text-sm font-medium">Searching...</p>
                </div>
              </CommandEmpty>
            )}

            {searchQuery && !isSearching && resultsWithIcons.length === 0 && (
              <CommandEmpty>
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <Search className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
                  <p className="text-sm font-medium mb-1">No results found</p>
                  <p className="text-xs text-muted-foreground">
                    Try searching for pages, news, events, or programs
                  </p>
                </div>
              </CommandEmpty>
            )}

            {searchQuery && !isSearching && resultsWithIcons.length > 0 && (
              <>
                {groupedResults.map(([type, results]) => (
                  <CommandGroup
                    key={type}
                    heading={
                      <div className="flex items-center gap-2">
                        <span>{TYPE_LABELS[type as SearchResultType]}</span>
                        <Badge variant="secondary" className="text-xs">
                          {results.length}
                        </Badge>
                      </div>
                    }
                  >
                    {results.map((result) => (
                      <CommandItem
                        key={result.id}
                        value={result.title}
                        onSelect={() => handleSelect(result)}
                        className="flex items-start gap-3 py-3 cursor-pointer"
                      >
                        <div className={cn(
                          "mt-0.5 p-1.5 rounded shrink-0",
                          TYPE_COLORS[result.type]
                        )}>
                          {result.icon || <FileText className="h-4 w-4" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="font-medium text-sm">{result.title}</span>
                            {result.date && (
                              <span className="text-xs text-muted-foreground">
                                {result.date}
                              </span>
                            )}
                            {result.pageTitle && (
                              <Badge variant="outline" className="text-xs">
                                {result.pageTitle}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2 mb-1">
                            {result.description}
                          </p>
                          {result.content && result.content !== result.description && (
                            <p className="text-xs text-muted-foreground/70 line-clamp-1 italic">
                              {result.content.substring(0, 100)}...
                            </p>
                          )}
                          <div className="flex items-center gap-2 mt-2 flex-wrap">
                            {result.category && (
                              <Badge variant="outline" className="text-xs">
                                {result.category}
                              </Badge>
                            )}
                            {result.pageUrl && (
                              <span className="text-xs text-[var(--color-riara-red)] flex items-center gap-1">
                                {result.pageTitle || "Page"}
                              </span>
                            )}
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                ))}
              </>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}

