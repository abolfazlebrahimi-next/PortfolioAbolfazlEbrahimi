"use client";

import { motion } from "framer-motion";
import { GraduationCap, Languages as LanguagesIcon, Sparkles } from "lucide-react";
import { useI18n } from "@/i18n/i18n-provider";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

function SkillMarquee() {
  const { t } = useI18n();
  const items = [...t.skills.frontendItems, ...t.skills.toolItems];
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/30 py-4">
      <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-16 bg-gradient-to-r from-background to-transparent rtl:bg-gradient-to-l" />
      <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-16 bg-gradient-to-l from-background to-transparent rtl:bg-gradient-to-r" />
      <div className="flex w-max animate-marquee items-center gap-3">
        {doubled.map((skill, i) => (
          <span
            key={`${skill.name}-${i}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-xs text-muted-foreground"
          >
            <skill.icon className="h-3 w-3 text-[var(--lime)]" />
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const { t } = useI18n();

  return (
    <section
      id="skills"
      className="relative scroll-mt-24 border-t border-border/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          description={t.skills.description}
        />

        {/* Skill marquee */}
        <Reveal className="mt-12">
          <SkillMarquee />
        </Reveal>

        {/* Skill groups */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Frontend */}
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-surface/30 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {t.skills.frontendTitle}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {t.skills.frontendTag}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {t.skills.frontendItems.map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="group inline-flex items-center gap-2 rounded-xl border border-border bg-background/40 px-3 py-2 text-sm text-foreground transition-all hover:border-[var(--lime)]/40 hover:bg-surface"
                  >
                    <skill.icon className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-[var(--lime)]" />
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Tools */}
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-border bg-surface/30 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {t.skills.toolsTitle}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {t.skills.toolsTag}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {t.skills.toolItems.map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="group inline-flex items-center gap-2 rounded-xl border border-border bg-background/40 px-3 py-2 text-sm text-foreground transition-all hover:border-[var(--violet)]/40 hover:bg-surface"
                  >
                    <skill.icon className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-[var(--violet)]" />
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Soft skills */}
        <Reveal className="mt-5">
          <div className="rounded-3xl border border-border bg-surface/20 p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold text-foreground">
                {t.skills.softTitle}
              </h3>
              <Sparkles className="h-4 w-4 text-[var(--lime)]" />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {t.skills.softItems.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group rounded-2xl border border-border bg-background/30 p-4 transition-all hover:border-[var(--lime)]/30 hover:bg-surface"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background/40 text-[var(--lime)]">
                      <s.icon className="h-3.5 w-3.5" />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {s.title}
                    </h4>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Education + Languages */}
        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Education */}
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-surface/30 p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-[var(--lime)]" />
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {t.skills.educationTitle}
                </h3>
              </div>
              <ul className="mt-6 space-y-4">
                {t.skills.educationItems.map((edu) => (
                  <li
                    key={edu.institution}
                    className="rounded-2xl border border-border bg-background/30 p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {edu.qualification}
                        </p>
                        <p className="text-sm text-[var(--lime)]">{edu.field}</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                        {edu.duration}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Languages */}
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-border bg-surface/30 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LanguagesIcon className="h-4 w-4 text-[var(--lime)]" />
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {t.skills.languagesTitle}
                  </h3>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {t.skills.languagesNote}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {t.skills.languageItems.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-center justify-between rounded-2xl border border-border bg-background/30 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--lime)]/10 font-mono text-[10px] uppercase text-[var(--lime)]">
                        {lang.name.slice(0, 2)}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {lang.name}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          {lang.note}
                        </p>
                      </div>
                    </div>
                    <span className="rounded-md border border-border bg-background/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                      {lang.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
