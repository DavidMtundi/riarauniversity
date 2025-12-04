import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { LeadershipSection } from "@/components/LeadershipSection";
import { RetryButton } from "@/components/RetryButton";
import { Button } from "@/components/ui/button";
import { SCHOOL_LINKS } from "@/lib/links";
import type { LeadershipMember } from "@shared/schema";

export default function About() {
  const { data: leadership = [], isLoading: leadershipLoading, error: leadershipError, refetch } = useQuery<LeadershipMember[]>({
    queryKey: ['/api/leadership'],
    retry: 2,
    retryDelay: 1000,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero Image Section */}
        <section className="relative w-full h-[32.5vh] md:h-[37.5vh] overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-stanford-red)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-stanford-red)]/5 rounded-full blur-3xl"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-4 md:mb-6 drop-shadow-2xl">
                Who We Are
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
                A community dedicated to excellence, innovation, and transformative education
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 md:py-24 lg:py-28 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="space-y-8 md:space-y-10">
                {/* First Paragraph - Larger, more prominent */}
                <div>
                  <p className="text-xl md:text-2xl lg:text-3xl text-[var(--color-text-primary)] leading-relaxed mb-6">
                    From its founding in Kenya in the early 21st century until today, Riara University has been infused with the <span className="font-semibold text-[var(--color-stanford-red)]">spirit of innovation and possibility</span>.
                  </p>
                  <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                    We believe strongly in the mission of higher education – to create and share knowledge and to prepare students to be curious, to think critically, and to contribute to the world.
                  </p>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center py-6">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)]"></div>
                </div>

                {/* Second Paragraph - Enhanced with visual elements */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
                  <div className="md:col-span-2 space-y-6">
                    <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                      With <span className="font-semibold text-[var(--color-text-primary)]">world-class scholars</span> and multiple schools located together on a single campus, Riara offers academic excellence across a broad array of disciplines.
                    </p>
                    <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                      It also is an <span className="font-semibold text-[var(--color-stanford-red)]">engine of innovation</span>, blending theory and practice to move ideas and discoveries from labs and classrooms out into the world.
                    </p>
                    <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                      We strive to foster a culture of <span className="font-semibold text-[var(--color-text-primary)]">expansive inquiry, fresh thinking, searching discussion, and freedom of thought</span> – preparing students for leadership and engaged citizenship in the world.
                    </p>
                  </div>
                  <div className="md:col-span-1 relative">
                    {/* Vertical bracket line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-stanford-red)]/30 rounded-full"></div>
                    <div className="pl-6">
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-3">
                        Our Commitment
                      </h3>
                      <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                        Nurturing innovators and ethical leaders who shape the future
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Mission and Vision Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-10">
                Our Foundation
              </h2>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
                {/* Mission */}
                <div className="border-l-4 border-[var(--color-stanford-red)] pl-6 md:pl-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
                    Our Mission
                  </h2>
                  <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                    To provide a holistic education to enable each student to realize their full potential and to develop social and moral values which will underpin their actions through life.
                  </p>
                </div>

                {/* Vision */}
                <div className="border-l-4 border-[var(--color-stanford-red)] pl-6 md:pl-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
                    Our Vision
                  </h2>
                  <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                    To be a Centre of Excellence in scholarship, research and human resource development.
                  </p>
                </div>
              </div>

              {/* Core Purpose and Guiding Mantra */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Core Purpose */}
                <div className="border-l-4 border-[var(--color-stanford-red)] pl-6 md:pl-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
                    Our Core Purpose
                  </h2>
                  <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] leading-relaxed italic">
                    Empowering lives, Impacting communities.
                  </p>
                </div>

                {/* Guiding Mantra */}
                <div className="border-l-4 border-[var(--color-stanford-red)] pl-6 md:pl-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
                    Guiding Mantra
                  </h2>
                  <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] leading-relaxed italic">
                    Quality Education is the solid bedrock for National Development
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-10">
                Our Values
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[var(--color-stanford-red)] mb-3">Excellence</h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    We have only one standard <strong className="text-[var(--color-text-primary)]">EXCELLENCE!</strong>
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[var(--color-stanford-red)] mb-3">Leading by Example</h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    We strive to lead by <strong className="text-[var(--color-text-primary)]">EXAMPLE</strong>.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[var(--color-stanford-red)] mb-3">Teamwork</h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    We cultivate the spirit of <strong className="text-[var(--color-text-primary)]">TEAMWORK</strong>.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[var(--color-stanford-red)] mb-3">Integrity</h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    We are <strong className="text-[var(--color-text-primary)]">ETHICAL</strong> and <strong className="text-[var(--color-text-primary)]">PROFESSIONAL</strong> in our <strong className="text-[var(--color-text-primary)]">CONDUCT</strong>.
                  </p>
                </div>
                <div className="md:col-span-2 lg:col-span-1">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[var(--color-stanford-red)] mb-3">Innovation</h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    We encourage and reward <strong className="text-[var(--color-text-primary)]">INNOVATION</strong>, especially <strong className="text-[var(--color-text-primary)]">BREAKTHROUGH IDEAS</strong>.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Learn More Section */}
        <section className="py-12 md:py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-8 text-[var(--color-text-primary)]">
                Learn more
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-[var(--color-text-secondary)] leading-relaxed mb-10">
                Riara University was founded in 2012 by Kenyan educationists Daniel and Eddah Gachukia, "to promote the public welfare by exercising an influence in behalf of humanity and civilization." The university is governed by a Board of Trustees, Vice Chancellor, and a number of other academic and administrative officers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red-dark)] text-white hover:text-white px-8 sm:px-10 text-base sm:text-lg font-semibold"
                >
                  <a href="/leadership" className="!text-white hover:!text-white">Leadership and Governance</a>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  className="bg-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red-dark)] text-white hover:text-white px-8 sm:px-10 text-base sm:text-lg font-semibold"
                >
                  <a href="/history" className="!text-white hover:!text-white">Our History</a>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  className="bg-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red-dark)] text-white hover:text-white px-8 sm:px-10 text-base sm:text-lg font-semibold"
                >
                  <a href="/founders" className="!text-white hover:!text-white">Our Founders</a>
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
