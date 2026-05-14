import Link from "next/link";
import { Icon } from "@iconify/react";
import { AnimatedWrapper } from "@/components/shared/animated-wrapper";

const services = [
  {
    title: "Custom Software Development",
    desc: "Scalable, secure applications built from the ground up for specific enterprise needs and workflows.",
  },
  {
    title: "Enterprise Database Management",
    desc: "Secure, efficient, and highly available enterprise data handling and migration services.",
  },
  {
    title: "IT Consultancy & Strategy",
    desc: "Strategic guidance for digital transformation, infrastructure planning, and tech adoption.",
  },
  {
    title: "CMM Process Control",
    desc: "Certified quality assurance methodologies to ensure consistent, high-quality deliverables.",
  },
  {
    title: "Cloud Infrastructure",
    desc: "Robust cloud hosting, deployment, and management for modern, resilient applications.",
  },
  {
    title: "Cybersecurity Solutions",
    desc: "Comprehensive security audits, implementation, and ongoing protection for enterprise assets.",
  },
];

export function ServicesGrid() {
  return (
    <section
      className="py-24 px-10 border-y relative"
      style={{
        backgroundColor: "var(--color-secondary)",
        borderColor: "var(--color-border)",
      }}
    >
      {/* Top gradient accent line */}
      <div
        className="absolute top-0 left-0 w-full h-1 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-primary), var(--color-blue), var(--color-red))",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-4"
              style={{
                backgroundColor:
                  "color-mix(in oklab, var(--color-primary) 10%, transparent)",
                color: "var(--color-primary)",
                letterSpacing: "var(--tracking-widest)",
              }}
            >
              Our Services
            </div>
            <h3
              className="font-bold mb-4"
              style={{
                fontFamily: "var(--font-headings)",
                fontSize: "var(--text-4xl)",
                color: "var(--color-blue)",
              }}
            >
              Solutions Tailored for Enterprise Growth
            </h3>
            <p
              className="text-lg"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              Comprehensive technology services designed to scale your
              operations, secure your data, and drive innovation.
            </p>
          </div>

          {/* Pure CSS hover button */}
          <Link
            href="/services"
            className="btn-services-all border px-6 py-3 rounded-md font-medium shadow-sm whitespace-nowrap"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-foreground)",
            }}
          >
            View All Services
          </Link>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedWrapper key={service.title} delay={Math.min(index * 0.05, 0.25)} className="h-full">
            <div
              className="bg-white rounded-xl p-8 border flex flex-col h-full group card-hover"
              style={{
                borderColor:
                  "color-mix(in oklab, var(--color-border) 50%, transparent)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              {/* Title — CSS hover via .group + .service-title */}
              <h4 className="service-title font-bold text-xl mb-3">
                {service.title}
              </h4>

              {/* Description */}
              <p
                className="flex-grow"
                style={{
                  color: "var(--color-muted-foreground)",
                  lineHeight: "var(--leading-relaxed)",
                }}
              >
                {service.desc}
              </p>

              {/* Learn More — gap animates via .service-learn-more */}
              <div
                className="mt-6 pt-6 border-t"
                style={{
                  borderColor:
                    "color-mix(in oklab, var(--color-border) 50%, transparent)",
                }}
              >
                <Link
                  href="/services"
                  className="service-learn-more text-sm font-bold flex items-center"
                  style={{ color: "var(--color-primary)" }}
                >
                  Learn more
                  <Icon icon="lucide:arrow-right" width={14} height={14} />
                </Link>
              </div>
            </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
