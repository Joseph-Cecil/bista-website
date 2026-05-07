import type { Metadata } from "next";
import { TeamGrid } from "@/components/sections/team-grid";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the talented people behind our organization.",
};

export default function TeamPage() {
  return (
    <main className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Meet Our Team"
          subtitle="The people who make it all happen."
          centered
        />
      </div>
      <TeamGrid />
    </main>
  );
}
