"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

const subServices = [
  {
    href: "/services/software-development",
    icon: "lucide:code",
    title: "Custom Software Development",
    desc: "Bespoke enterprise applications, mobile apps, and system integrations.",
    color: "var(--color-primary)",
  },
  {
    href: "/services/database-management",
    icon: "lucide:database",
    title: "Database Management",
    desc: "Design, migration, performance tuning, and ongoing administration.",
    color: "var(--color-blue)",
  },
  {
    href: "/services/it-consultancy",
    icon: "lucide:lightbulb",
    title: "IT Consultancy & Strategy",
    desc: "Digital transformation, technology audits, and enterprise architecture.",
    color: "var(--color-red)",
  },
];

export function ServicesSubNav() {
  return (
    <section
      className="py-16 px-10 border-b"
      style={{ backgroundColor: "white", borderColor: "var(--color-border)" }}
    >
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs font-bold uppercase mb-6 text-center"
          style={{
            color: "var(--color-muted-foreground)",
            letterSpacing: "var(--tracking-widest)",
          }}
        >
          Explore our core service areas in depth
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {subServices.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="flex items-start gap-4 p-5 rounded-xl border transition-all group"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-secondary)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "color-mix(in oklab, var(--color-primary) 30%, transparent)";
                el.style.boxShadow = "0 4px 6px -1px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--color-border)";
                el.style.boxShadow = "none";
              }}
            >
              <div
                className="size-10 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: `color-mix(in oklab, ${s.color} 12%, transparent)`,
                  color: s.color,
                }}
              >
                <Icon icon={s.icon} width={20} height={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h4
                  className="font-bold text-sm mb-1 flex items-center gap-1"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {s.title}
                  <Icon
                    icon="lucide:arrow-right"
                    width={12}
                    height={12}
                    style={{ color: "var(--color-primary)", flexShrink: 0 }}
                  />
                </h4>
                <p className="text-xs" style={{ color: "var(--color-muted-foreground)" }}>
                  {s.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
