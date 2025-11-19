import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { SCHOOL_LINKS } from "@/lib/links";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <section className="bg-[var(--color-bg-secondary)] py-16 md:py-20">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--color-text-primary)] mb-4 md:mb-6">
                About Riara University
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                Nurturing Innovators
              </p>
            </div>
          </Container>
        </section>

        {/* About Content */}
        <section className="py-8 md:py-12">
          <Container>
            <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
              
              {/* The Riara Story */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-[var(--color-text-primary)]">The Riara Story</h2>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Riara University was founded by two renowned and distinguished Kenyan educationists, Daniel and Eddah Gachukia. The history of the University dates back to the year 1974 when the Founders acquired a small kindergarten called Balmoral Kindergarten along Riara Road (formerly known as Balmoral Road) in the City of Nairobi. The kindergarten used to primarily serve children of foreign expatriates and at the time, it operated mainly from one of the houses along Riara Road.
                </p>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Gradually, after the Gachukia family took it up, the kindergarten started admitting more local pupils and within a short time, it was on a very positive but planned growth trajectory, chiefly because of the quality differentiation that the School offered.
                </p>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Through a process of careful planning and prudent management, the small humble kindergarten grew into what is now the Riara Group of Schools, with two kindergarten, two primary schools, a Girls High School, and an International School. The Schools boast of a decorated array of alumni that have been nurtured over the years at the Riara Schools.
                </p>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Riara University was a logical continuation of the commitment of the Founders to transformative education and the development of the whole child, learner and person. Riara University is one of a few if not the only University established by Founders whose core business is education.
                </p>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  It is for this reason that we at the University and indeed the larger Riara Group liken the process of education at Riara to that of the Riara River located in Kiambu County. The following Mantra is commonly used in the Group; the process of education from kindergarten through Primary, Secondary and now University flows like that of the perennial Riara River: forever challenging, forever nourishing, forever fulfilling. Each level of the Riara experience then becomes a fountain, springing from fertile ground, showering all those it reaches; and who in turn infect others with enthusiasm, courage and God given brilliance, continually refined by the ever-flowing Riara River.
                </p>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  The Riara River was the motivation for the stained-glass pattern found on the façade of the main university building overlooking the Commencement Square. It also inspired the motto of the University "Nurturing Innovators", as well as the two healthy green twigs found on the University logo, all of which follow the theme of "nurturing".
                </p>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  In 2024, the Riara Group marked its Golden Jubilee, celebrating 50 years of quality education since 1974, when the first Riara institution was established.
                </p>
              </div>

              {/* Key Milestones */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-[var(--color-text-primary)]">Some Key Milestones</h2>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Riara University received its Letter of Interim Authority on 2nd August 2012 with a vision of nurturing innovators and ethical leaders able to impact society through the power of innovation and service. Since then, it has pursued a strategic and controlled growth path.
                </p>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Key milestones include: launching the Student Association (2016), graduating its first cohort (2017), fostering innovation with intervarsity competitions (2018), and advancing technology with a CISCO Lab and digital education hackathons (2019). In 2020, RU became Kenya's first university to hold a virtual graduation, ensuring uninterrupted learning during the pandemic. In 2021, RU joined the Education Collaborative, an Africa-wide network of like-minded universities with the aim of training 1.1 million ethical entrepreneurial graduates across the continent by the year 2030.
                </p>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  In 2023, RU broke ground for its new Main Campus at the Konza Technopolis, becoming the first private investor in Konza to break ground for construction, reinforcing its commitment to innovation. Today, RU stands as a leader in higher education, preparing students to thrive in a dynamic world through its dedication to excellence and innovation.
                </p>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Riara University stands out for its exceptional graduate outcomes, with over 93% of alumni securing employment, entrepreneurship, or further studies within a year of graduation, and nearly 50% achieving this before completing their studies.
                </p>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  The University has graduated over 2,500 alumni, including those who have excelled globally, such as earning scholarships to prestigious institutions like Harvard Law School.
                </p>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Further, through its British Council-funded Virtual Accelerator, over 40 student businesses have been successfully nurtured.
                </p>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Riara University's commitment to global collaboration is evident in its partnerships with institutions like Sheridan College (Canada) and University of Central Lancashire (UK), offering joint projects, exchange programmes, and international trips.
                </p>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Additionally, the University provides a vibrant student life with impactful events, innovation forums, and an annual Sports Tournament, fostering holistic development and success.
                </p>
              </div>

              {/* Partnerships and Collaborations */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-[var(--color-text-primary)]">Partnerships and Collaborations</h2>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Riara University has cultivated an extensive network of partnerships that enhance its programmes and activities. These include collaborations with the British Council, which has funded initiatives like the Virtual Accelerator for student businesses, Project HerIZONS for mentoring female Computer Science students, and training faculty under the Pedagogical Leadership for Africa (PEDAL) programme.
                </p>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  The University is also a key player in the India-Kenya Innovation Nexus, collaborating with Indian Institutes of Technology Madras and Indian Institutes of Technology Hyderabad to foster innovation and entrepreneurship.
                </p>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Riara University's partnerships extend to global institutions like Mozilla Foundation, which supports curriculum development, and universities such as Sheridan College (Canada) and University of Central Arkansas (USA) through exchange programmes and joint learning through Collaborative Online International Learning (COIL) approaches.
                </p>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  The University has key partnerships with industry where, for example, Airtel Kenya and Chandaria Foundation have equipped the University with state-of-the-art Robotics and Digital Skills laboratories, while over 80 corporate partners support various other initiatives.
                </p>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Additionally, Riara University is a member of the Kenya Network of Entrepreneurial Institutional Leaders (KNEIL) with the aim of transforming into a fully entrepreneurial university.
                </p>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Such partnerships among many others position Riara University as a hub for innovation, collaboration, and excellence in education.
                </p>
              </div>

              {/* Vision, Mission, Core Purpose, Guiding Mantra */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-[var(--color-text-primary)]">Our Vision, Mission, and Values</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold mb-4 text-[var(--color-text-primary)]">Our Vision</h3>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                    To be a Centre of Excellence in scholarship, research and human resource development.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold mb-4 text-[var(--color-text-primary)]">Our Mission</h3>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                    To provide a holistic education to enable each student to realize their full potential and to develop social and ethical leaders able to impact society through the power of innovation and service.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold mb-4 text-[var(--color-text-primary)]">Our Core Purpose</h3>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                    Empowering lives, Impacting communities.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold mb-4 text-[var(--color-text-primary)]">Guiding Mantra</h3>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                    Quality Education is the solid bedrock for National Development
                  </p>
                </div>
              </div>

              {/* Our Schools */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-[var(--color-text-primary)]">Our Schools</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  <a href={SCHOOL_LINKS.law} target="_blank" rel="noopener noreferrer" className="text-[var(--color-stanford-red)] hover:text-[var(--color-stanford-red-dark)] hover:underline font-semibold transition-colors">
                    Riara Law School
                  </a>
                  <a href={SCHOOL_LINKS.business} target="_blank" rel="noopener noreferrer" className="text-[var(--color-stanford-red)] hover:text-[var(--color-stanford-red-dark)] hover:underline font-semibold transition-colors">
                    School of Business
                  </a>
                  <a href={SCHOOL_LINKS.computingScience} target="_blank" rel="noopener noreferrer" className="text-[var(--color-stanford-red)] hover:text-[var(--color-stanford-red-dark)] hover:underline font-semibold transition-colors">
                    School of Computing Sciences
                  </a>
                  <a href={SCHOOL_LINKS.internationalRelations} target="_blank" rel="noopener noreferrer" className="text-[var(--color-stanford-red)] hover:text-[var(--color-stanford-red-dark)] hover:underline font-semibold transition-colors">
                    School of International Relations & Diplomacy
                  </a>
                  <a href={SCHOOL_LINKS.communicationJournalism} target="_blank" rel="noopener noreferrer" className="text-[var(--color-stanford-red)] hover:text-[var(--color-stanford-red-dark)] hover:underline font-semibold transition-colors">
                    School of Communication and Multimedia Journalism
                  </a>
                  <a href={SCHOOL_LINKS.education} target="_blank" rel="noopener noreferrer" className="text-[var(--color-stanford-red)] hover:text-[var(--color-stanford-red-dark)] hover:underline font-semibold transition-colors">
                    School of Education
                  </a>
                </div>
              </div>

              {/* Contact Information */}
              <div className="prose prose-lg max-w-none border-t border-[var(--color-border-secondary)] pt-8">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-[var(--color-text-primary)]">Contact Information</h2>
                <div className="space-y-4">
                  <p className="text-base text-[var(--color-text-secondary)]">
                    <strong className="text-[var(--color-text-primary)]">Email:</strong> <a href="mailto:info@riarauniversity.ac.ke" className="text-[var(--color-stanford-red)] hover:text-[var(--color-stanford-red-dark)] hover:underline transition-colors">info@riarauniversity.ac.ke</a>
                  </p>
                  <p className="text-base text-[var(--color-text-secondary)]">
                    <strong className="text-[var(--color-text-primary)]">Telephone:</strong> <a href="tel:+254703038000" className="text-[var(--color-stanford-red)] hover:text-[var(--color-stanford-red-dark)] hover:underline transition-colors">+254 703 038 000</a>
                  </p>
                  <p className="text-base text-[var(--color-text-secondary)]">
                    <strong className="text-[var(--color-text-primary)]">Address:</strong> 49940 – 00100, Nairobi
                  </p>
                  <p className="text-base text-[var(--color-text-secondary)]">
                    <strong className="text-[var(--color-text-primary)]">Location:</strong> Raila Odinga Road, formerly Mbagathi Way
                  </p>
                  <p className="text-base text-[var(--color-text-secondary)]">
                    <strong className="text-[var(--color-text-primary)]">Opening Hours (Mon - Fri):</strong> 8:00am - 5:00pm
                  </p>
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
