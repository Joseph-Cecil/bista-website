import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ServicesStickyNav } from "@/components/services/services-sticky-nav";

export const metadata: Metadata = {
  title: "IT Consultancy & Strategy",
  description:
    "Strategic technology guidance for Ghanaian and West African enterprises. Digital transformation, infrastructure planning, vendor selection, and technology audits from BISTA Solutions.",
};

const consultingAreas = [
  {
    title: "Digital Transformation Strategy",
    desc: "Moving a business from manual or legacy processes to modern digital systems is not a technology problem — it is a change management problem that requires technology. We help leadership teams build realistic transformation roadmaps.",
  },
  {
    title: "Technology Audit & Assessment",
    desc: "Before you invest in new systems, you need an honest picture of where you stand today. We assess your current infrastructure, identify risks, quantify technical debt, and produce a clear report with prioritised recommendations.",
  },
  {
    title: "Enterprise Architecture",
    desc: "We design the blueprint for how your technology ecosystem should be structured — which systems talk to which, where your data lives, how services are deployed, and how everything scales as you grow.",
  },
  {
    title: "Vendor Selection & Procurement",
    desc: "The technology market is full of vendors making identical promises. We help you write requirements, evaluate proposals, conduct due diligence, and negotiate contracts from a position of knowledge.",
  },
  {
    title: "IT Governance & Policy",
    desc: "We develop IT governance frameworks, acceptable use policies, disaster recovery plans, and business continuity documentation. Governance is what separates organisations that recover from crises from those that do not.",
  },
  {
    title: "Cybersecurity Consulting",
    desc: "We conduct security assessments, identify vulnerabilities, advise on compliance requirements, and help you build a security posture appropriate for your risk profile and industry.",
  },
];

const sectors = [
  "Government & Public Sector",
  "Banking & Financial Services",
  "Healthcare",
  "Logistics & Supply Chain",
  "Education",
  "Retail & FMCG",
];

const engagementModels = [
  {
    title: "Project-Based",
    desc: "A defined scope with clear deliverables. Ideal for audits, assessments, strategy documents, and vendor selection processes.",
  },
  {
    title: "Retained Advisory",
    desc: "An ongoing relationship where we act as your external CTO or technology advisor. Monthly retainer, available when you need us.",
  },
  {
    title: "Embedded Consulting",
    desc: "One of our senior consultants works alongside your team for a defined period to drive transformation from the inside.",
  },
];

export default function ItConsultancyPage() {
  return (
    <main>
      <ServicesStickyNav current="IT Consultancy" />
      {/* Hero */}
      <header
        className="py-24 px-10 relative overflow-hidden text-white"
        style={{ backgroundColor: "var(--color-blue)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: "rgba(255,255,255,0.60)" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Icon icon="lucide:chevron-right" width={14} height={14} />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Icon icon="lucide:chevron-right" width={14} height={14} />
            <span style={{ color: "white" }}>IT Consultancy</span>
          </nav>

          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-6"
            style={{ backgroundColor: "rgba(255,255,255,0.10)", letterSpacing: "var(--tracking-widest)" }}
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
            IT Consultancy &amp; Strategy
          </h1>
          <p
            className="text-lg font-light max-w-2xl"
            style={{ color: "rgba(255,255,255,0.80)", lineHeight: "var(--leading-relaxed)" }}
          >
            Technology decisions made today will shape your organisation for the
            next decade. We bring 15 years of West African enterprise experience
            to every strategic engagement — so you make those decisions with
            clarity, not guesswork.
          </p>
        </div>
      </header>

      {/* Consulting Areas */}
      <section className="py-24 px-10" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2
              className="text-sm font-bold uppercase mb-3"
              style={{ color: "var(--color-red)", letterSpacing: "var(--tracking-widest)" }}
            >
              Areas of Expertise
            </h2>
            <h3
              className="font-bold mb-4"
              style={{ fontFamily: "var(--font-headings)", fontSize: "var(--text-4xl)", color: "var(--color-blue)" }}
            >
              Where We Help
            </h3>
            <p className="text-lg max-w-3xl" style={{ color: "var(--color-muted-foreground)" }}>
              Good technology advice is grounded in business understanding, not
              vendor preference. We work on your side of the table.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingAreas.map((area) => (
              <div
                key={area.title}
                className="border rounded-xl p-8 bg-white card-hover"
                style={{ borderColor: "var(--color-border)", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: "var(--color-foreground)" }}>
                  {area.title}
                </h4>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-muted-foreground)", lineHeight: "var(--leading-relaxed)" }}
                >
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section
        className="py-20 px-10 border-y"
        style={{ backgroundColor: "var(--color-secondary)", borderColor: "var(--color-border)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3
              className="font-bold"
              style={{ fontFamily: "var(--font-headings)", fontSize: "var(--text-3xl)", color: "var(--color-blue)" }}
            >
              Sectors We Serve
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="px-5 py-2.5 rounded-full border bg-white font-medium text-sm"
                style={{ borderColor: "var(--color-border)", color: "var(--color-foreground)" }}
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 px-10" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-sm font-bold uppercase mb-3"
              style={{ color: "var(--color-red)", letterSpacing: "var(--tracking-widest)" }}
            >
              Working Together
            </h2>
            <h3
              className="font-bold"
              style={{ fontFamily: "var(--font-headings)", fontSize: "var(--text-4xl)", color: "var(--color-blue)" }}
            >
              Engagement Models
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className="border rounded-xl p-8 text-center"
                style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-secondary)" }}
              >
                <h4
                  className="font-bold text-xl mb-3"
                  style={{ color: "var(--color-blue)" }}
                >
                  {model.title}
                </h4>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-muted-foreground)", lineHeight: "var(--leading-relaxed)" }}
                >
                  {model.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 btn-blue text-white px-8 py-4 rounded-md font-bold"
            >
              Schedule a Consultation
              <Icon icon="lucide:arrow-right" width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
