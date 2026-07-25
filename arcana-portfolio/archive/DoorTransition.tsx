import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { TRAVEL_TIMING } from '@/hooks/useAppState';
import TransitionFX from '@/three/TransitionFX';

type Props = { active: boolean };

export default function DoorTransition({ active }: Props) {
  const left = useAnimation();
  const right = useAnimation();
  const seam = useAnimation();

  useEffect(() => {
    if (!active) return;

    const cover = TRAVEL_TIMING.cover.gates;
    const reveal = TRAVEL_TIMING.reveal.gates;

    Promise.all([
      left.start({ x: '0%', rotateY: 0, transition: { duration: cover * 0.9, ease: [0.4, 0, 0.2, 1] } }),
      right.start({ x: '0%', rotateY: 0, transition: { duration: cover * 0.9, ease: [0.4, 0, 0.2, 1] } }),
      seam.start({ opacity: 1, transition: { duration: 0.35, delay: cover * 0.5 } }),
    ]).then(() => {
      const openDelay = cover + 0.22;
      seam.start({ opacity: 0, transition: { duration: 0.45, delay: openDelay } });
      left.start({ x: '-120%', rotateY: 14, transition: { duration: reveal, delay: openDelay, ease: [0.2, 0.9, 0.25, 1] } });
      right.start({ x: '120%', rotateY: -14, transition: { duration: reveal, delay: openDelay, ease: [0.2, 0.9, 0.25, 1] } });
    });
  }, [active, left, right, seam]);

  return null;
}
