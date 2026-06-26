# Customized Solutions — software, tailored to fit.

Bilingual (English / Arabic) marketing site for **Customized Solutions**, a
product studio that designs and ships software end-to-end. Mihna (our platform
for professional websites) is the flagship product featured on the site.

Built with **Next.js 15** (App Router) · **React 19** · **TypeScript** ·
**Tailwind CSS v4** · **Vitest**.

## Highlights

- **Bilingual + RTL** — `/en` and `/ar` are statically generated, with proper
  `lang`/`dir`, Tajawal for Arabic, and RTL-mirrored arrows. Copy lives in a
  typed dictionary (`src/i18n/dictionaries.ts`) where English is the source of
  truth and every other locale must match its shape at compile time.
- **SEO** — per-locale metadata, `hreflang` alternates + canonical, Open Graph
  / Twitter cards, `sitemap.xml`, `robots.txt`, a web manifest, and
  Organization JSON-LD.
- **Accessibility** — skip link, visible focus rings, semantic landmarks,
  labelled icons, RTL-aware layout, and reduced-motion support.
- **Security** — CSP + `X-Frame-Options`, `X-Content-Type-Options`,
  `Referrer-Policy`, `Permissions-Policy`, and HSTS headers (see
  `next.config.ts`); `poweredByHeader` disabled.
- **Performance** — fully static, self-hosted fonts via `next/font` (no layout
  shift), no client JS beyond the small language switcher.

## Getting started

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL to your real domain
npm run dev                  # http://localhost:3000  (redirects to /en)
```

## Scripts

| Script              | Description                          |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start the dev server                 |
| `npm run build`     | Production build (static `/en`,`/ar`)|
| `npm run start`     | Serve the production build           |
| `npm run typecheck` | Type-check with `tsc --noEmit`       |
| `npm run test`      | Run the Vitest suite                 |
| `npm run lint`      | Lint with `next lint`                |

## Structure

```
src/
  app/
    [locale]/
      layout.tsx     # html lang/dir, fonts, metadata, JSON-LD, skip link
      page.tsx       # the full landing page (sections as components)
    globals.css      # Tailwind v4 + design tokens + Arabic font overrides
    icon.svg         # favicon (Customized module-grid mark)
    robots.ts · sitemap.ts · manifest.ts
  components/
    marks.tsx                # CustomizedMark, MihnaMark, WhatsAppIcon
    language-switcher.tsx    # client component, swaps the locale segment
  i18n/
    config.ts        # locales, dir(), helpers
    dictionaries.ts  # EN + AR copy (typed for parity)
  lib/
    site.ts          # canonical URL + contact destinations
    cn.ts            # className joiner
```

## Configuration

- **Canonical URL** — set `NEXT_PUBLIC_SITE_URL` (used by metadata, `hreflang`,
  sitemap, robots, JSON-LD). Defaults to a Vercel placeholder.
- **Contact / links** — email, WhatsApp, portfolio and the Mihna URL live in
  `src/lib/site.ts`.

## Security notes

`npm audit` reports a few advisories that are **not exploitable for this
deployed site**: the `esbuild`/`vite`/`vitest` items are dev-server tooling
only (never shipped), and the `postcss` item is transitive inside Next's own
build toolchain — npm's suggested "fix" is a Next downgrade, so it's left
pinned. All CSS is first-party, so there is no untrusted-input path.
