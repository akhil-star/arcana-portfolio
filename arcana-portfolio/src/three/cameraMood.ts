import type { DestKey } from '@/hooks/useAppState';

/**
 * Per-destination camera "mood" — a subtle dolly + fog change that
 * sells the sense of travel. The Starfield render loop lerps toward
 * these targets; travelTo() updates them via setCameraMood().
 */
export interface CameraMood {
  z: number;
  fog: number;
}

const MOODS: Record<DestKey, CameraMood> = {
  landing: { z: 18, fog: 0.028 },
  crossroads: { z: 30, fog: 0.016 },
  arcana: { z: 15, fog: 0.024 },
  library: { z: 20, fog: 0.032 },
  forge: { z: 16, fog: 0.03 },
  guildhall: { z: 17, fog: 0.026 },
  campfire: { z: 13, fog: 0.036 },
  case: { z: 19, fog: 0.03 },
  secret: { z: 11, fog: 0.02 },
};

/** Mutable target read by the Starfield render loop every frame. */
export const cameraTarget: CameraMood & { snap: boolean } = {
  ...MOODS.landing,
  snap: false,
};

export function setCameraMood(dest: DestKey, snap: boolean) {
  const mood = MOODS[dest];
  cameraTarget.z = mood.z;
  cameraTarget.fog = mood.fog;
  cameraTarget.snap = snap;
}
