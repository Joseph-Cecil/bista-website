"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "ERP Modules", href: "/services#erp" },
  { label: "HRMS", href: "/services#hrms" },
  { label: "SaaS", href: "/services#saas" },
  { label: "About Us", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]) && href !== "/";
  };

  return (
    <nav
      ref={navRef}
      className={cn(
        "sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4",
        "border-b bg-[var(--color-background)] transition-shadow duration-300",
        isScrolled ? "shadow-md" : "shadow-sm"
      )}
      style={{ borderColor: "var(--color-border)" }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 shrink-0">
        <Image
          src="/images/logo/bista-logo.jpg"
          alt="BISTA Solutions"
          width={120}
          height={40}
          className="object-contain"
          style={{ maxHeight: "40px", width: "auto" }}
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8 font-medium text-sm">
        {navLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative transition-colors pb-1"
            style={{
              color: isActive(item.href)
                ? "var(--color-primary)"
                : "var(--color-foreground)",
            }}
          >
            {item.label}
            {isActive(item.href) && (
              <span
                className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                style={{ backgroundColor: "var(--color-primary)" }}
              />
            )}
          </Link>
        ))}
      </div>

      {/* Contact CTA + Mobile Toggle */}
      <div className="flex items-center gap-4">
        <Link
          href="/contact"
          className="hidden md:inline-flex btn-nav-contact text-white px-6 py-2.5 rounded-md font-medium text-sm shadow-md"
        >
          Contact Us
        </Link>
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isMobileOpen}
          style={{ color: "var(--color-foreground)" }}
        >
          <Icon
            icon={isMobileOpen ? "lucide:x" : "lucide:menu"}
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed left-0 right-0 z-40 border-t"
          style={{
            top: navRef.current
              ? navRef.current.getBoundingClientRect().bottom + window.scrollY
              : "73px",
            backgroundColor: "white",
            borderColor: "var(--color-border)",
            boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
            maxHeight: "calc(100vh - 73px)",
            overflowY: "auto",
          }}
        >
          <div className="p-6 space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between py-3 px-4 rounded-lg font-medium text-sm transition-colors"
                style={{
                  color: isActive(item.href)
                    ? "var(--color-primary)"
                    : "var(--color-foreground)",
                  backgroundColor: isActive(item.href)
                    ? "color-mix(in oklab, var(--color-primary) 8%, transparent)"
                    : "transparent",
                }}
              >
                {item.label}
                {isActive(item.href) && (
                  <Icon
                    icon="lucide:check"
                    width={14}
                    height={14}
                    style={{ color: "var(--color-primary)" }}
                  />
                )}
              </Link>
            ))}
            <div
              className="pt-4 border-t"
              style={{ borderColor: "var(--color-border)" }}
            >
              <Link
                href="/contact"
                className="btn-blue block text-center text-white px-6 py-3 rounded-md font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
