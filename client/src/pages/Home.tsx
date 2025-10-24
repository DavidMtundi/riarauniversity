import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { NewsSection } from "@/components/NewsSection";
import { EducationSection } from "@/components/EducationSection";
import { ResearchSection } from "@/components/ResearchSection";
import { CampusLifeSection } from "@/components/CampusLifeSection";
import { ArtsSection } from "@/components/ArtsSection";
import { EventsSection } from "@/components/EventsSection";
import { HealthcareSection } from "@/components/HealthcareSection";
import { AthleticsSection } from "@/components/AthleticsSection";
import { AdmissionSection } from "@/components/AdmissionSection";
import type { NewsArticle, EducationPath, School, ResearchStat, Profile, Event, ContentSection } from "@shared/schema";

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

  const isLoading = newsLoading || educationLoading || schoolsLoading || statsLoading ||
                    researchProfileLoading || campusProfileLoading || artsProfileLoading ||
                    campusLifeLoading || artsLoading || eventsLoading || healthcareLoading || athleticsLoading;
  const hasError = newsError || educationError || schoolsError || statsError || 
                   researchProfileError || campusProfileError || artsProfileError ||
                   campusLifeError || artsError || eventsError || healthcareError || athleticsError;

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent mb-4"></div>
            <p className="text-muted-foreground">Loading Stanford University...</p>
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
              We're experiencing technical difficulties loading the Stanford University website. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover-elevate active-elevate-2"
              data-testid="button-reload"
            >
              Reload Page
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <NewsSection articles={newsArticles} />
        <EducationSection paths={educationPaths} schools={schools} />
        <ResearchSection stats={researchStats} profile={researchProfile} />
        <CampusLifeSection sections={campusLifeSections} profile={campusProfile} />
        <ArtsSection sections={artsSections} profile={artsProfile} />
        <EventsSection events={events} />
        <HealthcareSection sections={healthcareSections} />
        <AthleticsSection sections={athleticsSections} />
        <AdmissionSection />
      </main>
      <Footer />
    </div>
  );
}
