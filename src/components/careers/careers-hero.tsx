import { Icon } from "@iconify/react";

export function CareersHero() {
  return (
    <header
      className="text-white py-24 px-10 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-blue)" }}
    >
      <div
        className="absolute bottom-0 left-0 rounded-full pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          backgroundColor:
            "color-mix(in oklab, var(--color-primary) 15%, transparent)",
          filter: "blur(80px)",
          transform: "translate(-30%, 40%)",
        }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase mb-6"
          style={{
            backgroundColor: "rgba(255,255,255,0.10)",
            letterSpacing: "var(--tracking-widest)",
          }}
        >
          <Icon icon="lucide:briefcase" width={14} height={14} style={{ color: "var(--color-red)" }} />
          Join Our Team
        </div>
        <h1
          className="font-bold mb-6"
          style={{
            fontFamily: "var(--font-headings)",
            fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
            lineHeight: "var(--leading-tight)",
          }}
        >
          Build the Future of African Technology
        </h1>
        <p
          className="text-xl font-light max-w-2xl mx-auto"
          style={{
            color: "rgba(255,255,255,0.80)",
            lineHeight: "var(--leading-relaxed)",
          }}
        >
          Join a team of innovators, engineers, and business leaders who are
          transforming how African enterprises use technology.
        </p>
      </div>
    </header>
  );
}
