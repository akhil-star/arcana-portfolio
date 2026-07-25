# Arcana — Dr Akhil Biju · UX / Product Designer Portfolio

A fantasy-themed interactive portfolio ("the Arcana") rebuilt from a single-file
Claude Design export into a production-ready **React 18 + TypeScript + Vite**
codebase. Five flagship case studies told as a journey across floating realms,
with a Three.js starfield, cinematic travel transitions, an ambient soundtrack
and a collect-every-card secret chapter.

## Quick start

```bash
npm install
npm run dev        # local dev server (http://localhost:5173)
npm run build      # type-check + production build → dist/
npm run preview    # serve the production build locally

## Developer

- Run linters: `npm run lint`
- Auto-fix lintable issues: `npm run lint:fix`
- Format with Prettier: `npm run format`

I ran `npm run lint:fix` and applied Prettier-compatible fixes to source files.
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages,
plain nginx). `vite.config.ts` uses `base: "./"`, so the build works from the
domain root **or** any sub-path with no configuration.

## Project structure

```
public/
  assets/            optimised WebP imagery (≤1920px, ~2 MB total)
  audio/             ambient-theme.mp3
src/
  data/              ALL site content lives here (edit these to change copy)
    profile.ts       name, hero copy, about, contact, social links
    projects.ts      the five flagship "arcana" cards
    caseStudies/     one .tsx file per case study + block types + SVG art
    subProjects.ts   the six Zymes ecosystem modules
    productWorlds.ts supporting projects grid
    experience.ts    roles + education
    skills.ts        skill groups
    realms.ts        world-map islands + travel paths
    assets.ts        central registry of every static asset path
  styles/            design system (tokens.css is the source of truth)
  animations/        the motion system (variants.ts) + Reveal + overlays
  components/        HUD, cursor, cards, shared ornamental primitives
  sections/          one component per destination (Landing, Crossroads, …)
  caseStudies/       CaseStudyView — the data-driven case study template
  hooks/             app state (travel/visited/motion/sound), ambient FX, audio
  three/             Starfield background + per-destination camera moods
```

## Where to edit what

| Change                       | File(s)                                             |
| ---------------------------- | --------------------------------------------------- |
| Colours, fonts, spacing      | `src/styles/tokens.css` (+ `src/styles/tokens.ts`)  |
| Hero / about / contact copy  | `src/data/profile.ts`                               |
| Case study text & structure  | `src/data/caseStudies/<name>.tsx`                   |
| Add a case study             | see `AGENTS.md` → "Adding a case study"             |
| Animation timing & easing    | `src/animations/variants.ts`, `TRAVEL_TIMING` in `src/hooks/useAppState.tsx` |
| Images                       | drop into `public/assets/`, register in `src/data/assets.ts` |
| Experience / skills          | `src/data/experience.ts`, `src/data/skills.ts`      |

## Architecture decisions

**Modular token-based CSS instead of Tailwind.** The Arcana design system is
highly bespoke — ornamental panels, a fanned tarot deck, gate transitions,
gold line-art. Recreating it in utility classes would trade a readable,
1:1-faithful stylesheet for thousands of class strings. Instead, all design
values live in `tokens.css` custom properties; every stylesheet and JS
consumer (Three.js, SVG art) reads from that single source, so re-theming is
a one-file change.

**Framer Motion replaces GSAP.** All choreography — the landing entrance,
deck deal-in, island rise, fog / gates / portal travel — is expressed as
centralized variants (`src/animations/variants.ts`) plus a small imperative
layer for overlays. One animation library, one timing table
(`TRAVEL_TIMING`), consistent easing everywhere.

**Travel is a tiny state machine, not scattered flags.** `useAppState`
owns the current location, a travel lock, the travel kind (fog / gates /
portal / quest) and the visited set. Sections mount/unmount through
`AnimatePresence` while the overlay layers run the theatre in parallel from
the same timing constants.

**The original `image-slot.js` was removed.** It is a Claude-Design-runtime
web component (drag-to-fill placeholders persisted to a sidecar file) that
does not function outside that environment. It's replaced by a plain
`<ImageSlot>` React component with lazy loading.

## Performance

- Images converted to optimised WebP (30 MB of PNGs → ~2 MB) and lazy-loaded.
- `three` is code-split into its own chunk (only needed for the background).
- Starfield density halves on touch devices; the render loop never triggers
  React re-renders (refs + a mutable camera-target module).
- Sparkles, embers and shooting stars are transient DOM nodes, outside React.

## Accessibility

- `prefers-reduced-motion` honoured everywhere (CSS kill-switch + every
  Framer entrance + the Three.js drift), plus a manual motion toggle in the
  HUD.
- All interactive elements are real `<button>`/`<a>` elements with labels;
  visible `:focus-visible` outlines; Escape returns from a case study.
- The fancy cursor and heavy particle counts disable on touch devices.

## Browser support

Modern evergreen browsers. If WebGL is unavailable the background falls back
to a static gradient and the site remains fully usable.
