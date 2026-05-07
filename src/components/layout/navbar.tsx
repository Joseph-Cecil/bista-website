"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { navigation, topBarLinks } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[var(--color-foreground)] text-white py-2 px-10 text-xs hidden md:flex justify-between items-center">
        <div className="flex gap-4">
          <span className="flex items-center gap-1">
            <Icon icon="lucide:phone" width={12} height={12} />
            {siteConfig.phone}
          </span>
          <span className="flex items-center gap-1">
            <Icon icon="lucide:mail" width={12} height={12} />
            {siteConfig.email}
          </span>
        </div>
        <div className="flex gap-4">
          {topBarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={cn(
          "flex items-center justify-between px-10 py-5 border-b border-[var(--color-border)] bg-[var(--color-background)] sticky top-0 z-50 transition-shadow duration-300",
          isScrolled ? "shadow-md" : "shadow-sm"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="size-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-md">
            B
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-[var(--color-blue)] leading-none tracking-tight">
              {siteConfig.name}
            </span>
            <span className="text-[10px] text-[var(--color-muted-foreground)] font-medium uppercase tracking-widest mt-1">
              {siteConfig.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-1"
            >
              {item.label}
              {item.hasDropdown && (
                <Icon icon="lucide:chevron-down" width={14} height={14} />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="bg-[var(--color-primary)] text-white px-6 py-2.5 rounded-md font-medium text-sm shadow-md hover:bg-[var(--color-blue)] transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-[var(--color-foreground)]"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          <Icon icon={isMobileOpen ? "lucide:x" : "lucide:menu"} width={24} height={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 top-[129px] z-40 bg-white border-t border-[var(--color-border)] p-6 flex flex-col gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium py-2 border-b border-[var(--color-border)] text-[var(--color-foreground)] hover:text-[var(--color-primary)]"
              onClick={() => setIsMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 bg-[var(--color-primary)] text-white px-6 py-3 rounded-md font-medium text-center"
            onClick={() => setIsMobileOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </>
  );
}
