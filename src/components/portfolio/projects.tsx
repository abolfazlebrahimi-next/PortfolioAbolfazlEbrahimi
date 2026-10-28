"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Smartphone } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/i18n/i18n-provider";
import type { Translation } from "@/i18n";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

function ProjectCard({
  project,
  index,
  visitAria,
  androidLabel,
  webLabel,
}: {
  project: Translation["projects"]["items"][number];
  index: number;
  visitAria: (title: string) => string;
  androidLabel: string;
  webLabel: string;
}) {
  const accentClass =
    project.accent === "lime" ? "text-[var(--lime)]" : "text-[var(--violet)]";

  const accentBg =
    project.accent === "lime" ? "bg-[var(--lime)]/10" : "bg-[var(--violet)]/10";

  const accentBorder =
    project.accent === "lime"
      ? "group-hover:border-[var(--lime)]/30"
      : "group-hover:border-[var(--violet)]/30";

  const isLarge = project.size === "large";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-surface/30 p-6 backdrop-blur-sm transition-all sm:p-8",
        "hover:bg-surface/60",
        accentBorder,
        isLarge && "lg:col-span-2 lg:row-span-2",
      )}
    >
      {/* hover glow */}
      <div
        className={cn(
          "pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 rtl:-left-12 rtl:right-auto",
          accentBg,
        )}
      />

      <div className="relative flex h-full flex-col">
        {/* Top row: icon + index */}
        <div className="flex items-start justify-between gap-4">
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background/60",
              accentClass,
            )}
          >
            <project.icon className="h-5 w-5" />
          </div>
          <div className="flex items-center gap-3">
            {project.badge ? (
              <span
                className={cn(
                  "rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em]",
                  project.accent === "lime"
                    ? "border-[var(--lime)]/30 bg-[var(--lime)]/10 text-[var(--lime)]"
                    : "border-[var(--violet)]/30 bg-[var(--violet)]/10 text-[var(--violet)]",
                )}
              >
                {project.badge}
              </span>
            ) : null}
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              0{index + 1}
            </span>
          </div>
        </div>

        {/* Title + tagline */}
        <div className="mt-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-border bg-background/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {project.company}
            </span>
          </div>
          <h3
            className={cn(
              "mt-3 font-display font-semibold tracking-tight text-foreground",
              isLarge ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl",
            )}
          >
            {project.title}
          </h3>
          <p className={cn("mt-1.5 text-sm", accentClass)}>{project.tagline}</p>
        </div>

        {/* Description */}
        <p
          className={cn(
            "mt-4 text-sm leading-relaxed text-muted-foreground",
            isLarge ? "sm:text-base" : "",
          )}
        >
          {project.description}
        </p>

        {/* Highlights (large only) */}
        {isLarge ? (
          <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 rounded-xl border border-border/60 bg-background/30 p-3 text-sm text-foreground/80"
              >
                <span
                  className={cn(
                    "mt-1 h-1 w-1 shrink-0 rounded-full",
                    project.accent === "lime"
                      ? "bg-[var(--lime)]"
                      : "bg-[var(--violet)]",
                  )}
                />
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="mt-4 space-y-2">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-sm text-foreground/80"
              >
                <span
                  className={cn(
                    "mt-1.5 h-1 w-1 shrink-0 rounded-full",
                    project.accent === "lime"
                      ? "bg-[var(--lime)]"
                      : "bg-[var(--violet)]",
                  )}
                />
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Spacer to push footer down */}
        <div className="flex-1" />

        {/* Footer: stack + links */}
        <div className="mt-6 space-y-3 border-t border-border/60 pt-4">
          {/* Stack tags */}
          <div className="flex flex-wrap items-center gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-background/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-2">
            {project.url ? (
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={visitAria(project.title)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
                  project.accent === "lime"
                    ? "border-[var(--lime)]/30 bg-[var(--lime)]/10 text-[var(--lime)] hover:bg-[var(--lime)] hover:text-[var(--lime-foreground)]"
                    : "border-[var(--violet)]/30 bg-[var(--violet)]/10 text-[var(--violet)] hover:bg-[var(--violet)] hover:text-white",
                )}
              >
                <ExternalLink className="h-3 w-3" />
                <span>{webLabel}</span>
                <span className="font-mono opacity-70">{project.urlLabel}</span>
              </Link>
            ) : null}

            {project.androidLinks?.map((al) => (
              <Link
                key={al.url}
                href={al.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${androidLabel}: ${al.label} — ${project.title}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:border-foreground/20 hover:bg-surface"
              >
                <Smartphone className="h-3 w-3 text-muted-foreground" />
                <span className="text-muted-foreground">{androidLabel}</span>
                <span>{al.label}</span>
                <ArrowUpRight className="h-3 w-3 text-muted-foreground rtl:rotate-[-90deg]" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const { t } = useI18n();

  return (
    <section
      id="work"
      className="relative scroll-mt-24 border-t border-border/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            description={t.projects.description}
          />
          <Reveal delay={0.1}>
            <Link
              href="https://github.com/abolfazlebrahimi-next"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-[var(--lime)]/40 hover:text-[var(--lime)]"
            >
              {t.projects.seeMoreOnGithub}
              <ArrowUpRight className="h-3.5 w-3.5 rtl:rotate-[-90deg]" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
          {t.projects.items.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              index={i}
              visitAria={t.projects.visitAria}
              androidLabel={t.projects.androidLabel}
              webLabel={t.projects.webLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
