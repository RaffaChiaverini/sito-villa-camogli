import type { Locale, SiteContent } from "../types";
import { en } from "./en";
import { it } from "./it";
import { fr } from "./fr";
import { es } from "./es";

export const defaultLocale: Locale = "en";
export const locales = ["en", "it", "fr", "es"] as const satisfies readonly Locale[];

export const localeNames: Readonly<Record<Locale, string>> = {
  en: "English",
  it: "Italiano",
  fr: "Français",
  es: "Español",
};

export const siteContent: Readonly<Record<Locale, SiteContent>> = {
  en,
  it,
  fr,
  es,
};

export function localeHref(locale: Locale, base: string, suffix = ""): string {
  const root = locale === defaultLocale ? base : `${base}${locale}/`;
  return `${root}${suffix}`;
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getSiteContent(locale: Locale = defaultLocale): SiteContent {
  return siteContent[locale];
}

export { en, it, fr, es };
