import { Icon } from "@iconify/react";

export function ProductsHero() {
  return (
    <header
      className="text-white py-24 px-10 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-foreground)" }}
    >
      {/* Red glow */}
      <div
        className="absolute top-0 right-0 rounded-full pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          backgroundColor: "var(--color-red)",
          filter: "blur(120px)",
          opacity: 0.25,
          transform: "translate(30%, -40%)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase mb-6 border"
          style={{
            backgroundColor: "color-mix(in oklab, var(--color-red) 20%, transparent)",
            color: "var(--color-red)",
            borderColor: "color-mix(in oklab, var(--color-red) 30%, transparent)",
            letterSpacing: "var(--tracking-widest)",
          }}
        >
          <Icon icon="lucide:star" width={14} height={14} />
          Official Partnership
        </div>
        <h1
          className="font-bold mb-6"
          style={{
            fontFamily: "var(--font-headings)",
            fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
            lineHeight: "var(--leading-tight)",
          }}
        >
          Energizer Mobile Phones &amp; Accessories
        </h1>
        <p
          className="text-lg font-light max-w-2xl mx-auto"
          style={{
            color: "rgba(255,255,255,0.80)",
            lineHeight: "var(--leading-relaxed)",
          }}
        >
          As the official country representative since 2019, BISTA brings
          Energizer&apos;s industry-leading battery life and rugged durability to
          the Ghanaian market.
        </p>
      </div>
    </header>
  );
}
