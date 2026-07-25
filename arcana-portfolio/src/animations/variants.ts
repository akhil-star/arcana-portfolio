import type { Variants, Transition } from 'framer-motion';
import { motionTokens } from '@/styles/tokens';
import type { TravelKind } from '@/hooks/useAppState';
import { TRAVEL_TIMING } from '@/hooks/useAppState';

/**
 * The motion system. Every reusable animation lives here so timing,
 * easing and stagger stay consistent across the whole portfolio.
 * Components should import variants from this file instead of writing
 * their own inline animation objects.
 */

const ease = motionTokens.easeStandard;

/* ---------- generic entrance/reveal primitives ---------- */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTokens.durations.reveal, ease },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease } },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 12 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

/** Parent container that staggers its children. */
export const staggerChildren = (
  stagger = 0.1,
  delayChildren = 0,
): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

/* ---------- landing hero entrance ---------- */

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export const heroName: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease },
  },
};

export const heroStage: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

/* ---------- Arcana Hall deck deal-in ---------- */

export const dealCard: Variants = {
  hidden: { opacity: 0, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease },
  },
};

/* ---------- Crossroads islands ---------- */

export const islandRise: Variants = {
  hidden: { opacity: 0, y: 34, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease },
  },
};

/* ---------- destination (stage section) transitions ---------- */

/**
 * How a destination enters/exits per travel kind. The overlay layers
 * (fog / gates / portal burst) run in parallel — see TravelOverlays.
 */
export const destinationVariants: Variants = {
  enter: () => ({ opacity: 0 }),
  active: (kind: TravelKind) => ({
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: TRAVEL_TIMING.reveal[kind] * 0.8, ease },
  }),
  exit: (kind: TravelKind) =>
    kind === 'gates'
      ? // the departure zoom already played (see Crossroads); by now the
        // gates are shut, so the unmount itself can be instant
        { opacity: 0, transition: { duration: 0.15 } }
      : {
          opacity: 0,
          transition: { duration: TRAVEL_TIMING.cover[kind] * 0.7, ease },
        },
};

/* ---------- shared viewport config for scroll reveals ---------- */

export const revealViewport = {
  once: true,
  amount: motionTokens.viewportAmount,
} as const;

export const springSnappy: Transition = {
  type: 'spring',
  stiffness: 320,
  damping: 26,
};
