import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import type { ProjectId } from '@/data/types';
import { projectOrder } from '@/data/projects';
import { setCameraMood } from '@/three/cameraMood';

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

/** Static destinations. Case studies are `{ dest: "case", projectId }`. */
export type DestKey =
  | 'landing'
  | 'crossroads'
  | 'arcana'
  | 'library'
  | 'forge'
  | 'guildhall'
  | 'campfire'
  | 'secret'
  | 'case';

export interface AppLocation {
  dest: DestKey;
  projectId?: ProjectId;
}

/**
 * How a travel is staged visually:
 * - "fog"    — fog wash crossfade (default; compass, buttons)
 * - "gates"  — realm gates close/part (crossroads → realm)
 * - "portal" — golden ring burst from a card (deck / randomizer)
 * - "quest"  — the Begin Quest reveal (landing → crossroads)
 */
export type TravelKind = 'fog' | 'gates' | 'portal' | 'quest';

interface TravelOptions {
  kind?: TravelKind;
  /** Screen-space origin for portal/quest bursts. */
  origin?: { x: number; y: number };
}

interface AppState {
  location: AppLocation;
  traveling: boolean;
  travelKind: TravelKind;
  travelTo: (loc: AppLocation, opts?: TravelOptions) => void;
  /** Case studies the visitor has opened (unlocks the secret realm). */
  visited: ReadonlySet<ProjectId>;
  secretUnlocked: boolean;
  /** Effective reduced-motion (OS preference OR manual toggle). */
  reducedMotion: boolean;
  toggleMotion: () => void;
  soundOn: boolean;
  toggleSound: () => void;
  /** Use the cinematic Three.js transition effect (toggleable) */
  useTransitionFX: boolean;
  toggleTransitionFX: () => void;
}

/* ------------------------------------------------------------------ */
/* Timing — single source of truth for the travel choreography         */
/* ------------------------------------------------------------------ */
export const TRAVEL_TIMING = {
  /** Overlay covers the screen, old destination fades beneath it. */
  cover: { fog: 0.5, gates: 0.6, portal: 0.55, quest: 0.9 },
  /** Overlay clears, new destination revealed. */
  reveal: { fog: 0.5, gates: 1.1, portal: 0.5, quest: 0.7 },
} as const;

/* ------------------------------------------------------------------ */

const AppStateContext = createContext<AppState | null>(null);

const prefersReducedQuery = '(prefers-reduced-motion: reduce)';

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<AppLocation>({ dest: 'landing' });
  const [traveling, setTraveling] = useState(false);
  const [travelKind, setTravelKind] = useState<TravelKind>('fog');
  const [visited, setVisited] = useState<ReadonlySet<ProjectId>>(new Set());

  const [osReduced, setOsReduced] = useState(
    () => window.matchMedia(prefersReducedQuery).matches,
  );
  const [manualReduced, setManualReduced] = useState(false);
  const reducedMotion = osReduced || manualReduced;

  const [soundOn, setSoundOn] = useState(
    () => localStorage.getItem('arcana-sound') !== 'off',
  );

  const [useTransitionFX, setUseTransitionFX] = useState(
    () => localStorage.getItem('arcana-transitions') !== 'off',
  );

  const watchdog = useRef<number>();

  /* Track the OS reduced-motion preference live. */
  useEffect(() => {
    const mq = window.matchMedia(prefersReducedQuery);
    const onChange = () => setOsReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  /* Reflect state on <body> for CSS hooks (HUD quieting, motion kill). */
  useEffect(() => {
    document.body.classList.toggle('on-landing', location.dest === 'landing');
  }, [location.dest]);
  useEffect(() => {
    document.body.classList.toggle('reduced-motion', manualReduced);
  }, [manualReduced]);

  const travelingRef = useRef(false);
  const travelTo = useCallback(
    (loc: AppLocation, opts?: TravelOptions) => {
      if (travelingRef.current) return; // ignore clicks mid-travel
      travelingRef.current = true;
      setTraveling(true);

      const kind: TravelKind = reducedMotion ? 'fog' : (opts?.kind ?? 'fog');
      setTravelKind(kind);

      const coverMs = reducedMotion ? 0 : TRAVEL_TIMING.cover[kind] * 1000;
      const revealMs = reducedMotion ? 0 : TRAVEL_TIMING.reveal[kind] * 1000;

      // Swap the destination once the overlay has covered the screen.
      window.setTimeout(() => {
        setLocation(loc);
        setCameraMood(loc.dest, reducedMotion);
        if (loc.dest === 'case' && loc.projectId) {
          setVisited((prev) =>
            prev.has(loc.projectId!) ? prev : new Set(prev).add(loc.projectId!),
          );
        }
      }, coverMs);

      // Release the travel lock after the reveal completes (+ margin).
      window.clearTimeout(watchdog.current);
      watchdog.current = window.setTimeout(
        () => {
          travelingRef.current = false;
          setTraveling(false);
        },
        coverMs + revealMs + 250,
      );
    },
    [reducedMotion],
  );

  /* Escape from a case study returns to the Arcana Hall. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && location.dest === 'case')
        travelTo({ dest: 'arcana' });
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [location.dest, travelTo]);

  const toggleMotion = useCallback(() => setManualReduced((v) => !v), []);
  const toggleSound = useCallback(() => {
    setSoundOn((v) => {
      localStorage.setItem('arcana-sound', v ? 'off' : 'on');
      return !v;
    });
  }, []);

  const toggleTransitionFX = useCallback(() => {
    setUseTransitionFX((v) => {
      localStorage.setItem('arcana-transitions', v ? 'off' : 'on');
      return !v;
    });
  }, []);

  const secretUnlocked = visited.size === projectOrder.length;

  const value = useMemo<AppState>(
    () => ({
      location,
      traveling,
      travelKind,
      travelTo,
      visited,
      secretUnlocked,
      reducedMotion,
      toggleMotion,
      soundOn,
      toggleSound,
      useTransitionFX,
      toggleTransitionFX,
    }),
    [
      location,
      traveling,
      travelKind,
      travelTo,
      visited,
      secretUnlocked,
      reducedMotion,
      toggleMotion,
      soundOn,
      toggleSound,
      useTransitionFX,
      toggleTransitionFX,
    ],
  );

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState(): AppState {
  const ctx = useContext(AppStateContext);
  if (!ctx)
    throw new Error('useAppState must be used within <AppStateProvider>');
  return ctx;
}
