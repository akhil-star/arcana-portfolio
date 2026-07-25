import type { ReactNode } from 'react';

/* ------------------------------------------------------------------ */
/* ImageSlot                                                           */
/* ------------------------------------------------------------------ */

interface ImageSlotProps {
  src: string;
  alt: string;
  /** cover fills the frame (cropping); contain letterboxes. */
  fit?: 'cover' | 'contain';
  /** Set true for images near the top of a view (hero bands). */
  eager?: boolean;
}

/**
 * A framed image that fills its parent (parents position `.image-slot`
 * absolutely). Replaces the Claude-Design `<image-slot>` web component
 * from the original export with a plain, dependency-free element.
 * All images lazy-load by default.
 */
export function ImageSlot({
  src,
  alt,
  fit = 'cover',
  eager = false,
}: ImageSlotProps) {
  return (
    <div className="image-slot">
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        style={{
          width: '100%',
          height: '100%',
          objectFit: fit,
          display: 'block',
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* DiamondDivider                                                      */
/* ------------------------------------------------------------------ */

function Diamond() {
  return (
    <svg
      className="diamond-svg"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x={6}
        y={0.5}
        width={7.8}
        height={7.8}
        transform="rotate(45 6 0.5)"
        stroke="var(--gold-primary)"
        strokeWidth={1}
      />
    </svg>
  );
}

/** Ornamental section divider — a labelled pair of gold diamonds. */
export function DiamondDivider({ label }: { label?: string }) {
  return (
    <div className="divider">
      <span className="line" />
      <span className="mid">
        <Diamond />
        {label && <span className="label">{label}</span>}
        <Diamond />
      </span>
      <span className="line" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ManuscriptPanel                                                     */
/* ------------------------------------------------------------------ */

interface ManuscriptPanelProps {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/** Illuminated-manuscript panel with gold corner marks. */
export function ManuscriptPanel({
  eyebrow,
  title,
  children,
  className,
  style,
}: ManuscriptPanelProps) {
  return (
    <div
      className={
        className ? `manuscript-panel ${className}` : 'manuscript-panel'
      }
      style={style}
    >
      <span className="corner c-tl" />
      <span className="corner c-tr" />
      <span className="corner c-bl" />
      <span className="corner c-br" />
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      {title && <h3>{title}</h3>}
      <div className="body">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* RealmPlate                                                          */
/* ------------------------------------------------------------------ */

interface RealmPlateProps {
  src: string;
  alt: string;
  caption: string;
  height?: number;
}

/** Framed environment art plate at the head of a realm section. */
export function RealmPlate({ src, alt, caption, height }: RealmPlateProps) {
  return (
    <div className="realm-plate" style={height ? { height } : undefined}>
      <ImageSlot src={src} alt={alt} />
      <span className="plate-caption">{caption}</span>
    </div>
  );
}
