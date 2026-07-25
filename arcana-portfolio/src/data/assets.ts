/**
 * Central registry of static assets (served from /public).
 * Every image used by the site is referenced through this map so that
 * renaming or re-optimising an asset is a one-line change.
 * Images are pre-optimised WebP (≤1920px wide).
 */
const base = import.meta.env.BASE_URL;

export const assets = {
  audio: { ambientTheme: `${base}audio/ambient-theme.mp3` },
  plates: {
    library: `${base}assets/env-library.webp`,
    forge: `${base}assets/env-forge.webp`,
    guildhall: `${base}assets/env-guildhall.webp`,
    campfire: `${base}assets/env-campfire.webp`,
  },
  portrait: `${base}assets/portrait-akhil.webp`,
  heroes: {
    casey: `${base}assets/casey-hero.webp`,
    tachyon: `${base}assets/tachyon-hero.webp`,
    shiftpartner: `${base}assets/shiftpartner-hero.webp`,
    zymes: `${base}assets/zymes-hero.webp`,
    deutschealigners: `${base}assets/deutsche-hero.webp`,
  },
  screens: {
    caseyEvidence: `${base}assets/casey-evidence-screen.webp`,
    tachyonMobileAi: `${base}assets/tachyon-mobile-ai.webp`,
    tachyonConsoleOnboarding: `${base}assets/tachyon-console-onboarding.webp`,
  },
} as const;
