const values = [
  {
    title: "Integrity",
    desc: "Honest, transparent, and ethical in all our dealings.",
  },
  {
    title: "Customer Focus",
    desc: "Your success is the true measure of our success.",
  },
  {
    title: "Accountability",
    desc: "Taking full responsibility for our actions and outcomes.",
  },
  {
    title: "Innovation",
    desc: "Constantly seeking better ways to solve complex problems.",
  },
];

export function ValuesSection() {
  return (
    <section
      className="py-24 px-10 text-white text-center relative overflow-hidden"
      style={{ backgroundColor: "var(--color-blue)" }}
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section label */}
        <h2
          className="text-sm font-bold uppercase mb-4 inline-flex items-center gap-2"
          style={{
            color: "var(--color-red)",
            letterSpacing: "var(--tracking-widest)",
          }}
        >
          <span
            className="w-8 h-px inline-block"
            style={{ backgroundColor: "var(--color-red)" }}
          />
          Vision &amp; Values
          <span
            className="w-8 h-px inline-block"
            style={{ backgroundColor: "var(--color-red)" }}
          />
        </h2>

        {/* Quote */}
        <h3
          className="font-bold mb-8 max-w-4xl mx-auto"
          style={{
            fontFamily: "var(--font-headings)",
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            lineHeight: "var(--leading-tight)",
          }}
        >
          &ldquo;To become the biggest household name in technology business
          in Africa.&rdquo;
        </h3>

        <p
          className="max-w-2xl mx-auto mb-20 text-lg"
          style={{ color: "rgba(255,255,255,0.70)" }}
        >
          Our actions and decisions are guided by a steadfast commitment to
          our core values, ensuring we deliver excellence in every interaction.
        </p>

        {/* Values Grid — pure CSS hover via .values-card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="values-card flex flex-col items-center p-8 rounded-2xl border"
              style={{ borderColor: "rgba(255,255,255,0.10)" }}
            >
              <h4 className="font-bold text-xl mb-3">{value.title}</h4>
              <p
                className="text-sm"
                style={{
                  color: "rgba(255,255,255,0.60)",
                  lineHeight: "var(--leading-relaxed)",
                }}
              >
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
