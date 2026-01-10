import { useQuery } from "@tanstack/react-query";
import { lazy, Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { ParallaxContainer, ParallaxSection } from "@/components/ParallaxSection";
import type { NewsArticle, EducationPath, School, ResearchStat, Profile, Event, ContentSection } from "@shared/schema";
import type { PartnerCategory } from "@/components/PartnersSection";
import { RetryButton } from "@/components/RetryButton";

// Lazy load below-the-fold components for better initial load performance
const NewsSection = lazy(() => import("@/components/NewsSection").then(m => ({ default: m.NewsSection })));
const EducationSection = lazy(() => import("@/components/EducationSection").then(m => ({ default: m.EducationSection })));
const ResearchSection = lazy(() => import("@/components/ResearchSection").then(m => ({ default: m.ResearchSection })));
const CampusLifeSection = lazy(() => import("@/components/CampusLifeSection").then(m => ({ default: m.CampusLifeSection })));
const EventsSection = lazy(() => import("@/components/EventsSection").then(m => ({ default: m.EventsSection })));
const HealthcareSection = lazy(() => import("@/components/HealthcareSection").then(m => ({ default: m.HealthcareSection })));
const AthleticsSection = lazy(() => import("@/components/AthleticsSection").then(m => ({ default: m.AthleticsSection })));
const AdmissionSection = lazy(() => import("@/components/AdmissionSection").then(m => ({ default: m.AdmissionSection })));
const RegistrySection = lazy(() => import("@/components/RegistrySection").then(m => ({ default: m.RegistrySection })));
const PartnersCarousel = lazy(() => import("@/components/PartnersCarousel").then(m => ({ default: m.PartnersCarousel })));

export default function Home() {
  const { data: newsArticles = [], isLoading: newsLoading, error: newsError } = useQuery<NewsArticle[]>({
    queryKey: ['/api/news']
  });

  const { data: educationPaths = [], isLoading: educationLoading, error: educationError } = useQuery<EducationPath[]>({
    queryKey: ['/api/education-paths']
  });

  const { data: schools = [], isLoading: schoolsLoading, error: schoolsError } = useQuery<School[]>({
    queryKey: ['/api/schools']
  });

  const { data: researchStats = [], isLoading: statsLoading, error: statsError } = useQuery<ResearchStat[]>({
    queryKey: ['/api/research-stats']
  });

  const { data: researchProfile, isLoading: researchProfileLoading, error: researchProfileError } = useQuery<Profile>({
    queryKey: ['/api/profiles/research']
  });

  const { data: campusProfile, isLoading: campusProfileLoading, error: campusProfileError } = useQuery<Profile>({
    queryKey: ['/api/profiles/campus']
  });

  const { data: campusLifeSections = [], isLoading: campusLifeLoading, error: campusLifeError } = useQuery<ContentSection[]>({
    queryKey: ['/api/campus-life']
  });

  const { data: events = [], isLoading: eventsLoading, error: eventsError } = useQuery<Event[]>({
    queryKey: ['/api/events']
  });

  const { data: healthcareSections = [], isLoading: healthcareLoading, error: healthcareError } = useQuery<ContentSection[]>({
    queryKey: ['/api/healthcare']
  });

  const { data: athleticsSections = [], isLoading: athleticsLoading, error: athleticsError } = useQuery<ContentSection[]>({
    queryKey: ['/api/athletics']
  });

  const { data: partnerCategories = [], isLoading: partnersLoading, error: partnersError } = useQuery<PartnerCategory[]>({
    queryKey: ['/api/partners']
  });

  const [isHeroInView, setIsHeroInView] = useState(true);
  const heroRef = useRef<HTMLElement | null>(null);
  const previousValueRef = useRef<boolean>(true);
  const scrollFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    // Function to check if hero section is visible
    // Check scroll position: when scrolled past approximately one viewport, switch to default header
    // This matches behavior on other pages where header is always "default" mode (purple top, white bottom)
    const checkHeroVisibility = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight;
      
      // Hero section is min-h-screen (full viewport height) and sticky at top:0 (zIndex 1)
      // Mission section is sticky at top:0 (zIndex 2) and covers Hero when it reaches top
      // When scrolling to Programs section (EducationSection), we've scrolled past Hero
      // Use threshold: when scrollY > 60% of viewport OR minimum 400px, switch to default header
      // This ensures header updates when scrolling to Programs section, as requested
      const scrollThreshold = Math.max(viewportHeight * 0.6, 400);
      
      // Hero is visible if we haven't scrolled past the threshold
      // When scrolled past (scrollY >= threshold), Mission section covers Hero, switch to default header
      const isVisible = scrollY < scrollThreshold;
      
      // Only update if value changed to prevent unnecessary re-renders
      if (isVisible !== previousValueRef.current) {
        previousValueRef.current = isVisible;
        setIsHeroInView(isVisible);
      }
    };

    // Scroll handler - throttled with requestAnimationFrame
    const handleScroll = () => {
      if (scrollFrameRef.current) {
        cancelAnimationFrame(scrollFrameRef.current);
      }
      
      scrollFrameRef.current = requestAnimationFrame(() => {
        checkHeroVisibility();
        scrollFrameRef.current = null;
      });
    };

    // Initial check after DOM is ready
    requestAnimationFrame(() => {
      requestAnimationFrame(checkHeroVisibility);
    });
    
    // Add scroll and resize listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", checkHeroVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkHeroVisibility);
      if (scrollFrameRef.current) {
        cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  const isLoading = newsLoading || educationLoading || schoolsLoading || statsLoading ||
                    researchProfileLoading || campusProfileLoading ||
                    campusLifeLoading || eventsLoading || healthcareLoading || athleticsLoading || partnersLoading;
  const hasError = newsError || educationError || schoolsError || statsError || 
                   researchProfileError || campusProfileError ||
                   campusLifeError || eventsError || healthcareError || athleticsError || partnersError;

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent mb-4"></div>
            <p className="text-muted-foreground">Loading Riara University...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="mb-4 text-destructive">
              <svg className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold mb-2">Unable to Load Content</h2>
            <p className="text-muted-foreground mb-6">
              We're experiencing technical difficulties loading the Riara University website. Please try refreshing the page.
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
      <Header variant={isHeroInView ? "overlay" : "default"} />
      <ParallaxContainer>
        <main className="flex-1">
          {/* Hero Section - Base layer */}
          <ParallaxSection zIndex={1}>
            <HeroSection ref={heroRef} />
          </ParallaxSection>
          
          {/* Mission Section + All other sections - Single parallax layer */}
          <ParallaxSection zIndex={2} stickyTop="0">
            <MissionSection />

            {/* Education Section - Programs */}
            {/* Core offering: What we teach - placed early as primary value proposition */}
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <EducationSection paths={educationPaths} schools={schools} />
            </Suspense>

            {/* Admission Section */}
            {/* Natural next step after seeing programs - critical conversion point */}
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <AdmissionSection />
            </Suspense>

            {/* Student Life */}
            {/* What it's like to be here - important for decision-making after admission interest */}
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <CampusLifeSection sections={campusLifeSections} profile={campusProfile} />
            </Suspense>

            {/* Research Section */}
            {/* Academic excellence and credibility - builds trust */}
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <ResearchSection stats={researchStats} profile={researchProfile} />
            </Suspense>

            {/* Events Section */}
            {/* Engagement and community - shows active campus life */}
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <EventsSection events={events} />
            </Suspense>

            {/* News & Stories */}
            {/* Latest updates and stories - keeps content fresh and engaging */}
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <NewsSection articles={newsArticles} />
            </Suspense>

            {/* Athletics */}
            {/* Part of student experience - complements student life */}
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <AthleticsSection sections={athleticsSections} />
            </Suspense>

            {/* Healthcare */}
            {/* Support services - important but secondary to core offerings */}
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <HealthcareSection sections={healthcareSections} />
            </Suspense>

            {/* Registry */}
            {/* Administrative support - placed after admission as supporting resource */}
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <RegistrySection />
            </Suspense>

            {/* Partners */}
            {/* Trust signals and credibility - good placement near end before footer */}
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <PartnersCarousel categories={partnerCategories} />
            </Suspense>

            {/* Footer */}
            <Footer />
          </ParallaxSection>
        </main>
      </ParallaxContainer>
    </div>
  );
}
