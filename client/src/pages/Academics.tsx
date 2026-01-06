import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EducationSection } from "@/components/EducationSection";
import { Container } from "@/components/Container";
import { RetryButton } from "@/components/RetryButton";
import type { EducationPath, School } from "@shared/schema";

export default function Academics() {
  const [location] = useLocation();
  const { data: educationPaths = [], isLoading: educationLoading, error: educationError } = useQuery<EducationPath[]>({
    queryKey: ['/api/education-paths']
  });

  const { data: schools = [], isLoading: schoolsLoading, error: schoolsError } = useQuery<School[]>({
    queryKey: ['/api/schools']
  });

  const isLoading = educationLoading || schoolsLoading;
  const hasError = educationError || schoolsError;

  // Scroll to education path section if hash is present
  useEffect(() => {
    if (!isLoading && location.includes('#')) {
      const hash = location.split('#')[1];
      if (hash && ['undergraduate', 'graduate', 'lifelong', 'academics'].includes(hash)) {
        // Small delay to ensure content is rendered
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      }
    }
  }, [isLoading, location]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-12 sm:pt-14 md:pt-24">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--color-riara-red)] border-r-transparent mb-4"></div>
            <p className="text-[var(--color-text-secondary)]">Loading Academics...</p>
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
        <main className="flex-1 flex items-center justify-center pt-12 sm:pt-14 md:pt-24">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="mb-4 text-[var(--color-riara-red)]">
              <svg className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-2">Unable to Load Content</h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
              We're experiencing technical difficulties loading the Academics page. Please try refreshing the page.
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
        {/* Hero Section */}
        <section className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[url('https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg')] bg-cover bg-center bg-no-repeat opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-riara-red)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-riara-red)]/5 rounded-full blur-3xl"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-4 md:mb-6 drop-shadow-2xl">
                Academics
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
                Preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                    Excellence Across Six Schools
                  </h2>
                  <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    At Riara University, we believe in providing market-driven academic programmes supported by excellent faculty, library resources, and infrastructure. Our six schools offer a diverse range of disciplines, each designed to nurture problem-solving professionals who understand the social, economic, and political contexts of their fields.
                  </p>
                  <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                    Whether you're interested in law, business, computing, international relations, communication, or education, you'll find world-class faculty, innovative teaching methodologies, and opportunities to make a real impact.
                  </p>
                </div>
                <div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg" 
                      alt="Academic excellence at Riara University" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Full-Width Image Section */}
        <section className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Academic excellence at Riara University" 
            className="w-full h-full object-cover"
          />
        </section>

        {/* Schools Overview Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6 text-center">
              Our Schools
            </h2>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-12 text-center max-w-3xl mx-auto">
              Each of our six schools offers unique programs designed to prepare you for success in your chosen field. Explore what makes each school special:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {/* Riara Law School */}
                <div className="bg-white p-6 md:p-8 rounded-lg border-l-4 border-[var(--color-riara-red)] hover:shadow-lg transition-shadow">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                    Riara Law School
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    Established in 2012, we've carved a niche as one of Kenya's leading law schools. With a faculty-to-student ratio of 1:15 and world-class faculty trained at prestigious institutions, we prepare lawyers who understand the social, economic, and political context of law.
                  </p>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    Our curriculum transcends archaic legal formalism, adopting a fresh, interdisciplinary approach that equips students with advanced legal knowledge, efficacious lawyering skills, and moral perspectives necessary to harness law, politics, economy, and culture for justice.
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">Key Features:</p>
                    <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>State-of-the-art moot courtroom</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>Rigorous legal writing program</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>Socratic Method & case studies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>Full CLE accreditation</span>
                      </li>
                    </ul>
                  </div>
                  <a 
                    href="https://law.riarauniversity.ac.ke/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-riara-red)] hover:text-[var(--color-riara-red-dark)] hover:underline transition-colors"
                  >
                    Visit Law School →
                  </a>
                </div>

                {/* School of Business */}
                <div className="bg-white p-6 md:p-8 rounded-lg border-l-4 border-[var(--color-riara-red)] hover:shadow-lg transition-shadow">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                    School of Business
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    We nurture innovative business minds through lifelong learning, innovation, and ethical leadership. Our programs cover management, finance, marketing, accounting, human resources, and procurement.
                  </p>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    We've organized blood donation drives with Nairobi Hospital and Kenyatta National Hospital, and support children's homes through student-led initiatives. Our students have won competitions funded by the British Embassy and Open University through AESU.
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">Key Features:</p>
                    <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>International exchange programs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>Entrepreneurial skills development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>Riara Business Club</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>Community engagement projects</span>
                      </li>
                    </ul>
                  </div>
                  <a 
                    href="https://sob.riarauniversity.ac.ke/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-riara-red)] hover:text-[var(--color-riara-red-dark)] hover:underline transition-colors"
                  >
                    Visit Business School →
                  </a>
                </div>

                {/* School of Computing Sciences */}
                <div className="bg-white p-6 md:p-8 rounded-lg border-l-4 border-[var(--color-riara-red)] hover:shadow-lg transition-shadow">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                    School of Computing Sciences
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    At the forefront of current technology, we're a leader in Information Technology innovations in Kenya and beyond. Home to the Riara University Innovation Centre (iCentre), where innovative ideas from all professions come to life.
                  </p>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    We have networked laboratories equipped to industry standard, running the latest software. Dedicated facilities are provided for animation, robotics, web and multimedia authoring, video editing, games, networks, and digital music studios.
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">Key Features:</p>
                    <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>Industry-standard laboratories</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>Animation & robotics facilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>Dean's Scholarship for A students (40% tuition)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>Innovation Centre (iCentre)</span>
                      </li>
                    </ul>
                  </div>
                  <a 
                    href="https://scs.riarauniversity.ac.ke/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-riara-red)] hover:text-[var(--color-riara-red-dark)] hover:underline transition-colors"
                  >
                    Visit Computing School →
                  </a>
                </div>

                {/* School of International Relations & Diplomacy */}
                <div className="bg-white p-6 md:p-8 rounded-lg border-l-4 border-[var(--color-riara-red)] hover:shadow-lg transition-shadow">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                    School of International Relations & Diplomacy
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    We offer a unique blend of academic and professional development to create future leaders. Our program critically analyzes diplomacy, foreign policy, international law, and conflictological studies through a multidisciplinary approach.
                  </p>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    Our first-rate students are continuously exposed to practical leadership skills through diverse expositions such as simulations, pitching, and structured diplomatic clinics. We pride ourselves on an international academic advisory team.
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">Key Features:</p>
                    <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>Conflictology Lab</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>Simulation exercises & diplomatic clinics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>International academic advisory team</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>Vibrant seminar series</span>
                      </li>
                    </ul>
                  </div>
                  <a 
                    href="https://ird.riarauniversity.ac.ke/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-riara-red)] hover:text-[var(--color-riara-red-dark)] hover:underline transition-colors"
                  >
                    Visit IRD School →
                  </a>
                </div>

                {/* School of Communication & Multimedia Journalism */}
                <div className="bg-white p-6 md:p-8 rounded-lg border-l-4 border-[var(--color-riara-red)] hover:shadow-lg transition-shadow">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                    School of Communication & Multimedia Journalism
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    We train innovative journalists who can hit the ground running. Students develop impressive portfolios of photos, video clips, and print media stories, gaining a real advantage in the job market.
                  </p>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    During their studies, we send students into the real world to write and record about real people in real situations. Most units are practical-oriented, exposing learners to studio settings of media production.
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">Key Features:</p>
                    <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>Practical studio settings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>Real-world reporting experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>Industry stakeholder engagement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>Portfolio development (RFC 305: Community Service)</span>
                      </li>
                    </ul>
                  </div>
                  <a 
                    href="https://cmj.riarauniversity.ac.ke/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-riara-red)] hover:text-[var(--color-riara-red-dark)] hover:underline transition-colors"
                  >
                    Visit Communication School →
                  </a>
                </div>

                {/* School of Education */}
                <div className="bg-white p-6 md:p-8 rounded-lg border-l-4 border-[var(--color-riara-red)] hover:shadow-lg transition-shadow">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                    School of Education
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    Committed to preparing educators who make a difference. Our programs focus on developing teachers who are not just knowledgeable, but also innovative, ethical, and responsive to the needs of learners in the 21st century.
                  </p>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    We believe that quality education is the solid bedrock for national development. Our graduates are equipped with the skills and values needed for the future workforce, in line with the University's core purpose of empowering lives and impacting communities.
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">Key Features:</p>
                    <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>Practical teaching experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>Modern pedagogical approaches</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>Commitment to educational excellence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--color-riara-red)] mt-1">•</span>
                        <span>Focus on 21st century skills</span>
                      </li>
                    </ul>
                  </div>
                  <a 
                    href="https://soe.riarauniversity.ac.ke/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-riara-red)] hover:text-[var(--color-riara-red-dark)] hover:underline transition-colors"
                  >
                    Visit Education School →
                  </a>
                </div>
            </div>
          </Container>
        </section>

        {/* Education Paths Section with hash anchors */}
        <section id="academics" className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            {/* Undergraduate Programs */}
            <div id="undergraduate" className="scroll-mt-24">
              <EducationSection paths={educationPaths.filter(p => p.id === 'undergraduate' || p.title.toLowerCase().includes('undergraduate'))} schools={schools} showHeader={false} />
            </div>
            
            {/* Graduate Programs */}
            <div id="graduate" className="scroll-mt-24 mt-16">
              <EducationSection paths={educationPaths.filter(p => p.id === 'graduate' || p.title.toLowerCase().includes('graduate'))} schools={schools} showHeader={false} />
            </div>
            
            {/* Lifelong Learning / Professional Programs */}
            <div id="lifelong" className="scroll-mt-24 mt-16">
              <EducationSection paths={educationPaths.filter(p => p.id === 'lifelong' || p.title.toLowerCase().includes('lifelong') || p.title.toLowerCase().includes('professional'))} schools={schools} showHeader={false} />
            </div>
            
            {/* All paths if no specific filter matches */}
            {educationPaths.length > 0 && (
              <div className="mt-16">
                {/* Education Paths Section - with hash navigation support */}
        <section id="academics" className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <EducationSection paths={educationPaths} schools={schools} showHeader={false} />
          </Container>
        </section>
        
        {/* Add anchor points for hash navigation */}
        <div id="undergraduate" className="scroll-mt-24" />
        <div id="graduate" className="scroll-mt-24" />
        <div id="lifelong" className="scroll-mt-24" />
              </div>
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
