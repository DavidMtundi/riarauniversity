import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <section className="bg-muted/30 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About Stanford</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Mission Defined by Possibility
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  At Stanford, our mission of discovery and learning is energized by a spirit of optimism and possibility that dates to our founding. Here you'll find a place of intellectual expansiveness, wide-ranging perspectives, and freedom to explore new lines of thinking. Buzzing with ideas and innovation, approaching questions with openness and curiosity, pursuing excellence in all we do – this is Stanford.
                </p>
                
                <h2 className="text-3xl font-serif font-semibold mb-6">Our History</h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Founded in 1885 by Leland and Jane Stanford in memory of their only child, Leland Jr., who died of typhoid fever at 15. The Stanfords decided to establish a university "to promote the public welfare by exercising an influence in behalf of humanity and civilization."
                </p>
                
                <h2 className="text-3xl font-serif font-semibold mb-6">Our Mission</h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Stanford University's mission is to promote the public welfare by exercising an influence in behalf of humanity and civilization. We seek to educate students to become useful members of society and to promote the public welfare by exercising an influence in behalf of humanity and civilization.
                </p>
                
                <h2 className="text-3xl font-serif font-semibold mb-6">Our Values</h2>
                <ul className="text-base text-muted-foreground leading-relaxed space-y-2">
                  <li>• Academic excellence and intellectual rigor</li>
                  <li>• Freedom of inquiry and expression</li>
                  <li>• Diversity and inclusion</li>
                  <li>• Service to society</li>
                  <li>• Innovation and entrepreneurship</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
