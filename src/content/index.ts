import type { Locale, SiteContent } from "../types";
import { en } from "./en";
import { it } from "./it";

export const defaultLocale: Locale = "en";
export const locales = ["en", "it"] as const satisfies readonly Locale[];

export const siteContent: Readonly<Record<Locale, SiteContent>> = {
  en,
  it,
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getSiteContent(locale: Locale = defaultLocale): SiteContent {
  return siteContent[locale];
}

export { en, it };
