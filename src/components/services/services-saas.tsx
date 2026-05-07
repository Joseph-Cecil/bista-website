import { Icon } from "@iconify/react";

const saasModules = [
  "Claims Management",
  "Employee Data",
  "Employee Relations",
  "Self Service (ESS)",
  "Leave Management",
  "Payroll Processing",
  "Performance Appraisals",
  "Promotion Management",
  "Recruitment & Onboarding",
  "Staff Loans",
  "Training & Dev",
  "Transfer Management",
];

const platformFeatures = [
  { icon: "lucide:git-merge", label: "Approval workflows" },
  { icon: "lucide:bar-chart-2", label: "Reports & analytics" },
  { icon: "lucide:settings", label: "System configuration" },
  { icon: "lucide:users", label: "User management" },
];

export function ServicesSaas() {
  return (
    <section
      className="py-24 px-10 text-white text-center"
      style={{ backgroundColor: "var(--color-blue)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase mb-6 border"
          style={{
            backgroundColor: "rgba(255,255,255,0.10)",
            borderColor: "rgba(255,255,255,0.20)",
            letterSpacing: "var(--tracking-widest)",
          }}
        >
          <Icon
            icon="lucide:cloud"
            width={14}
            height={14}
            style={{ color: "var(--color-primary)" }}
          />
          Cloud Hosted
        </div>

        {/* Heading */}
        <h3
          className="font-bold mb-8"
          style={{
            fontFamily: "var(--font-headings)",
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
          }}
        >
          Software as a Service (SaaS)
        </h3>

        <p
          className="max-w-3xl mx-auto text-lg mb-16"
          style={{ color: "rgba(255,255,255,0.80)" }}
        >
          Flexible, scalable, and secure. Our cloud-hosted modules allow
          organizations of all sizes to access enterprise-grade functionality
          without the heavy infrastructure overhead.
        </p>

        {/* Modules Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 text-left">
          {saasModules.map((module) => (
            <div
              key={module}
              className="flex items-center gap-3 p-4 rounded-lg border transition-colors saas-module-card"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.10)",
              }}
            >
              <Icon
                icon="lucide:check-circle"
                width={16}
                height={16}
                style={{ color: "var(--color-primary)", flexShrink: 0 }}
              />
              <span className="text-sm font-medium">{module}</span>
            </div>
          ))}
        </div>

        {/* Platform Features Card */}
        <div
          className="rounded-xl p-8 max-w-4xl mx-auto"
          style={{
            backgroundColor: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.10)",
            backdropFilter: "blur(12px)",
          }}
        >
          <h4
            className="font-bold uppercase text-sm mb-6"
            style={{
              color: "var(--color-red)",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            Included Platform Features
          </h4>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
            {platformFeatures.map((feat) => (
              <span key={feat.label} className="flex items-center gap-2">
                <Icon
                  icon={feat.icon}
                  width={18}
                  height={18}
                  style={{ color: "rgba(255,255,255,0.60)" }}
                />
                {feat.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
