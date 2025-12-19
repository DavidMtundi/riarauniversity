import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";

export function MissionSection() {
  return (
    <section className="relative py-8 sm:py-10 md:py-12 bg-[var(--color-bg-primary)] overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-[url('https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg')] bg-cover bg-center bg-no-repeat bg-fixed opacity-10"></div>
      
      {/* Content */}
      <Container className="relative z-10">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mt-6 sm:mt-8 md:mt-10 mb-4 sm:mb-6 text-center">
            Excellence Through Innovation
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-light text-center leading-[1.7] mt-4 sm:mt-6 md:mt-8 mb-6 sm:mb-8 max-w-7xl mx-auto">
            At Riara University, we are committed to fostering academic excellence, innovation, and transformative learning experiences. Our mission is to empower students with knowledge, critical thinking skills, and practical expertise that prepares them for success in an ever-evolving world. Through cutting-edge research, collaborative learning, and a commitment to community impact, we shape tomorrow's leaders today.
          </p>
          <Button size="lg" className="bg-[var(--color-bg-maroon)] hover:bg-[var(--color-riara-red-dark)] text-[var(--color-text-inverse)] text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold mt-4 sm:mt-6 md:mt-8" data-testid="button-learn-more" asChild>
            <a href="/about" className="!text-white">
              More About Riara University
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
