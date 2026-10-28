"use client";

import { motion } from "framer-motion";
import { AlertCircle, MapPin } from "lucide-react";
import Image from "next/image";
import { useI18n } from "@/i18n/i18n-provider";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { SmartImage } from "./smart-image";

export function Experience() {
  const { t } = useI18n();

  return (
    <section
      id="experience"
      className="relative scroll-mt-24 border-t border-border/50 py-24 sm:py-32"
    >
      {/* subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[var(--lime)]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          description={t.experience.description}
        />

        <div className="relative mt-16">
          {/* Vertical rail */}
          <div
            className="absolute start-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--lime)]/40 via-border to-transparent sm:start-1/2 sm:-translate-x-1/2 rtl:translate-x-1/2"
            aria-hidden
          />

          <ol className="space-y-12 sm:space-y-20">
            {t.experience.jobs.map((job, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li key={job.company} className="relative">
                  <div
                    className={cn(
                      "grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-12",
                      !isLeft && "sm:[direction:rtl]",
                    )}
                  >
                    {/* Date column */}
                    <div className={cn("ps-12 sm:ps-0", !isLeft && "sm:[direction:ltr]")}>
                      <motion.div
                        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className={cn(
                          "flex flex-col gap-1",
                          isLeft
                            ? "sm:items-end sm:text-end"
                            : "sm:items-start sm:text-start",
                        )}
                      >
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--lime)]">
                          {job.dates}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </span>
                        {job.dateNote ? (
                          <span className="mt-2 flex items-start gap-1.5 text-[11px] leading-relaxed text-muted-foreground/80 sm:max-w-[260px]">
                            <AlertCircle className="mt-0.5 h-3 w-3 shrink-0 text-[var(--violet)]" />
                            <span>{job.dateNote}</span>
                          </span>
                        ) : null}
                      </motion.div>
                    </div>

                    {/* Card column */}
                    <div className={cn("ps-12 sm:ps-0", !isLeft && "sm:[direction:ltr]")}>
                      <Reveal>
                        <article className="group relative overflow-hidden rounded-3xl border border-border bg-surface/40 backdrop-blur-sm transition-all hover:border-[var(--lime)]/30 hover:bg-surface">
                          {/* node on the rail */}
                          <span
                            className="absolute left-[-38px] top-7 flex h-3 w-3 items-center justify-center rounded-full border-2 border-[var(--lime)] bg-background sm:left-auto"
                            style={
                              isLeft
                                ? { right: "-38px", left: "auto" }
                                : { left: "-38px" }
                            }
                            aria-hidden
                          >
                            <span className="h-1 w-1 rounded-full bg-[var(--lime)]" />
                          </span>

                          {/* Featured photo banner (full-width) for cards with a photo,
                              otherwise small logo header */}
                          {job.photo ? (
                            <div className="relative">
                              {/* Full-width banner photo */}
                              <SmartImage
                                src={job.photo}
                                alt={job.photoAlt ?? job.company}
                                fill
                                sizes="(max-width: 768px) 100vw, 600px"
                                aspect="21/9"
                                containerClassName="border-b border-border/60"
                                className="object-cover"
                              />
                              {/* gradient veil for legibility */}
                              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                              {/* Floating logo + company chip */}
                              <div className="absolute start-4 bottom-4 z-[5] flex items-center gap-3 rounded-2xl border border-border bg-background/80 px-3 py-2 backdrop-blur-md">
                                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-border bg-white/95 p-1">
                                  <Image
                                    src={job.logo}
                                    alt={`${job.company} logo`}
                                    fill
                                    sizes="36px"
                                    className="object-contain p-1"
                                  />
                                </div>
                                <div>
                                  <h3 className="text-sm font-semibold leading-tight text-foreground">
                                    {job.company}
                                  </h3>
                                  <p className="text-[11px] leading-tight text-muted-foreground">
                                    {job.companyTagline}
                                  </p>
                                </div>
                              </div>
                              {/* Role icon badge */}
                              <div className="absolute end-4 top-4 z-[5] hidden h-9 w-9 items-center justify-center rounded-xl border border-border bg-background/80 text-[var(--lime)] backdrop-blur-md sm:flex">
                                <job.icon className="h-4 w-4" />
                              </div>
                            </div>
                          ) : (
                            <div className="relative flex items-center justify-between gap-4 border-b border-border/60 bg-background/30 px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-border bg-white/95 p-1.5">
                                  <Image
                                    src={job.logo}
                                    alt={`${job.company} logo`}
                                    fill
                                    sizes="44px"
                                    className="object-contain p-1.5"
                                  />
                                </div>
                                <div>
                                  <h3 className="text-base font-semibold text-foreground">
                                    {job.company}
                                  </h3>
                                  <p className="text-xs text-muted-foreground">
                                    {job.companyTagline}
                                  </p>
                                </div>
                              </div>
                              <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background/40 text-[var(--lime)] sm:flex">
                                <job.icon className="h-4 w-4" />
                              </div>
                            </div>
                          )}

                          {/* Body */}
                          <div className="p-6">
                            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                              <span className="text-sm font-medium text-foreground">
                                {job.role}
                              </span>
                              {job.secondaryRole ? (
                                <span className="rounded-full border border-[var(--violet)]/30 bg-[var(--violet)]/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--violet)]">
                                  + {job.secondaryRole}
                                </span>
                              ) : null}
                            </div>

                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                              {job.description}
                            </p>

                            <ul className="mt-4 space-y-2">
                              {job.highlights.map((h) => (
                                <li
                                  key={h}
                                  className="flex items-start gap-2.5 text-sm text-foreground/80"
                                >
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--lime)]" />
                                  <span className="leading-relaxed">{h}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="mt-5 flex flex-wrap gap-1.5">
                              {job.stack.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-md border border-border bg-background/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </article>
                      </Reveal>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
