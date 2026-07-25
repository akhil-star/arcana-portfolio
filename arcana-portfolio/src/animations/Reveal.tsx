import { motion, type Variants } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';
import { fadeUp, revealViewport } from './variants';
import { useAppState } from '@/hooks/useAppState';

interface RevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Override the default fade-up variants. */
  variants?: Variants;
  as?: 'div' | 'section' | 'figure';
}

/**
 * Scroll reveal — content surfaces as the traveller moves.
 * Wraps children in a motion element that fades/slides in the first
 * time it enters the viewport. Respects reduced motion.
 */
export function Reveal({
  children,
  className,
  style,
  variants = fadeUp,
  as = 'div',
}: RevealProps) {
  const { reducedMotion } = useAppState();
  const Tag = motion[as];
  if (reducedMotion) {
    // Render statically — no hidden state, no animation.
    const Plain = as;
    return (
      <Plain className={className} style={style}>
        {children}
      </Plain>
    );
  }
  return (
    <Tag
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      {children}
    </Tag>
  );
}
