"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Send, Sparkles } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/i18n/i18n-provider";
import { personalStatic, locationByLocale } from "@/i18n";
import { Reveal } from "./reveal";
import { SmartImage } from "./smart-image";

export function Contact() {
  const { t, locale } = useI18n();

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-border/50 py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--lime)] opacity-[0.05] blur-[140px]" />
        <div className="absolute inset-0 bg-grid bg-radial-fade opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Text column */}
          <div className="order-1 lg:col-span-7">
            <Reveal>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--lime)]" />
                {t.contact.eyebrow}
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.06 }}
                className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl"
              >
                {t.contact.title}
                <br className="hidden sm:block" />
                <span className="text-[var(--lime)] text-glow-lime">
                  {" "}
                  {t.contact.titleAccent}
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {t.contact.description}
              </motion.p>

              {/* CTAs — only 2: Telegram (contact) + Email */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.18 }}
                className="mt-10 flex flex-wrap items-center gap-3"
              >
                <Link
                  href={personalStatic.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--lime)] px-6 py-3 text-sm font-semibold text-[var(--lime-foreground)] transition-all hover:shadow-[0_8px_30px_-6px_rgba(190,242,100,0.45)] hover:brightness-105"
                >
                  <Send className="h-4 w-4 rtl:scale-x-[-1]" />
                  {t.contact.ctaTelegram}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-[-90deg] rtl:group-hover:translate-x-0.5 rtl:group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href={`mailto:${personalStatic.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-[var(--lime)]/40 hover:text-[var(--lime)]"
                >
                  <Mail className="h-4 w-4" />
                  {t.contact.ctaPrimary}
                </Link>
              </motion.div>
            </Reveal>
          </div>

          {/* Image column — next to text on desktop, below on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:col-span-5"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[300px] sm:max-w-xs lg:max-w-sm">
              {/* Halo */}
              <div className="absolute -inset-6 -z-10">
                <div className="absolute inset-0 animate-spin-slow rounded-[2.5rem] bg-[conic-gradient(from_0deg,rgba(190,242,100,0.18),rgba(124,109,255,0.16),transparent,rgba(190,242,100,0.18))] blur-2xl" />
              </div>

              {/* Frame */}
              <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-border bg-surface/40 backdrop-blur-md">
                <div className="absolute inset-0 bg-grid-dense opacity-40" />
                <SmartImage
                  src="/portrait.jpg"
                  alt={t.hero.portraitAlt}
                  fill
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover object-top"
                  containerClassName="absolute inset-0"
                />
                {/* gradient veil */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

                {/* Floating chip */}
                <div className="absolute bottom-4 start-4 end-4 flex items-center justify-between gap-3 rounded-2xl border border-border bg-background/70 px-4 py-3 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[var(--lime)]" />
                    <span className="text-xs font-medium text-foreground">
                      {locationByLocale[locale]}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {t.hero.portraitChipRole}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
