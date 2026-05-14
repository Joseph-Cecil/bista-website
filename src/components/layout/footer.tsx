"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { siteConfig } from "@/config/site";
import {
  footerCompanyLinks,
  footerDivisionLinks,
} from "@/data/navigation";

export function Footer() {
  const [email, setEmail] = useState("");
  const [newsletterState, setNewsletterState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const currentYear = new Date().getFullYear();

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || newsletterState === "loading") return;

    setNewsletterState("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setNewsletterState("success");
        setEmail("");
      } else {
        setNewsletterState("error");
      }
    } catch {
      setNewsletterState("error");
    }
  };

  return (
    <footer
      className="pt-20 pb-10 px-10"
      style={{ backgroundColor: "var(--color-foreground)", color: "white" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

        {/* Brand Column */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/images/logo/bista-logo.png"
              alt="BISTA Solutions"
              width={120}
              height={40}
              className="object-contain brightness-0 invert"
              style={{ maxHeight: "40px", width: "auto" }}
            />
          </div>
          <p
            className="text-sm mb-8 max-w-sm"
            style={{
              color: "rgba(255,255,255,0.60)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            {siteConfig.description}
          </p>

          {/* Newsletter */}
          <div className="mb-8 max-w-sm">
            <h5 className="font-bold text-sm mb-3">
              Subscribe to our newsletter
            </h5>
            {newsletterState === "success" ? (
              <div
                className="flex items-center gap-2 p-3 rounded-md text-sm"
                style={{
                  backgroundColor:
                    "color-mix(in oklab, var(--color-primary) 20%, transparent)",
                  color: "rgba(255,255,255,0.90)",
                }}
              >
                <Icon icon="lucide:check-circle" width={16} height={16} />
                You are subscribed. Thank you!
              </div>
            ) : (
              <form onSubmit={handleNewsletter}>
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (newsletterState === "error") setNewsletterState("idle");
                    }}
                    placeholder="Email address..."
                    disabled={newsletterState === "loading"}
                    className="flex-grow px-4 py-2 text-sm outline-none transition-colors"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.10)",
                      border: "1px solid rgba(255,255,255,0.20)",
                      borderRight: "none",
                      borderRadius: "var(--radius-md) 0 0 var(--radius-md)",
                      color: "rgba(255,255,255,0.80)",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={newsletterState === "loading" || !email.trim()}
                    className="px-4 py-2 font-medium text-sm transition-colors"
                    style={{
                      backgroundColor: "var(--color-primary)",
                      borderRadius: "0 var(--radius-md) var(--radius-md) 0",
                      color: "white",
                      opacity:
                        newsletterState === "loading" || !email.trim()
                          ? 0.7
                          : 1,
                      cursor:
                        newsletterState === "loading" || !email.trim()
                          ? "not-allowed"
                          : "pointer",
                    }}
                  >
                    {newsletterState === "loading" ? "..." : "Subscribe"}
                  </button>
                </div>
                {newsletterState === "error" && (
                  <p className="text-xs mt-2" style={{ color: "var(--color-red)" }}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: "lucide:twitter", href: siteConfig.socialLinks.twitter },
              { icon: "lucide:linkedin", href: siteConfig.socialLinks.linkedin },
              { icon: "lucide:facebook", href: siteConfig.socialLinks.facebook },
            ].map((social) => (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 rounded-full flex items-center justify-center transition-all"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "rgba(255,255,255,0.60)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "var(--color-primary)";
                  el.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "rgba(255,255,255,0.05)";
                  el.style.color = "rgba(255,255,255,0.60)";
                }}
              >
                <Icon icon={social.icon} width={18} height={18} />
              </Link>
            ))}
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4
            className="font-bold mb-6 text-lg pb-2 inline-block"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.10)" }}
          >
            Company
          </h4>
          <ul className="space-y-4 text-sm" style={{ color: "rgba(255,255,255,0.60)" }}>
            {footerCompanyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-[var(--color-primary)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Divisions Links */}
        <div>
          <h4
            className="font-bold mb-6 text-lg pb-2 inline-block"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.10)" }}
          >
            Divisions
          </h4>
          <ul className="space-y-4 text-sm" style={{ color: "rgba(255,255,255,0.60)" }}>
            {footerDivisionLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-[var(--color-primary)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4
            className="font-bold mb-6 text-lg pb-2 inline-block"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.10)" }}
          >
            Contact Info
          </h4>
          <ul className="space-y-4 text-sm" style={{ color: "rgba(255,255,255,0.60)" }}>
            <li className="flex gap-3 items-start">
              <Icon
                icon="lucide:map-pin"
                width={18}
                height={18}
                style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 2 }}
              />
              <span>
                {siteConfig.address}
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Icon
                icon="lucide:phone"
                width={18}
                height={18}
                style={{ color: "var(--color-primary)", flexShrink: 0 }}
              />
              <a href={"tel:" + siteConfig.phone} className="hover:text-[var(--color-primary)] transition-colors">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Icon
                icon="lucide:mail"
                width={18}
                height={18}
                style={{ color: "var(--color-primary)", flexShrink: 0 }}
              />
              <a
                href={"mailto:" + siteConfig.email}
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="max-w-6xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.10)",
          color: "rgba(255,255,255,0.40)",
        }}
      >
        <div>
          &copy; {currentYear} BISTA Solutions Limited. All rights reserved.
        </div>
        <div className="flex gap-6">
          {[
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms-of-service" },
            { label: "Cookie Policy", href: "/cookies" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
