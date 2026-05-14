import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const saasModules = [
  "Claims",
  "Employee Data Management",
  "Employee Relations",
  "Employee Self Service (ESS)",
  "Leave",
  "Payroll",
  "Performance & Appraisal",
  "Promotion",
  "Recruitment & Onboarding",
  "Staff Loans",
  "Training & Development",
  "Transfers",
];

const platformFeatures = [
  { icon: "lucide:git-merge", label: "Approvals" },
  { icon: "lucide:bar-chart-2", label: "Reports & Analytics" },
  { icon: "lucide:settings", label: "System Configuration" },
  { icon: "lucide:users", label: "User management" },
];

const saasBenefits = [
  "BISTA SaaS gives you easy access to a broad range of software relevant to your organization.",
  "BISTA SaaS allows you to trade capital expenses (such as data centers, cost of software and maintenance, operating systems, databases and physical servers) for variable expenses, and only pay for services.",
  "With BISTA SaaS, you can work from any geographic regions provided there is internet.",
];

export function ServicesSaas() {
  return (
    <section
      className="py-24 px-10"
      style={{ backgroundColor: "var(--color-secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero Image */}
        <div className="mb-12 w-full overflow-hidden rounded-xl">
          <Image
            src="/images/hero/saas-hero.jpg"
            alt="BISTA Software as a Service cloud platform"
            width={1200}
            height={400}
            className="w-full object-cover rounded-xl"
            style={{ maxHeight: "380px" }}
          />
        </div>

        {/* Header */}
        <div className="mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase mb-6 border"
            style={{
              backgroundColor:
                "color-mix(in oklab, var(--color-blue) 10%, transparent)",
              color: "var(--color-blue)",
              borderColor:
                "color-mix(in oklab, var(--color-blue) 20%, transparent)",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            <Icon icon="lucide:cloud" width={14} height={14} />
            Cloud Hosted
          </div>

          <h3
            className="font-bold mb-6"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "clamp(1.5rem, 3vw, 1.75rem)",
              color: "var(--color-blue)",
            }}
          >
            BISTA Software as a Service (SaaS)
          </h3>

          <p
            className="text-base mb-4"
            style={{
              color: "var(--color-muted-foreground)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            BISTA Software as a Service (SaaS) is the on-demand delivery
            software resources over the Internet with flexible payment plan.
            Instead of buying, owning, and maintaining software and physical
            data centers and servers, you can access these various software
            systems as a service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            {/* Our Modules */}
            <h4
              className="font-bold text-lg mb-4"
              style={{ color: "var(--color-foreground)" }}
            >
              Our Modules
            </h4>
            <ul className="space-y-2 mb-8">
              {saasModules.map((module) => (
                <li
                  key={module}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "var(--color-muted-foreground)" }}
                >
                  <Icon
                    icon="lucide:check"
                    width={16}
                    height={16}
                    style={{ color: "var(--color-red)", flexShrink: 0 }}
                  />
                  {module}
                </li>
              ))}
            </ul>

            {/* Included with every module */}
            <p
              className="text-sm mb-3"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              Any of the above options comes with the following:
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {platformFeatures.map((feat) => (
                <span
                  key={feat.label}
                  className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full border"
                  style={{
                    color: "var(--color-foreground)",
                    borderColor: "var(--color-border)",
                    backgroundColor: "white",
                  }}
                >
                  <Icon
                    icon={feat.icon}
                    width={14}
                    height={14}
                    style={{ color: "var(--color-primary)" }}
                  />
                  {feat.label}
                </span>
              ))}
            </div>

            {/* Eligibility */}
            <h4
              className="font-bold text-lg mb-3"
              style={{ color: "var(--color-foreground)" }}
            >
              Who is eligible to sign on to BISTA SaaS?
            </h4>
            <p
              className="text-sm mb-8"
              style={{
                color: "var(--color-muted-foreground)",
                lineHeight: "var(--leading-relaxed)",
              }}
            >
              Organizations of every type, size, and industry can sign on to
              BISTA SaaS.
            </p>
          </div>

          {/* Right column — Benefits + CTA */}
          <div>
            <h4
              className="font-bold text-lg mb-4"
              style={{ color: "var(--color-foreground)" }}
            >
              Benefits of BISTA SaaS
            </h4>
            <ul className="space-y-4 mb-10">
              {saasBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "var(--color-muted-foreground)" }}
                >
                  <Icon
                    icon="lucide:check-circle"
                    width={18}
                    height={18}
                    style={{
                      color: "var(--color-primary)",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  />
                  <span style={{ lineHeight: "var(--leading-relaxed)" }}>
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <div
              className="rounded-xl p-8 border"
              style={{
                backgroundColor: "white",
                borderColor: "var(--color-border)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              }}
            >
              <h5
                className="font-bold text-lg mb-3"
                style={{ color: "var(--color-blue)" }}
              >
                Get Started with BISTA SaaS
              </h5>
              <p
                className="text-sm mb-6"
                style={{
                  color: "var(--color-muted-foreground)",
                  lineHeight: "var(--leading-relaxed)",
                }}
              >
                Select your required modules, tell us about your business, and
                we will set you up with a tailored SaaS plan.
              </p>
              <Link
                href="/saas-signup"
                className="btn-nav-contact inline-flex items-center gap-2 text-white px-6 py-3 rounded-md font-medium text-sm"
              >
                Sign Up for BISTA SaaS
                <Icon icon="lucide:arrow-right" width={16} height={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
