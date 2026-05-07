import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServicesGrid } from "@/components/sections/services-grid";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore the full range of professional services we offer.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Our Services"
            subtitle="Everything we offer to help your business grow."
          />
        </div>
      </section>
      <ServicesGrid />
    </main>
  );
}
