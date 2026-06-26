export const LOCALES = ["en", "ar"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function getDir(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}

/** The opposite locale — used by the language switcher. */
export function otherLocale(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}
