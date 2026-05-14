export function AboutHero() {
  return (
    <header
      className="text-white py-24 px-10 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-blue)" }}
    >
      {/* Background blob */}
      <div
        className="absolute top-0 right-0 rounded-full pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          backgroundColor:
            "color-mix(in oklab, var(--color-primary) 20%, transparent)",
          transform: "translate(33%, -50%)",
          filter: "blur(64px)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div
          className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-6"
          style={{
            backgroundColor: "rgba(255,255,255,0.10)",
            color: "white",
            letterSpacing: "var(--tracking-widest)",
          }}
        >
          Our Story
        </div>

        {/* Heading */}
        <h1
          className="font-bold mb-6"
          style={{
            fontFamily: "var(--font-headings)",
            fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
            lineHeight: "var(--leading-tight)",
          }}
        >
          Pioneering IT Excellence Since 2009
        </h1>

        {/* Subheading */}
        <p
          className="text-xl font-light"
          style={{
            color: "rgba(255,255,255,0.80)",
            lineHeight: "var(--leading-relaxed)",
          }}
        >
          Translating decades of expertise into cutting-edge technology
          solutions that power the future of African business.
        </p>
      </div>
    </header>
  );
}
