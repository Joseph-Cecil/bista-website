import type { Metadata } from "next";
import { AboutTeam } from "@/components/about/about-team";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Our Team | Meet the BISTA Leadership",
  description:
    "Meet the experienced leadership team driving BISTA Solutions forward.",
};

export default function TeamPage() {
  return (
    <main>
      <header className="py-16 px-10" style={{ backgroundColor: "var(--color-blue)" }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1
            className="font-bold mb-4"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Our Leadership Team
          </h1>
          <p style={{ color: "rgba(255,255,255,0.80)" }}>
            The experienced professionals driving BISTA Solutions forward.
          </p>
        </div>
      </header>
      <AboutTeam />
      <CtaBanner />
    </main>
  );
}
