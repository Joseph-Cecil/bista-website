import { Icon } from "@iconify/react";

export function ContactHero() {
  return (
    <header
      className="text-white py-24 px-10 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-blue)" }}
    >
      <div
        className="absolute top-0 right-0 rounded-full pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          backgroundColor:
            "color-mix(in oklab, var(--color-primary) 20%, transparent)",
          transform: "translate(30%, -50%)",
          filter: "blur(64px)",
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
          <Icon icon="lucide:mail" width={14} height={14} style={{ color: "var(--color-red)" }} />
          Get In Touch
        </div>
        <h1
          className="font-bold mb-6"
          style={{
            fontFamily: "var(--font-headings)",
            fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
            lineHeight: "var(--leading-tight)",
          }}
        >
          Let&apos;s Build Something Great Together
        </h1>
        <p
          className="text-xl font-light"
          style={{
            color: "rgba(255,255,255,0.80)",
            lineHeight: "var(--leading-relaxed)",
          }}
        >
          Whether you need enterprise software, IT consulting, or want to
          explore a partnership, our team is ready to help.
        </p>
      </div>
    </header>
  );
}
