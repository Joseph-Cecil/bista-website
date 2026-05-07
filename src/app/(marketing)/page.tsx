import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero";
import { StatsCounter } from "@/components/sections/stats-counter";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProductsSection } from "@/components/sections/products-section";
import { ValuesSection } from "@/components/sections/values-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "BISTA Solutions | IT Excellence in Ghana",
  description:
    "Translating decades of expertise into cutting-edge software development and database management for government and corporate institutions across Africa.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsCounter />
      <AboutSection />
      <ServicesGrid />
      <ProductsSection />
      <ValuesSection />
      <CtaBanner />
    </main>
  );
}
