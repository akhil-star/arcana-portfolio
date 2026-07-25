import { motion } from 'framer-motion';
import { realms, realmPaths } from '@/data/realms';
import type { Realm } from '@/data/types';
import { useAppState } from '@/hooks/useAppState';
import { fadeIn, islandRise, staggerChildren } from '@/animations/variants';
import { burstSparkles } from '@/utils/sparkles';

/** Shared floating-island rock silhouette. */
const IslandRock = () => (
  <>
    <path
      d="M22 82 Q34 72 54 74 L126 74 Q148 72 158 82 L148 94 L126 102 L118 120 L98 112 L90 134 L78 114 L58 122 L50 102 L30 94 Z"
      fill="#0B0F14"
      stroke="rgba(212,175,55,.45)"
      strokeWidth={1}
    />
    <path
      d="M28 80 Q60 70 90 72 Q124 70 152 80"
      stroke="rgba(138,122,91,.5)"
      strokeWidth={1}
      fill="none"
    />
  </>
);

/** Twinkling lantern light on an island. */
const Lantern = ({
  cx,
  cy,
  delay,
}: {
  cx: number;
  cy: number;
  delay: number;
}) => (
  <circle
    className="lantern"
    cx={cx}
    cy={cy}
    r={1.8}
    fill="var(--gold-highlight)"
    style={{ animationDelay: `${delay}s` }}
  />
);

const glyphStroke = {
  stroke: 'var(--gold-highlight)',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  fill: 'none',
} as const;

/** The building silhouette on each realm island. */
function RealmGlyph({ realm }: { realm: Realm['key'] }) {
  switch (realm) {
    case 'arcana':
      return (
        <>
          <g {...glyphStroke}>
            <path d="M62 74 V48 M90 74 V44 M118 74 V48 M54 50 L90 30 L126 50 M54 74 H126" />
          </g>
          <Lantern cx={76} cy={60} delay={0} />
          <Lantern cx={104} cy={60} delay={0.8} />
        </>
      );
    case 'library':
      return (
        <>
          <g {...glyphStroke}>
            <path d="M74 74 V52 H106 V74 M74 52 A16 16 0 0 1 106 52 M90 36 V26 M68 74 H112" />
          </g>
          <Lantern cx={85} cy={60} delay={0.3} />
          <Lantern cx={96} cy={64} delay={1.1} />
        </>
      );
    case 'forge':
      return (
        <>
          <g {...glyphStroke}>
            <path d="M66 66 H114 L106 74 H74 Z M82 66 V58 H98 V66 M60 52 H84 V58 M104 58 V36 H114 V58" />
          </g>
          <Lantern cx={109} cy={30} delay={0.5} />
          <Lantern cx={90} cy={48} delay={1.4} />
        </>
      );
    case 'guildhall':
      return (
        <>
          <g {...glyphStroke}>
            <path d="M70 74 V48 H110 V74 M66 48 H114 M70 48 L90 36 L110 48 M78 74 V58 H88 V74 M96 58 H102 V66 H96 Z" />
          </g>
          <Lantern cx={99} cy={62} delay={0.2} />
          <Lantern cx={83} cy={52} delay={1} />
        </>
      );
    case 'campfire':
      return (
        <>
          <g {...glyphStroke}>
            <path d="M64 74 L82 44 L100 74 M82 44 V38 M112 74 Q106 62 114 52 Q114 62 120 64 Q122 56 120 50 Q130 62 122 74" />
          </g>
          <Lantern cx={117} cy={68} delay={0} />
          <Lantern cx={82} cy={60} delay={0.9} />
        </>
      );
  }
}

/**
 * The Crossroads — five realms drifting among the stars. Clicking an
 * island closes the gates and flies the traveller into that realm.
 */
export function Crossroads() {
  const { travelTo, traveling, travelKind, reducedMotion } = useAppState();

  const flyToRealm = (realm: Realm) => {
    travelTo({ dest: realm.key }, { kind: 'gates' });
  };

  /* While the gates close, the camera flies toward the chosen island:
     the whole map scales up and dissolves beneath the closing doors. */
  const departing = traveling && travelKind === 'gates' && !reducedMotion;

  return (
    <motion.div
      className="worldmap"
      animate={
        departing
          ? { scale: 2.2, opacity: 0, filter: 'blur(4px)' }
          : { scale: 1, opacity: 1, filter: 'blur(0px)' }
      }
      transition={{ duration: 0.62, ease: [0.55, 0, 0.85, 0.4] }}
    >
      <motion.div
        className="wm-head"
        variants={fadeIn}
        initial={reducedMotion ? false : 'hidden'}
        animate="visible"
        transition={{ delay: 0.9 }}
      >
        <div className="section-eyebrow">Where will your journey lead?</div>
        <h2 className="section-title">The Crossroads</h2>
        <p className="wm-sub">Five realms drift among the stars. Choose one.</p>
      </motion.div>

      <motion.svg
        className="wm-paths"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 1.6, delay: 0.8 }}
      >
        {realmPaths.map((d) => (
          <path key={d} d={d} />
        ))}
      </motion.svg>

      <motion.div
        variants={staggerChildren(0.13)}
        initial={reducedMotion ? false : 'hidden'}
        animate="visible"
      >
        {realms.map((realm, i) => (
          <motion.button
            key={realm.key}
            className="island"
            style={{ left: `${realm.x}%`, top: `${realm.y}%` }}
            variants={islandRise}
            aria-label={`Travel to ${realm.name}`}
            onClick={() => flyToRealm(realm)}
            onMouseEnter={(e) => {
              if (reducedMotion) return;
              const r = e.currentTarget.getBoundingClientRect();
              burstSparkles(r.left + r.width / 2, r.top + r.height / 3, 5);
            }}
          >
            <span className="isl-halo" />
            <span
              className="isl-float"
              style={{ animationDelay: `${-i * 1.7}s` }}
            >
              <svg
                width={168}
                height={140}
                viewBox="0 0 180 150"
                fill="none"
                aria-hidden="true"
              >
                <RealmGlyph realm={realm.key} />
                <IslandRock />
              </svg>
            </span>
            <span className="isl-eyebrow">{realm.eyebrow}</span>
            <span className="isl-name">{realm.name}</span>
            <span className="isl-note">{realm.note}</span>
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
}
