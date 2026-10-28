import type { LucideIcon } from "lucide-react";

// ============================================================
//  Locale metadata — order matters (fa, en, az, it, ar)
// ============================================================
export type Locale = "fa" | "en" | "az" | "it" | "ar";

export const locales: Locale[] = ["fa", "en", "az", "it", "ar"];

export const localeMeta: {
  code: Locale;
  nativeName: string;
  englishName: string;
  flag: string;
  dir: "rtl" | "ltr";
}[] = [
  { code: "fa", nativeName: "فارسی", englishName: "Persian", flag: "IR", dir: "rtl" },
  { code: "en", nativeName: "English", englishName: "English", flag: "EN", dir: "ltr" },
  { code: "az", nativeName: "Azərbaycan", englishName: "Azerbaijani", flag: "AZ", dir: "ltr" },
  { code: "it", nativeName: "Italiano", englishName: "Italian", flag: "IT", dir: "ltr" },
  { code: "ar", nativeName: "العربية", englishName: "Arabic", flag: "AR", dir: "rtl" },
];

export const DEFAULT_LOCALE: Locale = "fa";

export const getDir = (locale: Locale): "rtl" | "ltr" =>
  localeMeta.find((m) => m.code === locale)?.dir ?? "ltr";

// ============================================================
//  Static (locale-independent) personal/contact data
// ============================================================
export const personalStatic = {
  email: "abolfazlebrahimi.next@gmail.com",
  phone: "09935377426",
  phoneDisplay: "+98 993 537 7426",
  birthYear: "2005",
  github: "https://github.com/abolfazlebrahimi-next",
  githubDisplay: "github.com/abolfazlebrahimi-next",
  linkedin: "https://www.linkedin.com/in/abolfazl-ebrahimi-2752933b3",
  linkedinDisplay: "in/abolfazl-ebrahimi",
  telegram: "https://t.me/abolfazlebrahimi_next",
  telegramDisplay: "@abolfazlebrahimi_next",
  instagram: "https://instagram.com/abolfazlebrahimi_next",
  instagramDisplay: "@abolfazlebrahimi_next",
};

// Locations per locale (city names stay readable to locale speakers)
// Personal address is Alborz, Iran (per owner's request)
export const locationByLocale: Record<Locale, string> = {
  fa: "البرز، ایران",
  en: "Alborz, Iran",
  az: "Əlbürz, İran",
  it: "Alborz, Iran",
  ar: "البرز، إيران",
};

// Icon type helpers
type IconType = LucideIcon;

// ============================================================
//  Translation contract — every locale MUST satisfy this shape
// ============================================================
export interface Translation {
  meta: {
    htmlLang: string;
    title: string;
    description: string;
  };

  personal: {
    name: string;
    role: string;
  };

  nav: { items: { label: string; href: string }[] };
  brand: { name: string; role: string };
  getInTouch: string;
  openMenu: string;
  closeMenu: string;

  hero: {
    availability: string;
    nameLabel: string;
    headline: string;
    headlineAccent: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
    portraitAlt: string;
    portraitChipRole: string;
    portraitChipLocation: string;
  };

  about: {
    eyebrow: string;
    title: string;
    description: string;
    intro: string;
    para2: string;
    emailCta: string;
    strengths: { title: string; description: string; icon: IconType }[];
  };

  experience: {
    eyebrow: string;
    title: string;
    description: string;
    locationLabel: string;
    jobs: {
      company: string;
      companyTagline: string;
      role: string;
      secondaryRole?: string;
      location: string;
      dates: string;
      dateNote?: string;
      description: string;
      highlights: string[];
      stack: string[];
      icon: IconType;
      logo: string;
      photo?: string;
      photoAlt?: string;
    }[];
  };

  projects: {
    eyebrow: string;
    title: string;
    description: string;
    seeMoreOnGithub: string;
    visitAria: (title: string) => string;
    androidLabel: string;
    webLabel: string;
    items: {
      title: string;
      company: string;
      tagline: string;
      description: string;
      highlights: string[];
      stack: string[];
      url?: string;
      urlLabel?: string;
      androidLinks?: { label: string; url: string }[];
      badge?: string;
      accent: "lime" | "violet";
      icon: IconType;
      size: "large" | "regular";
    }[];
  };

  skills: {
    eyebrow: string;
    title: string;
    description: string;
    frontendTitle: string;
    frontendTag: string;
    toolsTitle: string;
    toolsTag: string;
    softTitle: string;
    educationTitle: string;
    languagesTitle: string;
    frontendItems: { name: string; icon: IconType }[];
    toolItems: { name: string; icon: IconType }[];
    softItems: { title: string; description: string; icon: IconType }[];
    educationItems: {
      qualification: string;
      field: string;
      institution: string;
      duration: string;
      icon: IconType;
    }[];
    languageItems: { name: string; level: string; note: string }[];
  };

  contact: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaTelegram: string;
    ctaInstagram: string;
    labels: {
      email: string;
      phone: string;
      github: string;
      location: string;
      telegram: string;
      instagram: string;
    };
    copy: string;
    copied: string;
  };

  footer: {
    tagline: string;
    navigation: string;
    connect: string;
    copyright: string;
    builtWith: string;
    backToTop: string;
    ariaEmail: string;
    ariaGithub: string;
    ariaLinkedin: string;
    ariaBackToTop: string;
  };
}

// ============================================================
//  Tech stack chips (locale-independent brand names)
// ============================================================
export const techStackChips = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
];
