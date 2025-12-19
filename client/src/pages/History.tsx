import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export default function History() {
  const milestones = [
    { year: "1974", title: "The Beginning", description: "Founders Daniel and Eddah Gachukia acquired Balmoral Kindergarten along Riara Road, marking the start of the Riara educational journey." },
    { year: "2012", title: "University Founded", description: "Riara University received its Letter of Interim Authority on 2nd August 2012 with a vision of nurturing innovators and ethical leaders." },
    { year: "2016", title: "Student Association", description: "Launched the Student Association, fostering student leadership and engagement." },
    { year: "2017", title: "First Graduation", description: "Graduated its first cohort, marking a significant milestone in the university's growth." },
    { year: "2020", title: "Virtual Innovation", description: "Became Kenya's first university to hold a virtual graduation, ensuring uninterrupted learning during the pandemic." },
    { year: "2023", title: "Konza Campus", description: "Broke ground for its new Main Campus at the Konza Technopolis, becoming the first private investor in Konza." },
    { year: "2024", title: "Golden Jubilee", description: "The Riara Group marked its Golden Jubilee, celebrating 50 years of quality education since 1974." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-12 sm:pt-14 md:pt-24">
        {/* Hero Image Section */}
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
                Our History
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
                The journey of Riara University from a small kindergarten to a leading institution
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 md:py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                Riara University was founded by two renowned and distinguished Kenyan educationists, Daniel and Eddah Gachukia. The history of the University dates back to the year 1974 when the Founders acquired a small kindergarten called Balmoral Kindergarten along Riara Road (formerly known as Balmoral Road) in the City of Nairobi.
              </p>
            </div>
          </Container>
        </section>

        {/* The Riara Story - Image Left */}
        <section className="py-12 md:py-16 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                      alt="Educational journey" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-[var(--color-text-primary)]">
                    The Riara Story
                  </h2>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    Gradually, after the Gachukia family took it up, the kindergarten started admitting more local pupils and within a short time, it was on a very positive but planned growth trajectory, chiefly because of the quality differentiation that the School offered.
                  </p>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    Through a process of careful planning and prudent management, the small humble kindergarten grew into what is now the Riara Group of Schools, with two kindergarten, two primary schools, a Girls High School, and an International School.
                  </p>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Riara University was a logical continuation of the commitment of the Founders to transformative education and the development of the whole child, learner and person.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* The Riara River Philosophy - Image Right */}
        <section className="py-12 md:py-16 bg-white">
          <Container>
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-[var(--color-text-primary)]">
                    The Riara River Philosophy
                  </h2>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    We at the University and indeed the larger Riara Group liken the process of education at Riara to that of the Riara River located in Kiambu County. The process of education from kindergarten through Primary, Secondary and now University flows like that of the perennial Riara River: forever challenging, forever nourishing, forever fulfilling.
                  </p>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    Each level of the Riara experience then becomes a fountain, springing from fertile ground, showering all those it reaches; and who in turn infect others with enthusiasm, courage and God given brilliance, continually refined by the ever-flowing Riara River.
                  </p>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    The Riara River inspired the motto of the University "Nurturing Innovators", as well as the two healthy green twigs found on the University logo, all of which follow the theme of "nurturing".
                  </p>
                </div>
                <div>
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                      alt="Nature and growth" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Timeline Section */}
        <section className="py-12 md:py-16 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-12 text-[var(--color-text-primary)] text-center">
                Key Milestones
              </h2>
              
              {/* Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-stanford-red)]/30 transform md:-translate-x-1/2"></div>
                
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div 
                      key={index}
                      className={`relative flex flex-col md:flex-row items-start gap-6 ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-[var(--color-stanford-red)] rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10"></div>
                      
                      {/* Content Card */}
                      <div className={`flex-1 ml-12 md:ml-0 ${
                        index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                      }`}>
                        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                          <div className={`flex items-center gap-4 mb-4 ${
                            index % 2 === 0 ? 'md:flex-row-reverse' : ''
                          }`}>
                            <div className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-stanford-red)]">
                              {milestone.year}
                            </div>
                            <div className="h-px flex-1 bg-[var(--color-border-secondary)]"></div>
                          </div>
                          <h3 className="text-xl md:text-2xl font-serif font-semibold mb-3 text-[var(--color-text-primary)]">
                            {milestone.title}
                          </h3>
                          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Achievements Section */}
        <section className="py-12 md:py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8 text-[var(--color-text-primary)] text-center">
                Our Achievements
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-[var(--color-bg-secondary)] rounded-lg">
                  <div className="text-4xl md:text-5xl font-bold text-[var(--color-stanford-red)] mb-2">93%</div>
                  <p className="text-sm md:text-base text-[var(--color-text-secondary)]">Alumni securing employment, entrepreneurship, or further studies within a year</p>
                </div>
                <div className="text-center p-6 bg-[var(--color-bg-secondary)] rounded-lg">
                  <div className="text-4xl md:text-5xl font-bold text-[var(--color-stanford-red)] mb-2">2,500+</div>
                  <p className="text-sm md:text-base text-[var(--color-text-secondary)]">Alumni graduated, including global achievers</p>
                </div>
                <div className="text-center p-6 bg-[var(--color-bg-secondary)] rounded-lg">
                  <div className="text-4xl md:text-5xl font-bold text-[var(--color-stanford-red)] mb-2">50</div>
                  <p className="text-sm md:text-base text-[var(--color-text-secondary)]">Years of quality education (Golden Jubilee 2024)</p>
                </div>
              </div>
              <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed text-center">
                Riara University stands out for its exceptional graduate outcomes, with over 93% of alumni securing employment, entrepreneurship, or further studies within a year of graduation, and nearly 50% achieving this before completing their studies. The University has graduated over 2,500 alumni, including those who have excelled globally, such as earning scholarships to prestigious institutions like Harvard Law School.
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
