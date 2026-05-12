import Link from "next/link";
import { Icon } from "@iconify/react";

export function ProductsCta() {
  return (
    <section
      className="py-20 px-10 text-white text-center"
      style={{ backgroundColor: "var(--color-foreground)" }}
    >
      <div className="max-w-4xl mx-auto">
        <Icon
          icon="lucide:battery-charging"
          width={48}
          height={48}
          style={{ color: "var(--color-red)", margin: "0 auto 24px" }}
        />
        <h2
          className="font-bold mb-6"
          style={{
            fontFamily: "var(--font-headings)",
            fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
          }}
        >
          Interested in stocking Energizer products?
        </h2>
        <p
          className="text-lg mb-10"
          style={{ color: "rgba(255,255,255,0.70)" }}
        >
          Whether you are a retailer, distributor, or corporate buyer, we offer
          competitive wholesale pricing and nationwide logistics support.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="btn-energizer text-white px-8 py-4 rounded-md font-bold text-lg"
            style={{ boxShadow: "0 10px 15px -3px rgba(0,0,0,0.2)" }}
          >
            Become a Distributor
          </Link>
          <Link
            href="/paaopaa"
            className="btn-outline-white border-2 border-white/30 text-white px-8 py-4 rounded-md font-bold text-lg"
          >
            Shop on Paaopaa.com
          </Link>
        </div>
      </div>
    </section>
  );
}
