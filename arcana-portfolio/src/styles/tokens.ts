/**
 * TypeScript mirror of the CSS design tokens (src/styles/tokens.css).
 * Use these when a value is needed in JS — the Three.js scene, SVG
 * illustration builders, canvas drawing. Keep in sync with tokens.css.
 */
export const colors = {
  bgNight: '#0b0f14',
  surface1: '#121620',
  surface2: '#1e2532',
  surface3: '#2a3342',
  indigo: '#3b4656',
  indigoBright: '#5c6b82',
  indigoDeep: '#2a3342',
  goldPrimary: '#d4af37',
  goldHighlight: '#f1d79a',
  goldMuted: '#8f6b2e',
  textPrimary: '#f4efe1',
  textSecondary: '#b8bdc7',
  textTertiary: '#78808e',
  statusOk: '#8fb89a',
  statusRisk: '#e8a87c',
  statusPartial: '#f1d79a',
  statusNa: 'rgba(120,128,142,.8)',
} as const;

/** Shared motion timings for JS-driven animation (Framer Motion). */
export const motionTokens = {
  easeStandard: [0.4, 0, 0.2, 1] as const,
  easeOvershoot: [0.34, 1.56, 0.64, 1] as const,
  durations: { fast: 0.2, base: 0.32, reveal: 0.95, travel: 0.5 },
  stagger: { cards: 0.06, islands: 0.13, hero: 0.12 },
  viewportAmount: 0.12,
} as const;
