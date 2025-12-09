import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ResearchSection } from "@/components/ResearchSection";
import { Container } from "@/components/Container";
import { RetryButton } from "@/components/RetryButton";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { ResearchStat, Profile } from "@shared/schema";

export default function Research() {
  const { data: researchStats = [], isLoading: statsLoading, error: statsError } = useQuery<ResearchStat[]>({
    queryKey: ['/api/research-stats']
  });

  const { data: researchProfile, isLoading: researchProfileLoading, error: researchProfileError } = useQuery<Profile>({
    queryKey: ['/api/profiles/research']
  });

  const isLoading = statsLoading || researchProfileLoading;
  const hasError = statsError || researchProfileError;

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-24">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--color-stanford-red)] border-r-transparent mb-4"></div>
            <p className="text-[var(--color-text-secondary)]">Loading Research...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-24">
          <div className="text-center max-w-md mx-auto px-2 sm:px-3">
            <div className="mb-4 text-[var(--color-stanford-red)]">
              <svg className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-2">Unable to Load Content</h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
              We're experiencing technical difficulties loading the Research page. Please try refreshing the page.
            </p>
            <RetryButton
              onClick={() => window.location.reload()}
              data-testid="button-reload"
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532619675605-1ede6c4ed2b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat opacity-30"></div>
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
                Research
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
                Where curiosity meets discovery, and questions lead to solutions
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section with Image */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
                <div>
              <p className="text-xl md:text-2xl text-[var(--color-text-primary)] leading-relaxed mb-6 font-light">
                    At Riara University, research isn't just something we do—it's who we are.
                  </p>
                  <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    Every day, our faculty and students are asking tough questions, challenging assumptions, and working on research that actually matters. Whether it's understanding conflict patterns in East Africa, developing new technologies, or exploring solutions to real-world problems, our research makes a difference.
                  </p>
                  <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                    We're not just publishing papers for the sake of it. We're building knowledge that helps communities, informs policy, and creates lasting change. That's what drives us.
                  </p>
                </div>
                <div className="order-first lg:order-last">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                      alt="Research at Riara University" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                  How We Approach Research
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Good research doesn't happen in isolation. That's why we're constantly connecting with other universities, partnering with organizations, and bringing together people from different fields. When our law professors work with our business researchers, or when our international relations experts collaborate with computing scientists, that's when the magic happens.
                </p>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Our vision is to be a leading university and a Centre of Excellence in Scholarship, Research, and Training. But more than that, we want our research to actually solve problems—the kind of problems that keep people up at night, the challenges facing our communities, and the questions that matter for Africa's future.
                </p>
                <p className="text-base md:text-lg font-semibold text-[var(--color-text-primary)] mb-3">
                  Here's what we're doing to make that happen:
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Supporting our faculty and students to tackle research that matters to real people</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Building partnerships with universities and institutions here in Kenya and around the world</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Helping researchers find funding—whether it's from the university or external sources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Publishing journals across our different Schools so great research gets shared</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Hosting regular seminars where faculty and students can share what they're working on and learn from each other</span>
                  </li>
                </ul>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mt-6 pt-4 border-t border-[var(--color-border-secondary)]">
                  Got an idea for research? We'd love to hear it. Our research committee is always open to new proposals that can push knowledge forward. For more details on our research policy, reach out to the Deputy Vice-Chancellor's (Academic Affairs) office.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Full-Width Image Section */}
        <section className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Research and innovation at Riara University" 
            className="w-full h-full object-cover"
          />
        </section>

        {/* Vision Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-8">
                Our Vision for Research
              </h2>
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6 border-l-4 border-[var(--color-stanford-red)] pl-6 md:pl-8">
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                    We want to be a leading university and a Centre of Excellence in Scholarship, Research, and Training. But here's the thing—we're not just saying that. We're building it, one research project at a time.
                </p>
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                    Our goal? To create a place where people aren't afraid to ask hard questions, where innovation happens naturally, and where the research we do actually helps Kenya and the world move forward. That's what excellence means to us.
                  </p>
                </div>
                <div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                      alt="Research excellence" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Research Focus Areas Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Research Focus Areas
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-10">
                Across all our Schools—from Law to Business, Education to Computing, International Relations to Journalism—we're doing research that matters. But what makes our research special? It's research that:
              </p>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 rounded-lg border-l-4 border-[var(--color-stanford-red)] hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/9] rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                      alt="Societal impact research" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                    Solves Real Problems
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    We're not interested in research that sits on a shelf. Our work tackles the challenges people face every day—from legal reforms to business innovation, from education access to technology solutions.
                  </p>
                </div>

                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 rounded-lg border-l-4 border-[var(--color-stanford-red)] hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/9] rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                      alt="Innovative research" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                    Pushes Boundaries, Respectfully
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    We're not afraid to try new approaches or challenge old ways of thinking. But we always do it the right way—with integrity, respect for participants, and methods that stand up to scrutiny.
                  </p>
                </div>

                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 rounded-lg border-l-4 border-[var(--color-stanford-red)] hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/9] rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                      alt="Collaborative research" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                    Brings People Together
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Some of our best research happens when lawyers talk to business professors, or when journalists work with computing scientists. Different perspectives make for better solutions.
                  </p>
                </div>

                <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 rounded-lg border-l-4 border-[var(--color-stanford-red)] hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/9] rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                      alt="Sustainable research solutions" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                    Builds for the Long Term
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    We're thinking beyond quick fixes. Our research aims to create solutions that last, that can be built upon, and that contribute to sustainable development for generations to come.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Research Initiatives & Activities Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start mb-10">
                <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Research Initiatives & Activities
              </h2>
                  <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                    Led by our Deputy Vice-Chancellor (Academic Affairs), our research office is here to help researchers succeed. Here's how we're supporting the research community:
                  </p>
                </div>
                <div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1532619675605-1ede6c4ed2b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                      alt="Research activities" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Cheering on faculty and students who are working on research that matters—the kind that tackles real problems people face
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Connecting researchers with partners—both here in Kenya and internationally—because great research often happens when people work together
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Helping researchers find the funding they need, whether that's from the university or from external grants and organizations
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Supporting the publication of journals across our Schools so important research gets shared with the world
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Hosting regular seminars and discussions where researchers can share their work, get feedback, and spark new ideas
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Getting researchers out into communities to work directly with people on projects that make a difference
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Research Publications Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                Our Research Publications
              </h2>
                  <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8">
                    Our researchers are out there sharing their work—in journals, at conferences, and through other platforms. They're contributing to the global conversation, and they're making sure African perspectives and solutions are part of that conversation.
              </p>
              <Button
                size="lg"
                className="bg-[var(--color-stanford-red)] hover:bg-[var(--color-stanford-red-dark)] text-white font-semibold text-base md:text-lg px-8 py-6"
                asChild
              >
                <a href="https://repository.ru.ac.ke/communities/1a3fbb88-440d-40af-8cd0-fe7d7f5ad253" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 !text-white hover:!text-white">
                  Browse Research Papers <ExternalLink className="h-5 w-5 !text-white" />
                </a>
              </Button>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                      alt="Research publications" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Full-Width Image Section */}
        <section className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Research laboratory" 
            className="w-full h-full object-cover"
          />
        </section>

        {/* Francis Onditi Conflictology Lab Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-8">
                Francis Onditi Conflictology Lab
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-8">
                <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                    About the Lab
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    The Conflict Observatory & Prediction (COP) Group/Lab is where we dig deep into understanding conflict—why it happens, how it evolves, and most importantly, how we can prevent it or resolve it. We're looking at everything from local disputes to international tensions, using both data-driven analysis and on-the-ground insights.
                  </p>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    Our team brings together people from different backgrounds—political scientists, researchers, data analysts, and international relations experts. We use a mix of quantitative methods and qualitative research because understanding conflict requires both the numbers and the stories behind them.
                  </p>
                </div>
                <div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                      alt="Conflictology Lab research" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 mb-8 border-l-4 border-[var(--color-stanford-red)]">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                  What We're Studying
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Here's something interesting: we're looking at how the relationships between people, groups, and even countries affect whether conflict happens or peace prevails. It turns out that where people interact—like border markets or shared grazing lands—can either become places where conflict starts or where peace is built. That's what we're trying to understand.
                </p>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6 font-semibold">
                  Right now, we're focusing on two key areas:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-[var(--color-bg-secondary)] p-4 rounded-lg">
                    <div className="aspect-[16/9] rounded-lg overflow-hidden mb-3">
                      <img 
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                        alt="Intertribal border markets" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-2">
                      Intertribal Border Markets
                    </h4>
                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                      Markets aren't just places where people buy and sell—they're spaces where communities come together, where relationships are built, and sometimes where tensions arise. We're studying how these border markets work as both potential conflict zones and potential peace-building spaces. It's about understanding the social structures, the unwritten rules, and how people navigate these shared spaces.
                    </p>
                  </div>
                  <div className="bg-[var(--color-bg-secondary)] p-4 rounded-lg">
                    <div className="aspect-[16/9] rounded-lg overflow-hidden mb-3">
                      <img 
                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                        alt="Transhumance pastoralism" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-2">
                      Transhumance Pastoralism
                    </h4>
                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                      Pastoral communities have been moving with their herds for generations, but things are changing. Climate change is making grazing lands smaller, and traditional ways of life are being disrupted. Unfortunately, some communities have responded by arming themselves, which has led to more conflict. We're studying how these changes happen and what alternatives might work better.
                    </p>
                  </div>
                </div>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  What makes our lab special is the mix of people we bring together. We've got conflict experts working alongside geographers, mathematicians, climate scientists, GIS specialists, economists, and international relations researchers. Why? Because understanding conflict requires seeing it from all angles. We're trying to understand the human connections—the relationships and networks—that shape how people behave, both in small groups and at the national level, across time and space.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-6">
                  Projects & Fieldwork
                </h3>
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <h4 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                        Transhumance Pastoralism Conflict Study
                      </h4>
                      <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-3">
                        We're trying to figure out what's really driving the long-term changes in how pastoral communities move and live. When we understand how these communities adapt (or struggle to adapt) to environmental changes, we can better predict and prevent conflict.
                      </p>
                      <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                        Right now, we're zeroing in on the Karamoja Cluster—it's a critical area when it comes to the spread of small arms and light weapons. By understanding how kinship relationships work in these communities, we're hoping to figure out why people arm themselves and, more importantly, what alternatives might work better. The goal? Better disarmament strategies and livelihood options that actually make sense for these communities.
                      </p>
                    </div>
                    <div>
                      <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                          alt="Pastoralism research" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="order-2 md:order-1">
                      <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                          alt="Market research" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="order-1 md:order-2">
                      <h4 className="text-lg font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                        Intertribal Border Market Study
                      </h4>
                      <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                        We're measuring something called "closeness centrality"—basically, how connected people and groups are to each other. Think of it as the social network that holds communities together (or pulls them apart). Understanding these connections helps us predict when conflict might break out and when peace might hold. To do this, we're using everything from computer models to on-the-ground observations, because these market structures are complex and you need multiple approaches to really understand them.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 border-l-4 border-[var(--color-stanford-red)]">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                  Association for the Advancement of Scientific International Relations Studies (AASIRS)
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  We're part of AASIRS (registered under the Registrar of Societies, registration No. SOC/80968), an association that's all about bringing a scientific, evidence-based approach to understanding international relations. Here's what we're working toward:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Building a network of researchers, scholars, and practitioners who believe in using science and evidence to understand international relations—not just opinions or assumptions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Creating spaces where academics can actually talk to policymakers and practitioners, because research should inform decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Raising the bar on how we teach, research, and discuss African issues in international relations—because African perspectives matter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-stanford-red)] mt-2 flex-shrink-0"></div>
                    <span className="text-[var(--color-text-secondary)]">Building a library of knowledge from African scholars—through journals and books—so African voices are part of the global conversation</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Research Stats Section (if available) */}
        {researchStats.length > 0 && (
          <ResearchSection stats={researchStats} profile={researchProfile} showHeader={false} />
        )}
      </main>
      <Footer />
    </div>
  );
}
