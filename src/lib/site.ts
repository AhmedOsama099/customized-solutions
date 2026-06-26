/**
 * Single source of truth for site-wide constants: the canonical URL and all
 * contact destinations. Imported by the page, metadata, sitemap and tests.
 */
export const SITE = {
  name: "Customized Solutions",
  /** Canonical production URL. Override with NEXT_PUBLIC_SITE_URL at build time. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://customized-solutions.vercel.app").replace(
    /\/$/,
    "",
  ),
  email: "ahmedeng099@gmail.com",
  /** Digits only, international format — used for the wa.me deep link. */
  whatsapp: "201011494459",
  portfolio: "https://ahmedosamadev.vercel.app",
  mihna: "https://portfolio-model-peach.vercel.app/mihna",
} as const;

export const mailtoHref = `mailto:${SITE.email}`;
export const whatsappHref = `https://wa.me/${SITE.whatsapp}`;
