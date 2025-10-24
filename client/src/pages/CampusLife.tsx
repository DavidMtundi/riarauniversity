import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CampusLifeSection } from "@/components/CampusLifeSection";
import type { ContentSection, Profile } from "@shared/schema";

export default function CampusLife() {
  const { data: campusLifeSections = [], isLoading: campusLifeLoading, error: campusLifeError } = useQuery<ContentSection[]>({
    queryKey: ['/api/campus-life']
  });

  const { data: campusProfile, isLoading: campusProfileLoading, error: campusProfileError } = useQuery<Profile>({
    queryKey: ['/api/profiles/campus']
  });

  const isLoading = campusLifeLoading || campusProfileLoading;
  const hasError = campusLifeError || campusProfileError;

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent mb-4"></div>
            <p className="text-muted-foreground">Loading Campus Life...</p>
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
              We're experiencing technical difficulties loading the Campus Life page. Please try refreshing the page.
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
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <section className="bg-muted/30 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Campus Life</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Building a vibrant community of creative and accomplished people from around the world
              </p>
            </div>
          </div>
        </section>

        <CampusLifeSection sections={campusLifeSections} profile={campusProfile} />
      </main>
      <Footer />
    </div>
  );
}
