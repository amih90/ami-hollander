"use client";

import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";
import { staggerContainer, staggerItem } from "@/components/ScrollReveal";

interface ProjectGridProps {
  children: React.ReactNode;
  title: string;
}

export function AnimatedGrid({ children, title }: ProjectGridProps) {
  return (
    <section className="mb-16">
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-foreground)] mb-6">
        {title}
      </h2>
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {children}
      </motion.div>
    </section>
  );
}

export function AnimatedCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={staggerItem}>
      <TiltCard className="h-full">
        {children}
      </TiltCard>
    </motion.div>
  );
}

export { TiltCard };
