import Link from "next/link";

export function CtaBanner() {
  return (
    <section
      className="py-20 px-10 text-white text-center"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-bold mb-6"
          style={{
            fontFamily: "var(--font-headings)",
            fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
          }}
        >
          Ready to transform your IT infrastructure?
        </h2>
        <p
          className="text-lg mb-10"
          style={{ color: "rgba(255,255,255,0.90)" }}
        >
          Contact our team of experts today to discuss how BISTA Solutions can
          help your organization achieve its technological goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-md font-bold text-lg transition-colors"
            style={{
              backgroundColor: "white",
              color: "var(--color-primary)",
              boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
            }}
          >
            Schedule a Consultation
          </Link>
          <Link
            href="/support"
            className="btn-outline-white border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
