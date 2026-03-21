"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const bgOpacity = useTransform(scrollY, [0, 80], [0.6, 0.95]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0.04, 0.12]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-2xl"
      style={{
        backgroundColor: useTransform(bgOpacity, (v) => `rgba(6,6,14,${v})`),
        borderBottom: useTransform(borderOpacity, (v) => `1px solid rgba(201,168,76,${v})`),
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href="/"
            className="font-[family-name:var(--font-heading)] text-lg font-bold bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-champagne)] bg-clip-text text-transparent hover:opacity-80 transition-opacity flex items-center gap-2"
          >
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Ami Hollander
            </motion.span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-[family-name:var(--font-body)] text-sm px-3 py-1.5 rounded-lg transition-colors ${
                    isActive
                      ? "text-[var(--color-gold)]"
                      : "text-[rgba(240,239,244,0.5)] hover:text-[var(--color-foreground)]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-[rgba(201,168,76,0.1)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
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

        {/* Mobile menu with AnimatePresence */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="md:hidden pb-4 border-t border-[rgba(201,168,76,0.08)] overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
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
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
