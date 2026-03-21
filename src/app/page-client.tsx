"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GradientText from "@/components/GlitchText";
import ScrollReveal, { staggerContainer, staggerItem } from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import MagneticButton from "@/components/MagneticButton";
import FloatingShapes from "@/components/FloatingShapes";
import TypewriterText from "@/components/TypewriterText";
import bgMagazine from "../../public/images/bg-magazine.svg";

const identities = [
  "Senior Software Engineer",
  "Cloud Native Builder",
  "Open Source Contributor",
  "AI & MCP Developer",
  "Dev Containers Educator",
];

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

const skillHighlights = [
  { name: "Azure", category: "Cloud" },
  { name: "TypeScript", category: "Lang" },
  { name: "Python", category: "Lang" },
  { name: "Kubernetes", category: "Infra" },
  { name: "AI / LLMs", category: "AI" },
  { name: "MCP Servers", category: "AI" },
  { name: "Dev Containers", category: "DX" },
  { name: "C# / .NET", category: "Lang" },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax: bg moves slower, text faster
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="relative">
      {/* Magazine background image — parallax */}
      <motion.div
        className="fixed inset-0 -z-10"
        aria-hidden="true"
        style={{ y: bgY }}
      >
        <Image
          src={bgMagazine}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Floating decorative shapes */}
      <FloatingShapes />

      {/* Hero Section — parallax */}
      <section
        ref={heroRef}
        className="relative min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center px-4 text-center"
      >
        <motion.div
          className="max-w-4xl mx-auto"
          style={{ y: textY, opacity: heroOpacity }}
        >
          {/* Name — letter reveal + shimmer */}
          <GradientText
            text="Ami Hollander"
            shimmer
            letterReveal
            className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight"
          />

          {/* Typewriter rotating identities */}
          <div className="font-[family-name:var(--font-body)] text-xl md:text-2xl text-[var(--color-silver)] mb-4 tracking-wide h-[1.8em]">
            <TypewriterText words={identities} />
          </div>

          {/* Sub-tagline */}
          <motion.p
            className="font-[family-name:var(--font-body)] text-lg text-[rgba(240,239,244,0.5)] mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            Building cloud-native developer tools, AI-powered experiences,
            and open-source projects that push the boundaries of what&apos;s
            possible.
          </motion.p>

          {/* CTA Buttons — magnetic hover */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <MagneticButton
              href="/work"
              className="font-[family-name:var(--font-heading)] text-sm font-semibold px-8 py-3.5 rounded-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-champagne)] text-[#06060e] hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] transition-all inline-block"
            >
              View Work
            </MagneticButton>
            <MagneticButton
              href="/blog"
              className="font-[family-name:var(--font-heading)] text-sm font-semibold px-8 py-3.5 rounded-full border border-[rgba(240,239,244,0.2)] text-[var(--color-foreground)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all inline-block"
            >
              Read Writing
            </MagneticButton>
            <MagneticButton
              href="/contact"
              className="font-[family-name:var(--font-heading)] text-sm font-semibold px-8 py-3.5 rounded-full border border-[rgba(224,124,154,0.3)] text-[var(--color-rose)] hover:bg-[rgba(224,124,154,0.08)] transition-all inline-block"
            >
              Get In Touch
            </MagneticButton>
          </motion.div>

          {/* Stats — animated counters */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="glass-card p-4 text-center"
                variants={staggerItem}
              >
                <div className="text-xl">
                  <AnimatedCounter value={stat.value} color={stat.color} />
                </div>
                <div className="font-[family-name:var(--font-body)] text-xs text-[rgba(240,239,244,0.4)] mt-1 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator — bouncing */}
        <motion.div
          className="absolute bottom-8 left-1/2 scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
        >
          <div className="font-[family-name:var(--font-body)] text-sm text-[rgba(240,239,244,0.25)] tracking-widest uppercase flex flex-col items-center gap-1">
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
            Scroll
          </div>
        </motion.div>
      </section>

      {/* Highlights Section — staggered card reveals */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {highlights.map((item) => (
            <motion.div key={item.title} variants={staggerItem}>
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
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Now Section — merged from About */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <ScrollReveal>
          <GradientText
            text="Now"
            shimmer
            className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-8"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-8 mb-10">
          <ScrollReveal direction="left" className="md:col-span-3">
            <p className="font-[family-name:var(--font-body)] text-lg text-[var(--color-foreground)] mb-4 leading-relaxed">
              Senior Software Engineer at{" "}
              <span className="text-[var(--color-electric)]">Microsoft</span>,
              building developer tools and cloud platform services that empower
              millions of engineers worldwide.
            </p>
            <p className="font-[family-name:var(--font-body)] text-base text-[rgba(240,239,244,0.6)] leading-relaxed">
              I specialize in cloud-native architectures on Azure, AI-powered
              developer experiences, and creating open-source educational content.
              When I&apos;m not shipping code, I&apos;m building hands-on training courses
              like{" "}
              <span className="text-[var(--color-gold)]">
                &quot;Mastering Dev Containers&quot;
              </span>{" "}
              and contributing to the Azure open-source ecosystem.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" className="md:col-span-2">
            <div className="glass-card p-5">
              <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-[var(--color-gold)] mb-4 uppercase tracking-wider">
                Core Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillHighlights.map((skill) => (
                  <span
                    key={skill.name}
                    className="font-[family-name:var(--font-body)] text-sm px-3 py-1.5 rounded-lg bg-[rgba(255,255,255,0.04)] text-[rgba(240,239,244,0.7)] border border-[rgba(255,255,255,0.06)]"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
