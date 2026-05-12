import { Icon } from "@iconify/react";

const features = [
  {
    icon: "lucide:battery-charging",
    title: "Ultimate Battery Life",
    desc: "Energizer phones are built around the brand promise — batteries that last for days, not hours. Perfect for professionals in the field.",
  },
  {
    icon: "lucide:shield",
    title: "Rugged & Durable",
    desc: "Designed for tough environments. Drop-tested, water-resistant, and built with reinforced housings to survive daily wear and tear.",
  },
  {
    icon: "lucide:wifi",
    title: "4G Connectivity",
    desc: "Stay connected with fast 4G LTE support across all models. Reliable data speeds for communication and mobile work.",
  },
  {
    icon: "lucide:dollar-sign",
    title: "Affordable Quality",
    desc: "Enterprise-grade durability at consumer-friendly prices. No compromise on quality, no premium price tag.",
  },
];

const stats = [
  { label: "Battery Capacity", value: "Up to 10,000 mAh" },
  { label: "Models Available", value: "12+" },
  { label: "Warranty Period", value: "12 Months" },
  { label: "Distribution Points", value: "Nationwide" },
];

export function ProductsFeatures() {
  return (
    <section className="py-24 px-10" style={{ backgroundColor: "var(--color-background)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Stats strip */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 p-8 rounded-2xl border"
          style={{
            backgroundColor: "var(--color-secondary)",
            borderColor: "var(--color-border)",
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-bold text-2xl mb-1"
                style={{ color: "var(--color-red)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs uppercase font-medium"
                style={{
                  color: "var(--color-muted-foreground)",
                  letterSpacing: "var(--tracking-wider)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className="text-sm font-bold uppercase mb-3"
            style={{
              color: "var(--color-red)",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            Why Energizer
          </h2>
          <h3
            className="font-bold"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "var(--text-4xl)",
              color: "var(--color-blue)",
            }}
          >
            Built Different. Built to Last.
          </h3>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feat) => (
            <div
              key={feat.title}
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
                    "color-mix(in oklab, var(--color-red) 10%, transparent)",
                  color: "var(--color-red)",
                }}
              >
                <Icon icon={feat.icon} width={24} height={24} />
              </div>
              <h4
                className="font-bold text-xl mb-3"
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
          ))}
        </div>
      </div>
    </section>
  );
}
