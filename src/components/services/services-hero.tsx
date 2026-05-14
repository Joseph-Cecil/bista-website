import Image from "next/image";
import { Icon } from "@iconify/react";

export function ServicesHero() {
  return (
    <header
      className="relative flex flex-col justify-center px-10 py-24 text-center text-white overflow-hidden"
      style={{
        minHeight: "400px",
        backgroundColor: "var(--color-blue)",
      }}
    >
      {/* Background texture image */}
      <Image
        src="/images/misc/services-1.jpg"
        alt=""
        fill
        className="object-cover"
        style={{ opacity: 0.20 }}
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, var(--color-blue), color-mix(in oklab, var(--color-blue) 90%, transparent), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase mb-6 border"
          style={{
            backgroundColor: "rgba(255,255,255,0.10)",
            backdropFilter: "blur(8px)",
            borderColor: "rgba(255,255,255,0.20)",
            letterSpacing: "var(--tracking-widest)",
          }}
        >
          <Icon
            icon="lucide:layers"
            width={14}
            height={14}
            style={{ color: "var(--color-red)" }}
          />
          Our Expertise
        </div>

        {/* Heading */}
        <h1
          className="font-bold text-white mb-6"
          style={{
            fontFamily: "var(--font-headings)",
            fontSize: "clamp(2rem, 5vw, 3.75rem)",
            lineHeight: "var(--leading-tight)",
          }}
        >
          Comprehensive Enterprise
          <br />
          <span
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--color-primary), white)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Technology Solutions
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg font-light max-w-2xl"
          style={{
            color: "rgba(255,255,255,0.80)",
            lineHeight: "var(--leading-relaxed)",
          }}
        >
          Driving organizational efficiency, security, and growth with
          world-class software suites and technical consulting.
        </p>
      </div>
    </header>
  );
}
