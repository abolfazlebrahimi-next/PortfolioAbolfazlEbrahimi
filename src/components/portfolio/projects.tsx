import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Clock,
  Globe,
  Lock,
  Smartphone,
} from "lucide-react";
import { useState } from "react";
import Link from "@/components/link";
import { useI18n } from "@/i18n/i18n-provider";
import type { Translation } from "@/i18n";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const PAGE_SIZE = 3;

type Project = Translation["projects"]["items"][number];

function ProjectCard({
  project,
  index,
  labels,
}: {
  project: Project;
  index: number;
  labels: {
    visitAria: (title: string) => string;
    androidLabel: string;
    webLabel: string;
    noPublicLink: string;
  };
}) {
  const isLime = project.accent === "lime";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index % PAGE_SIZE, 2) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface/30 p-5 backdrop-blur-sm transition-colors hover:bg-surface/60 sm:p-6",
        isLime
          ? "hover:border-[var(--lime)]/30"
          : "hover:border-[var(--violet)]/30",
      )}
    >
      {/* hover glow */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -end-12 -top-12 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100",
          isLime ? "bg-[var(--lime)]/10" : "bg-[var(--violet)]/10",
        )}
      />

      <div className="relative flex h-full flex-col">
        {/* Icon + company */}
        <div className="flex items-start justify-between gap-3">
          <div
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-background/60",
              isLime ? "text-[var(--lime)]" : "text-[var(--violet)]",
            )}
          >
            <project.icon className="h-5 w-5" />
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2">
            {project.badge ? (
              <span
                className={cn(
                  "rounded-full border px-2.5 py-1 text-[10px] font-medium",
                  isLime
                    ? "border-[var(--lime)]/30 bg-[var(--lime)]/10 text-[var(--lime)]"
                    : "border-[var(--violet)]/30 bg-[var(--violet)]/10 text-[var(--violet)]",
                )}
              >
                {project.badge}
              </span>
            ) : null}
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="mt-5">
          <span className="rounded-full border border-border bg-background/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            {project.company}
          </span>
          <h3 className="mt-2.5 font-display text-xl font-semibold leading-snug tracking-tight text-foreground">
            {project.title}
          </h3>
          <p
            className={cn(
              "mt-1 text-[13px]",
              isLime ? "text-[var(--lime)]" : "text-[var(--violet)]",
            )}
          >
            {project.tagline}
          </p>
        </div>

        {/* Short description */}
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Stack */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-background/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Push actions to the bottom */}
        <div className="flex-1" />

        {/* Actions */}
        <div className="mt-5 space-y-2.5 border-t border-border/60 pt-4">
          {project.url ? (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={labels.visitAria(project.title)}
              className={cn(
                "flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-semibold shadow-lg transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isLime
                  ? "bg-[var(--lime)] text-[var(--lime-foreground)] shadow-[var(--lime)]/20 focus-visible:ring-[var(--lime)]"
                  : "bg-[var(--violet)] text-white shadow-[var(--violet)]/20 focus-visible:ring-[var(--violet)]",
              )}
            >
              <span className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                {labels.webLabel}
              </span>
              <span className="flex min-w-0 items-center gap-1 font-mono text-[11px] font-normal opacity-80">
                <span className="truncate">{project.urlLabel}</span>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 rtl:rotate-[-90deg]" />
              </span>
            </Link>
          ) : (
            <div className="flex w-full items-center gap-2 rounded-xl border border-dashed border-border bg-background/20 px-4 py-3 text-[13px] text-muted-foreground">
              <Lock className="h-3.5 w-3.5 shrink-0" />
              {labels.noPublicLink}
            </div>
          )}

          {project.androidLinks?.length ? (
            <div className="flex flex-wrap gap-2">
              {project.androidLinks.map((android) =>
                android.url ? (
                  <Link
                    key={`${android.label}-${android.url}`}
                    href={android.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${labels.androidLabel}: ${android.label} — ${project.title}`}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-background/50 px-3 py-2 text-xs font-medium text-foreground transition-all hover:border-foreground/25 hover:bg-surface"
                  >
                    <Smartphone className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {labels.androidLabel}:
                    </span>
                    {android.label}
                    <ArrowUpRight className="h-3 w-3 text-muted-foreground rtl:rotate-[-90deg]" />
                  </Link>
                ) : (
                  <span
                    key={android.label}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-dashed border-border bg-background/20 px-3 py-2 text-xs text-muted-foreground"
                  >
                    <Clock className="h-3.5 w-3.5 text-[var(--violet)]" />
                    <span>{android.label}</span>
                    {android.note ? (
                      <span className="opacity-80">· {android.note}</span>
                    ) : null}
                  </span>
                ),
              )}
            </div>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const { t } = useI18n();
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const items = t.projects.items;
  const visible = items.slice(0, visibleCount);
  const remaining = items.length - visible.length;

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

        <div className="mt-12 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
              index={index}
              labels={{
                visitAria: t.projects.visitAria,
                androidLabel: t.projects.androidLabel,
                webLabel: t.projects.webLabel,
                noPublicLink: t.projects.noPublicLink,
              }}
            />
          ))}
        </div>

        {/* Show more */}
        {remaining > 0 ? (
          <div className="mt-10 flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/50 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-[var(--lime)]/40 hover:bg-surface hover:text-[var(--lime)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lime)]/50"
            >
              {t.projects.showMore}
              <span className="rounded-full bg-[var(--lime)]/15 px-2 py-0.5 font-mono text-[11px] text-[var(--lime)]">
                {remaining}
              </span>
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
            <span
              dir="ltr"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
            >
              {visible.length} / {items.length}
            </span>
          </div>
        ) : null}
      </div>
    </section>
  );
}
