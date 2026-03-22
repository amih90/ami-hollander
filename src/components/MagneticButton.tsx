"use client";

import { ReactNode, useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export default function MagneticButton({ children, className = "", href, onClick, target, rel }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  function handleMouseMove(e: MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.3);
    y.set(dy * 0.3);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const isExternal = href && (href.startsWith("http") || target === "_blank");

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {href ? (
        isExternal ? (
          <a className={className} href={href} target={target} rel={rel}>
            {children}
          </a>
        ) : (
          <Link className={className} href={href}>
            {children}
          </Link>
        )
      ) : (
        <button className={className} onClick={onClick}>
          {children}
        </button>
      )}
    </motion.div>
  );
}
