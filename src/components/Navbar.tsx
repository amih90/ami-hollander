"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Journey" },
  { href: "/projects", label: "Projects" },
  { href: "/opensource", label: "Open Source" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[rgba(6,6,14,0.8)] border-b border-[rgba(201,168,76,0.08)] backdrop-blur-2xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href="/"
            className="font-[family-name:var(--font-heading)] text-lg font-bold bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-champagne)] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Ami Hollander
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-[family-name:var(--font-body)] text-sm px-3 py-1.5 rounded-lg transition-all ${
                  pathname === link.href
                    ? "text-[var(--color-gold)] bg-[rgba(201,168,76,0.1)]"
                    : "text-[rgba(240,239,244,0.5)] hover:text-[var(--color-foreground)] hover:bg-[rgba(255,255,255,0.04)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[var(--color-gold)] p-2 rounded-lg hover:bg-[rgba(201,168,76,0.1)] transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {open ? (
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-[rgba(201,168,76,0.08)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block font-[family-name:var(--font-body)] text-base py-2.5 px-3 rounded-lg transition-all ${
                  pathname === link.href
                    ? "text-[var(--color-gold)] bg-[rgba(201,168,76,0.1)]"
                    : "text-[rgba(240,239,244,0.5)] hover:text-[var(--color-foreground)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
