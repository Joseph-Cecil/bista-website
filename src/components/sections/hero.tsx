import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export function HeroSection() {
  return (
    <header
      className="relative flex flex-col justify-center px-10 py-32 overflow-hidden"
      style={{
        minHeight: "650px",
        backgroundColor: "var(--color-blue)",
      }}
    >
      {/* Background blob */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 50%, color-mix(in oklab, var(--color-primary) 20%, transparent) 0%, transparent 60%)",
        }}
      />

      {/* Content — two-column layout */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12">
        {/* Text column */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div
            className="inline-block border text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-lg"
            style={{
              backgroundColor: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(12px)",
              borderColor: "rgba(255,255,255,0.20)",
            }}
          >
            Pioneering IT Excellence in Ghana
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
            Increase Your Productivity
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
              with BISTA ERP
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg mb-10 font-light max-w-xl mx-auto lg:mx-0"
            style={{
              color: "rgba(255,255,255,0.90)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            Have all your business operations in one place, access them
            instantly from anywhere, get automatically notified of key dates
            and tasks, and uncover insights about the financial health of your
            business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
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

        {/* Image column */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <Image
            src="/images/hero/computers.png"
            alt="BISTA ERP system on multiple devices"
            width={600}
            height={400}
            className="object-contain drop-shadow-2xl"
            style={{ maxWidth: "100%", maxHeight: "420px" }}
            priority
          />
        </div>
      </div>
    </header>
  );
}
