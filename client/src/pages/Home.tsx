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
const ArtsSection = lazy(() => import("@/components/ArtsSection").then(m => ({ default: m.ArtsSection })));
const EventsSection = lazy(() => import("@/components/EventsSection").then(m => ({ default: m.EventsSection })));
const HealthcareSection = lazy(() => import("@/components/HealthcareSection").then(m => ({ default: m.HealthcareSection })));
const AthleticsSection = lazy(() => import("@/components/AthleticsSection").then(m => ({ default: m.AthleticsSection })));
const AdmissionSection = lazy(() => import("@/components/AdmissionSection").then(m => ({ default: m.AdmissionSection })));
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

  const { data: artsProfile, isLoading: artsProfileLoading, error: artsProfileError } = useQuery<Profile>({
    queryKey: ['/api/profiles/arts']
  });

  const { data: campusLifeSections = [], isLoading: campusLifeLoading, error: campusLifeError } = useQuery<ContentSection[]>({
    queryKey: ['/api/campus-life']
  });

  const { data: artsSections = [], isLoading: artsLoading, error: artsError } = useQuery<ContentSection[]>({
    queryKey: ['/api/arts']
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

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let lastKnownScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      lastKnownScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const heroElement = heroRef.current;
          if (heroElement) {
            const heroHeight = heroElement.offsetHeight;
            const headerHeight = 120; // total combined header height
            const isVisible = lastKnownScrollY < Math.max(heroHeight - headerHeight, 0);
            setIsHeroInView(isVisible);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => {
      const heroElement = heroRef.current;
      if (!heroElement) {
        return;
      }
      const heroHeight = heroElement.offsetHeight;
      const headerHeight = 120;
      const isVisible = window.scrollY < Math.max(heroHeight - headerHeight, 0);
      setIsHeroInView(isVisible);
    };

    handleResize();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isLoading = newsLoading || educationLoading || schoolsLoading || statsLoading ||
                    researchProfileLoading || campusProfileLoading || artsProfileLoading ||
                    campusLifeLoading || artsLoading || eventsLoading || healthcareLoading || athleticsLoading || partnersLoading;
  const hasError = newsError || educationError || schoolsError || statsError || 
                   researchProfileError || campusProfileError || artsProfileError ||
                   campusLifeError || artsError || eventsError || healthcareError || athleticsError || partnersError;

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

            {/* Education Section - Academics */}
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <EducationSection paths={educationPaths} schools={schools} />
            </Suspense>

            {/* Research Section */}
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <ResearchSection stats={researchStats} profile={researchProfile} />
            </Suspense>

            {/* Student Life */}
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <CampusLifeSection sections={campusLifeSections} profile={campusProfile} />
            </Suspense>

            {/* Arts & Culture */}
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <ArtsSection sections={artsSections} profile={artsProfile} />
            </Suspense>

            {/* Athletics */}
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <AthleticsSection sections={athleticsSections} />
            </Suspense>

            {/* Events */}
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <EventsSection events={events} />
            </Suspense>

            {/* Healthcare */}
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <HealthcareSection sections={healthcareSections} />
            </Suspense>

            {/* News & Stories */}
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <NewsSection articles={newsArticles} />
            </Suspense>

            {/* Admission */}
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <AdmissionSection />
            </Suspense>

            {/* Partners */}
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
