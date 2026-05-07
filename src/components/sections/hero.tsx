import Link from "next/link";
import { Icon } from "@iconify/react";

const partnerLogos = ["LOGO", "LOGO", "LOGO", "LOGO", "LOGO"];

export function HeroSection() {
  return (
    <header
      className="relative flex flex-col justify-center px-10 py-32 text-center overflow-hidden"
      style={{
        minHeight: "650px",
        backgroundImage:
          "url(https://storage.googleapis.com/banani-generated-images/generated-images/11407180-8580-4f28-8c64-5b32dce73be7.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor:
            "color-mix(in oklab, var(--color-blue) 85%, transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 border text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-lg"
          style={{
            backgroundColor: "rgba(255,255,255,0.10)",
            backdropFilter: "blur(12px)",
            borderColor: "rgba(255,255,255,0.20)",
          }}
        >
          <span
            className="size-2 rounded-full"
            style={{
              backgroundColor: "var(--color-red)",
              animation:
                "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
            }}
          />
          Pioneering IT Excellence in Ghana
        </div>

        {/* Heading */}
        <h1
          className="font-bold text-white mb-6"
          style={{
            fontFamily: "var(--font-headings)",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: "var(--leading-tight)",
          }}
        >
          African Technological
          <br />
          <span
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--color-primary), oklch(70.7% 0.165 254.624))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Leadership
          </span>{" "}
          &amp; Innovation
        </h1>

        {/* Subheading */}
        <p
          className="text-lg mb-10 font-light max-w-2xl"
          style={{
            color: "rgba(255,255,255,0.90)",
            lineHeight: "var(--leading-relaxed)",
          }}
        >
          Translating decades of expertise into cutting-edge software
          development and database management for government and corporate
          institutions.
        </p>

        {/* CTA Buttons — pure CSS hover via utility classes */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/services"
            className="btn-nav-contact px-8 py-4 rounded-md font-medium text-base shadow-lg w-full sm:w-auto text-center text-white"
          >
            Explore Our Solutions
          </Link>
          <Link
            href="/contact"
            className="hero-ghost-btn border border-white/20 text-white px-8 py-4 rounded-md font-medium text-base flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Partner With Us
            <Icon icon="lucide:arrow-right" width={16} height={16} />
          </Link>
        </div>
      </div>

      {/* Partner Logos Strip */}
      <div
        className="absolute bottom-0 left-0 right-0 py-4 border-t"
        style={{
          backgroundColor: "rgba(0,0,0,0.20)",
          backdropFilter: "blur(8px)",
          borderColor: "rgba(255,255,255,0.10)",
        }}
      >
        <div
          className="max-w-6xl mx-auto px-10 flex items-center justify-center gap-12"
          style={{ opacity: 0.7, filter: "grayscale(100%)" }}
        >
          {partnerLogos.map((logo, i) => (
            <span
              key={i}
              className="text-white font-bold text-lg"
              style={{ letterSpacing: "var(--tracking-wider)" }}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
