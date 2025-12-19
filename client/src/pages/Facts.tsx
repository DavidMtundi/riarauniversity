import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { RetryButton } from "@/components/RetryButton";
import { GraduationCap, Award, Users, BookOpen, MapPin, Phone, Mail, Building2, Library, Laptop, Globe } from "lucide-react";
import type { ResearchStat, School } from "@shared/schema";

export default function Facts() {
  const { data: researchStats = [], isLoading: statsLoading, error: statsError } = useQuery<ResearchStat[]>({
    queryKey: ['/api/research-stats']
  });

  const { data: schools = [], isLoading: schoolsLoading, error: schoolsError } = useQuery<School[]>({
    queryKey: ['/api/schools']
  });

  const isLoading = statsLoading || schoolsLoading;
  const hasError = statsError || schoolsError;

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-12 sm:pt-14 md:pt-24">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--color-riara-red)] border-r-transparent mb-4"></div>
            <p className="text-[var(--color-text-secondary)]">Loading Facts...</p>
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
              We're experiencing technical difficulties loading the Facts page. Please try refreshing the page.
            </p>
            <RetryButton onClick={() => window.location.reload()} />
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
                Facts & Figures
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
                Key information about Riara University at a glance
              </p>
            </div>
          </div>
        </section>

        {/* Quick Statistics Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8 text-[var(--color-text-primary)] text-center">
                By The Numbers
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-[var(--color-bg-secondary)] rounded-lg">
                  <div className="text-4xl md:text-5xl font-bold text-[var(--color-riara-red)] mb-2">93%</div>
                  <p className="text-sm md:text-base text-[var(--color-text-secondary)]">Alumni securing employment, entrepreneurship, or further studies within a year</p>
                </div>
                <div className="text-center p-6 bg-[var(--color-bg-secondary)] rounded-lg">
                  <div className="text-4xl md:text-5xl font-bold text-[var(--color-riara-red)] mb-2">2,500+</div>
                  <p className="text-sm md:text-base text-[var(--color-text-secondary)]">Alumni graduated, including global achievers</p>
                </div>
                <div className="text-center p-6 bg-[var(--color-bg-secondary)] rounded-lg">
                  <div className="text-4xl md:text-5xl font-bold text-[var(--color-riara-red)] mb-2">50</div>
                  <p className="text-sm md:text-base text-[var(--color-text-secondary)]">Years of quality education (Golden Jubilee 2024)</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* University Overview Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-10">
              University Overview
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
                <div className="flex items-center gap-4 mb-4">
                  <Building2 className="h-8 w-8 text-[var(--color-riara-red)]" />
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)]">
                    Founded
                  </h3>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-[var(--color-riara-red)] mb-2">2012</p>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  Riara University was founded by Kenyan educationists Daniel and Eddah Gachukia with a vision of nurturing innovators and ethical leaders.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="h-8 w-8 text-[var(--color-riara-red)]" />
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)]">
                    Location
                  </h3>
                </div>
                <p className="text-lg md:text-xl font-semibold text-[var(--color-text-primary)] mb-2">Nairobi, Kenya</p>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  Main campus located along Raila Odinga Road (formerly Mbagathi Way), with a new campus under development at Konza Technopolis.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
                <div className="flex items-center gap-4 mb-4">
                  <Award className="h-8 w-8 text-[var(--color-riara-red)]" />
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)]">
                    Motto
                  </h3>
                </div>
                <p className="text-xl md:text-2xl font-bold text-[var(--color-riara-red)] mb-2 italic">"Nurturing Innovators"</p>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  Our motto reflects our commitment to fostering innovation, creativity, and transformative thinking in all our students.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="h-8 w-8 text-[var(--color-riara-red)]" />
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)]">
                    Academic Structure
                  </h3>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-[var(--color-riara-red)] mb-2">{schools.length} Schools</p>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  Offering diverse programs across multiple disciplines, from law and business to computing and international relations.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Accreditation Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-10">
              Accreditation & Recognition
            </h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                  Commission for University Education (CUE)
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  Fully accredited by CUE, the official regulator for university education in Kenya, affirming our commitment to quality education.
                </p>
              </div>

              <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                  Council of Legal Education (CLE)
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  Accredited by CLE since 2012, enabling our Law School to offer recognized legal education programs.
                </p>
              </div>

              <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                  Kenya Accountants and Secretaries National Examinations Board (KASNEB)
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  Accredited as both a Training Centre and Examinations Centre for CPA, CS, and ATD programs.
                </p>
              </div>

              <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                  SAP University Alliance Programme
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  One of only a few universities in Kenya accredited to train in SAP Business One Applications.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Academic Structure Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-10">
              Academic Structure
            </h2>
            <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] mb-8">
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Riara University offers comprehensive academic programs across six specialized schools, each designed to provide market-driven education supported by excellent faculty, library resources, and infrastructure.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {schools.map((school) => (
                  <div key={school.id} className="flex items-center gap-3 p-4 bg-[var(--color-bg-secondary)] rounded-lg">
                    <BookOpen className="h-5 w-5 text-[var(--color-riara-red)] flex-shrink-0" />
                    <span className="text-base md:text-lg font-semibold text-[var(--color-text-primary)]">{school.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Research Impact Section */}
        {researchStats.length > 0 && (
          <section className="py-16 md:py-20 bg-white">
            <Container>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-10">
                Research Impact
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {researchStats.map((stat) => (
                  <div key={stat.id} className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
                    <div className="text-3xl md:text-4xl font-bold text-[var(--color-riara-red)] mb-3">
                      {stat.value}
                    </div>
                    <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* Campus Facilities Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-10">
              Campus Facilities
            </h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
                <div className="flex items-center gap-4 mb-4">
                  <Library className="h-8 w-8 text-[var(--color-riara-red)]" />
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)]">
                    Library Resources
                  </h3>
                </div>
                <ul className="space-y-2 text-base md:text-lg text-[var(--color-text-secondary)]">
                  <li>• Over 6,700 print volumes</li>
                  <li>• 75 journals</li>
                  <li>• Access to 35,000+ e-databases</li>
                  <li>• Digital learning resources</li>
                </ul>
              </div>

              <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
                <div className="flex items-center gap-4 mb-4">
                  <Laptop className="h-8 w-8 text-[var(--color-riara-red)]" />
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)]">
                    ICT Infrastructure
                  </h3>
                </div>
                <ul className="space-y-2 text-base md:text-lg text-[var(--color-text-secondary)]">
                  <li>• State-of-the-art Robotics Laboratory</li>
                  <li>• Digital Skills laboratories</li>
                  <li>• Modern computer labs</li>
                  <li>• High-speed internet connectivity</li>
                </ul>
              </div>

              <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
                <div className="flex items-center gap-4 mb-4">
                  <Building2 className="h-8 w-8 text-[var(--color-riara-red)]" />
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)]">
                    Campus Development
                  </h3>
                </div>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  New Main Campus under development at Konza Technopolis, reinforcing our commitment to innovation and technological advancement.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
                <div className="flex items-center gap-4 mb-4">
                  <Globe className="h-8 w-8 text-[var(--color-riara-red)]" />
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)]">
                    Partnerships
                  </h3>
                </div>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  Strategic partnerships with industry leaders including Airtel Kenya, Chandaria Foundation, and international institutions like Sheridan College (Canada) and University of Central Lancashire (UK).
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-10">
              Contact Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="h-8 w-8 text-[var(--color-riara-red)]" />
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)]">
                    Address
                  </h3>
                </div>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  Raila Odinga Road (formerly Mbagathi Way)<br />
                  49940 – 00100, Nairobi<br />
                  Kenya
                </p>
              </div>

              <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="h-8 w-8 text-[var(--color-riara-red)]" />
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)]">
                    Telephone
                  </h3>
                </div>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  <a href="tel:+254703038000" className="text-[var(--color-riara-red)] hover:underline">
                    +254 703 038 000
                  </a>
                </p>
              </div>

              <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="h-8 w-8 text-[var(--color-riara-red)]" />
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)]">
                    Email
                  </h3>
                </div>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  <a href="mailto:info@riarauniversity.ac.ke" className="text-[var(--color-riara-red)] hover:underline">
                    info@riarauniversity.ac.ke
                  </a>
                </p>
              </div>

              <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
                <div className="flex items-center gap-4 mb-4">
                  <Globe className="h-8 w-8 text-[var(--color-riara-red)]" />
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)]">
                    Website
                  </h3>
                </div>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  <a href="https://riarauniversity.ac.ke" target="_blank" rel="noopener noreferrer" className="text-[var(--color-riara-red)] hover:underline">
                    riarauniversity.ac.ke
                  </a>
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

