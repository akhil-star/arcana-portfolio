import { useEffect, useRef } from 'react';
import { useAppState } from '@/hooks/useAppState';
import { spawnSparkle } from '@/utils/sparkles';

/**
 * Fancy cursor — a gold dot that tracks the pointer exactly, a ring
 * that lags behind it, and an occasional sparkle trail. Disabled on
 * touch devices (body.no-fancy-cursor restores the native cursor).
 * All movement is done through refs + rAF; no React re-renders.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const { reducedMotion } = useAppState();
  const reducedRef = useRef(reducedMotion);
  reducedRef.current = reducedMotion;

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) {
      document.body.classList.add('no-fancy-cursor');
      return;
    }
    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;
    let rx = cx;
    let ry = cy;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      cx = e.clientX;
      cy = e.clientY;
      dot.style.left = `${cx}px`;
      dot.style.top = `${cy}px`;
      const hoverable = (e.target as HTMLElement | null)?.closest?.(
        "button, a, [role='button']",
      );
      dot.classList.toggle('hover', !!hoverable);
      ring.classList.toggle('hover', !!hoverable);
      if (Math.random() < 0.12 && !reducedRef.current) spawnSparkle(cx, cy);
    };
    const ringLoop = () => {
      rx += (cx - rx) * 0.16;
      ry += (cy - ry) * 0.16;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      raf = requestAnimationFrame(ringLoop);
    };
    const onDown = () => {
      ring.classList.add('press');
      setTimeout(() => ring.classList.remove('press'), 220);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    raf = requestAnimationFrame(ringLoop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('pointerdown', onDown);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div id="cursor-ring" ref={ringRef} aria-hidden="true" />
      <div id="sparkle-layer" aria-hidden="true" />
    </>
  );
}

/** Decorative fixed layers: the hoverable constellation + rune line. */
export function AtmosphereDecor() {
  return (
    <>
      <svg id="constellation" viewBox="0 0 220 160" aria-hidden="true">
        <g>
          <line className="c-line" x1={20} y1={120} x2={70} y2={60} />
          <line className="c-line" x1={70} y1={60} x2={130} y2={40} />
          <line className="c-line" x1={130} y1={40} x2={190} y2={70} />
          <line className="c-line" x1={70} y1={60} x2={110} y2={110} />
          <circle className="c-dot" cx={20} cy={120} r={2.4} />
          <circle
            className="c-dot"
            cx={70}
            cy={60}
            r={2.8}
            style={{ animationDelay: '.4s' }}
          />
          <circle
            className="c-dot"
            cx={130}
            cy={40}
            r={2.2}
            style={{ animationDelay: '.9s' }}
          />
          <circle
            className="c-dot"
            cx={190}
            cy={70}
            r={2.6}
            style={{ animationDelay: '1.3s' }}
          />
          <circle
            className="c-dot"
            cx={110}
            cy={110}
            r={2.2}
            style={{ animationDelay: '.6s' }}
          />
        </g>
      </svg>
      <span id="rune-line" aria-hidden="true">
        <span className="rune-dot" />
      </span>
    </>
  );
}
