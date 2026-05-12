import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How BISTA Solutions uses cookies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <main>
      <header className="py-16 px-10" style={{ backgroundColor: "var(--color-blue)" }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-bold text-4xl mb-4" style={{ fontFamily: "var(--font-headings)" }}>
            Cookie Policy
          </h1>
          <p style={{ color: "rgba(255,255,255,0.70)" }}>
            Last updated: January 2025
          </p>
        </div>
      </header>

      <section className="py-20 px-10">
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h2 className="font-bold text-xl mb-4" style={{ color: "var(--color-blue)" }}>
              What Are Cookies?
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-4" style={{ color: "var(--color-blue)" }}>
              How We Use Cookies
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              We use only essential cookies required for the proper functioning of our website. These include session cookies for form submissions and security tokens. We do not use advertising or third-party tracking cookies.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-4" style={{ color: "var(--color-blue)" }}>
              Managing Cookies
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              You can control and delete cookies through your browser settings. Please note that disabling essential cookies may affect the functionality of certain features on our website, such as form submissions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
