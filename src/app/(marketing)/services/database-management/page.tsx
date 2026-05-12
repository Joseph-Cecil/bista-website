import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Enterprise Database Management",
  description:
    "Secure, efficient, and highly available enterprise database management services from BISTA Solutions. Design, migration, optimisation, and ongoing administration.",
};

const services = [
  {
    icon: "lucide:database",
    title: "Database Design & Architecture",
    desc: "We design database schemas from the ground up with performance, integrity, and scalability in mind. Poor database design is the root cause of most system performance problems — we get it right from day one.",
  },
  {
    icon: "lucide:move-right",
    title: "Data Migration & Consolidation",
    desc: "Moving data between systems is high-risk work that most organisations underestimate. We have executed migrations for banks, government agencies, and large retailers without data loss or extended downtime.",
  },
  {
    icon: "lucide:gauge",
    title: "Performance Tuning & Optimisation",
    desc: "Slow queries, lock contention, and missing indexes silently cost your organisation money every day. We diagnose and fix database performance problems at the root cause level.",
  },
  {
    icon: "lucide:shield",
    title: "Security & Access Control",
    desc: "We implement role-based access, encryption at rest and in transit, audit logging, and data masking. Your sensitive data is protected from both external threats and internal misuse.",
  },
  {
    icon: "lucide:refresh-cw",
    title: "Backup, Recovery & High Availability",
    desc: "We design and implement backup strategies, point-in-time recovery, and high-availability clustering. When things go wrong — and they will — your data is safe and your system recovers fast.",
  },
  {
    icon: "lucide:activity",
    title: "Monitoring & Ongoing Administration",
    desc: "Proactive monitoring catches problems before they become outages. We provide dashboards, alerting, capacity planning, and regular health reports for all databases under our management.",
  },
];

const databases = [
  { name: "Oracle", icon: "lucide:circle-dot" },
  { name: "Microsoft SQL Server", icon: "lucide:circle-dot" },
  { name: "PostgreSQL", icon: "lucide:circle-dot" },
  { name: "MySQL / MariaDB", icon: "lucide:circle-dot" },
  { name: "MongoDB", icon: "lucide:circle-dot" },
  { name: "Redis", icon: "lucide:circle-dot" },
];

const stats = [
  { value: "15+", label: "Years of database experience" },
  { value: "99.9%", label: "Uptime across managed databases" },
  { value: "0", label: "Data loss incidents in our history" },
  { value: "50+", label: "Database environments managed" },
];

export default function DatabaseManagementPage() {
  return (
    <main>
      {/* Hero */}
      <header
        className="py-24 px-10 relative overflow-hidden text-white"
        style={{ backgroundColor: "var(--color-blue)" }}
      >
        <div
          className="absolute bottom-0 left-0 rounded-full pointer-events-none"
          style={{
            width: "500px", height: "500px",
            backgroundColor: "color-mix(in oklab, var(--color-primary) 15%, transparent)",
            transform: "translate(-30%, 40%)", filter: "blur(80px)",
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: "rgba(255,255,255,0.60)" }}>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Icon icon="lucide:chevron-right" width={14} height={14} />
            <span style={{ color: "white" }}>Database Management</span>
          </nav>

          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase mb-6"
            style={{ backgroundColor: "rgba(255,255,255,0.10)", letterSpacing: "var(--tracking-widest)" }}
          >
            <Icon icon="lucide:database" width={14} height={14} style={{ color: "var(--color-red)" }} />
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
            Enterprise Database Management
          </h1>
          <p
            className="text-lg font-light max-w-2xl"
            style={{ color: "rgba(255,255,255,0.80)", lineHeight: "var(--leading-relaxed)" }}
          >
            Your data is your most valuable asset. We design, secure, optimise,
            and administer enterprise databases with the rigour that critical
            business systems demand. No downtime. No data loss. No surprises.
          </p>
        </div>
      </header>

      {/* Stats Strip */}
      <section
        className="py-12 px-10 border-b"
        style={{
          backgroundColor: "white",
          borderColor: "var(--color-border)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="font-bold mb-1"
                style={{
                  fontSize: "var(--text-4xl)",
                  fontFamily: "var(--font-headings)",
                  color: "var(--color-primary)",
                }}
              >
                {s.value}
              </div>
              <div
                className="text-xs uppercase font-medium"
                style={{
                  color: "var(--color-muted-foreground)",
                  letterSpacing: "var(--tracking-wider)",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-10" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2
              className="text-sm font-bold uppercase mb-3"
              style={{ color: "var(--color-red)", letterSpacing: "var(--tracking-widest)" }}
            >
              What We Do
            </h2>
            <h3
              className="font-bold mb-4"
              style={{
                fontFamily: "var(--font-headings)",
                fontSize: "var(--text-4xl)",
                color: "var(--color-blue)",
              }}
            >
              Database Services
            </h3>
            <p className="text-lg max-w-3xl" style={{ color: "var(--color-muted-foreground)" }}>
              Database management is not just about keeping the lights on.
              It is about ensuring your data is accurate, accessible, and protected
              at every moment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="border rounded-xl p-8 bg-white card-hover"
                style={{ borderColor: "var(--color-border)", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
              >
                <div
                  className="size-12 rounded-lg flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: "color-mix(in oklab, var(--color-blue) 10%, transparent)",
                    color: "var(--color-blue)",
                  }}
                >
                  <Icon icon={svc.icon} width={22} height={22} />
                </div>
                <h4 className="font-bold text-lg mb-3" style={{ color: "var(--color-foreground)" }}>
                  {svc.title}
                </h4>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-muted-foreground)", lineHeight: "var(--leading-relaxed)" }}
                >
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section
        className="py-20 px-10 border-y"
        style={{ backgroundColor: "var(--color-secondary)", borderColor: "var(--color-border)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3
            className="font-bold mb-4"
            style={{ fontFamily: "var(--font-headings)", fontSize: "var(--text-3xl)", color: "var(--color-blue)" }}
          >
            Database Platforms We Support
          </h3>
          <p className="mb-12" style={{ color: "var(--color-muted-foreground)" }}>
            We are platform-agnostic. We work with whatever your organisation
            already uses and recommend the right tool for new projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {databases.map((db) => (
              <div
                key={db.name}
                className="flex items-center gap-2 px-5 py-3 rounded-full border bg-white font-medium text-sm"
                style={{ borderColor: "var(--color-border)", color: "var(--color-foreground)" }}
              >
                <Icon icon="lucide:database" width={14} height={14} style={{ color: "var(--color-primary)" }} />
                {db.name}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 btn-blue text-white px-8 py-4 rounded-md font-bold"
            >
              Talk to a Database Expert
              <Icon icon="lucide:arrow-right" width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
