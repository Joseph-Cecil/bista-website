import Image from "next/image";
import { Icon } from "@iconify/react";

const hrFeatures = [
  {
    icon: "lucide:briefcase",
    iconBg: "color-mix(in oklab, var(--color-blue) 10%, transparent)",
    iconColor: "var(--color-blue)",
    title: "Core HR Services",
    desc: "Workforce planning, performance and competency management, learning & development, recruitment, onboarding, organization visualization, and workforce analytics.",
  },
  {
    icon: "lucide:credit-card",
    iconBg: "color-mix(in oklab, var(--color-primary) 10%, transparent)",
    iconColor: "var(--color-primary)",
    title: "Payroll & Employee Services",
    desc: "Comprehensive payroll management, live payment tracking, detailed reporting, and seamless HR/payroll integration.",
  },
  {
    icon: "lucide:file-text",
    iconBg: "color-mix(in oklab, var(--color-red) 10%, transparent)",
    iconColor: "var(--color-red)",
    title: "Claims & Expense Management",
    desc: "Streamlined expense claims management, timesheet submissions, and multi-tier approval workflows.",
  },
];

export function ServicesHrms() {
  return (
    <section
      className="py-24 px-10 border-b relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-background)",
        borderColor: "var(--color-border)",
      }}
    >
      {/* Background blob */}
      <div
        className="absolute pointer-events-none -z-10 rounded-full"
        style={{
          left: "-200px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "600px",
          height: "600px",
          backgroundColor:
            "color-mix(in oklab, var(--color-red) 5%, transparent)",
          filter: "blur(64px)",
        }}
      />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left — Text */}
        <div className="flex-1">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase mb-6"
            style={{
              backgroundColor:
                "color-mix(in oklab, var(--color-red) 10%, transparent)",
              color: "var(--color-red)",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            <Icon icon="lucide:users" width={14} height={14} />
            BISTA HRMS
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
            Human Resource
            <br />
            Management Solutions
          </h3>

          <p
            className="text-lg mb-10"
            style={{
              color: "var(--color-muted-foreground)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            Empower your HR department with automated workflows, real-time
            analytics, and seamless employee service management.
          </p>

          {/* Feature rows */}
          <div className="space-y-8">
            {hrFeatures.map((feat) => (
              <div key={feat.title} className="flex gap-4">
                <div
                  className="size-10 rounded-full flex items-center justify-center shrink-0 mt-1"
                  style={{
                    backgroundColor: feat.iconBg,
                    color: feat.iconColor,
                  }}
                >
                  <Icon icon={feat.icon} width={20} height={20} />
                </div>
                <div>
                  <h4
                    className="font-bold text-lg mb-2"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {feat.title}
                  </h4>
                  <p
                    className="text-sm"
                    style={{
                      color: "var(--color-muted-foreground)",
                      lineHeight: "var(--leading-relaxed)",
                    }}
                  >
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image */}
        <div className="flex-1 w-full relative">
          <div
            className="absolute inset-0 rounded-2xl -z-10"
            style={{
              backgroundImage:
                "linear-gradient(to top right, var(--color-blue), var(--color-primary))",
              transform: "rotate(3deg) scale(1.05)",
              opacity: 0.20,
            }}
          />
          <Image
            src="https://storage.googleapis.com/banani-generated-images/generated-images/f69096f2-ad4d-4aec-a239-b94f6f0b3a87.jpg"
            alt="BISTA HRMS dashboard interface"
            width={500}
            height={500}
            className="rounded-2xl border object-cover mx-auto bg-white p-2"
            style={{
              maxWidth: "500px",
              width: "100%",
              aspectRatio: "1/1",
              borderColor:
                "color-mix(in oklab, var(--color-border) 50%, transparent)",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
            }}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
