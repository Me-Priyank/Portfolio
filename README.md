# Priyank — Portfolio

A clean, editorial dark portfolio built with **Next.js (App Router)**, **Tailwind CSS v4**, **Framer Motion** and **Lenis** smooth scroll.

Two routes:

- `/home` — hero, tech marquee, bento "about" grid, selected work
- `/projects` — full project listing

`/` redirects to `/home`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Customise everything from one file

All content lives in [`src/lib/data.ts`](src/lib/data.ts):

- `profile` — name, role, tagline, email, résumé path, photo, intro
- `socials` — your links (GitHub, X, LinkedIn, email)
- `skillGroups` / `marqueeSkills` — the toolkit
- `projects` — title, year, blurb, stack, image, link for each project
- `stats` — the little number badges

Replace the placeholder social URLs and tailor the project titles/descriptions
to your real work. Swap images in [`public/work/`](public/work) and the portrait
at [`public/profile-cut.jpg`](public).

## Design notes

- **Fonts:** Rejouice Headline (display), Instrument Serif (italic accents),
  Geist (body), Geist Mono (labels) — wired up in [`src/app/layout.tsx`](src/app/layout.tsx).
- **Tokens / utilities:** [`src/app/globals.css`](src/app/globals.css)
  (colors, grain, marquee, spotlight helpers).
- Accent color `#ffc83d` intentionally echoes the portrait's backdrop.
- Respects `prefers-reduced-motion`.
