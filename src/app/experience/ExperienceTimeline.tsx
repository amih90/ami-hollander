"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

export default function ExperienceTimeline({ entries }: { entries: ExperienceEntry[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  // The line draws from 0% to 100% height based on scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Background line (dim) */}
      <div
        className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-[rgba(201,168,76,0.08)]"
      />
      {/* Animated gradient line that draws in on scroll */}
      <motion.div
        className="absolute left-6 md:left-8 top-0 w-[2px] origin-top"
        style={{
          height: lineHeight,
          background: "linear-gradient(180deg, var(--color-gold), var(--color-rose), var(--color-electric))",
        }}
      />

      {entries.map((entry, index) => (
        <motion.div
          key={entry.id}
          className="relative pl-16 md:pl-20 pb-12 last:pb-0"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Timeline dot */}
          <motion.div
            className="absolute left-[18px] md:left-[26px] top-2 w-4 h-4 rounded-full border-2"
            style={{
              borderColor: index === 0 ? "var(--color-gold)" : "rgba(201,168,76,0.3)",
              backgroundColor: index === 0 ? "var(--color-gold)" : "transparent",
              boxShadow: index === 0 ? "0 0 12px rgba(201,168,76,0.4)" : "none",
            }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
          />

          {/* Content card */}
          <div
            className="glass-card p-5"
            style={{ borderLeft: `2px solid ${index === 0 ? "var(--color-gold)" : "var(--color-silver)"}` }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-foreground)]">
                  {entry.role}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-base text-[var(--color-electric)] mt-1">
                  {entry.company}
                </p>
              </div>
              <span className="font-[family-name:var(--font-body)] text-sm text-[var(--color-gold)] mt-2 md:mt-0">
                {entry.period}
              </span>
            </div>

            <p className="font-[family-name:var(--font-body)] text-base text-[rgba(240,239,244,0.6)] mb-4">
              {entry.description}
            </p>

            <div className="mb-4">
              <ul className="space-y-1.5">
                {entry.achievements.map((ach, i) => (
                  <li
                    key={i}
                    className="font-[family-name:var(--font-body)] text-sm text-[rgba(240,239,244,0.6)] flex items-start gap-2"
                  >
                    <span className="text-[var(--color-mint)] mt-0.5">✓</span>
                    {ach}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {entry.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-[family-name:var(--font-body)] text-xs px-2.5 py-1 rounded-full bg-[rgba(59,130,246,0.08)] text-[var(--color-electric)] border border-[rgba(59,130,246,0.15)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
