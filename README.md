# Customized — software, tailored to fit.

Marketing site for **Customized**, a product studio that designs and ships
software end-to-end. Mihna (our platform for professional websites) is the
flagship product featured on the site.

Built with **Next.js 15** (App Router) · **React 19** · **TypeScript** ·
**Tailwind CSS v4**.

## Stack

- Next.js 15 (App Router, server components)
- Tailwind CSS v4 with CSS-variable design tokens (see `src/app/globals.css`)
- `next/font` for Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono
  (labels) and Tajawal (Arabic)
- `lucide-react` icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script              | Description                     |
| ------------------- | ------------------------------- |
| `npm run dev`       | Start the dev server            |
| `npm run build`     | Production build                |
| `npm run start`     | Serve the production build      |
| `npm run typecheck` | Type-check with `tsc --noEmit`  |
| `npm run lint`      | Lint with `next lint`           |

## Structure

```
src/
  app/
    layout.tsx     # fonts + metadata
    page.tsx       # the full landing page (sections as components)
    globals.css    # Tailwind v4 + design tokens
    icon.svg       # favicon (Customized "C" mark)
  components/
    marks.tsx      # CustomizedMark + MihnaMark brand SVGs
  lib/
    cn.ts          # className joiner
```

## Notes

- The contact address (`hello@customized.dev`) and the Mihna link
  (`https://malafpro.com`) live as constants at the top of
  `src/app/page.tsx` — change them there.
- Design tokens (indigo accent, surfaces, type scale) are defined once in
  `globals.css` under `@theme`.
