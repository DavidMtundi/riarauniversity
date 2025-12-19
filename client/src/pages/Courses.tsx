import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Briefcase, Award, Clock, Users, ArrowRight, Filter } from "lucide-react";
import { useState } from "react";

type CourseCategory = 'all' | 'professional' | 'certificate' | 'diploma' | 'short';

interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  school: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
}

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory>('all');

  const courses: Course[] = [
    {
      id: '1',
      title: 'Professional Development Courses',
      category: 'professional',
      school: 'School of Business',
      duration: 'Flexible',
      description: 'Focused and highly practical short courses suitable for professionals, executives, and leaders who intend to increase their level of skill and proficiency in specialized areas. These courses are highly flexible and of short duration.',
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      id: '2',
      title: 'Diploma in Business Management',
      category: 'diploma',
      school: 'School of Business',
      duration: '1-2 Years',
      description: 'A comprehensive diploma program covering essential business management principles, leadership skills, and strategic thinking. Widely recognized and eligible for credit transfer to relevant degree programmes.',
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      id: '3',
      title: 'Diploma in Procurement and Supply Chain Management',
      category: 'diploma',
      school: 'School of Business',
      duration: '1-2 Years',
      description: 'Specialized diploma focusing on procurement strategies, supply chain optimization, and logistics management. Designed for professionals seeking expertise in supply chain operations.',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      id: '4',
      title: 'Diploma in Business Information Technology',
      category: 'diploma',
      school: 'School of Business',
      duration: '1-2 Years',
      description: 'Combines business knowledge with IT skills, preparing students for roles that bridge business and technology. Perfect for those looking to work in tech-enabled business environments.',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      id: '5',
      title: 'Higher Diploma in Development and Management Consultancy',
      category: 'diploma',
      school: 'School of Business',
      duration: '2 Years',
      description: 'Advanced program for those seeking expertise in development consultancy and management advisory services. Ideal for professionals working in development organizations or consulting firms.',
      icon: <Award className="h-6 w-6" />
    },
    {
      id: '6',
      title: 'Higher Diploma in Social Entrepreneurship',
      category: 'diploma',
      school: 'School of Business',
      duration: '2 Years',
      description: 'Focuses on creating sustainable business solutions that address social challenges. Learn how to build enterprises that create both social impact and financial sustainability.',
      icon: <Users className="h-6 w-6" />
    },
    {
      id: '7',
      title: 'Diploma in Computer Science',
      category: 'diploma',
      school: 'School of Computing Sciences',
      duration: '2 Years',
      description: 'Comprehensive program covering programming, software development, database management, and computer systems. Suitable for those seeking a solid foundation in computing.',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      id: '8',
      title: 'Diploma in Information and Cyber Security',
      category: 'diploma',
      school: 'School of Computing Sciences',
      duration: '2 Years',
      description: 'Specialized program focusing on cybersecurity principles, threat management, and information security practices. Essential for professionals in the digital age.',
      icon: <Award className="h-6 w-6" />
    },
    {
      id: '9',
      title: 'Certificate in Information Technology',
      category: 'certificate',
      school: 'School of Computing Sciences',
      duration: '6-12 Months',
      description: 'Foundation-level certificate program introducing core IT concepts, computer systems, and basic programming. Perfect starting point for IT careers.',
      icon: <Award className="h-6 w-6" />
    },
    {
      id: '10',
      title: 'Certificate in Web Development',
      category: 'certificate',
      school: 'School of Computing Sciences',
      duration: '6-12 Months',
      description: 'Practical certificate program covering modern web development technologies, front-end and back-end development, and web design principles.',
      icon: <Award className="h-6 w-6" />
    },
    {
      id: '11',
      title: 'CISCO Certified Network Associate (CCNA)',
      category: 'professional',
      school: 'School of Computing Sciences',
      duration: '3-6 Months',
      description: 'Professional certification program covering networking fundamentals, routing and switching, and network security. Industry-recognized certification.',
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      id: '12',
      title: 'Professional Certificate in Ethical Hacking & Information Security',
      category: 'professional',
      school: 'School of Computing Sciences',
      duration: '3-6 Months',
      description: 'Advanced professional program teaching ethical hacking techniques, penetration testing, and information security best practices. For IT professionals seeking security expertise.',
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      id: '13',
      title: 'Diploma in Mobile Applications & Technology',
      category: 'diploma',
      school: 'School of Computing Sciences',
      duration: '1-2 Years',
      description: 'Specialized diploma focusing on mobile app development, mobile technologies, and cross-platform development. Ideal for aspiring mobile developers.',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      id: '14',
      title: 'Certificate in Corporate Diplomacy',
      category: 'certificate',
      school: 'School of International Relations',
      duration: '6-12 Months',
      description: 'Certificate program introducing corporate diplomacy concepts, international business relations, and cross-cultural communication for business professionals.',
      icon: <Award className="h-6 w-6" />
    },
    {
      id: '15',
      title: 'Diploma in International Relations and Diplomacy',
      category: 'diploma',
      school: 'School of International Relations',
      duration: '2 Years',
      description: 'Comprehensive program covering international relations theory, diplomatic practice, foreign policy analysis, and global governance. Foundation for careers in diplomacy and international affairs.',
      icon: <GraduationCap className="h-6 w-6" />
    },
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const categories = [
    { id: 'all' as CourseCategory, label: 'All Courses', count: courses.length },
    { id: 'professional' as CourseCategory, label: 'Professional Development', count: courses.filter(c => c.category === 'professional').length },
    { id: 'certificate' as CourseCategory, label: 'Certificates', count: courses.filter(c => c.category === 'certificate').length },
    { id: 'diploma' as CourseCategory, label: 'Diplomas', count: courses.filter(c => c.category === 'diploma').length },
  ];

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
            <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-stanford-red)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-stanford-red)]/5 rounded-full blur-3xl"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-4 md:mb-6 drop-shadow-2xl">
                Courses & Programs
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
                Expand your skills, advance your career, and achieve your professional goals
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                    Professional Development & Specialized Programs
                  </h2>
                  <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    At Riara University, we offer a wide range of professional development courses, certificate programs, and diplomas designed to enhance your skills and advance your career.
                  </p>
                  <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                    Whether you're a working professional looking to upskill, someone seeking a career change, or a recent graduate wanting to specialize, we have programs tailored to your needs. Our courses are practical, industry-relevant, and designed to give you a competitive edge.
                  </p>
                </div>
                <div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="https://riarauniversity.ac.ke/wp-content/uploads/2023/12/Student-Life-2.jpg" 
                      alt="Professional development courses" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border-secondary)]">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <Filter className="h-5 w-5 text-[var(--color-text-secondary)]" />
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Filter by Category:</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all ${
                      selectedCategory === category.id
                        ? 'bg-[var(--color-stanford-red)] text-white shadow-lg'
                        : 'bg-white text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] border border-[var(--color-border-secondary)]'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Courses Grid */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-lg border-l-4 border-[var(--color-stanford-red)] p-6 md:p-8 hover:shadow-xl transition-all group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-[var(--color-stanford-red)]/10 rounded-lg text-[var(--color-stanford-red)] group-hover:bg-[var(--color-stanford-red)] group-hover:text-white transition-colors">
                        {course.icon}
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-semibold text-[var(--color-stanford-red)] uppercase tracking-wide">
                          {course.category === 'professional' ? 'Professional' : course.category === 'certificate' ? 'Certificate' : 'Diploma'}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-[var(--color-text-secondary)] mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        <span>{course.school}</span>
                      </div>
                    </div>
                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                      {course.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-[var(--color-stanford-red)] text-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red)] hover:text-white group-hover:border-[var(--color-stanford-red-dark)]"
                      asChild
                    >
                      <a href="https://admissions.ru.ac.ke/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>

              {filteredCourses.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-[var(--color-text-secondary)]">No courses found in this category.</p>
                </div>
              )}
            </div>
          </Container>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8">
                Take the next step in your professional journey. Apply for a course that aligns with your career goals and start learning today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red-dark)] text-white font-semibold text-base md:text-lg px-8 py-6"
                  asChild
                >
                  <a href="https://admissions.ru.ac.ke/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 !text-white hover:!text-white">
                    Apply Now <ArrowRight className="h-5 w-5 !text-white" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[var(--color-stanford-red)] text-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red)] hover:text-white font-semibold text-base md:text-lg px-8 py-6"
                  asChild
                >
                  <a href="/admission" className="flex items-center gap-2">
                    Admission Process <ArrowRight className="h-5 w-5" />
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

