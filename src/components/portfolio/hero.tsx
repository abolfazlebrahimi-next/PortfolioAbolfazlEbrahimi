"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { useI18n } from "@/i18n/i18n-provider";
import { personalStatic, techStackChips } from "@/i18n";
import { SmartImage } from "./smart-image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const { t, locale } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax on scroll: the whole hero drifts up slightly as user scrolls past,
  // giving the "main layer moves" feel the user asked for.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const haloScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const haloOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      {/* Parallax background — drifts slower than the scroll */}
      <motion.div
        style={{ y: gridY }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-grid animate-grid-pan bg-radial-fade opacity-70" />
        <motion.div
          style={{ scale: haloScale, opacity: haloOpacity }}
          className="absolute left-1/2 top-[-20%] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[var(--lime)] opacity-[0.08] blur-[120px]"
        />
        <div className="absolute right-[-10%] bottom-[-10%] h-[420px] w-[420px] rounded-full bg-[var(--violet)] opacity-[0.08] blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-12 lg:gap-10"
      >
        {/* Portrait column — on mobile shows AFTER text (per user request) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 lg:order-2 lg:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[260px] sm:max-w-xs lg:max-w-sm">
            {/* Halo */}
            <div className="absolute -inset-6 -z-10">
              <div className="absolute inset-0 animate-spin-slow rounded-[2.5rem] bg-[conic-gradient(from_0deg,rgba(190,242,100,0.18),rgba(124,109,255,0.16),transparent,rgba(190,242,100,0.18))] blur-2xl" />
            </div>

            {/* Frame with skeleton */}
            <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-border bg-surface/40 backdrop-blur-md">
              <div className="absolute inset-0 bg-grid-dense opacity-40" />
              <SmartImage
                src="/portrait.jpg"
                alt={t.hero.portraitAlt}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover object-top"
                containerClassName="absolute inset-0"
              />
              {/* gradient veil for blending */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

              {/* Floating chip */}
              <div className="absolute bottom-4 start-4 end-4 flex items-center justify-between gap-3 rounded-2xl border border-border bg-background/70 px-4 py-3 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[var(--lime)]" />
                  <span className="text-xs font-medium text-foreground">
                    {t.hero.portraitChipRole}
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {t.hero.portraitChipLocation}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-1 lg:order-1 lg:col-span-7"
        >
          {/* Availability indicator */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="pulse-ring absolute inline-flex h-full w-full rounded-full" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--lime)]" />
            </span>
            {t.hero.availability}
          </motion.div>

          {/* Name */}
          <motion.p
            variants={item}
            className="mt-6 font-mono text-sm uppercase tracking-[0.32em] text-[var(--lime)]"
          >
            {t.hero.nameLabel}
          </motion.p>

          {/* Headline — prettier with gradient accent line */}
          <motion.h1
            variants={item}
            className="mt-4 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="relative inline-block">
              {t.hero.headline}
              <span
                aria-hidden
                className="absolute -bottom-1 start-0 h-[3px] w-3/4 rounded-full bg-gradient-to-r from-[var(--lime)] via-[var(--lime)]/40 to-transparent rtl:bg-gradient-to-l"
              />
            </span>{" "}
            <span className="bg-gradient-to-br from-[var(--lime)] to-[var(--lime)]/60 bg-clip-text text-transparent text-glow-lime">
              {t.hero.headlineAccent}
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t.hero.sub}
          </motion.p>

          {/* Tech stack ticker */}
          <motion.ul
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-2"
          >
            {techStackChips.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-surface/40 px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--lime)] px-5 py-3 text-sm font-semibold text-[var(--lime-foreground)] transition-all hover:shadow-[0_8px_30px_-6px_rgba(190,242,100,0.45)] hover:brightness-105"
            >
              {t.hero.ctaPrimary}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-[-90deg] rtl:group-hover:translate-x-0.5 rtl:group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-white/20 hover:bg-surface"
            >
              {t.hero.ctaSecondary}
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
          {t.hero.scroll}
        </span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-border pt-1.5">
          <span className="animate-scroll-bounce h-1.5 w-1 rounded-full bg-[var(--lime)]" />
        </span>
        <ArrowDown className="h-3 w-3 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
