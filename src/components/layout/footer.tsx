"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { siteConfig } from "@/config/site";
import {
  footerCompanyLinks,
  footerDivisionLinks,
} from "@/data/navigation";

export function Footer() {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-foreground)] text-white pt-20 pb-10 px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

        {/* Brand Column */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-white font-bold text-2xl">
              B
            </div>
            <span className="font-bold text-2xl tracking-tight">BISTA</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
            {siteConfig.description}
          </p>

          {/* Newsletter */}
          <div className="mb-8 max-w-sm">
            <h5 className="font-bold text-sm mb-3">Subscribe to our newsletter</h5>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address..."
                className="bg-white/10 border border-white/20 rounded-l-md px-4 py-2 flex-grow text-white/80 text-sm placeholder:text-white/40 outline-none focus:border-white/40 transition-colors"
              />
              <button className="bg-[var(--color-primary)] px-4 py-2 rounded-r-md font-medium text-sm hover:bg-[var(--color-blue)] transition-colors">
                Subscribe
              </button>
            </div>
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
                className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-[var(--color-primary)] transition-all"
              >
                <Icon icon={social.icon} width={18} height={18} />
              </Link>
            ))}
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-bold mb-6 text-lg border-b border-white/10 pb-2 inline-block">
            Company
          </h4>
          <ul className="space-y-4 text-sm text-white/60">
            {footerCompanyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Divisions Links */}
        <div>
          <h4 className="font-bold mb-6 text-lg border-b border-white/10 pb-2 inline-block">
            Divisions
          </h4>
          <ul className="space-y-4 text-sm text-white/60">
            {footerDivisionLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-6 text-lg border-b border-white/10 pb-2 inline-block">
            Contact Info
          </h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex gap-3 items-start">
              <Icon
                icon="lucide:map-pin"
                width={18}
                height={18}
                className="mt-0.5 shrink-0 text-[var(--color-primary)]"
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
                className="text-[var(--color-primary)] shrink-0"
              />
              <span>{siteConfig.phone}</span>
            </li>
            <li className="flex gap-3 items-center">
              <Icon
                icon="lucide:mail"
                width={18}
                height={18}
                className="text-[var(--color-primary)] shrink-0"
              />
              <span>{siteConfig.email}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
        <div>
          &copy; {currentYear} BISTA Solutions Limited. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="/cookies" className="hover:text-white transition-colors">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
