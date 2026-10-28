"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/i18n/i18n-provider";
import { personalStatic, locationByLocale } from "@/i18n";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function About() {
  const { t, locale } = useI18n();

  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          description={t.about.description}
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left column: narrative */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl">
                {t.about.intro}
              </p>
            </Reveal>

            <Reveal delay={0.08} className="mt-6">
              <p className="text-base leading-relaxed text-muted-foreground">
                {t.about.para2}
              </p>
            </Reveal>

            <Reveal delay={0.16} className="mt-8">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={`mailto:${personalStatic.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-[var(--lime)]/40 hover:text-[var(--lime)]"
                >
                  {t.about.emailCta}
                  <ArrowUpRight className="h-3.5 w-3.5 rtl:rotate-[-90deg]" />
                </Link>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {locationByLocale[locale]}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right column: strength grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {t.about.strengths.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-5 backdrop-blur-sm transition-all hover:border-[var(--lime)]/30 hover:bg-surface"
                >
                  <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[var(--lime)]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 rtl:-left-8 rtl:right-auto" />
                  <div className="relative">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background/60 text-[var(--lime)]">
                      <s.icon className="h-4 w-4" />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
