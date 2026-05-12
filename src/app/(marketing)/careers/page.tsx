import type { Metadata } from "next";
import { CareersHero } from "@/components/careers/careers-hero";
import { CareersPerks } from "@/components/careers/careers-perks";
import { CareersPositions } from "@/components/careers/careers-positions";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Careers | Join the BISTA Solutions Team",
  description:
    "Explore career opportunities at BISTA Solutions. We are hiring engineers, designers, project managers, and sales executives across Ghana.",
};

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <CareersPerks />
      <CareersPositions />
      <CtaBanner />
    </main>
  );
}
