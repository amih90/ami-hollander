"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    let raf: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    function handleMouseMove(e: PointerEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
    }

    function animate() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      el!.style.transform = `translate(${currentX - 200}px, ${currentY - 200}px)`;
      raf = requestAnimationFrame(animate);
    }

    // Only show on non-touch devices
    const mq = window.matchMedia("(pointer: fine)");
    if (mq.matches) {
      window.addEventListener("pointermove", handleMouseMove);
      raf = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-30 w-[400px] h-[400px] rounded-full opacity-[0.04] mix-blend-screen will-change-transform hidden md:block"
      style={{
        background: "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)",
      }}
    />
  );
}
