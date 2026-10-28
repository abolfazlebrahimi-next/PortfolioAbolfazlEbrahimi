"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  getDir,
  localeMeta,
  translations,
  type Locale,
  type Translation,
} from "./index";

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translation;
  dir: "rtl" | "ltr";
  isRtl: boolean;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "portfolio-locale";

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && (localeMeta.some((m) => m.code === stored) as boolean)) {
      return stored as Locale;
    }
  } catch {
    /* ignore */
  }
  return DEFAULT_LOCALE;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  // Always start from the default to keep SSR + first paint consistent.
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  // After hydration, switch to the stored preference (if any).
  // This is intentional: the first paint must match SSR (which uses the
  // default), and we then upgrade to the persisted user choice.
  useEffect(() => {
    const stored = readStoredLocale();
    if (stored !== DEFAULT_LOCALE) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocaleState(stored);
    }
  }, []);

  // Apply <html lang> + <html dir> + body font class whenever locale changes.
  useEffect(() => {
    const dir = getDir(locale);
    const html = document.documentElement;
    html.lang = locale;
    html.setAttribute("dir", dir);
    // Font class switching for proper Arabic/Persian rendering
    html.classList.toggle("font-rtl", dir === "rtl");
    html.classList.toggle("font-ltr", dir === "ltr");
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<I18nContextValue>(() => {
    const dir = getDir(locale);
    return {
      locale,
      setLocale,
      t: translations[locale],
      dir,
      isRtl: dir === "rtl",
    };
  }, [locale, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used inside <I18nProvider>");
  }
  return ctx;
}
