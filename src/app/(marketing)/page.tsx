import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero";
import { StatsCounter } from "@/components/sections/stats-counter";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ErpModuleGallery } from "@/components/sections/erp-module-gallery";
import { CleanCodeSection } from "@/components/sections/clean-code-section";
import { ProductsSection } from "@/components/sections/products-section";
import { ValuesSection } from "@/components/sections/values-section";
import { CtaBanner } from "@/components/sections/cta-banner";

// TODO: "Take Control of Your Business" section (dark blue, Control-image.png background) — needs design decision
// TODO: "WHY BISTA ERP?" section (Why-BISTA-2.png background, 4 feature boxes) — needs design decision
// Images /images/home/control-image.png and /images/home/why-bista.png are available in /public

export const metadata: Metadata = {
  title: "BISTA Solutions | IT Excellence in Ghana",
  description:
    "BISTA Solutions Limited was incorporated as a wholly owned Ghanaian Information Technology organization registered in 2009 to translate the vast experience of its consultants in the software development and database management to assist government institutions and corporate Ghana in utilizing Information Technology to operate effectively and efficiently to achieve their business goals.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsCounter />
      <AboutSection />
      <ServicesGrid />
      <ErpModuleGallery />
      <CleanCodeSection />
      <ProductsSection />
      <ValuesSection />
      <CtaBanner />
    </main>
  );
}
