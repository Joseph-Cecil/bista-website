import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";

export const metadata: Metadata = {
  title: "Client Portal | BISTA Solutions",
  description: "Access your BISTA Solutions client portal for project tracking and support.",
};

export default function PortalPage() {
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
            Client Portal
          </h1>
          <p style={{ color: "rgba(255,255,255,0.80)" }}>
            Secure access to your projects, tickets, and account information.
          </p>
        </div>
      </header>

      <section className="py-24 px-10">
        <div
          className="max-w-md mx-auto text-center p-12 rounded-2xl border"
          style={{
            backgroundColor: "var(--color-secondary)",
            borderColor: "var(--color-border)",
          }}
        >
          <div
            className="size-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{
              backgroundColor:
                "color-mix(in oklab, var(--color-primary) 10%, transparent)",
              color: "var(--color-primary)",
            }}
          >
            <Icon icon="lucide:lock" width={32} height={32} />
          </div>
          <h2
            className="font-bold text-xl mb-4"
            style={{ color: "var(--color-blue)" }}
          >
            Portal Coming Soon
          </h2>
          <p
            className="text-sm mb-6"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            Our secure client portal is currently under development. In the
            meantime, please contact your account manager directly or reach out
            to our support team.
          </p>
          <Link
            href="/contact"
            className="btn-blue inline-block text-white px-6 py-3 rounded-md font-medium"
          >
            Contact Us Instead
          </Link>
        </div>
      </section>
    </main>
  );
}
