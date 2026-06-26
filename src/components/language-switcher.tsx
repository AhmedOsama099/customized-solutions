"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { type Locale, LOCALES, otherLocale } from "@/i18n/config";

type Props = {
  locale: Locale;
  label: string;
  aria: string;
  className?: string;
};

/**
 * Links to the same path under the other locale by swapping the first segment.
 * Falls back to the locale root if no segment is present.
 */
export function LanguageSwitcher({ locale, label, aria, className }: Props) {
  const pathname = usePathname();
  const target = otherLocale(locale);

  const segments = (pathname ?? `/${locale}`).split("/");
  if (LOCALES.includes(segments[1] as Locale)) {
    segments[1] = target;
  } else {
    segments.splice(1, 0, target);
  }
  const href = segments.join("/") || `/${target}`;

  return (
    <Link
      href={href}
      hrefLang={target}
      aria-label={aria}
      className={className}
    >
      <Languages size={15} strokeWidth={2} aria-hidden="true" />
      {label}
    </Link>
  );
}
