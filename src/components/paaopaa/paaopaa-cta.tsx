import { Icon } from "@iconify/react";

export function PaaopaaCta() {
  return (
    <section
      className="py-20 px-10 text-white text-center"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="max-w-4xl mx-auto">
        <span
          className="font-black inline-block mb-6"
          style={{
            fontFamily: "var(--font-headings)",
            fontSize: "var(--text-4xl)",
            letterSpacing: "var(--tracking-tighter)",
          }}
        >
          paaopaa<span style={{ opacity: 0.7 }}>.com</span>
        </span>
        <h2
          className="font-bold mb-6"
          style={{
            fontFamily: "var(--font-headings)",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
          }}
        >
          Start Shopping Today
        </h2>
        <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.90)" }}>
          Browse our full catalog of phones, laptops, accessories, and more.
          Enjoy free delivery on orders above GHS 500.
        </p>
        <a
          href="https://paaopaa.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white px-8 py-4 rounded-md font-bold text-lg transition-opacity hover:opacity-90"
          style={{ color: "var(--color-primary)" }}
        >
          Visit Paaopaa.com
          <Icon icon="lucide:external-link" width={18} height={18} />
        </a>
      </div>
    </section>
  );
}
