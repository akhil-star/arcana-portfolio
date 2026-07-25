import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';
import { TRAVEL_TIMING, useAppState } from '@/hooks/useAppState';
import { useTransitionAudio } from '@/hooks/useTransitionAudio';

/**
 * Full-screen travel overlays. All three layers are permanently mounted
 * and idle at opacity 0 / off-screen; the choreography is driven
 * imperatively (framer-motion `animate`) whenever a travel starts, using
 * the same TRAVEL_TIMING constants as the destination variants so the
 * cover/reveal phases stay in sync.
 */
export function TravelOverlays() {
  const { traveling, travelKind, reducedMotion } = useAppState();
  const fogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!traveling) return;
    const fog = fogRef.current!;

    const { play } = useTransitionAudio();

    if (reducedMotion) return; // instant swap, no theatre

    if (travelKind === 'gates') {
      // legacy DOM-driven gates choreography (restore original behavior)
      const gates = document.getElementById('gates');
      if (!gates) return;
      const left = gates.querySelector('.gate-l') as HTMLElement | null;
      const right = gates.querySelector('.gate-r') as HTMLElement | null;
      const seam = gates.querySelector('.gate-seam') as HTMLElement | null;
      const cover = TRAVEL_TIMING.cover.gates;
      const reveal = TRAVEL_TIMING.reveal.gates;

      // initial positions (off-screen)
      if (left) left.style.transform = 'translateX(-101%) rotateY(0deg)';
      if (right) right.style.transform = 'translateX(101%) rotateY(0deg)';
      if (seam) seam.style.opacity = '0';

      // play transition SFX when gates begin to close
      try { play(); } catch {}

      // close
      if (left) {
        animate(
          left,
          {
            transform: [
              'translateX(-101%) rotateY(0deg)',
              'translateX(0%) rotateY(0deg)',
            ],
          },
          { duration: cover * 0.92, ease: 'easeInOut' },
        );
      }
      if (right) {
        animate(
          right,
          {
            transform: [
              'translateX(101%) rotateY(0deg)',
              'translateX(0%) rotateY(0deg)',
            ],
          },
          { duration: cover * 0.92, ease: 'easeInOut' },
        );
      }
      if (seam)
        animate(
          seam,
          { opacity: [0, 1] },
          { duration: 0.35, delay: cover * 0.5 },
        );

      // open
      const openDelay = cover + 0.22;
      if (seam)
        animate(
          seam,
          { opacity: [1, 0] },
          { duration: 0.48, delay: openDelay, ease: 'easeOut' },
        );
      if (left) {
        animate(
          left,
          {
            transform: [
              'translateX(0%) rotateY(0deg)',
              'translateX(-120%) rotateY(14deg)',
            ],
          },
          { duration: reveal, delay: openDelay, ease: 'easeOut' },
        );
      }
      if (right) {
        animate(
          right,
          {
            transform: [
              'translateX(0%) rotateY(0deg)',
              'translateX(120%) rotateY(-14deg)',
            ],
          },
          { duration: reveal, delay: openDelay, ease: 'easeOut' },
        );
      }
      return;
    } else {
      // fog / portal / quest all use the fog wash (portal & quest add a
      // ring burst at the click origin — see burstPortalRing below).
      const cover = TRAVEL_TIMING.cover[travelKind];
      const reveal = TRAVEL_TIMING.reveal[travelKind];
      animate(fog, { opacity: [0, 1] }, { duration: cover, ease: 'easeInOut' });
      animate(
        fog,
        { opacity: 0 },
        { duration: reveal, delay: cover + 0.1, ease: 'easeInOut' },
      );
    }
  }, [traveling, travelKind, reducedMotion]);

  return (
    <>
      <div id="fog-transition" ref={fogRef} aria-hidden="true" />
      <div id="portal-burst" aria-hidden="true" />
      {/* Restored original static gates markup; choreography is driven
          imperatively in the effect above so we don't mount a motion
          component here. */}
      <div id="gates" aria-hidden="true">
        <div
          className="gate gate-l"
          style={{
            transform: 'translateX(-101%)',
            transformStyle: 'preserve-3d',
          }}
        />
        <div
          className="gate gate-r"
          style={{
            transform: 'translateX(101%)',
            transformStyle: 'preserve-3d',
          }}
        />
        <div className="gate-seam" style={{ opacity: 0 }} />
      </div>
    </>
  );
}

/**
 * Fire a golden ring burst at a screen position (portal travels,
 * Begin Quest). Imperative on purpose: it's a transient DOM effect that
 * should never cause a React re-render.
 */
export function burstPortalRing(x: number, y: number, maxSize = 900) {
  const host = document.getElementById('portal-burst');
  if (!host) return;
  const ring = document.createElement('div');
  ring.className = 'ring';
  ring.style.left = `${x}px`;
  ring.style.top = `${y}px`;
  ring.style.width = '20px';
  ring.style.height = '20px';
  host.appendChild(ring);
  animate(
    ring,
    { width: `${maxSize}px`, height: `${maxSize}px`, opacity: [1, 0] },
    { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  ).then(() => ring.remove());
}
