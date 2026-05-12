import type { Metadata } from "next";
import { PaaopaaHero } from "@/components/paaopaa/paaopaa-hero";
import { PaaopaaFeatures } from "@/components/paaopaa/paaopaa-features";
import { PaaopaaCta } from "@/components/paaopaa/paaopaa-cta";

export const metadata: Metadata = {
  title: "Paaopaa.com | Premium E-Commerce Platform",
  description:
    "Shop authentic technology products on Paaopaa.com — BISTA Solutions' dedicated e-commerce platform with secure payments and nationwide delivery across Ghana.",
};

export default function PaaopaaPage() {
  return (
    <main>
      <PaaopaaHero />
      <PaaopaaFeatures />
      <PaaopaaCta />
    </main>
  );
}
