import { Icon } from "@iconify/react";

export function PaaopaaHero() {
  return (
    <header
      className="py-24 px-10 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-blue)" }}
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <span
            className="font-black text-white"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "clamp(3rem, 6vw, 4.5rem)",
              letterSpacing: "var(--tracking-tighter)",
            }}
          >
            paaopaa
            <span style={{ color: "var(--color-primary)" }}>.com</span>
          </span>
        </div>
        <h1
          className="font-bold text-white mb-6"
          style={{
            fontFamily: "var(--font-headings)",
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            lineHeight: "var(--leading-tight)",
          }}
        >
          Ghana&apos;s Premium Technology Marketplace
        </h1>
        <p
          className="text-lg font-light max-w-2xl mx-auto"
          style={{
            color: "rgba(255,255,255,0.80)",
            lineHeight: "var(--leading-relaxed)",
          }}
        >
          Authentic products. Secure payments. Nationwide delivery. Paaopaa.com
          is BISTA&apos;s consumer e-commerce platform, bringing verified
          technology products directly to your doorstep.
        </p>
      </div>
    </header>
  );
}
