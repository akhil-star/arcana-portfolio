import type { ArcanaIconId } from '@/data/types';

/**
 * The Arcana glyph set — one emblem per project card, drawn in the
 * design system's gold line-art language.
 */

const common = {
  width: 46,
  height: 46,
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'var(--gold-highlight)',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

function Scales() {
  return (
    <svg className="icon" {...common}>
      <path d="M24 6 V38 M14 38 H34 M24 6 L10 16 M24 6 L38 16 M10 16 L4 26 H16 L10 16 M38 16 L32 26 H44 L38 16" />
      <path d="M16 42 H32" strokeWidth={2.4} />
    </svg>
  );
}

function Shield() {
  return (
    <svg className="icon" {...common}>
      <path d="M24 5 L40 12 V23 C40 33 33 40 24 44 C15 40 8 33 8 23 V12 Z" />
      <path
        d="M24 30 C17 24 15 17 20 15 C22.5 14 24 16 24 18 C24 16 25.5 14 28 15 C33 17 31 24 24 30 Z"
        fill="var(--gold-highlight)"
        stroke="none"
      />
    </svg>
  );
}

function Compass() {
  return (
    <svg className="icon" {...common}>
      <circle cx={24} cy={24} r={18} />
      <path
        d="M24 24 L31 15 L26 26 L15 31 Z"
        fill="var(--gold-highlight)"
        stroke="none"
      />
      <circle
        cx={24}
        cy={24}
        r={2}
        fill="var(--gold-highlight)"
        stroke="none"
      />
    </svg>
  );
}

function Hex() {
  return (
    <svg className="icon" {...common}>
      <path d="M24 5 L40 14.5 V33.5 L24 43 L8 33.5 V14.5 Z" />
      <path d="M24 15 V24 M24 24 L32 29 M24 24 L16 29" />
      <circle
        cx={24}
        cy={15}
        r={2}
        fill="var(--gold-highlight)"
        stroke="none"
      />
      <circle
        cx={32}
        cy={29}
        r={2}
        fill="var(--gold-highlight)"
        stroke="none"
      />
      <circle
        cx={16}
        cy={29}
        r={2}
        fill="var(--gold-highlight)"
        stroke="none"
      />
    </svg>
  );
}

function Portals() {
  return (
    <svg className="icon" {...common}>
      <circle cx={18} cy={20} r={11} />
      <circle cx={30} cy={28} r={11} />
      <circle
        cx={18}
        cy={20}
        r={2}
        fill="var(--gold-highlight)"
        stroke="none"
      />
      <circle
        cx={30}
        cy={28}
        r={2}
        fill="var(--gold-highlight)"
        stroke="none"
      />
    </svg>
  );
}

const icons: Record<ArcanaIconId, () => JSX.Element> = {
  scales: Scales,
  shield: Shield,
  compass: Compass,
  hex: Hex,
  portals: Portals,
};

export function ArcanaIcon({ id }: { id: ArcanaIconId }) {
  const Icon = icons[id];
  return <Icon />;
}

/** Four-point star glyph (brand mark, taglines, quest button). */
export function StarGlyph({
  size = 16,
  stroke = 'var(--gold-primary)',
}: {
  size?: number;
  stroke?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 1 L14 10 L23 12 L14 14 L12 23 L10 14 L1 12 L10 10 Z"
        stroke={stroke}
        strokeWidth={1.2}
      />
    </svg>
  );
}

/**
 * Faint constellation drawn behind a card's icon — a poly-line through
 * the project's patternPoints with a dot at each vertex.
 */
export function LinePattern({ points }: { points: [number, number][] }) {
  return (
    <svg
      width={150}
      height={120}
      viewBox="0 0 150 120"
      style={{ position: 'absolute', inset: 0, opacity: 0.35 }}
      aria-hidden="true"
    >
      <g stroke="var(--gold-highlight)" fill="var(--gold-highlight)">
        {points.slice(0, -1).map((p, i) => (
          <line
            key={i}
            x1={p[0]}
            y1={p[1]}
            x2={points[i + 1][0]}
            y2={points[i + 1][1]}
            strokeWidth={0.6}
          />
        ))}
        {points.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r={2} />
        ))}
      </g>
    </svg>
  );
}
