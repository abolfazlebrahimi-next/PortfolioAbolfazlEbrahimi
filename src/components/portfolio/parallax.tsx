"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * Wrap children to translate them on the Y axis based on scroll position.
 * `speed` is a multiplier — positive moves slower than scroll (background-feel),
 * negative moves faster (foreground-feel).
 */
export function ParallaxLayer({
  children,
  speed = 0.3,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 50}%`, `${-speed * 50}%`]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * A reusable hook-based parallax that returns a MotionValue for binding
 * to arbitrary elements via style={{ y }}.
 */
export function useParallaxValue(
  speed = 0.3,
  target?: React.RefObject<HTMLElement>,
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  });
  return useTransform(scrollYProgress, [0, 1], [speed * 80, -speed * 80]);
}
