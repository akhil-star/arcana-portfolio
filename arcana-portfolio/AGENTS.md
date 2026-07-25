# AGENTS.md — guide for AI coding assistants

This file tells AI tools (Claude Code, Cursor, Copilot, …) how to work on
this codebase safely and effectively. Read it before making changes.

## What this project is

"Arcana" — a fantasy-themed single-page portfolio for Dr Akhil Biju
(UX / Product Designer). React 18 + TypeScript (strict) + Vite +
framer-motion + three. No router (navigation is a custom "travel" state
machine), no CSS framework (token-based modular CSS), no test suite.

Verify any change with:

```bash
npm run build   # tsc -b (strict, noUnusedLocals/Parameters) + vite build
```

A change is not done until `npm run build` passes with zero errors.

## Core architecture (mental model)

1. **Content is data.** Every word and image on the site lives in
   `src/data/`. Components are dumb renderers. To change what the site
   *says*, edit data files; to change how it *looks*, edit `src/styles/`;
   to change how it *moves*, edit `src/animations/` + `TRAVEL_TIMING`.
2. **One destination at a time.** `useAppState` (src/hooks/useAppState.tsx)
   holds `location` (`{ dest, projectId? }`). `App.tsx → Stage` renders the
   matching section inside `AnimatePresence`. `travelTo(location, { kind })`
   is the ONLY way to navigate. Travel kinds: `fog` (default), `gates`
   (crossroads → realm), `portal` (card → case study), `quest`
   (landing → crossroads).
3. **Overlay theatre runs in parallel.** `TravelOverlays.tsx` animates the
   fog wash / gates / portal ring using the same `TRAVEL_TIMING` constants
   that the destination variants use. If you change one side's timing,
   change the constant, not a local number.
4. **The Three.js background never re-renders React.** It reads a mutable
   `cameraTarget` (src/three/cameraMood.ts) each frame; `travelTo` updates
   it. Keep it that way — no React state in the render loop.

## Conventions

- **Design tokens**: colours/spacing/type/easing live in
  `src/styles/tokens.css` and are mirrored for JS in `src/styles/tokens.ts`.
  Never hard-code a brand colour in a component; use `var(--…)` or the
  token mirror. (The SVG illustration library intentionally embeds a few
  literal status colours matching the tokens — keep them in sync.)
- **Animation**: reusable variants belong in `src/animations/variants.ts`.
  Don't write inline animation objects in components unless the animation
  is truly one-off. Scroll reveals use the `<Reveal>` wrapper.
- **Reduced motion**: any new animation must no-op when
  `useAppState().reducedMotion` is true (Reveal and the ambient hooks
  already handle this — follow their pattern).
- **Imperative DOM effects** (sparkles, embers, portal rings) are allowed
  only for transient particles, and live in `src/utils/` or the ambient
  hooks — never inside render bodies.
- **Styling**: global classnames, one CSS file per feature area, imported
  via `src/styles/index.css` (order matters: tokens → base → areas).
- Path alias `@/*` → `src/*`.

## Recipes

### Add a case study
1. Add the project card to `src/data/projects.ts` (`projects` +
   `projectOrder`). Pick an icon id from `ArcanaIconId` (or add one in
   `src/components/icons/ArcanaIcons.tsx`).
2. Create `src/data/caseStudies/<id>.tsx` exporting a `CaseStudy`
   (see `types.ts` for the block union — paragraph, note, flow, flowDuo,
   pidr, statusRow, baGrid, principles, illustration, image, ndaVisual,
   ecoGrid). Copy an existing study as a template.
3. Register it in `src/data/caseStudies/index.ts`.
4. If it needs artwork: WebP into `public/assets/`, path into
   `src/data/assets.ts`; new abstract SVG drawings go in
   `src/data/caseStudies/illustrations.ts` using the bar/frame/dot/lbl
   primitives.
   That's it — the deck, collect-track, randomizer, next-case chain and
   secret unlock all derive from `projectOrder`.

### Add a content block type
Extend the `CaseBlock` union in `src/data/caseStudies/types.ts`, then add a
case to the `Block` switch in `src/caseStudies/CaseStudyView.tsx` (the
compiler will point at the non-exhaustive switch).

### Add a destination (realm)
Add the key to `DestKey` (useAppState), a camera mood in
`src/three/cameraMood.ts`, a section component in `src/sections/`, a case in
`Stage` (App.tsx), a compass entry in `src/components/Hud.tsx`, and — if it
should appear on the world map — an island in `src/data/realms.ts`.

## Do NOT

- Do not add a router; the travel state machine *is* the navigation.
- Do not bypass `travelTo` (e.g. setting location state directly) — you'd
  skip the overlay choreography, camera mood and visited tracking.
- Do not introduce Tailwind or CSS-in-JS; the token-based CSS is a
  deliberate decision (see README → Architecture decisions).
- Do not feed user input into the SVG illustration strings rendered with
  `dangerouslySetInnerHTML` — they are safe only because they're static.
- Do not add heavy dependencies for small utilities; the dependency
  surface (react, framer-motion, three) is intentionally small.
- Do not rename the `#`-id hooks used by CSS (`#compass`, `#collect-track`,
  `#fog-transition`, `#gates`, `#cursor-dot`, `dest-<name>` ids, …) without
  updating the stylesheets.

## Content & tone

The site's voice is a fantasy travelogue ("realms", "chapters", "draw a
card"). Keep new copy in that register. Case-study prose is professional
UX writing inside that frame — don't flatten it into generic marketing
text, and don't invent project facts: several projects are under NDA and
the abstract illustrations exist precisely so nothing confidential is
shown.
