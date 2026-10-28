"use client";

import { ArrowUp, Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/i18n/i18n-provider";
import { personalStatic } from "@/i18n";
import { BrandAvatar } from "./brand-avatar";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  const navItems = t.nav.items;

  return (
    <footer className="relative mt-auto border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          {/* Brand */}
          <div className="max-w-md">
            <Link href="#home" className="group inline-flex items-center gap-2.5">
              <BrandAvatar size="md" />
              <span className="flex flex-col leading-none">
                <span className="text-sm font-semibold text-foreground">
                  {t.brand.name}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {t.brand.role}
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick nav */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {t.footer.navigation}
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {t.footer.connect}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href={personalStatic.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface/40 text-muted-foreground transition-all hover:border-[var(--lime)]/40 hover:text-[var(--lime)]"
              >
                <Send className="h-4 w-4 rtl:scale-x-[-1]" />
              </Link>
              <Link
                href={personalStatic.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface/40 text-muted-foreground transition-all hover:border-[var(--lime)]/40 hover:text-[var(--lime)]"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href={`mailto:${personalStatic.email}`}
                aria-label={t.footer.ariaEmail}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface/40 text-muted-foreground transition-all hover:border-[var(--lime)]/40 hover:text-[var(--lime)]"
              >
                <Mail className="h-4 w-4" />
              </Link>
              <Link
                href={personalStatic.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.footer.ariaGithub}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface/40 text-muted-foreground transition-all hover:border-[var(--lime)]/40 hover:text-[var(--lime)]"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href={personalStatic.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.footer.ariaLinkedin}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface/40 text-muted-foreground transition-all hover:border-[var(--lime)]/40 hover:text-[var(--lime)]"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {year} {t.brand.name}. {t.footer.copyright}
          </p>
          <div className="flex items-center gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {t.footer.builtWith}
            </p>
            <Link
              href="#home"
              aria-label={t.footer.ariaBackToTop}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface/40 text-muted-foreground transition-all hover:border-[var(--lime)]/40 hover:text-[var(--lime)]"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
