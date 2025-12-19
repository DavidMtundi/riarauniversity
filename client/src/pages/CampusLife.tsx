import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export default function CampusLife() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-12 sm:pt-14 md:pt-24">
        {/* Hero Section */}
        <section className="relative w-full h-[32.5vh] md:h-[37.5vh] overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[url('https://riarauniversity.ac.ke/wp-content/uploads/2023/12/Student-Life-2.jpg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
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
                Student Life
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
                At Riara University, learning goes far beyond the classroom. Student life here is dynamic, inclusive, and purposefully designed to ensure that every learner enjoys a fulfilling, balanced, and enriching university experience.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <p className="text-xl md:text-2xl text-[var(--color-text-primary)] leading-relaxed mb-6 font-light">
                Whether you're pursuing your passion, exploring new interests, or building your future career, Riara University offers the perfect environment to grow intellectually, socially, and professionally.
              </p>
            </div>
          </Container>
        </section>

        {/* Full-Width Image 1 */}
        <section className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
          <img 
            src="https://riarauniversity.ac.ke/wp-content/uploads/2023/12/Student-Life-2.jpg" 
            alt="Students at Riara University" 
            className="w-full h-full object-cover"
          />
        </section>

        {/* Experience Riara Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="border-l-4 border-[var(--color-stanford-red)] pl-6 md:pl-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                  Experience Riara. Live the Difference
                </h2>
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                  At Riara University, every student is part of a family. Here, we nurture your potential, support your goals, and walk with you every step of the way. From the lecture hall to the sports field, from internships to employment—your future begins here.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Externships & Practical Learning */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Externships & Practical Learning
              </h2>
              <div className="bg-white p-6 md:p-8 mb-8 border-l-4 border-[var(--color-stanford-red)]">
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  We believe in preparing students for the real world. That's why every programme includes a built-in attachment or externship experience designed to provide hands-on training and workplace readiness.
                </p>
                
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-[var(--color-text-primary)] mb-2">Law Students</h3>
                    <p className="text-[var(--color-text-secondary)]">Take part in a Clinical Attachment (CA) at legal institutions and firms.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-[var(--color-text-primary)] mb-2">Education Students</h3>
                    <p className="text-[var(--color-text-secondary)]">Undergo Teaching Practice (TP) in partner schools across the country.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-[var(--color-text-primary)] mb-2">Business, Computing, IR & Journalism</h3>
                    <p className="text-[var(--color-text-secondary)]">Complete Industrial Attachments (IA) with industry leaders and organizations.</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                These experiences offer students invaluable exposure to professional environments, allowing them to apply what they've learned, build networks, and sharpen their competitive edge.
              </p>
            </div>
          </Container>
        </section>

        {/* Career Preparation & Placement */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Career Preparation & Placement
              </h2>
              <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 mb-8 border-l-4 border-[var(--color-stanford-red)]">
                <p className="text-xl md:text-2xl text-[var(--color-text-primary)] leading-relaxed mb-4 font-light">
                  We don't just teach—we help you launch your career.
                </p>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Through the Dean of Students Office and strategic partnerships with top employers, Riara University runs a robust Career Preparation and Placement Programme that includes:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <h3 className="text-lg font-serif font-semibold text-[var(--color-text-primary)]">Career coaching & mentorship</h3>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <h3 className="text-lg font-serif font-semibold text-[var(--color-text-primary)]">Resume and interview skills training</h3>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <h3 className="text-lg font-serif font-semibold text-[var(--color-text-primary)]">Internship & graduate placement opportunities</h3>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <h3 className="text-lg font-serif font-semibold text-[var(--color-text-primary)]">Networking events with employers</h3>
                  </div>
                </div>
              </div>

              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                As East African regional integration continues, Riara graduates will increasingly have access to job opportunities across the region—without the need for a visa or work permit in some countries.
              </p>
            </div>
          </Container>
        </section>

        {/* Full-Width Image 2 */}
        <section className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
          <img 
            src="https://riarauniversity.ac.ke/wp-content/uploads/2023/12/Student-Life-4.jpg" 
            alt="Career development at Riara University" 
            className="w-full h-full object-cover"
          />
        </section>

        {/* Student Leadership */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Student Leadership
              </h2>
              <div className="bg-white p-6 md:p-8 mb-8 border-l-4 border-[var(--color-stanford-red)]">
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  At the heart of student life at Riara University is <strong className="text-[var(--color-text-primary)]">RUSA</strong> – the Riara University Student Association – a vibrant and dynamic body that represents the voice, vision, and values of the student community.
                </p>
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                  RUSA is more than just a student government; it is a platform for leadership, empowerment, and transformative action. Through RUSA, students are given the opportunity to lead with integrity, champion student welfare, and collaborate with university management on key issues that affect campus life and learning.
                </p>
              </div>
              <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                <p className="text-base font-semibold text-[var(--color-stanford-red)] mb-2">RUSA GOVERNMENT 2024-2025</p>
                <p className="text-[var(--color-text-secondary)]">
                  Empowering student voices and driving positive change across campus.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Sports & Co-curricular Activities */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Sports & Co-curricular Activities
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8">
                Riara University champions holistic education. Our students are not just known for academic excellence but also for their passion in the field, on stage, and in the community.
              </p>

              <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 mb-8 border-l-4 border-[var(--color-stanford-red)]">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">Sports</h3>
                    <p className="text-[var(--color-text-secondary)]">Whether you love football, basketball, volleyball, athletics, or want to explore your talents in drama, music, debate, or innovation, Riara has something for you.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">Building Skills</h3>
                    <p className="text-[var(--color-text-secondary)]">Through sports and co-curriculars, students build confidence, leadership skills, teamwork, and a lifelong sense of community.</p>
                  </div>
                </div>
              </div>

              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                We believe in nurturing not only top scholars, but also Africa's next generation of champions, creators, and changemakers.
              </p>
            </div>
          </Container>
        </section>

        {/* Full-Width Image 3 */}
        <section className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
          <img 
            src="https://riarauniversity.ac.ke/wp-content/uploads/2023/12/Student-Life-2.jpg" 
            alt="Sports and activities at Riara University" 
            className="w-full h-full object-cover"
          />
        </section>

        {/* Community Service */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Community Service
              </h2>
              <div className="bg-white p-6 md:p-8 mb-8 border-l-4 border-[var(--color-stanford-red)]">
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  At Riara University, we believe that education extends beyond the classroom walls. Community service is an integral part of our holistic approach to learning, fostering a sense of social responsibility, empathy, and civic engagement among our students.
                </p>
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Through our Community Service program, students have the opportunity to make meaningful contributions to society while developing essential life skills, building character, and understanding the real-world impact of their actions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                    Academic Integration
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    Community Service is embedded in our curriculum as a foundation course (RFC 305), requiring 45 hours of community engagement. This ensures that every student experiences the transformative power of giving back to the community.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                      <span className="text-[var(--color-text-secondary)]">Hands-on experience in real-world community settings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                      <span className="text-[var(--color-text-secondary)]">Credit hours that count toward graduation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                      <span className="text-[var(--color-text-secondary)]">Structured reflection and learning outcomes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                    Impact & Recognition
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    We celebrate students who demonstrate exceptional commitment to community service through our annual <strong className="text-[var(--color-text-primary)]">Community Service Award</strong>, presented at graduation to graduands who have made outstanding contributions to the community within Riara University and beyond.
                  </p>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    This recognition honors students who embody our core values of service, leadership, and social responsibility, inspiring others to make a positive difference in their communities.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                  Service Opportunities
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Our students engage in diverse community service activities including:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Educational support and tutoring programs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Environmental conservation initiatives</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Healthcare and wellness outreach</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Community development projects</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Advocacy and awareness campaigns</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Support for vulnerable populations</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mt-8">
                Through community service, Riara students develop a deeper understanding of societal challenges, cultivate empathy, and become agents of positive change—preparing them not just for successful careers, but for meaningful lives of service and impact.
              </p>
            </div>
          </Container>
        </section>

        {/* Student Center & Campus Map */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Student Center & Campus Facilities
              </h2>
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-8">
                <div>
                  <div className="mb-6">
                    <img 
                      src="https://ru.ac.ke/wp-content/uploads/2025/06/IMG_5189-800x533.jpg" 
                      alt="Student Center at Riara University" 
                      className="w-full h-auto rounded"
                    />
                  </div>
                  <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
                      Student Center
                    </h3>
                    <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                      The Student Center is the heart of campus life at Riara University. It serves as a central hub where students gather, study, socialize, and access essential services.
                    </p>
                    <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                      The center provides:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                        <span className="text-[var(--color-text-secondary)]">Study spaces and quiet areas</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                        <span className="text-[var(--color-text-secondary)]">Student services and information desk</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                        <span className="text-[var(--color-text-secondary)]">Meeting rooms and event spaces</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                        <span className="text-[var(--color-text-secondary)]">Cafeteria and dining facilities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                        <span className="text-[var(--color-text-secondary)]">Recreational areas and lounges</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
                      Campus Map
                    </h3>
                    <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                      Find your way around campus with our interactive map. The Student Center is centrally located for easy access from all academic buildings and residence halls.
                    </p>
                    <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                      <strong className="text-[var(--color-text-primary)]">Getting to Riara University:</strong> Driving from the Nairobi City Centre will take you just under 20 minutes if you take Uhuru Highway and then turn onto Raila Odinga Road, formally Mbagathi Road. Alternatively, you may take Haile Selassie Avenue, cross the Uhuru Highway at the roundabout, and then join Ngong Road, drive up to Kenyatta National Hospital and then take a left onto Raila Odinga Road, formally Mbagathi Way to get to the University.
                    </p>
                    <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                      Public service vehicles #16 and #34 also serve the area, all available at their terminal at the city centre. For air travel, Jomo Kenyatta International Airport is less than half an hour's drive away, and Wilson Airport is a short 15-minute drive away.
                    </p>
                    <div className="aspect-[4/3] rounded overflow-hidden border-2 border-[var(--color-border-secondary)]">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.812!2d36.8069232!3d-1.3148565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f105e9f1c97eb%3A0xd0d8411685ae0273!2s49940%2C%20Raila%20Odinga%20Wy%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1735689600000!5m2!1sen!2ske"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                        title="Riara University Campus Map"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Facilities and Amenities */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Facilities and Amenities
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8">
                Riara University is the latest innovation in higher education in Kenya. With its ultra-modern physical infrastructure and state-of-the-art ICT facilities, together with the rigor in the development of its academic programmes, Riara University is undoubtedly the regional university of choice.
              </p>
              <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                <p className="text-base md:text-lg font-semibold text-[var(--color-text-primary)] mb-4">
                  The University is well equipped with the following facilities among others:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Modern ICT facilities (The entire Campus is a Wi-Fi hotspot)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Innovations Centre</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Audio Visual lecture rooms</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Well-stocked Modern Library with state-of-the-art reading space designs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">State-of-the-art Cafeteria (open from 6:30 am – 8:00 pm) offering a wide variety of foods and drinks at affordable prices</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">A Students' Centre equipped with a common room fitted with a TV screen and indoor gaming facilities</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Fully dedicated bus for students use when need arises</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Student Accommodation */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Student Accommodation
              </h2>
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-8">
                <div>
                  <img 
                    src="https://www.symbion-int.com/wp-content/uploads/2023/09/1-1.jpg?width=588&quality=95" 
                    alt="Student accommodation at Riara University" 
                    className="w-full h-auto rounded mb-6"
                  />
                </div>
                <div>
                  <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                    <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-6">
                      Riara University is located in Nairobi, a modern, cosmopolitan city that offers a range of secure, comfortable, and affordable student housing options.
                    </p>
                    <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                      We partner with trusted student accommodation providers such as:
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                        <span className="text-[var(--color-text-secondary)]"><strong className="text-[var(--color-text-primary)]">Qwetu Student Residences</strong> – Call: 0800730333</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                        <span className="text-[var(--color-text-secondary)]"><strong className="text-[var(--color-text-primary)]">Studyville</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                        <span className="text-[var(--color-text-secondary)]"><strong className="text-[var(--color-text-primary)]">ParallelFour</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                        <span className="text-[var(--color-text-secondary)]"><strong className="text-[var(--color-text-primary)]">Efoca Hostels</strong> and other certified housing providers</span>
                      </li>
                    </ul>
                    <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                      These facilities provide safe and supportive living environments, including fully furnished rooms, study areas, gyms, Wi-Fi, and access to transport routes to and from campus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* International Students */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                International Students
              </h2>
              <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 mb-8 border-l-4 border-[var(--color-stanford-red)]">
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Riara University warmly welcomes students from across Africa and beyond. We celebrate diversity and offer dedicated support services for international learners, including assistance with:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Accommodation and orientation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Legal documentation (e.g. student visas)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Language support and academic integration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Cultural exchange programs and mentorship</span>
                  </div>
                </div>
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                  Join a vibrant, multicultural campus community where your dreams are valued and your identity is celebrated.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Awards & Recognitions */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Awards & Recognitions
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8">
                The University Awards are among the most prestigious awards presented at Riara University. These awards were established to recognize students who embody service excellence, dedication, or whose academic achievements remain stellar. Each recipient is recognized during the commencement ceremony conducted every year.
              </p>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                    Excellence in Leadership Award
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Presented to graduands who have been transformative leaders amongst the students and outside. The awardees have been visionary, motivating, team players, supportive & influential.
                  </p>
                </div>

                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                    Vice Chancellor's Roll of Honor
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    This award is presented to overall outstanding students in academia and those that have shown great curiosity in scholarship. We present to you highly qualified academic leaders.
                  </p>
                </div>

                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                    University's Sports Award
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    The Riara University's Sports Award is presented at every graduation to graduates who have had an outstanding performance in sports, both in the male and female categories.
                  </p>
                </div>

                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                    Community Service Award
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Presented to graduands who have demonstrated outstanding contributions in service to the community within Riara University and beyond.
                  </p>
                </div>

                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                    Njeri Global Children Award
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Awarded courtesy of the family of distinguished Prof. Micere Mugo, an Emerita Meredith Professor of teaching excellence at Syracuse University. The award is in support of economically challenged but bright students.
                  </p>
                </div>

                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                    Innovator's Merit Award
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Presented at every graduation to graduands who have demonstrated outstanding innovative and entrepreneurial skills within the campus and elsewhere.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Testimonial */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 md:p-8 lg:p-10 border-l-4 border-[var(--color-stanford-red)]">
                <blockquote className="text-lg md:text-xl lg:text-2xl text-[var(--color-text-secondary)] leading-relaxed mb-8 italic">
                  "Words cannot fully capture how I'm feeling right now. They say a journey of a thousand miles begins with a single step, and mine began the day I walked through the gates of Riara University: wide-eyed, hopeful, and ready to chase something greater than myself. I had no idea how much this place would shape me, not just into a graduate, but into a creative, a communicator, and most importantly, someone who believes in their own voice."
                </blockquote>
                <div className="border-t border-[var(--color-border-secondary)] pt-6">
                  <p className="font-semibold text-lg text-[var(--color-text-primary)] mb-1">
                    Imran Noordin
                  </p>
                  <p className="text-[var(--color-text-secondary)]">
                    Class of 2025 – School of Communication and Multimedia Journalism
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
