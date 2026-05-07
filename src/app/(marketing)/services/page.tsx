import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesErp } from "@/components/services/services-erp";
import { ServicesHrms } from "@/components/services/services-hrms";
import { ServicesSaas } from "@/components/services/services-saas";
import { ServicesConsulting } from "@/components/services/services-consulting";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Our Services | Comprehensive Enterprise Technology Solutions",
  description:
    "Explore BISTA Solutions full suite of enterprise services — ERP, HRMS, custom software, database management, cloud infrastructure, and IT consulting.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesErp />
      <ServicesHrms />
      <ServicesSaas />
      <ServicesConsulting />
      <CtaBanner />
    </main>
  );
}
