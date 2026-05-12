import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How BISTA Solutions collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* Hero */}
      <header className="py-16 px-10" style={{ backgroundColor: "var(--color-blue)" }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-bold text-4xl mb-4" style={{ fontFamily: "var(--font-headings)" }}>
            Privacy Policy
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
              1. Information We Collect
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              We collect information that you voluntarily provide when contacting us through our website forms, including your name, email address, phone number, and message content. We also collect standard web analytics data such as IP addresses, browser type, and pages visited to improve our services.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-4" style={{ color: "var(--color-blue)" }}>
              2. How We Use Your Information
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              Your information is used solely to respond to your enquiries, deliver our services, and improve the user experience of our website. We do not sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-4" style={{ color: "var(--color-blue)" }}>
              3. Data Security
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              We implement industry-standard security measures including TLS/SSL encryption, input sanitization, rate limiting, and access controls to protect your data. All form submissions are transmitted over encrypted connections and stored securely.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-4" style={{ color: "var(--color-blue)" }}>
              4. Cookies
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              Our website uses essential cookies to ensure proper functionality. We do not use third-party tracking cookies. Analytics data is collected anonymously and cannot be used to personally identify visitors.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-4" style={{ color: "var(--color-blue)" }}>
              5. Your Rights
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              You have the right to access, correct, or delete any personal data we hold about you. To exercise these rights, please contact us at info@bistasolutions.com. We will respond to all valid requests within 30 days.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-4" style={{ color: "var(--color-blue)" }}>
              6. Contact Us
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              For any privacy-related enquiries, please contact our data protection team at info@bistasolutions.com or write to BISTA House, Accra, Ghana.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
