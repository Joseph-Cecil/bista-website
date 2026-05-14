"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const servicePages = [
  { label: "ERP Modules", href: "/services/erp" },
  { label: "HRMS", href: "/services/hrms" },
  { label: "SaaS", href: "/services/saas" },
  { label: "Software Development", href: "/services/software-development" },
  { label: "Database Management", href: "/services/database-management" },
  { label: "IT Consultancy", href: "/services/it-consultancy" },
];

export function ServicesStickyNav({ current }: { current: string }) {
  const pathname = usePathname();

  return (
    <div
      className="sticky top-[73px] z-40 border-b overflow-x-auto"
      style={{ backgroundColor: "white", borderColor: "var(--color-border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-1 min-w-max">
          <Link
            href="/services"
            className="px-4 py-3.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors"
            style={{
              borderColor: pathname === "/services" ? "var(--color-primary)" : "transparent",
              color: pathname === "/services" ? "var(--color-primary)" : "var(--color-muted-foreground)",
            }}
          >
            All Services
          </Link>
          {servicePages.map((page) => {
            const isActive = pathname === page.href || current === page.label;
            return (
              <Link
                key={page.href}
                href={page.href}
                className="px-4 py-3.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors"
                style={{
                  borderColor: isActive ? "var(--color-primary)" : "transparent",
                  color: isActive ? "var(--color-primary)" : "var(--color-muted-foreground)",
                }}
              >
                {page.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
