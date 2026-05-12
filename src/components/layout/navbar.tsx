"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    dropdown: [
      { label: "ERP & Enterprise Management", href: "/services#erp" },
      { label: "Human Resource Management", href: "/services#hrms" },
      { label: "Cloud SaaS Platform", href: "/services#saas" },
      { label: "IT Consulting", href: "/services#consulting" },
    ],
  },
  { label: "Products (Energizer)", href: "/products", hasDropdown: false },
  { label: "Paaopaa E-commerce", href: "/paaopaa", hasDropdown: false },
  {
    label: "About Us",
    href: "/about",
    hasDropdown: true,
    dropdown: [
      { label: "Our Story", href: "/about" },
      { label: "Leadership Team", href: "/team" },
      { label: "Milestones", href: "/about#timeline" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

const topBarLinks = [
  { label: "Client Portal", href: "/portal" },
  { label: "Support", href: "/support" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Scroll detection for shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Info Bar */}
      <div
        className="hidden md:flex justify-between items-center py-2 px-10 text-xs"
        style={{
          backgroundColor: "var(--color-foreground)",
          color: "white",
        }}
      >
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
              className="transition-colors hover:text-[var(--color-primary)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Nav */}
      <nav
        ref={navRef}
        className={cn(
          "sticky top-0 z-50 flex items-center justify-between px-10 py-5",
          "border-b bg-[var(--color-background)] transition-shadow duration-300",
          isScrolled ? "shadow-md" : "shadow-sm"
        )}
        style={{ borderColor: "var(--color-border)" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div
            className="size-10 rounded-lg flex items-center justify-center font-bold text-2xl shadow-md"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "white",
            }}
          >
            B
          </div>
          <div className="flex flex-col">
            <span
              className="font-bold text-xl leading-none"
              style={{
                color: "var(--color-blue)",
                letterSpacing: "var(--tracking-tight)",
              }}
            >
              {siteConfig.name}
            </span>
            <span
              className="text-[10px] font-medium uppercase mt-1"
              style={{
                color: "var(--color-muted-foreground)",
                letterSpacing: "var(--tracking-widest)",
              }}
            >
              {siteConfig.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          {navLinks.map((item) => (
            <div key={item.href} className="relative">
              {item.hasDropdown ? (
                <button
                  className="flex items-center gap-1 transition-colors"
                  style={{
                    color: isActive(item.href)
                      ? "var(--color-primary)"
                      : "var(--color-foreground)",
                  }}
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.label ? null : item.label
                    )
                  }
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <Icon
                    icon="lucide:chevron-down"
                    width={14}
                    height={14}
                    style={{
                      transition: "transform 150ms ease",
                      transform:
                        openDropdown === item.label
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                    }}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors"
                  style={{
                    color: isActive(item.href)
                      ? "var(--color-primary)"
                      : "var(--color-foreground)",
                  }}
                >
                  {item.label}
                </Link>
              )}

              {/* Active underline indicator */}
              {isActive(item.href) && (
                <span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
              )}

              {/* Dropdown Menu */}
              {item.hasDropdown &&
                item.dropdown &&
                openDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-2 rounded-xl border overflow-hidden"
                    style={{
                      minWidth: "220px",
                      backgroundColor: "white",
                      borderColor: "var(--color-border)",
                      boxShadow:
                        "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
                      zIndex: 60,
                    }}
                  >
                    {item.dropdown.map((sub, i) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="flex items-center gap-2 px-4 py-3 text-sm transition-colors"
                        style={{
                          color: "var(--color-foreground)",
                          borderBottom:
                            i < item.dropdown!.length - 1
                              ? "1px solid var(--color-border)"
                              : "none",
                          backgroundColor:
                            pathname === sub.href
                              ? "color-mix(in oklab, var(--color-primary) 5%, transparent)"
                              : "transparent",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLAnchorElement;
                          if (pathname !== sub.href) {
                            el.style.backgroundColor =
                              "var(--color-secondary)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLAnchorElement;
                          if (pathname !== sub.href) {
                            el.style.backgroundColor = "transparent";
                          }
                        }}
                        onClick={() => setOpenDropdown(null)}
                      >
                        <Icon
                          icon="lucide:chevron-right"
                          width={12}
                          height={12}
                          style={{ color: "var(--color-primary)", flexShrink: 0 }}
                        />
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
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
      </nav>

      {/* Mobile Menu — positioned directly below nav using top-full */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed left-0 right-0 z-40 border-t"
          style={{
            top: navRef.current
              ? navRef.current.getBoundingClientRect().bottom + window.scrollY
              : "129px",
            backgroundColor: "white",
            borderColor: "var(--color-border)",
            boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
            maxHeight: "calc(100vh - 80px)",
            overflowY: "auto",
          }}
        >
          <div className="p-6 space-y-1">
            {navLinks.map((item) => (
              <div key={item.href}>
                <Link
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

                {/* Mobile sub-links */}
                {item.dropdown && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="flex items-center gap-2 py-2 px-4 rounded-lg text-xs transition-colors"
                        style={{ color: "var(--color-muted-foreground)" }}
                      >
                        <Icon
                          icon="lucide:arrow-right"
                          width={10}
                          height={10}
                        />
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 border-t" style={{ borderColor: "var(--color-border)" }}>
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
    </>
  );
}
