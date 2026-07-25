import { useEffect, useRef } from 'react';

export function useTransitionAudio(enabled = true) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    try {
      const a = new Audio('/audio/transition.mp3');
      a.preload = 'auto';
      audioRef.current = a;
    } catch (e) {
      audioRef.current = null;
    }
  }, []);

  function play() {
    if (!enabled) return;
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = 0;
    // best-effort play; browsers may block if not user-initiated
    a.play().catch(() => {});
  }

  return { play };
}
