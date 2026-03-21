"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import GradientText from "@/components/GlitchText";
import ScrollReveal from "@/components/ScrollReveal";
import bgMagazine from "../../public/images/bg-magazine.svg";

const stats = [
  { label: "Repos", value: "66", color: "var(--color-gold)" },
  { label: "Contributions", value: "112+", color: "var(--color-electric)" },
  { label: "Followers", value: "21", color: "var(--color-rose)" },
  { label: "Achievement", value: "🏆 Arctic", color: "var(--color-mint)" },
];

const highlights = [
  {
    title: "What I Build",
    description:
      "Cloud-native tools, AI agents, MCP servers, developer experiences, and infrastructure at Microsoft scale.",
    color: "var(--color-electric)",
  },
  {
    title: "Open Source",
    description:
      "Active contributor to Azure CLI, Azure MCP, Azure Functions, and developer training curricula used worldwide.",
    color: "var(--color-gold)",
  },
  {
    title: "Educator",
    description:
      'Creator of "Mastering Dev Containers" — hands-on training adopted by engineering teams globally.',
    color: "var(--color-violet)",
  },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* Magazine background image */}
      <div className="fixed inset-0 -z-10" aria-hidden="true">
        <Image
          src={bgMagazine}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Overline */}
          <motion.p
            className="font-[family-name:var(--font-heading)] text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Issue No. 1 &mdash; Portfolio Edition
          </motion.p>

          {/* Name — huge editorial headline */}
          <GradientText
            text="Ami Hollander"
            className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight"
          />

          {/* Title */}
          <motion.p
            className="font-[family-name:var(--font-body)] text-xl md:text-2xl text-[var(--color-silver)] mb-4 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Senior Software Engineer @ Microsoft
          </motion.p>

          {/* Sub-tagline */}
          <motion.p
            className="font-[family-name:var(--font-body)] text-lg text-[rgba(240,239,244,0.5)] mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Building cloud-native developer tools, AI-powered experiences,
            and open-source projects that push the boundaries of what&apos;s
            possible.
          </motion.p>

          {/* CTA Buttons — glossy magazine style */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link
              href="/projects"
              className="font-[family-name:var(--font-heading)] text-sm font-semibold px-8 py-3.5 rounded-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-champagne)] text-[#06060e] hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] transition-all"
            >
              View Projects
            </Link>
            <Link
              href="/blog"
              className="font-[family-name:var(--font-heading)] text-sm font-semibold px-8 py-3.5 rounded-full border border-[rgba(240,239,244,0.2)] text-[var(--color-foreground)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all"
            >
              Read Blog
            </Link>
            <Link
              href="/contact"
              className="font-[family-name:var(--font-heading)] text-sm font-semibold px-8 py-3.5 rounded-full border border-[rgba(224,124,154,0.3)] text-[var(--color-rose)] hover:bg-[rgba(224,124,154,0.08)] transition-all"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Stats — editorial callout boxes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass-card p-4 text-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.1, duration: 0.4 }}
              >
                <div
                  className="font-[family-name:var(--font-heading)] text-xl font-bold"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="font-[family-name:var(--font-body)] text-xs text-[rgba(240,239,244,0.4)] mt-1 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="font-[family-name:var(--font-body)] text-sm text-[rgba(240,239,244,0.25)] tracking-widest uppercase">
            ↓ Scroll
          </div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div
                className="glass-card p-6"
                style={{ borderTop: `2px solid ${item.color}` }}
              >
                <h3
                  className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-3"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-base text-[rgba(240,239,244,0.6)]">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
