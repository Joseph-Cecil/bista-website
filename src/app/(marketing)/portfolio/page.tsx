import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our work and case studies.",
};

export default function PortfolioPage() {
  return (
    <main className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Our Work"
          subtitle="A selection of projects we are proud of."
        />
      </div>
    </main>
  );
}
