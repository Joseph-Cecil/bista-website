import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ServicesStickyNav } from "@/components/services/services-sticky-nav";

export const metadata: Metadata = {
  title: "Custom Software Development",
  description:
    "BISTA Solutions builds scalable, secure enterprise software tailored to your organisation's specific workflows, using CMM-certified processes and proven methodologies.",
};

const capabilities = [
  {
    icon: "lucide:layout-dashboard",
    title: "Enterprise Web Applications",
    desc: "Full-stack web systems built for reliability and scale. From internal management dashboards to customer-facing portals, we architect applications that handle real operational loads.",
  },
  {
    icon: "lucide:smartphone",
    title: "Mobile Application Development",
    desc: "Native and cross-platform mobile applications for iOS and Android. We build field tools, customer apps, and internal mobile systems that work in low-connectivity environments.",
  },
  {
    icon: "lucide:git-merge",
    title: "System Integration",
    desc: "We connect disparate systems so your data flows automatically. ERP-to-accounting, payroll-to-HR, API integrations — we eliminate the manual work that sits between your platforms.",
  },
  {
    icon: "lucide:refresh-cw",
    title: "Legacy System Modernisation",
    desc: "Many Ghanaian enterprises run critical operations on systems that are a decade old. We migrate, rebuild, and modernise legacy software without disrupting your operations.",
  },
  {
    icon: "lucide:shield-check",
    title: "CMM-Certified Development Process",
    desc: "Every line of code we write follows our Capability Maturity Model process framework. This means predictable timelines, fewer defects, and software that holds up under pressure.",
  },
  {
    icon: "lucide:headphones",
    title: "Post-Delivery Support & Maintenance",
    desc: "We do not disappear after handover. Our support contracts include bug fixes, performance monitoring, security patches, and feature additions as your business evolves.",
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We spend time understanding your business before writing a single line of code. This means stakeholder interviews, workflow mapping, and technical assessment." },
  { step: "02", title: "Architecture", desc: "We design the system before we build it. Data models, infrastructure diagrams, security architecture, and API contracts are agreed before development starts." },
  { step: "03", title: "Development", desc: "Our CMM-certified sprints deliver working software in measurable increments. You see real progress every two weeks, not a big reveal at the end." },
  { step: "04", title: "Quality Assurance", desc: "Automated tests, manual QA, load testing, and security scanning are built into our process — not bolted on at the end." },
  { step: "05", title: "Deployment", desc: "We handle the full production rollout. Infrastructure setup, database migrations, SSL, monitoring, and user training are all part of our delivery." },
  { step: "06", title: "Support", desc: "After launch we stay involved. Monthly reporting, proactive monitoring, and a dedicated point of contact ensure your system keeps performing." },
];

const technologies = [
  "React / Next.js", "Node.js", "Python", "PostgreSQL",
  "MySQL", "MongoDB", "Docker", "AWS / GCP",
  "REST APIs", "GraphQL", "TypeScript", "Redis",
];

export default function SoftwareDevelopmentPage() {
  return (
    <main>
      <ServicesStickyNav current="Software Development" />
      {/* Hero */}
      <header
        className="py-24 px-10 relative overflow-hidden text-white"
        style={{ backgroundColor: "var(--color-blue)" }}
      >
        <div
          className="absolute top-0 right-0 rounded-full pointer-events-none"
          style={{
            width: "600px", height: "600px",
            backgroundColor: "color-mix(in oklab, var(--color-primary) 20%, transparent)",
            transform: "translate(30%, -50%)", filter: "blur(80px)",
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: "rgba(255,255,255,0.60)" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Icon icon="lucide:chevron-right" width={14} height={14} />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Icon icon="lucide:chevron-right" width={14} height={14} />
            <span style={{ color: "white" }}>Software Development</span>
          </nav>

          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.10)",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            Core Service
          </div>
          <h1
            className="font-bold mb-6"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
              lineHeight: "var(--leading-tight)",
            }}
          >
            Custom Software Development
          </h1>
          <p
            className="text-lg font-light max-w-2xl"
            style={{ color: "rgba(255,255,255,0.80)", lineHeight: "var(--leading-relaxed)" }}
          >
            We build enterprise software that fits how your organisation actually works —
            not how a generic vendor assumes it should. Every project follows our
            CMM-certified process for predictable delivery and measurable quality.
          </p>
        </div>
      </header>

      {/* Capabilities */}
      <section className="py-24 px-10" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2
              className="text-sm font-bold uppercase mb-3"
              style={{ color: "var(--color-red)", letterSpacing: "var(--tracking-widest)" }}
            >
              What We Build
            </h2>
            <h3
              className="font-bold mb-4"
              style={{
                fontFamily: "var(--font-headings)",
                fontSize: "var(--text-4xl)",
                color: "var(--color-blue)",
              }}
            >
              Our Software Capabilities
            </h3>
            <p
              className="text-lg max-w-3xl"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              From greenfield builds to complex integrations, we have delivered
              software across banking, government, retail, logistics, and healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="border rounded-xl p-8 bg-white card-hover"
                style={{
                  borderColor: "var(--color-border)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                }}
              >
                <h4
                  className="font-bold text-lg mb-3"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {cap.title}
                </h4>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-muted-foreground)", lineHeight: "var(--leading-relaxed)" }}
                >
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="py-24 px-10 border-y"
        style={{ backgroundColor: "var(--color-secondary)", borderColor: "var(--color-border)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-sm font-bold uppercase mb-3"
              style={{ color: "var(--color-red)", letterSpacing: "var(--tracking-widest)" }}
            >
              How We Work
            </h2>
            <h3
              className="font-bold"
              style={{
                fontFamily: "var(--font-headings)",
                fontSize: "var(--text-4xl)",
                color: "var(--color-blue)",
              }}
            >
              Our Delivery Process
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p) => (
              <div
                key={p.step}
                className="bg-white border rounded-xl p-8"
                style={{
                  borderColor: "var(--color-border)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="font-bold text-4xl mb-4"
                  style={{
                    fontFamily: "var(--font-headings)",
                    color: "color-mix(in oklab, var(--color-primary) 20%, transparent)",
                    letterSpacing: "var(--tracking-tighter)",
                  }}
                >
                  {p.step}
                </div>
                <h4
                  className="font-bold text-lg mb-3"
                  style={{ color: "var(--color-blue)" }}
                >
                  {p.title}
                </h4>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-muted-foreground)", lineHeight: "var(--leading-relaxed)" }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 px-10" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-sm font-bold uppercase mb-3"
            style={{ color: "var(--color-red)", letterSpacing: "var(--tracking-widest)" }}
          >
            Technology Stack
          </h2>
          <h3
            className="font-bold mb-12"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "var(--text-4xl)",
              color: "var(--color-blue)",
            }}
          >
            Tools We Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm font-medium border"
                style={{
                  backgroundColor: "var(--color-secondary)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-foreground)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 btn-blue text-white px-8 py-4 rounded-md font-bold text-base"
            >
              Discuss Your Project
              <Icon icon="lucide:arrow-right" width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
