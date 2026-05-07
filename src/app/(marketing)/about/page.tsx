import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { AboutTimeline } from "@/components/about/about-timeline";
import { AboutTeam } from "@/components/about/about-team";
import { AboutCmm } from "@/components/about/about-cmm";

export const metadata: Metadata = {
  title: "About Us | Pioneering IT Excellence Since 2009",
  description:
    "Learn about BISTA Solutions — our story, leadership team, milestones, and commitment to CMM-certified quality since 2009.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutTimeline />
      <AboutTeam />
      <AboutCmm />
    </main>
  );
}
