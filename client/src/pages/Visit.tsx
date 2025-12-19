import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, Calendar, Users, Building2, Car, Bus, Navigation } from "lucide-react";

export default function Visit() {
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-4 md:mb-6 drop-shadow-2xl">
                Visit Riara University
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
                Experience our vibrant campus and discover what makes Riara unique
              </p>
            </div>
          </div>
        </section>

        {/* Campus Tours Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Campus Tours
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                We welcome prospective students, families, and visitors to explore our beautiful campus. 
                Schedule a guided tour to see our facilities, meet our community, and learn about life at Riara University.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="h-8 w-8 text-[var(--color-riara-red)]" />
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)]">
                    Schedule a Tour
                  </h3>
                </div>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Book a personalized campus tour with one of our student ambassadors. Tours are available 
                  Monday through Friday, and can be customized based on your interests.
                </p>
                <Button
                  className="bg-[var(--color-riara-red)] text-white hover:bg-[var(--color-riara-red-dark)]"
                  asChild
                >
                  <a href="mailto:admissions@riarauniversity.ac.ke?subject=Campus Tour Request">
                    Request a Tour
                  </a>
                </Button>
              </div>

              <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Users className="h-8 w-8 text-[var(--color-riara-red)]" />
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)]">
                    Group Visits
                  </h3>
                </div>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Planning to visit with a school group or organization? We can arrange special group tours 
                  and information sessions tailored to your needs.
                </p>
                <Button
                  variant="outline"
                  className="border-[var(--color-riara-red)] text-[var(--color-riara-red)] hover:bg-[var(--color-riara-red)] hover:text-white"
                  asChild
                >
                  <a href="mailto:admissions@riarauniversity.ac.ke?subject=Group Visit Request">
                    Arrange Group Visit
                  </a>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Location & Directions Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-10 text-center">
              Location & Directions
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Address Information */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="h-8 w-8 text-[var(--color-riara-red)]" />
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)]">
                    Our Address
                  </h3>
                </div>
                <div className="space-y-4 text-base md:text-lg text-[var(--color-text-secondary)]">
                  <p className="font-semibold text-[var(--color-text-primary)]">Riara University</p>
                  <p>49940 – 00100, Nairobi</p>
                  <p>Raila Odinga Road (formerly Mbagathi Way)</p>
                  <p className="pt-4 border-t border-[var(--color-border-light)]">
                    <strong>New Campus:</strong> Konza Technopolis (Under Development)
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <Phone className="h-8 w-8 text-[var(--color-riara-red)]" />
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)]">
                    Contact Us
                  </h3>
                </div>
                <div className="space-y-4 text-base md:text-lg text-[var(--color-text-secondary)]">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[var(--color-riara-red)] flex-shrink-0" />
                    <a href="tel:+254703038000" className="hover:text-[var(--color-riara-red)] transition-colors">
                      +254 703 038 000
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[var(--color-riara-red)] flex-shrink-0" />
                    <a href="mailto:info@riarauniversity.ac.ke" className="hover:text-[var(--color-riara-red)] transition-colors break-all">
                      info@riarauniversity.ac.ke
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[var(--color-riara-red)] flex-shrink-0" />
                    <a href="mailto:admissions@riarauniversity.ac.ke" className="hover:text-[var(--color-riara-red)] transition-colors break-all">
                      admissions@riarauniversity.ac.ke
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-[16/9] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.812!2d36.8069232!3d-1.3148565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f105e9f1c97eb%3A0xd0d8411685ae0273!2s49940%2C%20Raila%20Odinga%20Wy%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1735689600000!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Riara University Campus Location"
                ></iframe>
              </div>
            </div>
          </Container>
        </section>

        {/* Transportation Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-10 text-center">
              Getting Here
            </h2>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg">
                <Car className="h-10 w-10 text-[var(--color-riara-red)] mb-4" />
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                  By Car
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  Located along Raila Odinga Road (formerly Mbagathi Way), easily accessible from the city center. 
                  Ample parking available on campus.
                </p>
              </div>

              <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg">
                <Bus className="h-10 w-10 text-[var(--color-riara-red)] mb-4" />
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                  By Public Transport
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  Well-served by matatus and buses. The campus is accessible via multiple public transport routes 
                  from various parts of Nairobi.
                </p>
              </div>

              <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg">
                <Navigation className="h-10 w-10 text-[var(--color-riara-red)] mb-4" />
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                  Navigation
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  Use GPS coordinates: -1.3148565, 36.8069232 or search for "Riara University" on Google Maps 
                  for turn-by-turn directions.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Visiting Hours Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-[var(--color-riara-red)]">
                <div className="flex items-center gap-4 mb-6">
                  <Clock className="h-8 w-8 text-[var(--color-riara-red)]" />
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[var(--color-text-primary)]">
                    Visiting Hours
                  </h2>
                </div>
                <div className="space-y-4 text-base md:text-lg text-[var(--color-text-secondary)]">
                  <div>
                    <p className="font-semibold text-[var(--color-text-primary)] mb-2">Office Hours:</p>
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                  <div className="pt-4 border-t border-[var(--color-border-light)]">
                    <p className="font-semibold text-[var(--color-text-primary)] mb-2">Campus Tours:</p>
                    <p>Available by appointment Monday - Friday</p>
                    <p className="text-sm text-[var(--color-text-tertiary)] mt-2">
                      Please contact us in advance to schedule your visit
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

