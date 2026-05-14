import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | BISTA Solutions Help Center",
  description: "Get technical support for BISTA Solutions products and services.",
};

export default function SupportPage() {
  return (
    <main>
      <header className="py-16 px-10" style={{ backgroundColor: "var(--color-blue)" }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1
            className="font-bold mb-4"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Support Center
          </h1>
          <p style={{ color: "rgba(255,255,255,0.80)" }}>
            Technical assistance for all BISTA products and services.
          </p>
        </div>
      </header>

      <section className="py-24 px-10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Contact Support",
              desc: "Speak directly with our technical team for urgent issues.",
              action: "Call +233 (0) 30 200 0000",
            },
            {
              title: "Email Support",
              desc: "Submit a support ticket and receive a response within 24 hours.",
              action: "support@bistasolutions.com",
            },
            {
              title: "Documentation",
              desc: "Access user guides, API documentation, and video tutorials for our software products.",
              action: "Coming Soon",
            },
            {
              title: "Community Forum",
              desc: "Connect with other BISTA users to share knowledge and solutions.",
              action: "Coming Soon",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border rounded-xl p-8 bg-white card-hover"
              style={{
                borderColor: "var(--color-border)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--color-foreground)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                {item.desc}
              </p>
              <span
                className="text-sm font-bold"
                style={{ color: "var(--color-primary)" }}
              >
                {item.action}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
