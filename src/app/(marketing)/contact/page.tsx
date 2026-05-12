import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactFormSection } from "@/components/contact/contact-form-section";
import { ContactMap } from "@/components/contact/contact-map";

export const metadata: Metadata = {
  title: "Contact Us | Get In Touch With Our Team",
  description:
    "Reach out to BISTA Solutions for enterprise software, IT consulting, partnerships, or support. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
      <ContactMap />
    </main>
  );
}
