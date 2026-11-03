import { motion } from "framer-motion";
import { AlertCircle, MapPin } from "lucide-react";
import type { Translation } from "@/i18n";
import Image from "@/components/image";
import { useI18n } from "@/i18n/i18n-provider";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { SmartImage } from "./smart-image";

type Job = Translation["experience"]["jobs"][number];

/** Small date/meta block shown next to the card on desktop. */
function JobMeta({ job, alignEnd }: { job: Job; alignEnd: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: alignEnd ? 16 : -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "hidden flex-col gap-1 sm:flex",
        alignEnd ? "sm:items-end sm:text-end" : "sm:items-start sm:text-start",
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
        <span className="mt-2 flex max-w-[260px] items-start gap-1.5 text-[11px] leading-relaxed text-muted-foreground/80">
          <AlertCircle className="mt-0.5 h-3 w-3 shrink-0 text-[var(--violet)]" />
          <span>{job.dateNote}</span>
        </span>
      ) : null}
    </motion.div>
  );
}

/** Mobile-only date row rendered inside the card (roadmap step header). */
function JobMetaInline({ job, step }: { job: Job; step: string }) {
  return (
    <div className="flex flex-col gap-2 border-b border-border/60 bg-background/30 px-5 py-4 sm:hidden">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--lime)]">
          {job.dates}
        </span>
        <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-[var(--lime)]/30 bg-[var(--lime)]/10 px-1.5 font-mono text-[10px] font-semibold text-[var(--lime)]">
          {step}
        </span>
      </div>
      <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
        <MapPin className="h-3 w-3" />
        {job.location}
      </span>
      {job.dateNote ? (
        <span className="flex items-start gap-1.5 text-[11px] leading-relaxed text-muted-foreground/80">
          <AlertCircle className="mt-0.5 h-3 w-3 shrink-0 text-[var(--violet)]" />
          <span>{job.dateNote}</span>
        </span>
      ) : null}
    </div>
  );
}

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

        <div className="relative mt-12 sm:mt-16">
          {/* Vertical rail — roadmap spine on mobile, centered timeline on desktop */}
          <div
            className="absolute bottom-6 start-3 top-2 w-px bg-gradient-to-b from-[var(--lime)] via-[var(--lime)]/25 to-transparent sm:start-1/2 sm:w-px sm:via-border"
            aria-hidden
          />

          <ol className="space-y-8 sm:space-y-20">
            {t.experience.jobs.map((job, i) => {
              const isLeft = i % 2 === 0;
              const step = String(i + 1).padStart(2, "0");

              return (
                <li key={job.company} className="relative">
                  {/* Roadmap node */}
                  <span
                    className="absolute start-0 top-8 z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[var(--lime)] bg-background shadow-[0_0_0_4px_rgba(15,17,19,0.9)] sm:start-1/2 sm:top-7 sm:-translate-x-1/2 rtl:sm:translate-x-1/2"
                    aria-hidden
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--lime)]" />
                  </span>

                  <div className="grid grid-cols-1 gap-4 ps-10 sm:grid-cols-2 sm:items-start sm:gap-12 sm:ps-0">
                    {/* Desktop date column (mobile date lives inside the card) */}
                    <div
                      className={cn(
                        isLeft
                          ? "sm:order-1 sm:pe-10"
                          : "sm:order-2 sm:ps-10",
                      )}
                    >
                      <JobMeta job={job} alignEnd={isLeft} />
                    </div>

                    {/* Card */}
                    <div
                      className={cn(
                        "min-w-0",
                        isLeft ? "sm:order-2" : "sm:order-1",
                      )}
                    >
                      <Reveal>
                        <article className="group relative overflow-hidden rounded-3xl border border-border bg-surface/40 backdrop-blur-sm transition-all hover:border-[var(--lime)]/30 hover:bg-surface">
                          {/* Mobile roadmap header */}
                          <JobMetaInline job={job} step={step} />

                          {job.photo ? (
                            <div className="relative">
                              {/* Bigger, clearly visible banner on mobile */}
                              <SmartImage
                                src={job.photo}
                                alt={job.photoAlt ?? job.company}
                                fill
                                sizes="(max-width: 768px) 100vw, 600px"
                                containerClassName="aspect-[16/10] border-b border-border/60 sm:aspect-[21/9]"
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                              />
                              {/* gradient veil for legibility */}
                              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />

                              {/* Floating logo + company chip */}
                              <div className="absolute inset-x-4 bottom-4 z-[5] flex items-center gap-3 rounded-2xl border border-border bg-background/80 px-3 py-2 backdrop-blur-md sm:inset-x-auto sm:start-4">
                                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-border bg-white/95 p-1">
                                  <Image
                                    src={job.logo}
                                    alt={`${job.company} logo`}
                                    fill
                                    sizes="36px"
                                    className="object-contain p-1"
                                  />
                                </div>
                                <div className="min-w-0">
                                  <h3 className="text-sm font-semibold leading-tight text-foreground">
                                    {job.company}
                                  </h3>
                                  <p className="truncate text-[11px] leading-tight text-muted-foreground">
                                    {job.companyTagline}
                                  </p>
                                </div>
                                <div className="ms-auto hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background/80 text-[var(--lime)] sm:flex">
                                  <job.icon className="h-4 w-4" />
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="relative flex items-center justify-between gap-4 border-b border-border/60 bg-background/30 px-5 py-4 sm:px-6">
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
                          <div className="p-5 sm:p-6">
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

                            <ul className="mt-4 space-y-2.5">
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
