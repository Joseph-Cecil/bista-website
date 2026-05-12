import Link from "next/link";
import { Icon } from "@iconify/react";

const positions = [
  {
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    type: "Full-Time",
    location: "Accra, Ghana",
  },
  {
    title: "Database Administrator",
    department: "Engineering",
    type: "Full-Time",
    location: "Accra, Ghana",
  },
  {
    title: "IT Project Manager",
    department: "Operations",
    type: "Full-Time",
    location: "Accra, Ghana",
  },
  {
    title: "UX/UI Designer",
    department: "Product",
    type: "Full-Time",
    location: "Accra / Remote",
  },
  {
    title: "Sales Executive - Energizer Division",
    department: "Sales",
    type: "Full-Time",
    location: "Accra, Ghana",
  },
];

export function CareersPositions() {
  return (
    <section
      className="py-24 px-10 border-y"
      style={{
        backgroundColor: "var(--color-secondary)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-sm font-bold uppercase mb-3"
            style={{ color: "var(--color-red)", letterSpacing: "var(--tracking-widest)" }}
          >
            Open Roles
          </h2>
          <h3
            className="font-bold"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "var(--text-4xl)",
              color: "var(--color-blue)",
            }}
          >
            Current Openings
          </h3>
        </div>

        <div className="space-y-4">
          {positions.map((pos) => (
            <div
              key={pos.title}
              className="bg-white border rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 card-hover"
              style={{
                borderColor: "var(--color-border)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              <div>
                <h4 className="font-bold text-lg" style={{ color: "var(--color-foreground)" }}>
                  {pos.title}
                </h4>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <span
                    className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor:
                        "color-mix(in oklab, var(--color-primary) 10%, transparent)",
                      color: "var(--color-primary)",
                    }}
                  >
                    <Icon icon="lucide:building" width={12} height={12} />
                    {pos.department}
                  </span>
                  <span
                    className="inline-flex items-center gap-1 text-xs"
                    style={{ color: "var(--color-muted-foreground)" }}
                  >
                    <Icon icon="lucide:clock" width={12} height={12} />
                    {pos.type}
                  </span>
                  <span
                    className="inline-flex items-center gap-1 text-xs"
                    style={{ color: "var(--color-muted-foreground)" }}
                  >
                    <Icon icon="lucide:map-pin" width={12} height={12} />
                    {pos.location}
                  </span>
                </div>
              </div>
              <Link
                href="/contact"
                className="btn-blue shrink-0 text-white px-5 py-2.5 rounded-md font-medium text-sm text-center"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>

        {/* General application note */}
        <div
          className="mt-12 text-center p-8 rounded-xl border"
          style={{
            backgroundColor: "white",
            borderColor: "var(--color-border)",
          }}
        >
          <p
            className="font-medium mb-2"
            style={{ color: "var(--color-foreground)" }}
          >
            Don&apos;t see a role that fits?
          </p>
          <p className="text-sm mb-4" style={{ color: "var(--color-muted-foreground)" }}>
            We are always looking for talented people. Send us your CV and we
            will keep you in mind for future openings.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 font-medium text-sm hover:underline"
            style={{ color: "var(--color-primary)" }}
          >
            Send General Application
            <Icon icon="lucide:arrow-right" width={14} height={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
