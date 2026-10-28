import type { Locale, Translation } from "./types";
import { fa, en } from "./locales-fa-en";
import { az, it, ar } from "./locales-az-it-ar";

// Re-export everything from types.ts
export * from "./types";

// Compile-time locale map
export const translations: Record<Locale, Translation> = { fa, en, az, it, ar };
