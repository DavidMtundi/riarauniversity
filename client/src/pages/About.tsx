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
      <main className="flex-1 pt-12 sm:pt-14 md:pt-24">
        {/* Hero Image Section */}
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
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
                <div>
                  <p className="text-xl md:text-2xl lg:text-3xl text-[var(--color-text-primary)] leading-relaxed mb-6">
                    From its founding in Kenya in the early 21st century until today, Riara University has been infused with the <span className="font-semibold text-[var(--color-riara-red)]">spirit of innovation and possibility</span>.
                  </p>
                  <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    We believe strongly in the mission of higher education – to create and share knowledge and to prepare students to be curious, to think critically, and to contribute to the world.
                  </p>
                  <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                    With <span className="font-semibold text-[var(--color-text-primary)]">world-class scholars</span> and multiple schools located together on a single campus, Riara offers academic excellence across a broad array of disciplines.
                  </p>
                </div>
                <div className="order-first lg:order-last">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg" 
                      alt="Riara University campus" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                  Our Commitment
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  It also is an <span className="font-semibold text-[var(--color-riara-red)]">engine of innovation</span>, blending theory and practice to move ideas and discoveries from labs and classrooms out into the world.
                </p>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  We strive to foster a culture of <span className="font-semibold text-[var(--color-text-primary)]">expansive inquiry, fresh thinking, searching discussion, and freedom of thought</span> – preparing students for leadership and engaged citizenship in the world.
                </p>
              </div>
          </Container>
        </section>

        {/* Mission and Vision Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-10">
                Our Foundation
              </h2>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
                {/* Mission */}
                <div className="border-l-4 border-[var(--color-riara-red)] pl-6 md:pl-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
                    Our Mission
                  </h2>
                  <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                    To provide a holistic education to enable each student to realize their full potential and to develop social and moral values which will underpin their actions through life.
                  </p>
                </div>

                {/* Vision */}
                <div className="border-l-4 border-[var(--color-riara-red)] pl-6 md:pl-8">
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
                <div className="border-l-4 border-[var(--color-riara-red)] pl-6 md:pl-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
                    Our Core Purpose
                  </h2>
                  <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] leading-relaxed italic">
                    Empowering lives, Impacting communities.
                  </p>
                </div>

                {/* Guiding Mantra */}
                <div className="border-l-4 border-[var(--color-riara-red)] pl-6 md:pl-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
                    Guiding Mantra
                  </h2>
                  <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] leading-relaxed italic">
                    Quality Education is the solid bedrock for National Development
                  </p>
                </div>
              </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-10">
                Our Values
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[var(--color-riara-red)] mb-3">Excellence</h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    We have only one standard <strong className="text-[var(--color-text-primary)]">EXCELLENCE!</strong>
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[var(--color-riara-red)] mb-3">Leading by Example</h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    We strive to lead by <strong className="text-[var(--color-text-primary)]">EXAMPLE</strong>.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[var(--color-riara-red)] mb-3">Teamwork</h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    We cultivate the spirit of <strong className="text-[var(--color-text-primary)]">TEAMWORK</strong>.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[var(--color-riara-red)] mb-3">Integrity</h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    We are <strong className="text-[var(--color-text-primary)]">ETHICAL</strong> and <strong className="text-[var(--color-text-primary)]">PROFESSIONAL</strong> in our <strong className="text-[var(--color-text-primary)]">CONDUCT</strong>.
                  </p>
                </div>
                <div className="md:col-span-2 lg:col-span-1">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[var(--color-riara-red)] mb-3">Innovation</h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    We encourage and reward <strong className="text-[var(--color-text-primary)]">INNOVATION</strong>, especially <strong className="text-[var(--color-text-primary)]">BREAKTHROUGH IDEAS</strong>.
                  </p>
                </div>
              </div>
          </Container>
        </section>

        {/* The Riara Story Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-8">
                The Riara Story
              </h2>
              <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  The Riara Group of Schools was founded by Mr. Daniel and Prof. Eddah Gachukia in 1974 as a commitment to the development of a whole learner. The education concept at Riara is one that goes beyond the conventional classroom and syllabus-based learning.
                </p>
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  The process of developing education flows like the perennial Riara River which is forever challenging, forever nourishing, forever fulfilling. This has seen the Riara Group of schools grow from Kindergarten level, then to Primary School, proceeded to Secondary level and now to University and International School levels. Each level of growth of the Riara experience has then become a fountain that has sprung from fertile ground, showering all those it reaches who in turn impact others with enthusiasm, courage and God given brilliance that has continually been embodied by the ever-flowing Riara River.
                </p>
                <div className="relative bg-gradient-to-br from-[var(--color-bg-secondary)] via-white to-[var(--color-bg-secondary)] p-8 md:p-10 rounded-xl border-2 border-[var(--color-riara-red)]/20 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  {/* Decorative background elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-riara-red)]/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--color-riara-red)]/5 rounded-full blur-2xl"></div>
                  
                  {/* Quote icon */}
                  <div className="relative z-10 flex justify-center mb-6">
                    <div className="bg-[var(--color-riara-red)]/10 p-4 rounded-full">
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-riara-red)]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.59-9.57V2.581c-4.615 0-8.963 2.718-11.017 7.39v7.029H2.017V21h12zm6.983 0v-7.391c0-5.704 3.731-9.57 9.59-9.57V2.581c-4.615 0-8.963 2.718-11.017 7.39v7.029H9V21h12z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Quote text */}
                  <p className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-6 italic text-center leading-relaxed">
                    "Quality Education is the solid bedrock for National Development"
                  </p>
                  
                  {/* Divider */}
                  <div className="relative z-10 flex items-center justify-center mb-6">
                    <div className="w-16 h-1 bg-[var(--color-riara-red)] rounded-full"></div>
                  </div>
                  
                  {/* Description text */}
                  <p className="relative z-10 text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed text-center">
                    Guided by the vision of this mantra, the founders of Riara established first the Riara Group of Schools 40 years ago and then the Riara University 6 years ago. Today, we have young Kenyans who came to; Riara Kindergarten then went to; the Riara Primary School and later went to; the Riara Secondary School and today they are at; the Riara University. We invite you to join us in realizing our vision of <span className="font-bold text-[var(--color-riara-red)]">QUALITY EDUCATION FOR THE DEVELOPMENT OF KENYA</span>.
                  </p>
                </div>
              </div>
          </Container>
        </section>

        {/* Accreditation Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-8">
              Accreditation
            </h2>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                    Commission for University Education (CUE)
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Riara University is accredited by the Commission for University Education (CUE), the official regulator for university education in Kenya. This accreditation affirms the university's commitment to providing quality education and meeting the high standards set for academic institutions in the country.
                  </p>
                </div>

                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                    Council of Legal Education (CLE)
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Riara University is accredited by the Council of Legal Education (CLE). This is the statutory regulator of Legal Education and Training in Kenya, among other functions as stipulated in the Legal Education Act (2012). Riara University is proud to have held the status of Accreditation from its inception in 2012.
                  </p>
                </div>

                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                    Kenya Accountants and Secretaries National Examinations Board (KASNEB)
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Riara University holds Accreditation status from the Kenya Accountants and Secretaries National Examinations Board (KASNEB) as both a Training Centre as well as an Examinations Centre.
                  </p>
                </div>

                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                    SAP University Alliance Programme
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Riara University is accredited by SAP under the SAP University Alliance Programme. SAP is a global leader in ICT Enterprise Application Software. Major Corporates globally run on SAP Systems, including Riara University. RU is one of only a couple of universities accredited by SAP to train in SAP Business One Applications.
                  </p>
                </div>
              </div>
          </Container>
        </section>

        {/* Quality Assurance Section - Link */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
                Quality Assurance Office
              </h2>
              <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                The Quality Assurance Office ensures excellence in education, research, and service delivery through continuous improvement, innovation, and regulatory compliance.
              </p>
              <Button 
                asChild
                className="bg-[var(--color-riara-red)] hover:bg-[var(--color-riara-red-dark)] text-white"
              >
                <a href="/quality-assurance">Learn More About Quality Assurance</a>
              </Button>
            </div>
          </Container>
        </section>

        {/* Learn More Section */}
        <section className="py-12 md:py-16 bg-white">
          <Container>
            <div className="text-center">
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
                  className="bg-[var(--color-riara-red)] hover:bg-[var(--color-riara-red-dark)] text-white hover:text-white px-8 sm:px-10 text-base sm:text-lg font-semibold"
                >
                  <a href="/leadership" className="!text-white hover:!text-white">Leadership and Governance</a>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  className="bg-[var(--color-riara-red)] hover:bg-[var(--color-riara-red-dark)] text-white hover:text-white px-8 sm:px-10 text-base sm:text-lg font-semibold"
                >
                  <a href="/history" className="!text-white hover:!text-white">Our History</a>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  className="bg-[var(--color-riara-red)] hover:bg-[var(--color-riara-red-dark)] text-white hover:text-white px-8 sm:px-10 text-base sm:text-lg font-semibold"
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
