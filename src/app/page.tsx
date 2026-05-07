import { HeroSection } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { StatsCounter } from "@/components/sections/stats-counter";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PartnersLogo } from "@/components/sections/partners-logo";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsCounter />
      <ServicesGrid />
      <TestimonialsSection />
      <PartnersLogo />
      <CtaBanner />
    </main>
  );
}
