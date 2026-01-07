import { useQuery } from "@tanstack/react-query";
import { useLocation, useRoute } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { RetryButton } from "@/components/RetryButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Briefcase, ArrowLeft, ExternalLink, Clock } from "lucide-react";
import type { Career } from "@shared/schema";

export default function CareerDetail() {
  const [, setLocation] = useLocation();
  const [, params] = useRoute("/careers/:id");
  const careerId = params?.id;
  
  const { data: careers = [], isLoading: careersLoading, error: careersError } = useQuery<Career[]>({
    queryKey: ['/api/careers']
  });

  // Find the career by ID
  const career = careerId ? careers.find(c => c.id === careerId) : undefined;

  if (careersLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-12 sm:pt-14 md:pt-24">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--color-riara-red)] border-r-transparent mb-4"></div>
            <p className="text-[var(--color-text-secondary)]">Loading Position...</p>
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
            <div className="mb-4 text-[var(--color-riara-red)]">
              <svg className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-2">Unable to Load Position</h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
              We're experiencing technical difficulties loading this position. Please try again.
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

  if (!career) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-12 sm:pt-14 md:pt-24">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="mb-4 text-[var(--color-riara-red)]">
              <svg className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-2">Position Not Found</h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
              The position you're looking for doesn't exist or has been removed.
            </p>
            <Button
              onClick={() => setLocation("/careers")}
              className="bg-[var(--color-riara-red)] text-white hover:bg-[var(--color-riara-red-dark)]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Careers
            </Button>
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
        {/* Back Button */}
        <section className="bg-[var(--color-bg-secondary)] py-4 border-b">
          <Container>
            <Button
              variant="ghost"
              onClick={() => setLocation("/careers")}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Careers
            </Button>
          </Container>
        </section>

        {/* Position Header */}
        <section className="bg-gradient-to-br from-[var(--color-bg-secondary)] to-white py-16 md:py-20">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Badge variant="secondary" className="text-base px-4 py-2 mr-2">
                  {career.type}
                </Badge>
                {career.time && (
                  <Badge variant="outline" className="text-base px-4 py-2 border-[var(--color-riara-red)] text-[var(--color-riara-red)]">
                    {career.time}
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--color-text-primary)] mb-6 leading-tight">
                {career.title}
              </h1>
              
              <div className="flex flex-wrap gap-6 text-[var(--color-text-secondary)]">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[var(--color-riara-red)]" />
                  <span className="font-semibold">{career.date}</span>
                </div>
                {career.time && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[var(--color-riara-red)]" />
                    <span className="font-semibold">{career.time}</span>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* Position Content */}
        <section className="py-12 md:py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="md:col-span-2">
                  {career.imageUrl && career.imageUrl !== "" ? (
                    <div className="mb-8 rounded-lg overflow-hidden">
                      <img
                        src={career.imageUrl}
                        alt={career.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ) : (
                    <div className="mb-8 aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-24 w-24 text-primary/40" />
                    </div>
                  )}

                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                      Position Overview
                    </h2>
                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                      Riara University is seeking a qualified candidate for the position of <strong>{career.title}</strong> 
                      in our {career.type} department. This is an excellent opportunity to join a dynamic team committed 
                      to excellence in education, research, and community impact.
                    </p>
                    
                    <h3 className="text-xl font-serif font-semibold text-[var(--color-text-primary)] mb-3 mt-8">
                      Key Responsibilities
                    </h3>
                    <ul className="list-disc list-inside text-base text-[var(--color-text-secondary)] leading-relaxed space-y-2 mb-6">
                      <li>Contribute to the academic and research mission of the university</li>
                      <li>Engage with students, faculty, and the broader community</li>
                      <li>Participate in departmental and university-wide initiatives</li>
                      <li>Maintain high standards of excellence in your field</li>
                    </ul>

                    <h3 className="text-xl font-serif font-semibold text-[var(--color-text-primary)] mb-3 mt-8">
                      Qualifications
                    </h3>
                    <ul className="list-disc list-inside text-base text-[var(--color-text-secondary)] leading-relaxed space-y-2 mb-6">
                      <li>Relevant advanced degree or equivalent experience</li>
                      <li>Demonstrated expertise in the field</li>
                      <li>Strong commitment to teaching, research, or service</li>
                      <li>Excellent communication and collaboration skills</li>
                    </ul>

                    <h3 className="text-xl font-serif font-semibold text-[var(--color-text-primary)] mb-3 mt-8">
                      Application Process
                    </h3>
                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                      Applications are due by <strong>{career.date}</strong>. Please submit your application through 
                      our online portal or contact the hiring department for more information.
                    </p>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="md:col-span-1">
                  <Card className="sticky top-24">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                        Position Details
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-[var(--color-text-secondary)] mb-1">
                            Category
                          </p>
                          <p className="text-base text-[var(--color-text-primary)]">
                            {career.type}
                          </p>
                        </div>

                        {career.time && (
                          <div>
                            <p className="text-sm font-semibold text-[var(--color-text-secondary)] mb-1">
                              Employment Type
                            </p>
                            <p className="text-base text-[var(--color-text-primary)]">
                              {career.time}
                            </p>
                          </div>
                        )}

                        <div>
                          <p className="text-sm font-semibold text-[var(--color-text-secondary)] mb-1">
                            Application Deadline
                          </p>
                          <p className="text-base text-[var(--color-text-primary)]">
                            {career.date}
                          </p>
                        </div>

                        {career.link && career.link !== "#" && (
                          <div className="pt-4 border-t space-y-2">
                            <Button
                              asChild
                              className="w-full bg-[var(--color-riara-red)] text-white hover:bg-[var(--color-riara-red-dark)]"
                            >
                              <a href={career.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Apply Now
                              </a>
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full"
                              onClick={() => setLocation("/careers")}
                            >
                              View All Positions
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
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

