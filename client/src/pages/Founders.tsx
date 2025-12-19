import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap, Building2, Users, Globe, BookOpen } from "lucide-react";

export default function Founders() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-12 sm:pt-14 md:pt-24">
        {/* Hero Image Section */}
        <section className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[url('https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg')] bg-cover bg-center bg-no-repeat opacity-30"></div>
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
                Our Founders
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
                Visionary leaders who shaped Riara University's mission
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 md:py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                  Riara University was founded by two distinguished Kenyan educationists, Mr. Daniel Gachukia and Prof. Eddah Gachukia, who have dedicated their lives to advancing education in Kenya and beyond. Their vision and commitment to excellence have shaped Riara into a leading institution of higher learning.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Mr. Daniel Gachukia Section */}
        <section className="py-12 md:py-16 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {/* Image/Profile Section */}
                <div className="md:col-span-1">
                  <div className="sticky top-24">
                    <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden mb-6">
                      <img 
                        src="https://riarauniversity.ac.ke/wp-content/uploads/2017/07/Mr.-Daniel-Gachukia-Chairman.jpg" 
                        alt="Mr. Daniel Gachukia"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center">
                                <div class="text-center">
                                  <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-[var(--color-stanford-red)]/20 flex items-center justify-center border-4 border-[var(--color-stanford-red)]/30">
                                    <span class="text-4xl font-bold text-[var(--color-stanford-red)]">DG</span>
                                  </div>
                                </div>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[var(--color-stanford-red)]">
                      <h3 className="text-xl font-serif font-semibold text-[var(--color-text-primary)] mb-2">
                        Mr. Daniel Gachukia
                      </h3>
                      <p className="text-base text-[var(--color-text-secondary)] mb-4">
                        Co-Founder, Riara University
                      </p>
                      <div className="flex items-center gap-2 text-sm text-[var(--color-stanford-red)]">
                        <Award className="h-4 w-4" />
                        <span className="font-semibold">Elder of the Order of the Burning Spear (EBS)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:col-span-2">
                  <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
                    <div className="space-y-6">
                      <div>
                        <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                          Mr. Gachukia, a self-made entrepreneur, started his career as a Secondary School teacher after graduating with a Diploma in Education from Makerere University College in 1956. Upon graduation, Mr. Gachukia taught in various Secondary Schools in both Kenya and Uganda including, Kagumo High School and Thika High School.
                        </p>
                      </div>

                      <div className="pt-6 border-t border-[var(--color-border-secondary)]">
                        <div className="flex items-start gap-4 mb-4">
                          <Globe className="h-6 w-6 text-[var(--color-stanford-red)] mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-2">
                              Diplomatic Career
                            </h4>
                            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                              He thereafter studied Diplomacy in France between 1962-1963. From 1963 to 1974 he worked with the Ministry of Foreign Affairs as the Charge d'affaires at the Kenya Embassy in Paris and later as the Chief of Protocol until he retired from Civil Service.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-[var(--color-border-secondary)]">
                        <div className="flex items-start gap-4 mb-4">
                          <Building2 className="h-6 w-6 text-[var(--color-stanford-red)] mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-2">
                              Business and Education Leadership
                            </h4>
                            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-3">
                              In 1974, Mr. Daniel Gachukia retired from Civil Service to join the Board of Directors of East Africa Industries Ltd and later retired in 1989, to launch the Riara Group of Schools. For five years he was Chairman of the Board of Governors of Thika High School.
                            </p>
                            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                              He also served for six years as a member of the Kenyatta University Council and became the Chairman of the Council for 3 Years. He is a Life Governor of the Agricultural Society of Kenya and was for 3 years the Chairman of the Nairobi International Show.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-[var(--color-border-secondary)]">
                        <div className="flex items-start gap-4 mb-4">
                          <Users className="h-6 w-6 text-[var(--color-stanford-red)] mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-2">
                              Kenya Private Schools' Association
                            </h4>
                            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                              In 1994 Mr. Gachukia played a leading role in the establishment of the Kenya private Schools' Association (KPSA), an association of owners of private schools in Kenya which follow the Kenya Curriculum of Education, for which he was Founding Chairman for 10 years and is now the Patron.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t-2 border-[var(--color-stanford-red)] bg-[var(--color-stanford-red)]/5 rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <Award className="h-6 w-6 text-[var(--color-stanford-red)] mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-2">
                              National Recognition
                            </h4>
                            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                              Mr. Daniel Gachukia was honoured on 19th March 2025 with the award of the Elder of the Order of the Burning Spear (EBS) by His Excellency Dr. William Samoei Ruto, President of the Republic of Kenya, for his immense contributions to the education sector and other sectors in Kenya and beyond.
                            </p>
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

        {/* Prof. Eddah Gachukia Section */}
        <section className="py-12 md:py-16 bg-white">
          <Container>
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {/* Image/Profile Section */}
                <div className="md:col-span-1">
                  <div className="sticky top-24">
                    <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden mb-6">
                      <img 
                        src="https://riarauniversity.ac.ke/wp-content/uploads/2021/08/EG.jpg" 
                        alt="Prof. Eddah Gachukia"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center">
                                <div class="text-center">
                                  <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-[var(--color-stanford-red)]/20 flex items-center justify-center border-4 border-[var(--color-stanford-red)]/30">
                                    <span class="text-4xl font-bold text-[var(--color-stanford-red)]">EG</span>
                                  </div>
                                </div>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[var(--color-stanford-red)]">
                      <h3 className="text-xl font-serif font-semibold text-[var(--color-text-primary)] mb-2">
                        Prof. Eddah Gachukia
                      </h3>
                      <p className="text-base text-[var(--color-text-secondary)] mb-4">
                        Co-Founder, Riara University
                      </p>
                      <div className="flex items-center gap-2 text-sm text-[var(--color-stanford-red)] mb-2">
                        <Award className="h-4 w-4" />
                        <span className="font-semibold">Elder of the Order of the Burning Spear (EBS)</span>
                      </div>
                      <p className="text-sm text-[var(--color-text-secondary)] mt-4">
                        Vice-Chair, Riara University Governing Council
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:col-span-2">
                  <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
                    <div className="space-y-6">
                      <div>
                        <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                          A career educationalist, Prof. Gachukia is the Academic Director of the Riara Group of Schools, which comprises of two Kindergartens, two Primary Schools and a Girls' Secondary School. She is also the Vice-Chair, Riara University Governing Council. Riara University is the latest innovation of Higher Education in Kenya, designed to be the regional university of choice with the goal of Nurturing Innovators.
                        </p>
                      </div>

                      <div className="pt-6 border-t border-[var(--color-border-secondary)]">
                        <div className="flex items-start gap-4 mb-4">
                          <Globe className="h-6 w-6 text-[var(--color-stanford-red)] mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-2">
                              Forum for African Women Educationalists (FAWE)
                            </h4>
                            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                              She was the Founding Executive Director, Forum for African Women Educationalists (1993-1999) later serving in its Executive Committee (2002-2004). FAWE has a presence in 35 African countries and has received several Awards and Honors for its contribution to female education in Africa.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-[var(--color-border-secondary)]">
                        <div className="flex items-start gap-4 mb-4">
                          <GraduationCap className="h-6 w-6 text-[var(--color-stanford-red)] mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-2">
                              National Education Leadership
                            </h4>
                            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-3">
                              At the National Level, Prof. Gachukia has served as Chairperson, Moi University Council (2003-2006), Senior Lecturer and Chairperson, Department of Literature, University of Nairobi (1971-1993); Chairperson, Task Force on implementation of Free Primary Education in Kenya (2003); and another on the provision of Affordable Secondary Education in Kenya (2006).
                            </p>
                            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                              Member of the Board of Trustees United States International University (USIU) –Kenya (1999-2007) and Vice-Chairperson (2007-2010); Member, Board of Trustees Population Council, New York (1987 to June, 1995). Currently, Vice Chairperson of Starehe Girls' Centre Board of Trustees, of which she was one of the founding Trustees.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-[var(--color-border-secondary)]">
                        <div className="flex items-start gap-4 mb-4">
                          <Users className="h-6 w-6 text-[var(--color-stanford-red)] mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-2">
                              Starehe Girls' Centre
                            </h4>
                            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                              Starehe Girls' Centre is a secondary school for brilliant yet disadvantaged girls who require full sponsorship. Over 90% of girls admitted to Starehe gain University entry.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-[var(--color-border-secondary)]">
                        <div className="flex items-start gap-4 mb-4">
                          <BookOpen className="h-6 w-6 text-[var(--color-stanford-red)] mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-2">
                              Public Service and Advocacy
                            </h4>
                            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-3">
                              She was a Member of Parliament representing women's interests (1974-1983). She also served in the top leadership of the National Council of Women of Kenya, the Maendeleo Ya Wanawake Organization, and the Collaborative Centre for Gender and Development, of which she is the Patron.
                            </p>
                            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                              She has played leadership roles in the U.N conferences on Women – Mexico (1975), Copenhagen (1979), Nairobi (1985) and Beijing (1995), representing the Government of Kenya and National Non-Governmental Organizations. Dr. Gachukia has served on many Governing Boards nationally and internationally. She has also served on the Boards of numerous Secondary Schools in Kenya.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-[var(--color-border-secondary)]">
                        <div className="flex items-start gap-4 mb-4">
                          <GraduationCap className="h-6 w-6 text-[var(--color-stanford-red)] mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-2">
                              Academic Contributions
                            </h4>
                            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                              Prof. Gachukia has been published severally in literacy criticism, Gender and Development, Education and Child Development related issues. She has a passion for education generally and girls' education in specific. She has provided leadership in Chairing Education Task Forces on Education at the request of the Government of Kenya.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t-2 border-[var(--color-stanford-red)] bg-[var(--color-stanford-red)]/5 rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <Award className="h-6 w-6 text-[var(--color-stanford-red)] mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-2">
                              National Recognition
                            </h4>
                            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                              Prof. Eddah Gachukia was honoured on 19th March 2025 with the award of the Elder of the Order of the Burning Spear (EBS) by His Excellency Dr. William Samoei Ruto, President of the Republic of Kenya, for her immense contributions to the education sector and other sectors in Kenya and beyond.
                            </p>
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
      </main>
      <Footer />
    </div>
  );
}

