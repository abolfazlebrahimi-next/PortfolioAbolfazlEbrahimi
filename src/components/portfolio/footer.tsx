import { ArrowUp, Github, Linkedin, Mail, Phone, Send, ShieldCheck } from "lucide-react";
import Link from "@/components/link";
import { useI18n } from "@/i18n/i18n-provider";
import { personalStatic } from "@/i18n";
import { BrandAvatar } from "./brand-avatar";
import { useState } from "react";

export function Footer() {
  const { t } = useI18n();
  const [enamadLogoFailed, setEnamadLogoFailed] = useState(false);
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

          {/* Socials and official Enamad trust seal */}
          <div className="flex flex-col gap-5">
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
                href={`tel:${personalStatic.phone}`}
                aria-label={`${t.contact.ctaPhone} — ${personalStatic.phoneDisplay}`}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface/40 text-muted-foreground transition-all hover:border-[var(--lime)]/40 hover:text-[var(--lime)]"
              >
                <Phone className="h-4 w-4" />
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
            <a
              referrerPolicy="origin"
              target="_blank"
              rel="noopener noreferrer"
              href="https://trustseal.enamad.ir/?id=8688749&Code=FyUAMBMLkMw4RljEcgU0SUz7tEimqwXX"
              aria-label="مشاهده نماد اعتماد الکترونیکی اینماد"
              className="inline-block w-fit"
            >
              {!enamadLogoFailed ? (
                <img
                  referrerPolicy="origin"
                  src="https://trustseal.enamad.ir/logo.aspx?id=8688749&Code=FyUAMBMLkMw4RljEcgU0SUz7tEimqwXX"
                  alt=""
                  style={{ cursor: "pointer" }}
                  {...{ code: "FyUAMBMLkMw4RljEcgU0SUz7tEimqwXX" }}
                  onError={() => setEnamadLogoFailed(true)}
                />
              ) : (
                <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/40 px-3 py-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-[var(--lime)]" />
                  نماد اعتماد الکترونیکی
                </span>
              )}
            </a>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center border-t border-border/60 pt-6">
          <Link
            href="#home"
            aria-label={t.footer.ariaBackToTop}
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-4 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-[var(--lime)]/40 hover:text-[var(--lime)]"
          >
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            {t.footer.backToTop}
          </Link>
        </div>
      </div>
    </footer>
  );
}
