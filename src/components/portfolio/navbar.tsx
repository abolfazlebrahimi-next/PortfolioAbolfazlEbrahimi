"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/i18n-provider";
import { cn } from "@/lib/utils";
import { BrandAvatar } from "./brand-avatar";
import { LanguageSwitcher } from "./language-switcher";

export function Navbar() {
  const { t } = useI18n();
  const navItems = t.nav.items;

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#home");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = ["home", ...navItems.map((n) => n.href.slice(1))];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          current = id;
          break;
        }
      }
      setActive(`#${current}`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [navItems]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={cn(
            "transition-all duration-500",
            scrolled
              ? "border-b border-border bg-background/70 backdrop-blur-xl"
              : "border-b border-transparent bg-transparent",
          )}
        >
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 sm:px-6">
            <Link
              href="#home"
              className="group flex items-center gap-2.5"
              aria-label="Back to top"
            >
              <BrandAvatar size="md" />
              <span className="hidden flex-col leading-none sm:flex">
                <span className="text-sm font-semibold text-foreground">
                  {t.brand.name}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {t.brand.role}
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                    active === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {active === item.href ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-border bg-surface/70"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  ) : null}
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <LanguageSwitcher compact />
              <Link
                href="#contact"
                className="hidden items-center gap-1.5 rounded-full border border-[var(--lime)]/30 bg-[var(--lime)]/10 px-4 py-2 text-sm font-semibold text-[var(--lime)] transition-all hover:bg-[var(--lime)] hover:text-[var(--lime-foreground)] lg:inline-flex"
              >
                {t.getInTouch}
              </Link>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? t.closeMenu : t.openMenu}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/60 text-foreground md:hidden"
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll progress bar */}
        <motion.div
          style={{ scaleX: progress }}
          className="h-px origin-left bg-gradient-to-r from-[var(--lime)] via-[var(--lime)]/60 to-transparent rtl:origin-right"
        />
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-4 top-24 overflow-hidden rounded-3xl border border-border bg-card/90 p-3 backdrop-blur-xl"
            >
              <ul className="flex flex-col">
                {navItems.map((item, idx) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface"
                    >
                      {item.label}
                      <span className="font-mono text-xs text-muted-foreground">
                        0{idx + 1}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-2 px-1">
                <LanguageSwitcher />
              </div>
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center rounded-2xl bg-[var(--lime)] px-4 py-3 text-base font-semibold text-[var(--lime-foreground)]"
              >
                {t.getInTouch}
              </Link>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
