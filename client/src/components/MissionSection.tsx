import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function MissionSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-[var(--color-bg-primary)] overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat bg-fixed opacity-10"></div>
      
      {/* Content */}
      <div className="relative z-10 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center">
            Excellence Through Innovation
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-center leading-relaxed mb-6 sm:mb-8 max-w-7xl mx-auto">
            At Riara University, we are committed to fostering academic excellence, innovation, and transformative learning experiences. Our mission is to empower students with knowledge, critical thinking skills, and practical expertise that prepares them for success in an ever-evolving world. Through cutting-edge research, collaborative learning, and a commitment to community impact, we shape tomorrow's leaders today.
          </p>
          <Button size="lg" className="bg-[var(--color-bg-maroon)] hover:bg-[var(--color-stanford-red-dark)] text-[var(--color-text-inverse)] text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4" data-testid="button-learn-more">
            Discover Riara University
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
