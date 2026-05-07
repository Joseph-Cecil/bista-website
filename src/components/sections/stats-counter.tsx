const stats = [
  {
    value: "2009",
    label: "Year Established",
    desc: "Decades of proven industry experience.",
  },
  {
    value: "CMM",
    label: "Quality Assured",
    desc: "Adhering to strict international standards.",
  },
  {
    value: "15+",
    label: "Years as Partner",
    desc: "Official Energizer representative.",
  },
];

export function StatsCounter() {
  return (
    <section
      className="bg-white py-16 border-b relative z-20"
      style={{
        borderColor: "var(--color-border)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto px-10 flex flex-wrap justify-between gap-10 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center flex-1">
            <span
              className="font-bold mb-2"
              style={{
                fontSize: "var(--text-5xl)",
                color: "var(--color-primary)",
              }}
            >
              {stat.value}
            </span>
            <span
              className="font-medium text-sm uppercase"
              style={{
                color: "var(--color-foreground)",
                letterSpacing: "var(--tracking-wider)",
              }}
            >
              {stat.label}
            </span>
            <p
              className="text-xs mt-2"
              style={{
                color: "var(--color-muted-foreground)",
                maxWidth: "200px",
              }}
            >
              {stat.desc}
            </p>
            {i < stats.length - 1 && (
              <div
                className="hidden md:block absolute"
                style={{
                  width: "1px",
                  height: "100%",
                  backgroundColor: "var(--color-border)",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
