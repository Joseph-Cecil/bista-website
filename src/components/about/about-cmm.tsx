import { Icon } from "@iconify/react";

const cmmPoints = [
  "Defect reduction in custom software",
  "Predictable project timelines and budgets",
  "Enhanced data security compliance",
];

const stats = [
  { label: "Project Delivery Score", value: "99.8%" },
  { label: "Client Retention Rate", value: "96%" },
  { label: "Years Adhering to CMM", value: "10+" },
];

export function AboutCmm() {
  return (
    <section
      className="py-24 px-10 text-white overflow-hidden relative"
      style={{ backgroundColor: "var(--color-blue)" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.05,
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left — Text */}
        <div>
          <h2
            className="text-sm font-bold uppercase mb-3"
            style={{
              color: "var(--color-red)",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            Quality Assurance
          </h2>
          <h3
            className="font-bold mb-6"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "var(--text-4xl)",
            }}
          >
            The CMM Benchmark
          </h3>
          <p
            className="text-lg mb-8"
            style={{
              color: "rgba(255,255,255,0.80)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            Capability Maturity Model (CMM) is more than just an acronym to us;
            it is the framework that guarantees our clients receive world-class
            outcomes. By adhering to these rigorous international standards, we
            ensure process predictability, strict quality control, and continuous
            operational improvement.
          </p>

          {/* Checklist */}
          <ul className="space-y-4 mb-8">
            {cmmPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <div
                  className="rounded-full p-1 mt-1 shrink-0 text-white"
                  style={{ backgroundColor: "var(--color-red)" }}
                >
                  <Icon icon="lucide:check" width={14} height={14} />
                </div>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Stats Card */}
        <div
          className="rounded-2xl p-10"
          style={{
            backgroundColor: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.10)",
            backdropFilter: "blur(12px)",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex justify-between items-center"
              style={{
                paddingBottom: i < stats.length - 1 ? "32px" : "0",
                marginBottom: i < stats.length - 1 ? "32px" : "0",
                borderBottom:
                  i < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.10)"
                    : "none",
              }}
            >
              <div className="font-bold text-xl">{stat.label}</div>
              <div
                className="font-bold"
                style={{
                  fontFamily: "var(--font-headings)",
                  fontSize: "var(--text-3xl)",
                  color: "var(--color-red)",
                }}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
