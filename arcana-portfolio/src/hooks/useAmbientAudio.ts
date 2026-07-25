import { useEffect, useRef } from 'react';
import { assets } from '@/data/assets';
import { useAppState } from './useAppState';

const TARGET_VOLUME = 0.3;

/**
 * Ambient theme — a looping soundtrack that starts on the first user
 * interaction (browser autoplay policy), fades in/out smoothly, pauses
 * when the tab is hidden, and follows the sound toggle in the HUD.
 */
export function useAmbientAudio() {
  const { soundOn } = useAppState();
  const audioRef = useRef<HTMLAudioElement>();
  const startedRef = useRef(false);
  const soundOnRef = useRef(soundOn);
  soundOnRef.current = soundOn;
  const fadeFrame = useRef(0);

  /* Create the audio element once. */
  useEffect(() => {
    const theme = new Audio(assets.audio.ambientTheme);
    theme.loop = true;
    theme.volume = 0;
    audioRef.current = theme;
    return () => {
      cancelAnimationFrame(fadeFrame.current);
      theme.pause();
      theme.src = '';
    };
  }, []);

  const fadeTo = (to: number, ms: number) => {
    const theme = audioRef.current;
    if (!theme) return;
    cancelAnimationFrame(fadeFrame.current);
    const from = theme.volume;
    const t0 = performance.now();
    const step = () => {
      const k = Math.min(1, (performance.now() - t0) / ms);
      theme.volume = from + (to - from) * k;
      if (k < 1) fadeFrame.current = requestAnimationFrame(step);
      else if (to === 0) theme.pause();
    };
    step();
  };

  /* Start on first pointer interaction. */
  useEffect(() => {
    const start = () => {
      if (startedRef.current || !soundOnRef.current) return;
      audioRef.current
        ?.play()
        .then(() => {
          startedRef.current = true;
          fadeTo(TARGET_VOLUME, 2500);
        })
        .catch(() => {
          /* autoplay blocked — the toggle can start it later */
        });
    };
    window.addEventListener('pointerdown', start, { once: true });
    return () => window.removeEventListener('pointerdown', start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Follow the sound toggle. */
  useEffect(() => {
    const theme = audioRef.current;
    if (!theme) return;
    if (soundOn) {
      theme
        .play()
        .then(() => {
          startedRef.current = true;
          fadeTo(TARGET_VOLUME, 1200);
        })
        .catch(() => {});
    } else if (startedRef.current) {
      fadeTo(0, 900);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [soundOn]);

  /* Pause while the tab is hidden. */
  useEffect(() => {
    const onVis = () => {
      const theme = audioRef.current;
      if (!theme || !startedRef.current || !soundOnRef.current) return;
      if (document.hidden) theme.pause();
      else theme.play().catch(() => {});
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);
}
