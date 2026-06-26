import type { MetadataRoute } from "next";
import { LOCALES } from "@/i18n/config";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    LOCALES.map((locale) => [locale, `${SITE.url}/${locale}`]),
  );

  return LOCALES.map((locale) => ({
    url: `${SITE.url}/${locale}`,
    lastModified: new Date("2026-06-26"),
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: { languages },
  }));
}
