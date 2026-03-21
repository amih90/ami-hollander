"use client";

import { motion } from "framer-motion";

const shapes = [
  { size: 120, x: "10%", y: "15%", color: "var(--color-gold)", delay: 0, duration: 7 },
  { size: 80, x: "80%", y: "25%", color: "var(--color-electric)", delay: 1, duration: 9 },
  { size: 60, x: "70%", y: "70%", color: "var(--color-rose)", delay: 2, duration: 8 },
  { size: 100, x: "20%", y: "80%", color: "var(--color-violet)", delay: 0.5, duration: 10 },
  { size: 40, x: "50%", y: "10%", color: "var(--color-mint)", delay: 1.5, duration: 6 },
];

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: `radial-gradient(circle, ${shape.color} 0%, transparent 70%)`,
            opacity: 0.06,
            filter: "blur(40px)",
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
