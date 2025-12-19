import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Admission() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-12 sm:pt-14 md:pt-24">
        {/* Hero Section */}
        <section className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
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
            <div className="text-center px-4 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-4 md:mb-6 drop-shadow-2xl">
                Admission
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light mb-6 md:mb-8">
                Offering extraordinary freedom to explore, to collaborate, and to challenge yourself
              </p>
              <a
                href="https://admissions.ru.ac.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold bg-[var(--color-stanford-red)] !text-white rounded-lg hover:bg-[var(--color-stanford-red-dark)] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                data-testid="button-apply-admission-page"
              >
                <span className="!text-white">Apply Online</span>
                <svg className="h-5 w-5 !text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Undergraduate Section - Image Left, Text Right */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Image Left */}
                <div className="order-2 lg:order-1">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Undergraduate students at Riara University" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Text Right */}
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-8">
                    Undergraduates
                  </h2>
                  <div className="space-y-8">
                    <div className="border-l-4 border-[var(--color-stanford-red)] pl-6">
                      <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                        Undergraduate Admission
                      </h3>
                      <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                        About 1,700 freshmen and 30 transfer students enroll at Riara each year. We review each applicant with an eye to academic excellence, intellectual vitality, and personal context.
                      </p>
                      <Button variant="outline" className="border-[var(--color-stanford-red)] text-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red)] hover:text-white" asChild>
                        <a href="https://admissions.ru.ac.ke/" target="_blank" rel="noopener noreferrer">
                          Undergraduate Admission <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <div className="border-l-4 border-[var(--color-stanford-red)] pl-6">
                      <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                        Undergraduate Financial Aid
                      </h3>
                      <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                        Riara meets the full financial need of every admitted undergrad who qualifies for assistance. We offer various scholarship and financial aid programs to support students in their academic journey.
                      </p>
                      <Button variant="outline" className="border-[var(--color-stanford-red)] text-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red)] hover:text-white" asChild>
                        <a href="https://admissions.ru.ac.ke/" target="_blank" rel="noopener noreferrer">
                          Undergraduate Financial Aid <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Graduate Studies Section - Text Left, Image Right */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Text Left */}
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-8">
                    Graduate Studies
                  </h2>
                  <div className="space-y-8">
                    <div className="border-l-4 border-[var(--color-stanford-red)] pl-6">
                      <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                        Graduate Admission
                      </h3>
                      <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                        About 150 degree programs are offered across seven schools at Riara. Admission requirements vary greatly among them.
                      </p>
                      <Button variant="outline" className="border-[var(--color-stanford-red)] text-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red)] hover:text-white" asChild>
                        <a href="https://admissions.ru.ac.ke/" target="_blank" rel="noopener noreferrer">
                          Graduate Admissions <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <div className="border-l-4 border-[var(--color-stanford-red)] pl-6">
                      <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                        Financing Graduate Study
                      </h3>
                      <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                        The cost of graduate study at Riara — and the resources available for financial support — vary by degree, school and enrollment status. About 85% of Riara graduate students receive financial assistance.
                      </p>
                      <Button variant="outline" className="border-[var(--color-stanford-red)] text-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red)] hover:text-white" asChild>
                        <a href="https://admissions.ru.ac.ke/" target="_blank" rel="noopener noreferrer">
                          Graduate Student Funding <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                {/* Image Right */}
                <div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Graduate students at Riara University" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Special Courses Section - Image Left, Text Right */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Image Left */}
                <div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Special courses at Riara University" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Text Right */}
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-8">
                    Special Courses
                  </h2>
                  <div className="space-y-8">
                    <div className="border-l-4 border-[var(--color-stanford-red)] pl-6">
                      <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                        Professional Development Programs
                      </h3>
                      <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                        Riara offers a range of specialized courses and professional development programs designed to enhance skills and knowledge in specific fields. These programs are tailored for working professionals and those seeking career advancement.
                      </p>
                      <Button variant="outline" className="border-[var(--color-stanford-red)] text-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red)] hover:text-white" asChild>
                        <a href="/courses">
                          View Special Courses <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <div className="border-l-4 border-[var(--color-stanford-red)] pl-6">
                      <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                        Short Courses & Certificates
                      </h3>
                      <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                        Explore our certificate programs and short courses that provide focused learning experiences in various disciplines, from technology to business and beyond.
                      </p>
                      <Button variant="outline" className="border-[var(--color-stanford-red)] text-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red)] hover:text-white" asChild>
                        <a href="/courses">
                          Certificate Programs <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Admission Process Section - Flow Design */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-4 text-center">
                Admission Process
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                Follow these simple steps to begin your journey at Riara University. We're here to guide you through every stage of the admission process.
              </p>
              
              {/* Flow Steps */}
              <div className="relative">
                {/* Desktop Flow - Horizontal with Arrows */}
                <div className="hidden lg:block">
                  <div className="flex items-start gap-4">
                    {/* Step 1 */}
                    <div className="flex-1">
                      <div className="bg-white border-2 border-[var(--color-stanford-red)] rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-all relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <div className="w-12 h-12 bg-[var(--color-stanford-red)] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                            1
                          </div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4 mt-4">
                          Submit Application
                        </h3>
                        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                          Complete and submit your application forms to the Academic Registrar's Office along with all required documents.
                        </p>
                        <div className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                          <div className="flex items-start gap-2">
                            <span className="text-[var(--color-stanford-red)] mt-1">✓</span>
                            <span>Application forms</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-[var(--color-stanford-red)] mt-1">✓</span>
                            <span>Certificates & transcripts</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-[var(--color-stanford-red)] mt-1">✓</span>
                            <span>ID/Passport & birth certificate</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-[var(--color-stanford-red)] mt-1">✓</span>
                            <span>Passport photo</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-[var(--color-stanford-red)] mt-1">✓</span>
                            <span>Application fee (Kshs. 2,000)</span>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-[var(--color-border-secondary)]">
                          <p className="text-xs text-[var(--color-text-secondary)]">
                            <strong>Contact:</strong> admissions@riarauniversity.ac.ke<br />
                            Tel: 0703038000
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Arrow 1 */}
                    <div className="flex items-center justify-center pt-8">
                      <ArrowRight className="h-8 w-8 text-[var(--color-stanford-red)]" />
                    </div>

                    {/* Step 2 */}
                    <div className="flex-1">
                      <div className="bg-white border-2 border-[var(--color-stanford-red)] rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-all relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <div className="w-12 h-12 bg-[var(--color-stanford-red)] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                            2
                          </div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4 mt-4">
                          Review & Assessment
                        </h3>
                        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                          The Registrar's Office assesses your suitability and seeks concurrence from the relevant School/Department.
                        </p>
                        <div className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                          <div className="flex items-start gap-2">
                            <span className="text-[var(--color-stanford-red)] mt-1">✓</span>
                            <span>Document verification</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-[var(--color-stanford-red)] mt-1">✓</span>
                            <span>School/Department approval</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-[var(--color-stanford-red)] mt-1">✓</span>
                            <span>Qualification recognition (if needed)</span>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-[var(--color-border-secondary)]">
                          <p className="text-xs text-[var(--color-text-secondary)]">
                            If needed, applicants may be directed to CUE or KNQA for qualification recognition.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Arrow 2 */}
                    <div className="flex items-center justify-center pt-8">
                      <ArrowRight className="h-8 w-8 text-[var(--color-stanford-red)]" />
                    </div>

                    {/* Step 3 */}
                    <div className="flex-1">
                      <div className="bg-white border-2 border-[var(--color-stanford-red)] rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-all relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <div className="w-12 h-12 bg-[var(--color-stanford-red)] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                            3
                          </div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4 mt-4">
                          Admission Letter
                        </h3>
                        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                          Upon successful assessment, you'll receive an admission letter. Original documents will be verified on a date communicated in the letter.
                        </p>
                        <div className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                          <div className="flex items-start gap-2">
                            <span className="text-[var(--color-stanford-red)] mt-1">✓</span>
                            <span>Admission letter issued</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-[var(--color-stanford-red)] mt-1">✓</span>
                            <span>Original document verification date set</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-[var(--color-stanford-red)] mt-1">✓</span>
                            <span>Programme admission confirmed</span>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-[var(--color-border-secondary)]">
                          <p className="text-xs text-[var(--color-text-secondary)]">
                            Students are admitted pending registration. Intake: January, May, or September.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Second Row - Steps 4 & 5 */}
                  <div className="flex items-start gap-4 mt-8">
                    {/* Step 4 */}
                    <div className="flex-1">
                      <div className="bg-white border-2 border-[var(--color-stanford-red)] rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-all relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <div className="w-12 h-12 bg-[var(--color-stanford-red)] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                            4
                          </div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4 mt-4">
                          Orientation
                        </h3>
                        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                          Attend the mandatory orientation program where you'll receive valuable information about academic policies, support services, and campus resources.
                        </p>
                        <div className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                          <div className="flex items-start gap-2">
                            <span className="text-[var(--color-stanford-red)] mt-1">✓</span>
                            <span>Academic policies overview</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-[var(--color-stanford-red)] mt-1">✓</span>
                            <span>Support services introduction</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-[var(--color-stanford-red)] mt-1">✓</span>
                            <span>Campus resources tour</span>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-[var(--color-border-secondary)]">
                          <p className="text-xs text-[var(--color-text-secondary)]">
                            <strong>Note:</strong> Attendance is mandatory for all new students.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Arrow 3 */}
                    <div className="flex items-center justify-center pt-8">
                      <ArrowRight className="h-8 w-8 text-[var(--color-stanford-red)]" />
                    </div>

                    {/* Step 5 */}
                    <div className="flex-1">
                      <div className="bg-white border-2 border-[var(--color-stanford-red)] rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-all relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <div className="w-12 h-12 bg-[var(--color-stanford-red)] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                            5
                          </div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4 mt-4">
                          Class Registration
                        </h3>
                        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                          Register for your classes and receive your Admission Number, which becomes part of your permanent record.
                        </p>
                        <div className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                          <div className="flex items-start gap-2">
                            <span className="text-[var(--color-stanford-red)] mt-1">✓</span>
                            <span>Select units with School guidance</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-[var(--color-stanford-red)] mt-1">✓</span>
                            <span>Enter units into Student Management System</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-[var(--color-stanford-red)] mt-1">✓</span>
                            <span>Pay fees (full or partial)</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-[var(--color-stanford-red)] mt-1">✓</span>
                            <span>Submit payment slip to Finance Department</span>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-[var(--color-border-secondary)]">
                          <p className="text-xs text-[var(--color-text-secondary)]">
                            <strong>Congratulations!</strong> You're now officially a Riara University student.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Empty space for alignment */}
                    <div className="flex-1"></div>
                  </div>
                </div>

                {/* Mobile Flow - Vertical with Arrows */}
                <div className="lg:hidden space-y-8">
                  {/* Step 1 */}
                  <div className="relative">
                    <div className="bg-white border-2 border-[var(--color-stanford-red)] rounded-lg p-6 md:p-8 shadow-lg relative">
                      <div className="absolute -left-4 top-8 md:-left-6 md:top-10">
                        <div className="w-12 h-12 bg-[var(--color-stanford-red)] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          1
                        </div>
                      </div>
                      <div className="ml-8 md:ml-12">
                        <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                          Submit Application
                        </h3>
                        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                          Complete and submit your application forms to the Academic Registrar's Office along with all required documents.
                        </p>
                        <div className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                          <div className="flex items-start gap-2">
                            <span className="text-[var(--color-stanford-red)] mt-1">✓</span>
                            <span>Application forms, certificates, ID, photo, fee (Kshs. 2,000)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center my-4">
                      <ArrowRight className="h-8 w-8 text-[var(--color-stanford-red)] rotate-90" />
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    <div className="bg-white border-2 border-[var(--color-stanford-red)] rounded-lg p-6 md:p-8 shadow-lg relative">
                      <div className="absolute -left-4 top-8 md:-left-6 md:top-10">
                        <div className="w-12 h-12 bg-[var(--color-stanford-red)] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          2
                        </div>
                      </div>
                      <div className="ml-8 md:ml-12">
                        <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                          Review & Assessment
                        </h3>
                        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                          The Registrar's Office assesses your suitability and seeks concurrence from the relevant School/Department.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center my-4">
                      <ArrowRight className="h-8 w-8 text-[var(--color-stanford-red)] rotate-90" />
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                    <div className="bg-white border-2 border-[var(--color-stanford-red)] rounded-lg p-6 md:p-8 shadow-lg relative">
                      <div className="absolute -left-4 top-8 md:-left-6 md:top-10">
                        <div className="w-12 h-12 bg-[var(--color-stanford-red)] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          3
                        </div>
                      </div>
                      <div className="ml-8 md:ml-12">
                        <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                          Admission Letter
                        </h3>
                        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                          Upon successful assessment, you'll receive an admission letter. Original documents will be verified on a date communicated in the letter.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center my-4">
                      <ArrowRight className="h-8 w-8 text-[var(--color-stanford-red)] rotate-90" />
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative">
                    <div className="bg-white border-2 border-[var(--color-stanford-red)] rounded-lg p-6 md:p-8 shadow-lg relative">
                      <div className="absolute -left-4 top-8 md:-left-6 md:top-10">
                        <div className="w-12 h-12 bg-[var(--color-stanford-red)] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          4
                        </div>
                      </div>
                      <div className="ml-8 md:ml-12">
                        <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                          Orientation
                        </h3>
                        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                          Attend the mandatory orientation program where you'll receive valuable information about academic policies, support services, and campus resources.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center my-4">
                      <ArrowRight className="h-8 w-8 text-[var(--color-stanford-red)] rotate-90" />
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="relative">
                    <div className="bg-white border-2 border-[var(--color-stanford-red)] rounded-lg p-6 md:p-8 shadow-lg relative">
                      <div className="absolute -left-4 top-8 md:-left-6 md:top-10">
                        <div className="w-12 h-12 bg-[var(--color-stanford-red)] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          5
                        </div>
                      </div>
                      <div className="ml-8 md:ml-12">
                        <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                          Class Registration
                        </h3>
                        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                          Register for your classes and receive your Admission Number, which becomes part of your permanent record.
                        </p>
                        <div className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                          <div className="flex items-start gap-2">
                            <span className="text-[var(--color-stanford-red)] mt-1">✓</span>
                            <span>Select units, enter into Student Management System, pay fees, submit to Finance Department</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Other Programs Section - Text Left, Image Right */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Text Left */}
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-8">
                    Other Programs
                  </h2>
                  <div className="space-y-8">
                    <div className="border-l-4 border-[var(--color-stanford-red)] pl-6">
                      <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                        Continuing Education
                      </h3>
                      <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                        Riara University offers continuing education programs for lifelong learners seeking to expand their knowledge, update their skills, or explore new areas of interest.
                      </p>
                      <Button variant="outline" className="border-[var(--color-stanford-red)] text-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red)] hover:text-white" asChild>
                        <a href="https://admissions.ru.ac.ke/" target="_blank" rel="noopener noreferrer">
                          Continuing Education <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <div className="border-l-4 border-[var(--color-stanford-red)] pl-6">
                      <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                        International Programs
                      </h3>
                      <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                        Discover our international exchange programs, study abroad opportunities, and partnerships with institutions worldwide that provide global learning experiences.
                      </p>
                      <Button variant="outline" className="border-[var(--color-stanford-red)] text-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red)] hover:text-white" asChild>
                        <a href="https://admissions.ru.ac.ke/" target="_blank" rel="noopener noreferrer">
                          International Programs <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                {/* Image Right */}
                <div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Other programs at Riara University" 
                      className="w-full h-full object-cover"
                    />
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
