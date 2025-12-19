import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export default function HealthCare() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-12 sm:pt-14 md:pt-24">
        {/* Hero Section */}
        <section className="relative w-full h-[32.5vh] md:h-[37.5vh] overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat opacity-20"></div>
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
                Riara Health Unit
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
                Promoting mental, emotional, and social well-being for academic success
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none text-center">
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                  The Riara Health Center is an essential part of the university's health system, promoting mental, emotional, and social well-being. We recognize that academic success is closely tied to personal wellness, and we are here to support students through every challenge.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Services Offered Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-12 text-center">
                Services Offered
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 text-[var(--color-text-primary)]">
                    Mental Health Support
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Access to professional counseling, therapy, and mental health awareness programs.
                  </p>
                </div>

                <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 text-[var(--color-text-primary)]">
                    Wellness Education
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Workshops, seminars, and resources on stress management, self-care, healthy relationships, and emotional resilience.
                  </p>
                </div>

                <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 text-[var(--color-text-primary)]">
                    Peer Support Programs
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Safe spaces for students to connect, share, and support one another through student-led wellness initiatives.
                  </p>
                </div>

                <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 text-[var(--color-text-primary)]">
                    Confidential Counseling
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    One-on-one sessions with qualified counselors in a safe, judgment-free environment.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* University Nurse Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="flex-shrink-0">
                    <img 
                      src="https://ru.ac.ke/wp-content/uploads/2025/06/nurse-2.jpg" 
                      alt="Ms. Leah Mbuyah, The University Nurse"
                      className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-text-primary)] mb-2">
                      Ms. Leah Mbuyah
                    </h3>
                    <p className="text-lg font-semibold text-[var(--color-stanford-red)] mb-6">
                      The University Nurse
                    </p>
                    <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                      Every person has the right to education and the right to health is a fundamental human right guaranteed in the Constitution of Kenya. Riara University is determined to have Educated and healthy Students. Having that in mind, we always look forward to deliver, affordable, available and accessible preventive, promotive and curative services to the Riara Community.
                    </p>
                  </div>
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
