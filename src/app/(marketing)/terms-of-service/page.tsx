import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions governing the use of BISTA Solutions services and website.",
};

export default function TermsOfServicePage() {
  return (
    <main>
      {/* Hero */}
      <header className="py-16 px-10" style={{ backgroundColor: "var(--color-blue)" }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-bold text-4xl mb-4" style={{ fontFamily: "var(--font-headings)" }}>
            Terms of Service
          </h1>
          <p style={{ color: "rgba(255,255,255,0.70)" }}>
            Last updated: January 2025
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="py-20 px-10">
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h2 className="font-bold text-xl mb-4" style={{ color: "var(--color-blue)" }}>
              1. Agreement to Terms
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              By accessing and using the BISTA Solutions website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-4" style={{ color: "var(--color-blue)" }}>
              2. Services Description
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              BISTA Solutions provides enterprise IT services including custom software development, database management, ERP and HRMS solutions, IT consultancy, and technology product distribution. Specific terms for individual services are outlined in project-level agreements.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-4" style={{ color: "var(--color-blue)" }}>
              3. Intellectual Property
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              All content, branding, software, and materials on this website are the intellectual property of BISTA Solutions Limited. Unauthorized reproduction, distribution, or modification is strictly prohibited without prior written consent.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-4" style={{ color: "var(--color-blue)" }}>
              4. Limitation of Liability
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              BISTA Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or services. Our total liability is limited to the amount paid for the specific services in question.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-4" style={{ color: "var(--color-blue)" }}>
              5. Governing Law
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              These terms shall be governed by and construed in accordance with the laws of the Republic of Ghana. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the Ghanaian courts.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-4" style={{ color: "var(--color-blue)" }}>
              6. Changes to Terms
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the revised terms.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
