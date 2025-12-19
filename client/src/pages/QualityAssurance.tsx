import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export default function QualityAssurance() {
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
                Quality Assurance Office
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
                Ensuring excellence in education, research, and service delivery
              </p>
            </div>
          </div>
        </section>

        {/* Director Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg shadow-sm">
              <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-center">
                <div className="md:col-span-2 order-1 flex justify-center">
                  <div className="w-40 md:w-44 lg:w-48 aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://riarauniversity.ac.ke/wp-content/uploads/2023/11/Ms.-Dorothy-Oduor-255x340.jpg" 
                      alt="Ms. Dorothy Oduor, Quality Assurance Officer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-3 order-2 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
                    Message from the University Quality Assurance Officer
                  </h2>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    The Quality Assurance Department plays a pivotal role in ensuring that Riara University upholds the highest standards of service delivery. The Office focuses on maintaining quality in the services provided, continuous improvement, and putting students and other stakeholders first.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Vision and Mission Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 mb-8 border-l-4 border-[var(--color-riara-red)]">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                    Vision
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    To ensure satisfaction among all stakeholders, including students, faculty, staff, industry partners, parents, and the wider community. By addressing their needs and expectations, Riara University aims to be a trusted and respected institution contributing positively to society and the advancement of humanity.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                    Mission
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    The Quality Assurance Department advocates for innovation in teaching and learning to produce graduates who are not only academically proficient but also equipped with the skills and values needed for the future workforce. This mission aligns with the University's guiding mantra: "Quality Education is the solid bedrock for National Development," and its core purpose of "Empowering Lives; Impacting Communities."
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Role Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="bg-white p-6 md:p-8 mb-8 border-l-4 border-[var(--color-riara-red)]">
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                The Role of the Quality Assurance Office
              </h3>
              <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                The University is committed to setting high scholarly and service standards while providing impactful learning opportunities for students and excellent, value-driven service to all stakeholders. This is achieved through promoting and resourcing good practices, focusing on the following areas:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-riara-red)] mt-2 flex-shrink-0"></div>
                  <span className="text-[var(--color-text-secondary)]"><strong className="text-[var(--color-text-primary)]">Policies:</strong> Crafting, implementing, and continually refining well-defined policies that serve as guides, ensuring a cohesive and standardized approach to academic affairs</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-riara-red)] mt-2 flex-shrink-0"></div>
                  <span className="text-[var(--color-text-secondary)]"><strong className="text-[var(--color-text-primary)]">Standard Operating Procedures:</strong> Documenting and disseminating processes that facilitate seamless academic operations</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-riara-red)] mt-2 flex-shrink-0"></div>
                  <span className="text-[var(--color-text-secondary)]"><strong className="text-[var(--color-text-primary)]">Standards Maintenance:</strong> Overseeing and maintaining high service standards, ensuring they are adaptive to the evolving landscape of academic expectations and global best practices</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-riara-red)] mt-2 flex-shrink-0"></div>
                  <span className="text-[var(--color-text-secondary)]"><strong className="text-[var(--color-text-primary)]">Regulatory Compliance:</strong> Ensuring the University remains in full compliance with regulatory bodies and statutory provisions</span>
                </div>
                <div className="flex items-start gap-3 md:col-span-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-riara-red)] mt-2 flex-shrink-0"></div>
                  <span className="text-[var(--color-text-secondary)]"><strong className="text-[var(--color-text-primary)]">Capacity Building:</strong> Spearheading initiatives to empower and enhance the skills of all individuals engaged in the educational enterprise</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Strategies Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-riara-red)]">
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                Quality Assurance Strategies
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-2">
                    Continuous Improvement
                  </h4>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                    Regular assessments of academic programs, teaching methodologies, and administrative processes are conducted to identify areas for enhancement. Feedback from students, faculty, and industry partners is actively sought and analyzed, allowing the university to adapt to emerging trends in education and industry. The Office also welcomes unsolicited feedback on any matter related to the business of the University.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-2">
                    Innovation in Teaching and Learning
                  </h4>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                    Promoting innovation in teaching and learning to ensure that students acquire not only academic knowledge but also the adaptive skills required in a rapidly evolving global landscape.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-2">
                    Technology Integration for Enhanced Quality
                  </h4>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                    The Quality Assurance Department utilizes technology to streamline processes and enhance the overall quality of learning. Online learning platforms are utilized to broaden access to learning materials, promoting inclusivity and reaching students globally.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-[var(--color-border-secondary)]">
                <p className="text-base text-[var(--color-text-secondary)] mb-2">
                  The Riara University Quality Assurance Office cherishes and continues to covet the partnership and support of all stakeholders in the never-ending journey towards total quality.
                </p>
                <p className="text-base text-[var(--color-text-secondary)]">
                  For any queries, partnerships, or feedback, please feel free to contact us at <a href="mailto:feedback@riarauniversity.ac.ke" className="text-[var(--color-riara-red)] hover:underline font-semibold">feedback@riarauniversity.ac.ke</a> or call <a href="tel:0703038433" className="text-[var(--color-riara-red)] hover:underline font-semibold">0703038433</a>
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

