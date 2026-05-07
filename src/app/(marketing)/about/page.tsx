import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";
import { TeamGrid } from "@/components/sections/team-grid";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our company, mission, and values.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="About Our Company"
            subtitle="Our mission, values, and the team behind the work."
          />
        </div>
      </section>
      <TeamGrid />
    </main>
  );
}
