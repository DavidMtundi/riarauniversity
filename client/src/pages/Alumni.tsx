import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Mail, Users, Heart, BookOpen, Briefcase, Gift, GraduationCap, Network } from "lucide-react";

export default function Alumni() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-12 sm:pt-14 md:pt-24">
        {/* Hero Section */}
        <section className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-stanford-red)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-stanford-red)]/5 rounded-full blur-3xl"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-4 md:mb-6 drop-shadow-2xl">
                Alumni
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
                Once a Riara student, always part of the Riara family
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                    Welcome Home
                  </h2>
                  <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    Riara University's Alumni Office is here to keep you connected. We're not just a fond memory—we're your home base for further training, career development, and reconnecting with the people who shaped your journey.
                  </p>
                  <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                    Our goal is simple: keep you informed, engaged, and supported. Whether you're looking for professional growth, networking opportunities, or just want to stay in touch, we're here to help you thrive long after graduation.
                  </p>
                </div>
                <div className="order-first lg:order-last">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                      alt="Riara University Alumni" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Who Can Join Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                      alt="Alumni community" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                    Who Can Join?
                  </h2>
                  <div className="space-y-4 border-l-4 border-[var(--color-stanford-red)] pl-6 md:pl-8">
                    <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                      If you've graduated from Riara University—whether with a certificate, diploma, or degree—you're automatically part of our alumni community. Former staff members are welcome too.
                    </p>
                    <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                      Our alumni network spans the globe, connecting graduates from all walks of life—different industries, backgrounds, and fields of study. No matter where you are or what you're doing, you're part of something bigger. And we're committed to being your partner in continued growth and success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6 text-center">
                Benefits of Joining
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                As a member of the Riara Alumni Association, you get access to exclusive benefits designed to support your continued growth and success.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Professional Development */}
                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 rounded-lg border-l-4 border-[var(--color-stanford-red)] hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-[var(--color-stanford-red)]/10 rounded-lg">
                      <Briefcase className="h-6 w-6 text-[var(--color-stanford-red)]" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-[var(--color-text-primary)]">
                      Professional Development
                    </h3>
                  </div>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                    Access continuing education and refresher courses at discounted rates. Keep your skills sharp and stay ahead in your career.
                  </p>
                </div>

                {/* Networking & Events */}
                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 rounded-lg border-l-4 border-[var(--color-stanford-red)] hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-[var(--color-stanford-red)]/10 rounded-lg">
                      <Network className="h-6 w-6 text-[var(--color-stanford-red)]" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-[var(--color-text-primary)]">
                      Networking & Events
                    </h3>
                  </div>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                    Get invited to alumni networking events, gala dinners, and sports activities. Connect with fellow graduates and build lasting relationships.
                  </p>
                </div>

                {/* Career Support */}
                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 rounded-lg border-l-4 border-[var(--color-stanford-red)] hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-[var(--color-stanford-red)]/10 rounded-lg">
                      <Users className="h-6 w-6 text-[var(--color-stanford-red)]" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-[var(--color-text-primary)]">
                      Career Support
                    </h3>
                  </div>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                    Exclusive access to job vacancies through our partner network. Find your next opportunity with help from the Riara community.
                  </p>
                </div>

                {/* Library Membership */}
                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 rounded-lg border-l-4 border-[var(--color-stanford-red)] hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-[var(--color-stanford-red)]/10 rounded-lg">
                      <BookOpen className="h-6 w-6 text-[var(--color-stanford-red)]" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-[var(--color-text-primary)]">
                      Library Membership
                    </h3>
                  </div>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                    Full access to Riara University library services. Continue your learning journey with our extensive resources.
                  </p>
                </div>

                {/* Mentorship & Coaching */}
                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 rounded-lg border-l-4 border-[var(--color-stanford-red)] hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-[var(--color-stanford-red)]/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-[var(--color-stanford-red)]" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-[var(--color-text-primary)]">
                      Mentorship & Coaching
                    </h3>
                  </div>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                    Opportunities to mentor current students or receive guidance from industry professionals. Give back or get support—your choice.
                  </p>
                </div>

                {/* Community Engagement */}
                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 rounded-lg border-l-4 border-[var(--color-stanford-red)] hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-[var(--color-stanford-red)]/10 rounded-lg">
                      <Heart className="h-6 w-6 text-[var(--color-stanford-red)]" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-[var(--color-text-primary)]">
                      Community Engagement
                    </h3>
                  </div>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                    Participate in social responsibility projects. Make a difference in communities while staying connected to your Riara roots.
                  </p>
                </div>
              </div>

              {/* Additional Benefits */}
              <div className="mt-12 bg-white p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)] rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-[var(--color-text-primary)] mb-3 flex items-center gap-2">
                      <Gift className="h-5 w-5 text-[var(--color-stanford-red)]" />
                      Merchandising & Alumni Gift Shop
                    </h3>
                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                      Special Riara-branded merchandise available exclusively for alumni. Show your Riara pride wherever you go.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-[var(--color-text-primary)] mb-3 flex items-center gap-2">
                      <Mail className="h-5 w-5 text-[var(--color-stanford-red)]" />
                      Regular Updates
                    </h3>
                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                      Stay informed with alumni newsletters, blogs, and updates. Never miss out on what's happening at Riara and in the alumni community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Full-Width Image Section */}
        <section className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Alumni community gathering" 
            className="w-full h-full object-cover"
          />
        </section>

        {/* Giving Back Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                    Giving Back to Riara
                  </h2>
                  <div className="space-y-6 border-l-4 border-[var(--color-stanford-red)] pl-6 md:pl-8">
                    <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                      Riara University relies on the generosity of its alumni, partners, and friends to continue advancing education, research, and community service. While we receive financial support from institutional partners, your contributions make a real difference.
                    </p>
                    <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                      Your support, no matter the amount, plays a crucial role in shaping the future of the university. By staying connected and giving back, you help Riara thrive while leaving a lasting impact on future generations.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                      alt="Giving back to education" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Ways to Give Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-8 text-center">
                Ways to Give
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                There are several meaningful ways you can contribute to Riara University's mission:
              </p>

              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 rounded-lg border-l-4 border-[var(--color-stanford-red)] hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/9] rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                      alt="Community service" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                    Community Service Initiatives
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Support projects that make a real difference in society. Your contribution helps us continue our work in communities across Kenya.
                  </p>
                </div>

                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 rounded-lg border-l-4 border-[var(--color-stanford-red)] hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/9] rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                      alt="Library resources" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                    Library Improvement Fund
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Contribute to the growth and modernization of our library resources. Help us build a world-class learning environment for current and future students.
                  </p>
                </div>

                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 rounded-lg border-l-4 border-[var(--color-stanford-red)] hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/9] rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                      alt="Scholarship fund" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                    Scholarship Fund
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Help provide deserving students with access to quality education. Your support opens doors for the next generation of Riara graduates.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Button
                  size="lg"
                  className="bg-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red-dark)] text-white font-semibold text-base md:text-lg px-8 py-6"
                  asChild
                >
                  <a href="mailto:alumni@riarauniversity.ac.ke" className="flex items-center gap-2 !text-white hover:!text-white">
                    Get in Touch <Mail className="h-5 w-5 !text-white" />
                  </a>
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

