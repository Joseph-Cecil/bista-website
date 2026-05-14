import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { AnimatedWrapper } from "@/components/shared/animated-wrapper";

const highlights = [
  {
    title: "Local Expertise",
    desc: "Deep understanding of regional challenges and operational opportunities.",
  },
  {
    title: "Global Standards",
    desc: "CMM-certified process control for guaranteed enterprise-grade quality.",
  },
];

export function AboutSection() {
  return (
    <section
      className="py-24 px-10 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Background blur blob */}
      <div
        className="absolute top-0 right-0 -z-10 rounded-full"
        style={{
          width: "800px",
          height: "800px",
          backgroundColor:
            "color-mix(in oklab, var(--color-secondary) 50%, transparent)",
          transform: "translate(33%, -50%)",
          filter: "blur(64px)",
        }}
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image Column */}
        <AnimatedWrapper delay={0}>
        <div className="relative">
          <div
            className="absolute rounded-2xl -z-10"
            style={{
              inset: "-16px",
              backgroundColor:
                "color-mix(in oklab, var(--color-primary) 10%, transparent)",
              transform: "rotate(-3deg)",
            }}
          />
          <Image
            src="/images/about/about-design-people.png"
            alt="BISTA Solutions team — our people and culture"
            width={645}
            height={603}
            className="rounded-xl w-full object-contain border bg-white p-4"
            style={{
              borderColor: "var(--color-border)",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
            }}
          />

          {/* CEO Quote Card */}
          <div
            className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl border max-w-xs"
            style={{
              borderColor: "var(--color-border)",
              boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
            }}
          >
            <div className="mb-2">
              <div className="font-bold text-sm">CEO Message</div>
              <div
                className="text-xs"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                Leadership Team
              </div>
            </div>
            <p
              className="text-sm italic font-medium"
              style={{ color: "var(--color-foreground)" }}
            >
              &ldquo;We build technology that builds Africa.&rdquo;
            </p>
          </div>
        </div>
        </AnimatedWrapper>

        {/* Text Column */}
        <AnimatedWrapper delay={0.1}>
        <div className="pl-0 md:pl-8">
          {/* Section label */}
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-4"
            style={{
              backgroundColor: "var(--color-secondary)",
              color: "var(--color-primary)",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            About BISTA
          </div>

          <h3
            className="font-bold mb-6"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "var(--text-4xl)",
              color: "var(--color-blue)",
              lineHeight: "var(--leading-tight)",
            }}
          >
            Customer success is{" "}
            <span style={{ color: "var(--color-primary)" }}>
              our success.
            </span>
          </h3>

          <p
            className="mb-8 text-lg"
            style={{
              color: "var(--color-muted-foreground)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            Since 2009, we have leveraged our deep understanding of Ghanaian
            culture and business practices to deliver unparalleled IT
            solutions. Our CMM (Capability Maturity Model) benchmark ensures
            that every project meets international standards while solving
            local challenges.
          </p>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="bg-white border p-5 rounded-lg card-hover"
                style={{
                  borderColor: "var(--color-border)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                }}
              >
                <h4
                  className="font-bold mb-2"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {h.title}
                </h4>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-muted-foreground)" }}
                >
                  {h.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div
            className="mt-8 pt-8 border-t flex items-center gap-6"
            style={{ borderColor: "var(--color-border)" }}
          >
            <Link
              href="/about"
              className="btn-blue px-6 py-3 rounded-md font-medium text-white"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
            >
              Read Our Full Story
            </Link>
            <Link
              href="/team"
              className="font-medium flex items-center gap-1 hover:underline"
              style={{ color: "var(--color-primary)" }}
            >
              Meet the Team
              <Icon icon="lucide:arrow-right" width={16} height={16} />
            </Link>
          </div>
        </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
