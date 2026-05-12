import { Icon } from "@iconify/react";

const perks = [
  { icon: "lucide:heart", title: "Health & Wellness", desc: "Comprehensive health insurance for you and your family." },
  { icon: "lucide:book-open", title: "Learning Budget", desc: "Annual training allowance for courses, conferences, and certifications." },
  { icon: "lucide:home", title: "Flexible Work", desc: "Hybrid work arrangements that respect your time and productivity." },
  { icon: "lucide:trending-up", title: "Career Growth", desc: "Clear progression paths, mentorship, and leadership development programs." },
  { icon: "lucide:coffee", title: "Great Culture", desc: "Collaborative environment, team outings, and monthly knowledge-sharing sessions." },
  { icon: "lucide:gift", title: "Competitive Pay", desc: "Market-rate salaries, performance bonuses, and annual reviews." },
];

export function CareersPerks() {
  return (
    <section className="py-24 px-10" style={{ backgroundColor: "var(--color-background)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-sm font-bold uppercase mb-3"
            style={{ color: "var(--color-red)", letterSpacing: "var(--tracking-widest)" }}
          >
            Why BISTA
          </h2>
          <h3
            className="font-bold"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "var(--text-4xl)",
              color: "var(--color-blue)",
            }}
          >
            Benefits &amp; Culture
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="border rounded-xl p-8 bg-white card-hover"
              style={{
                borderColor: "var(--color-border)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              <div
                className="size-12 rounded-lg flex items-center justify-center mb-5"
                style={{
                  backgroundColor:
                    "color-mix(in oklab, var(--color-primary) 10%, transparent)",
                  color: "var(--color-primary)",
                }}
              >
                <Icon icon={perk.icon} width={24} height={24} />
              </div>
              <h4 className="font-bold text-lg mb-2" style={{ color: "var(--color-foreground)" }}>
                {perk.title}
              </h4>
              <p className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>
                {perk.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
