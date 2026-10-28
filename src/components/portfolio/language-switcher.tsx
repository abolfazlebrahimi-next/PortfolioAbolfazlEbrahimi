"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/i18n-provider";
import { localeMeta, type Locale } from "@/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current =
    localeMeta.find((m) => m.code === locale) ?? localeMeta[0];

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const pick = (code: Locale) => {
    setLocale(code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className={cn(
          "inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-3 py-2 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-[var(--lime)]/40 hover:bg-surface",
          compact && "px-2.5 py-1.5",
        )}
      >
        <Globe className="h-3.5 w-3.5 text-[var(--lime)]" />
        <span className="font-medium">{current.nativeName}</span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-muted-foreground transition-transform",
            open && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            role="listbox"
            className="absolute end-0 mt-2 w-52 overflow-hidden rounded-2xl border border-border bg-card/95 p-1.5 shadow-2xl backdrop-blur-xl"
            style={{ zIndex: 60 }}
          >
            {localeMeta.map((m) => {
              const isActive = m.code === locale;
              return (
                <li key={m.code} role="option" aria-selected={isActive}>
                  <button
                    type="button"
                    onClick={() => pick(m.code)}
                    className={cn(
                      "group flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-start text-sm transition-colors",
                      isActive
                        ? "bg-surface text-foreground"
                        : "text-muted-foreground hover:bg-surface/70 hover:text-foreground",
                    )}
                  >
                    <span className="flex flex-col items-start">
                      <span className="font-medium">{m.nativeName}</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        {m.englishName} · {m.dir.toUpperCase()}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "flex h-5 w-5 items-center justify-center rounded-full border transition-all",
                        isActive
                          ? "border-[var(--lime)] bg-[var(--lime)]/10 text-[var(--lime)]"
                          : "border-border text-transparent",
                      )}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                  </button>
                </li>
              );
            })}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
