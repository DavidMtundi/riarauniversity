import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Heart, GraduationCap, Building2, Users, ArrowRight, Mail, Phone, Gift } from "lucide-react";

export default function Giving() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-12 sm:pt-14 md:pt-24">
        {/* Hero Section */}
        <section className="relative w-full h-[32.5vh] md:h-[37.5vh] overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[url('https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-riara-red)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-riara-red)]/5 rounded-full blur-3xl"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4">
              <div className="flex items-center justify-center mb-4">
                <Heart className="h-12 w-12 md:h-16 md:w-16 text-white/90 mr-3" />
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-4 md:mb-6 drop-shadow-2xl">
                  Giving to Riara
                </h1>
              </div>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
                Support excellence in education and help shape the future of our students
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Make a Difference
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Your generous support helps Riara University continue its mission of providing quality education, 
                fostering innovation, and nurturing the next generation of leaders. Every contribution, regardless of size, 
                makes a meaningful impact on our students and the broader community.
              </p>
              <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                Together, we can empower lives and impact communities through education.
              </p>
            </div>
          </Container>
        </section>

        {/* Ways to Give Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-10 text-center">
              Ways to Give
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <GraduationCap className="h-10 w-10 text-[var(--color-riara-red)] mb-4" />
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                  Scholarships
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Support deserving students by funding scholarships that make quality education accessible to all, 
                  regardless of financial background.
                </p>
                <Button
                  variant="outline"
                  className="border-[var(--color-riara-red)] text-[var(--color-riara-red)] hover:bg-[var(--color-riara-red)] hover:text-white"
                  asChild
                >
                  <a href="mailto:development@riarauniversity.ac.ke?subject=Scholarship Donation Inquiry">
                    Learn More <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>

              <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Building2 className="h-10 w-10 text-[var(--color-riara-red)] mb-4" />
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                  Infrastructure
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Contribute to building state-of-the-art facilities, laboratories, libraries, and learning spaces 
                  that enhance the educational experience.
                </p>
                <Button
                  variant="outline"
                  className="border-[var(--color-riara-red)] text-[var(--color-riara-red)] hover:bg-[var(--color-riara-red)] hover:text-white"
                  asChild
                >
                  <a href="mailto:development@riarauniversity.ac.ke?subject=Infrastructure Support Inquiry">
                    Learn More <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>

              <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Users className="h-10 w-10 text-[var(--color-riara-red)] mb-4" />
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                  Research & Innovation
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Fund research initiatives, innovation programs, and academic projects that drive knowledge creation 
                  and address societal challenges.
                </p>
                <Button
                  variant="outline"
                  className="border-[var(--color-riara-red)] text-[var(--color-riara-red)] hover:bg-[var(--color-riara-red)] hover:text-white"
                  asChild
                >
                  <a href="mailto:development@riarauniversity.ac.ke?subject=Research Funding Inquiry">
                    Learn More <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>

              <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Gift className="h-10 w-10 text-[var(--color-riara-red)] mb-4" />
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                  General Fund
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Make an unrestricted gift that allows the university to allocate resources where they are needed most, 
                  providing flexibility to address emerging priorities.
                </p>
                <Button
                  variant="outline"
                  className="border-[var(--color-riara-red)] text-[var(--color-riara-red)] hover:bg-[var(--color-riara-red)] hover:text-white"
                  asChild
                >
                  <a href="mailto:development@riarauniversity.ac.ke?subject=General Fund Donation">
                    Donate Now <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>

              <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Heart className="h-10 w-10 text-[var(--color-riara-red)] mb-4" />
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                  Endowment
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Establish a lasting legacy through an endowed fund that provides perpetual support for specific programs, 
                  scholarships, or initiatives.
                </p>
                <Button
                  variant="outline"
                  className="border-[var(--color-riara-red)] text-[var(--color-riara-red)] hover:bg-[var(--color-riara-red)] hover:text-white"
                  asChild
                >
                  <a href="mailto:development@riarauniversity.ac.ke?subject=Endowment Inquiry">
                    Learn More <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>

              <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Users className="h-10 w-10 text-[var(--color-riara-red)] mb-4" />
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                  Alumni Giving
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Join fellow alumni in giving back to your alma mater. Your support helps current students experience 
                  the same transformative education you received.
                </p>
                <Button
                  variant="outline"
                  className="border-[var(--color-riara-red)] text-[var(--color-riara-red)] hover:bg-[var(--color-riara-red)] hover:text-white"
                  asChild
                >
                  <a href="mailto:alumni@riarauniversity.ac.ke?subject=Alumni Giving">
                    Give Back <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Impact Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-10 text-center">
                Your Impact
              </h2>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
                <div className="text-center p-6 bg-[var(--color-bg-secondary)] rounded-lg">
                  <div className="text-4xl md:text-5xl font-bold text-[var(--color-riara-red)] mb-2">2,500+</div>
                  <p className="text-sm md:text-base text-[var(--color-text-secondary)]">Students supported through scholarships</p>
                </div>
                <div className="text-center p-6 bg-[var(--color-bg-secondary)] rounded-lg">
                  <div className="text-4xl md:text-5xl font-bold text-[var(--color-riara-red)] mb-2">50+</div>
                  <p className="text-sm md:text-base text-[var(--color-text-secondary)]">Research projects funded</p>
                </div>
                <div className="text-center p-6 bg-[var(--color-bg-secondary)] rounded-lg">
                  <div className="text-4xl md:text-5xl font-bold text-[var(--color-riara-red)] mb-2">100%</div>
                  <p className="text-sm md:text-base text-[var(--color-text-secondary)]">Of donations go directly to programs</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8">
                Contact our Development Office to discuss giving options, learn about naming opportunities, 
                or explore how your gift can create lasting impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-[var(--color-riara-red)] text-white hover:bg-[var(--color-riara-red-dark)]"
                  asChild
                >
                  <a href="mailto:development@riarauniversity.ac.ke?subject=Giving Inquiry">
                    <Mail className="h-5 w-5 mr-2" />
                    Contact Development Office
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-[var(--color-riara-red)] text-[var(--color-riara-red)] hover:bg-[var(--color-riara-red)] hover:text-white"
                  asChild
                >
                  <a href="tel:+254703038000">
                    <Phone className="h-5 w-5 mr-2" />
                    +254 703 038 000
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

