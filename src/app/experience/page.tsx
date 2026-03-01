import type { Metadata } from "next";
import { experience } from "@/data/experience";
import GradientText from "@/components/GlitchText";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "Ami Hollander's professional journey — from startup to Microsoft.",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <GradientText
          text="My Journey"
          className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-6"
        />
        <p className="font-[family-name:var(--font-body)] text-lg text-[rgba(240,239,244,0.5)]">
          A path of growth — each chapter building on the last.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Gradient vertical line */}
        <div
          className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px]"
          style={{
            background: "linear-gradient(180deg, var(--color-gold), var(--color-rose), var(--color-electric))",
          }}
        />

        {experience.map((entry, index) => (
          <div key={entry.id} className="relative pl-16 md:pl-20 pb-12 last:pb-0">
            {/* Timeline dot */}
            <div
              className="absolute left-[18px] md:left-[26px] top-2 w-4 h-4 rounded-full border-2"
              style={{
                borderColor: index === 0 ? "var(--color-gold)" : "rgba(201,168,76,0.3)",
                backgroundColor: index === 0 ? "var(--color-gold)" : "transparent",
                boxShadow: index === 0 ? "0 0 12px rgba(201,168,76,0.4)" : "none",
              }}
            />

            {/* Content card */}
            <div
              className="glass-card p-5"
              style={{ borderLeft: `2px solid ${index === 0 ? "var(--color-gold)" : "var(--color-silver)"}` }}
            >
              {/* Header */}
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

              {/* Description */}
              <p className="font-[family-name:var(--font-body)] text-base text-[rgba(240,239,244,0.6)] mb-4">
                {entry.description}
              </p>

              {/* Achievements */}
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

              {/* Tech stack */}
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
          </div>
        ))}
      </div>
    </div>
  );
}
