"use client";

import { motion } from "framer-motion";

interface GradientTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
  gradient?: string;
  shimmer?: boolean;
  letterReveal?: boolean;
}

export default function GradientText({
  text,
  className = "",
  as: Tag = "h1",
  gradient = "from-[var(--color-gold)] via-[var(--color-champagne)] to-[var(--color-gold)]",
  shimmer = false,
  letterReveal = false,
}: GradientTextProps) {
  if (letterReveal) {
    return (
      <Tag className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${shimmer ? "shimmer-text" : ""} ${className}`}>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: 40, rotateX: -40 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              delay: 0.3 + i * 0.04,
              duration: 0.5,
              type: "spring",
              stiffness: 120,
              damping: 12,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag
      className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${shimmer ? "shimmer-text" : ""} ${className}`}
    >
      {text}
    </Tag>
  );
}
