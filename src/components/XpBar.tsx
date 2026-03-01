"use client";

import { useEffect, useRef, useState } from "react";

const categoryGradients: Record<string, string> = {
  "Cloud & Infra": "linear-gradient(90deg, #3b82f6, #6ee7b7)",
  Languages: "linear-gradient(90deg, #c9a84c, #e8d5b0)",
  "AI & Data": "linear-gradient(90deg, #a78bfa, #e07c9a)",
  "Dev Practices": "linear-gradient(90deg, #6ee7b7, #3b82f6)",
};

interface SkillBarProps {
  name: string;
  level: number;
  maxLevel?: number;
  category?: string;
}

export default function SkillBar({ name, level, maxLevel = 100, category }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  const pct = Math.round((level / maxLevel) * 100);
  const gradient = (category && categoryGradients[category]) || categoryGradients["Languages"];

  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="font-[family-name:var(--font-heading)] text-sm text-[var(--color-foreground)] tracking-wide">
          {name}
        </span>
        <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-gold)]">
          {pct}%
        </span>
      </div>
      <div className="h-2.5 bg-[rgba(255,255,255,0.04)] rounded-full overflow-hidden">
        <div
          className="skill-bar-fill h-full"
          style={{ width: `${width}%`, background: gradient }}
        />
      </div>
    </div>
  );
}
