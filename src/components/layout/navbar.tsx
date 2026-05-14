"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, startTransition } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const serviceLinks = [
  { label: "All Services", href: "/services", divider: false },
  { label: "ERP Modules", href: "/services#erp", divider: false },
  { label: "HRMS", href: "/services#hrms", divider: false },
  { label: "SaaS", href: "/services#saas", divider: true },
  { label: "Software Development", href: "/services/software-development", divider: false },
  { label: "Database Management", href: "/services/database-management", divider: false },
  { label: "IT Consultancy", href: "/services/it-consultancy", divider: false },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(73);
  const navRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.getBoundingClientRect().height);
    }
  }, []);

  useEffect(() => {
    startTransition(() => {
      setIsMobileOpen(false);
      setIsServicesDropdownOpen(false);
    });
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isServicesActive = pathname.startsWith("/services");

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
        <Link
          href="/"
          className="nav-link-hover relative transition-colors pb-1"
          style={{ color: pathname === "/" ? "var(--color-primary)" : "var(--color-foreground)" }}
        >
          Home
          {pathname === "/" && (
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
          )}
        </Link>

        {/* Services dropdown */}
        <div ref={servicesRef} className="relative">
          <button
            className="nav-link-hover relative transition-colors pb-1 flex items-center gap-1"
            style={{ color: isServicesActive ? "var(--color-primary)" : "var(--color-foreground)" }}
            onClick={() => setIsServicesDropdownOpen((v) => !v)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setIsServicesDropdownOpen(false);
              if (e.key === "ArrowDown") { e.preventDefault(); setIsServicesDropdownOpen(true); }
            }}
            aria-expanded={isServicesDropdownOpen}
            aria-haspopup="true"
          >
            Services
            <Icon
              icon={isServicesDropdownOpen ? "lucide:chevron-up" : "lucide:chevron-down"}
              width={14}
              height={14}
              style={{ transition: "transform 150ms ease" }}
            />
            {isServicesActive && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
            )}
          </button>

          {isServicesDropdownOpen && (
            <div
              className="absolute top-full left-1/2 mt-2 w-52 rounded-xl border bg-white shadow-xl py-2"
              style={{ transform: "translateX(-50%)", borderColor: "var(--color-border)" }}
              role="menu"
            >
              {serviceLinks.map((link) => (
                <div key={link.href}>
                  {link.divider && (
                    <div className="my-1 border-t" style={{ borderColor: "var(--color-border)" }} />
                  )}
                  <Link
                    href={link.href}
                    className="block px-4 py-2 text-sm font-medium transition-colors"
                    style={{
                      color: isActive(link.href) ? "var(--color-primary)" : "var(--color-foreground)",
                      backgroundColor: isActive(link.href) ? "color-mix(in oklab, var(--color-primary) 6%, transparent)" : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive(link.href)) {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-secondary)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive(link.href)) {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                      }
                    }}
                    role="menuitem"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        {navLinks.slice(1).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-link-hover relative transition-colors pb-1"
            style={{
              color: isActive(item.href) ? "var(--color-primary)" : "var(--color-foreground)",
            }}
          >
            {item.label}
            {isActive(item.href) && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
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
          <Icon icon={isMobileOpen ? "lucide:x" : "lucide:menu"} width={24} height={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed left-0 right-0 z-40 border-t"
          style={{
            top: navHeight,
            backgroundColor: "white",
            borderColor: "var(--color-border)",
            boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
            maxHeight: "calc(100vh - 73px)",
            overflowY: "auto",
          }}
        >
          <div className="p-6 space-y-1">
            <Link
              href="/"
              className="flex items-center justify-between py-3 px-4 rounded-lg font-medium text-sm transition-colors"
              style={{
                color: pathname === "/" ? "var(--color-primary)" : "var(--color-foreground)",
                backgroundColor: pathname === "/" ? "color-mix(in oklab, var(--color-primary) 8%, transparent)" : "transparent",
              }}
            >
              Home
            </Link>

            {/* Services accordion */}
            <div>
              <button
                className="w-full flex items-center justify-between py-3 px-4 rounded-lg font-medium text-sm"
                style={{
                  color: isServicesActive ? "var(--color-primary)" : "var(--color-foreground)",
                  backgroundColor: isServicesActive ? "color-mix(in oklab, var(--color-primary) 8%, transparent)" : "transparent",
                }}
                onClick={() => setIsMobileServicesOpen((v) => !v)}
                aria-expanded={isMobileServicesOpen}
              >
                Services
                <Icon icon={isMobileServicesOpen ? "lucide:chevron-up" : "lucide:chevron-down"} width={14} height={14} />
              </button>
              {isMobileServicesOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-2 px-4 rounded-lg text-sm font-medium"
                      style={{
                        color: isActive(link.href) ? "var(--color-primary)" : "var(--color-muted-foreground)",
                        backgroundColor: isActive(link.href) ? "color-mix(in oklab, var(--color-primary) 6%, transparent)" : "transparent",
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="flex items-center justify-between py-3 px-4 rounded-lg font-medium text-sm transition-colors"
              style={{
                color: isActive("/about") ? "var(--color-primary)" : "var(--color-foreground)",
                backgroundColor: isActive("/about") ? "color-mix(in oklab, var(--color-primary) 8%, transparent)" : "transparent",
              }}
            >
              About Us
            </Link>

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
    </nav>
  );
}
