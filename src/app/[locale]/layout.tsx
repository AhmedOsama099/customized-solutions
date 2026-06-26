import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import {
  Space_Grotesk,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
  Tajawal,
} from "next/font/google";
import "../globals.css";
import { LOCALES, type Locale, isLocale, getDir } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

const fontVars = `${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable} ${tajawal.variable}`;

export const viewport: Viewport = {
  themeColor: "#5b6cff",
  colorScheme: "light",
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safe: Locale = isLocale(locale) ? locale : "en";
  const dict = getDictionary(safe);

  return {
    metadataBase: new URL(SITE.url),
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: [
      "software studio",
      "product studio",
      "custom software",
      "web development",
      "multi-tenant platform",
      "Mihna",
    ],
    alternates: {
      canonical: `/${safe}`,
      languages: {
        en: "/en",
        ar: "/ar",
        "x-default": "/en",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.ogDescription,
      url: `/${safe}`,
      siteName: SITE.name,
      locale: safe === "ar" ? "ar_EG" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: dict.meta.ogDescription,
    email: SITE.email,
    sameAs: [SITE.portfolio],
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE.email,
      telephone: `+${SITE.whatsapp}`,
      contactType: "sales",
    },
  };

  return (
    <html lang={locale} dir={getDir(locale)} className={fontVars}>
      <body>
        <a
          href="#top"
          className="sr-only rounded-full bg-accent px-4 py-2 font-semibold text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]"
        >
          {dict.a11y.skip}
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
