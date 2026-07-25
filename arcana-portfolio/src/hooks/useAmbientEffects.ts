import { useEffect } from 'react';
import { useAppState } from './useAppState';

/**
 * Ambient world effects, all DOM-imperative and render-free:
 * - shooting stars on a random interval
 * - realm particles (embers for warm realms, dust motes for archives)
 * - magnetic pull on .btn / .quest-btn (pointer devices only)
 */
export function useAmbientEffects() {
  const { location, reducedMotion } = useAppState();

  /* Shooting stars */
  useEffect(() => {
    if (reducedMotion) return;
    let timer: number;
    const spawn = () => {
      if (!document.hidden) {
        const s = document.createElement('div');
        s.className = 'shooting-star';
        s.style.left = `${55 + Math.random() * 35}vw`;
        s.style.top = `${5 + Math.random() * 30}vh`;
        s.style.rotate = `${160 + Math.random() * 14}deg`;
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 1400);
      }
      timer = window.setTimeout(spawn, 9000 + Math.random() * 9000);
    };
    timer = window.setTimeout(spawn, 6000);
    return () => window.clearTimeout(timer);
  }, [reducedMotion]);

  /* Realm particles — embers (forge, campfire) / dust (library, guildhall) */
  useEffect(() => {
    if (reducedMotion) return;
    const warm = location.dest === 'forge' || location.dest === 'campfire';
    const dusty = location.dest === 'library' || location.dest === 'guildhall';
    if (!warm && !dusty) return;

    const interval = window.setInterval(() => {
      if (document.hidden) return;
      const p = document.createElement('div');
      const size = 2 + Math.random() * 3;
      p.className = warm ? 'ember' : 'dustmote';
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${15 + Math.random() * 70}vw`;
      p.style.setProperty('--dx', `${Math.random() * 80 - 40}px`);
      const dur = warm ? 4 + Math.random() * 3 : 7 + Math.random() * 4;
      p.style.animationDuration = `${dur}s`;
      if (warm) p.style.bottom = '-8px';
      else p.style.top = `${10 + Math.random() * 40}vh`;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), dur * 1000 + 200);
    }, 550);
    return () => window.clearInterval(interval);
  }, [location.dest, reducedMotion]);

  /* Magnetic buttons — gentle pull toward the cursor */
  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch || reducedMotion) return;
    let magnetEl: HTMLElement | null = null;
    const onMove = (e: PointerEvent) => {
      const m = (e.target as HTMLElement | null)?.closest?.(
        '.quest-btn, .btn',
      ) as HTMLElement | null;
      if (magnetEl && magnetEl !== m) {
        magnetEl.style.translate = '';
        magnetEl = null;
      }
      if (!m) return;
      magnetEl = m;
      const r = m.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      m.style.translate = `${(dx * 6).toFixed(1)}px ${(dy * 4).toFixed(1)}px`;
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      document.removeEventListener('pointermove', onMove);
      if (magnetEl) magnetEl.style.translate = '';
    };
  }, [reducedMotion]);
}
