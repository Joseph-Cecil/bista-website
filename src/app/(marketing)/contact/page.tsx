import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our team. We would love to hear from you.",
};

export default function ContactPage() {
  return (
    <main className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Fill out the form below and we will get back to you within 1-2 business days."
          centered
        />
        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
