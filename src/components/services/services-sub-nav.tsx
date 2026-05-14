"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

const subServices = [
  {
    href: "/services/software-development",
    title: "Custom Software Development",
    desc: "Bespoke enterprise applications, mobile apps, and system integrations.",
  },
  {
    href: "/services/database-management",
    title: "Database Management",
    desc: "Design, migration, performance tuning, and ongoing administration.",
  },
  {
    href: "/services/it-consultancy",
    title: "IT Consultancy & Strategy",
    desc: "Digital transformation, technology audits, and enterprise architecture.",
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
