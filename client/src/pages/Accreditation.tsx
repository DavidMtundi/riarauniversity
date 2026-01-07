import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Award, ExternalLink, CheckCircle2, Quote, GraduationCap, TrendingUp, Shield } from "lucide-react";
import { PAGE_HERO_IMAGES, ACCREDITATION_LOGOS } from "@/lib/images";
import { ImageContainer } from "@/components/ImageContainer";

export default function Accreditation() {
  const accreditations = [
    {
      id: "cue",
      name: "Commission for University Education (CUE)",
      abbreviation: "CUE",
      description: "Riara University is accredited by the Commission for University Education (CUE), the official regulator for university education in Kenya. This accreditation affirms the university's commitment to providing quality education and meeting the high standards set for academic institutions in the country.",
      website: "https://www.cue.or.ke",
      logoUrl: ACCREDITATION_LOGOS.cue,
      status: "Fully Accredited",
      year: "2012",
      scope: "Institutional Accreditation",
      benefits: [
        "Recognition as a legitimate university in Kenya",
        "Eligibility for government funding and support",
        "Student access to government loans and scholarships",
        "International recognition of degrees"
      ]
    },
    {
      id: "cle",
      name: "Council of Legal Education (CLE)",
      abbreviation: "CLE",
      description: "Riara University is accredited by the Council of Legal Education (CLE). This is the statutory regulator of Legal Education and Training in Kenya, among other functions as stipulated in the Legal Education Act (2012). Riara University is proud to have held the status of Accreditation from its inception in 2012.",
      website: "https://www.counciloflegaleducation.or.ke",
      logoUrl: ACCREDITATION_LOGOS.cle,
      status: "Fully Accredited",
      year: "2012",
      scope: "Law School Programs",
      benefits: [
        "Recognition of law degrees for legal practice",
        "Graduates eligible for admission to the Bar",
        "Compliance with Legal Education Act (2012)",
        "Quality assurance in legal education"
      ]
    },
    {
      id: "kasneb",
      name: "Kenya Accountants and Secretaries National Examinations Board (KASNEB)",
      abbreviation: "KASNEB",
      description: "Riara University holds Accreditation status from the Kenya Accountants and Secretaries National Examinations Board (KASNEB) as both a Training Centre as well as an Examinations Centre.",
      website: "https://www.kasneb.or.ke",
      logoUrl: ACCREDITATION_LOGOS.kasneb,
      status: "Accredited Training & Examinations Centre",
      year: "2012",
      scope: "Professional Accounting Programs (CPA, CS, ATD)",
      benefits: [
        "Authorized to offer KASNEB courses",
        "Students can sit for examinations on campus",
        "Professional certification pathways",
        "Industry-recognized qualifications"
      ]
    },
    {
      id: "sap",
      name: "SAP University Alliance Programme",
      abbreviation: "SAP",
      description: "Riara University is accredited by SAP under the SAP University Alliance Programme. SAP is a global leader in ICT Enterprise Application Software. Major Corporates globally run on SAP Systems, including Riara University. RU is one of only a couple of universities accredited by SAP to train in SAP Business One Applications.",
      website: "https://www.sap.com/africa/education/university-alliances.html",
      logoUrl: "https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg",
      status: "SAP University Alliance Partner",
      year: "2012",
      scope: "SAP Business One Applications Training",
      benefits: [
        "Access to SAP software and training materials",
        "Industry-relevant ICT skills development",
        "Enhanced employability for graduates",
        "Partnership with global technology leader"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-12 sm:pt-14 md:pt-24">
        {/* Hero Section */}
        <section className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className={`absolute inset-0 bg-[url('${PAGE_HERO_IMAGES.default}')] bg-cover bg-center bg-no-repeat opacity-20`}></div>
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
                <Award className="h-12 w-12 md:h-16 md:w-16 text-white/90 mr-3" />
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-4 md:mb-6 drop-shadow-2xl">
                  Accreditation
                </h1>
              </div>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
                Recognized excellence in education and professional training
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Shield className="h-10 w-10 text-[var(--color-riara-red)]" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)]">
                  Our Accreditations
                </h2>
              </div>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Accreditation is a mark of quality and recognition that validates our commitment to excellence in education. 
                Riara University is proud to be accredited by leading regulatory bodies and professional organizations, 
                ensuring that our programs meet the highest standards of academic and professional excellence.
              </p>
              <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                These accreditations affirm our dedication to providing quality education, maintaining rigorous academic standards, 
                and preparing our students for successful careers in their chosen fields.
              </p>
            </div>

            {/* Accreditation Timeline */}
            <div className="max-w-5xl mx-auto mt-16">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-text-primary)] mb-8 text-center">
                Our Accreditation Journey
              </h3>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[var(--color-riara-red)] to-[var(--color-riara-red)]/50 hidden md:block"></div>
                <div className="space-y-8">
                  <div className="relative flex flex-col md:flex-row items-center gap-6">
                    <div className="w-full md:w-1/2 md:text-right md:pr-8">
                      <div className="bg-gradient-to-br from-[var(--color-bg-secondary)] to-white p-6 rounded-lg shadow-md border-l-4 border-[var(--color-riara-red)]">
                        <div className="flex items-center gap-2 mb-2 md:justify-end">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                          <span className="text-sm font-semibold text-green-600">2012</span>
                        </div>
                        <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">Initial Accreditation</h4>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          Riara University received its first accreditations from CUE, CLE, and KASNEB, establishing our foundation of excellence.
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--color-riara-red)] rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                    <div className="w-full md:w-1/2"></div>
                  </div>
                  <div className="relative flex flex-col md:flex-row items-center gap-6">
                    <div className="w-full md:w-1/2"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--color-riara-red)] rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                    <div className="w-full md:w-1/2 md:text-left md:pl-8">
                      <div className="bg-gradient-to-br from-[var(--color-bg-secondary)] to-white p-6 rounded-lg shadow-md border-l-4 border-[var(--color-riara-red)]">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                          <span className="text-sm font-semibold text-green-600">2012</span>
                        </div>
                        <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">SAP Partnership</h4>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          Joined the SAP University Alliance Programme, becoming one of the few universities in Kenya accredited for SAP training.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-col md:flex-row items-center gap-6">
                    <div className="w-full md:w-1/2 md:text-right md:pr-8">
                      <div className="bg-gradient-to-br from-[var(--color-bg-secondary)] to-white p-6 rounded-lg shadow-md border-l-4 border-[var(--color-riara-red)]">
                        <div className="flex items-center gap-2 mb-2 md:justify-end">
                          <TrendingUp className="h-5 w-5 text-[var(--color-riara-red)]" />
                          <span className="text-sm font-semibold text-[var(--color-riara-red)]">Ongoing</span>
                        </div>
                        <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">Continuous Excellence</h4>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          Maintaining and renewing all accreditations through continuous improvement and quality assurance.
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--color-riara-red)] rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                    <div className="w-full md:w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Accreditation Cards Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="grid md:grid-cols-2 gap-8 md:gap-10">
              {accreditations.map((accreditation) => (
                <div
                  key={accreditation.id}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-[var(--color-riara-red)]"
                >
                  <div className="p-6 md:p-8">
                    {/* Header with Logo */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-[var(--color-bg-secondary)] rounded-lg flex items-center justify-center border-2 border-[var(--color-border-light)] overflow-hidden">
                        {accreditation.logoUrl ? (
                          <ImageContainer
                            src={accreditation.logoUrl}
                            alt={`${accreditation.name} logo`}
                            containerClassName="w-full h-full p-2"
                            objectFit="contain"
                            showSkeleton={false}
                          />
                        ) : (
                          <Award className="h-8 w-8 md:h-10 md:w-10 text-[var(--color-riara-red)] opacity-50" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-2">
                          {accreditation.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span className="text-sm md:text-base font-semibold text-green-600">
                            {accreditation.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                      {accreditation.description}
                    </p>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-[var(--color-border-light)]">
                      <div>
                        <p className="text-xs md:text-sm text-[var(--color-text-tertiary)] mb-1">Year Accredited</p>
                        <p className="text-base md:text-lg font-semibold text-[var(--color-text-primary)]">{accreditation.year}</p>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-[var(--color-text-tertiary)] mb-1">Scope</p>
                        <p className="text-base md:text-lg font-semibold text-[var(--color-text-primary)]">{accreditation.scope}</p>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm md:text-base font-semibold text-[var(--color-text-primary)] mb-3">
                        Key Benefits:
                      </h4>
                      <ul className="space-y-2">
                        {accreditation.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[var(--color-riara-red)] mt-1 flex-shrink-0" />
                            <span className="text-sm md:text-base text-[var(--color-text-secondary)]">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Website Link */}
                    <a
                      href={accreditation.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-[var(--color-riara-red)] hover:text-[var(--color-riara-red-dark)] transition-colors"
                    >
                      Visit {accreditation.abbreviation} Website
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Why Accreditation Matters Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-10 text-center">
                Why Accreditation Matters
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                    Quality Assurance
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Accreditation ensures that our programs meet rigorous academic and professional standards, 
                    providing students with a high-quality education that is recognized and valued by employers and institutions worldwide.
                  </p>
                </div>

                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                    Student Benefits
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Accredited programs provide students with access to financial aid, government scholarships, 
                    professional certifications, and enhanced career opportunities in their chosen fields.
                  </p>
                </div>

                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                    International Recognition
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Our accreditations ensure that degrees and certificates from Riara University are recognized 
                    internationally, enabling graduates to pursue further studies or careers anywhere in the world.
                  </p>
                </div>

                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                    Continuous Improvement
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Accreditation requires ongoing assessment and improvement, ensuring that our programs remain 
                    current, relevant, and aligned with industry needs and best practices.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Student Testimonials Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-10 text-center">
                What Accreditation Means to Our Students
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="h-8 w-8 text-[var(--color-riara-red)]" />
                    <div>
                      <p className="font-semibold text-[var(--color-text-primary)]">Law Graduate</p>
                      <p className="text-sm text-[var(--color-text-secondary)]">Class of 2021</p>
                    </div>
                  </div>
                  <Quote className="h-6 w-6 text-[var(--color-riara-red)]/30 mb-3" />
                  <p className="text-base text-[var(--color-text-secondary)] italic mb-4">
                    "Riara's CLE accreditation was crucial for my career. It meant my degree was recognized by the legal profession, 
                    and I could immediately pursue my legal practice license. The quality of education here truly prepared me for the real world."
                  </p>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">— David K., Attorney</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="h-8 w-8 text-[var(--color-riara-red)]" />
                    <div>
                      <p className="font-semibold text-[var(--color-text-primary)]">Business Graduate</p>
                      <p className="text-sm text-[var(--color-text-secondary)]">Class of 2022</p>
                    </div>
                  </div>
                  <Quote className="h-6 w-6 text-[var(--color-riara-red)]/30 mb-3" />
                  <p className="text-base text-[var(--color-text-secondary)] italic mb-4">
                    "The KASNEB accreditation allowed me to sit for professional exams right on campus. This convenience, 
                    combined with the quality education, helped me pass my CPA exams and land my dream job at a top accounting firm."
                  </p>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">— Mary N., CPA</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Questions About Accreditation?
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8">
                For more information about our accreditations or to verify our accredited status, 
                please contact our Quality Assurance Office or visit the official websites of our accrediting bodies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/quality-assurance"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-riara-red)] text-white font-semibold rounded-lg hover:bg-[var(--color-riara-red-dark)] transition-colors shadow-md hover:shadow-lg"
                >
                  Quality Assurance Office
                </a>
                <a
                  href="mailto:info@riarauniversity.ac.ke"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[var(--color-riara-red)] font-semibold rounded-lg border-2 border-[var(--color-riara-red)] hover:bg-[var(--color-bg-secondary)] transition-colors shadow-md hover:shadow-lg"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

