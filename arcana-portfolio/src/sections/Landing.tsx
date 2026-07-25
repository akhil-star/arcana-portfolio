import { motion } from 'framer-motion';
import { profile, socialLinks } from '@/data/profile';
import { useAppState } from '@/hooks/useAppState';
import {
  heroItem,
  heroName,
  heroStage,
  staggerChildren,
} from '@/animations/variants';
import { StarGlyph } from '@/components/icons/ArcanaIcons';
import { ScrollIcon, SocialIcon } from '@/components/icons/SocialIcons';
import { RandomizerCard } from '@/components/RandomizerCard';
import { burstPortalRing } from '@/animations/TravelOverlays';

/**
 * The Landing — identity first (left), the Arcana Randomizer as a
 * collectible on its astrolabe pedestal (right). "Begin Quest" pulls
 * the camera back and reveals the Crossroads.
 */
export function Landing() {
  const { travelTo, reducedMotion } = useAppState();

  const beginQuest = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!reducedMotion) {
      const r = e.currentTarget.getBoundingClientRect();
      burstPortalRing(r.left + r.width / 2, r.top + r.height / 2, 420);
    }
    travelTo({ dest: 'crossroads' }, { kind: 'quest' });
  };

  return (
    <div className="landing-split">
      <motion.div
        className="landing-text"
        variants={staggerChildren(0.12, 0.15)}
        initial={reducedMotion ? false : 'hidden'}
        animate="visible"
      >
        <motion.div className="greet" variants={heroItem}>
          {profile.greeting}
        </motion.div>
        <motion.h1 className="hero-name" variants={heroName}>
          {profile.name}
        </motion.h1>
        <motion.div className="eyebrow-role" variants={heroItem}>
          {profile.role}
        </motion.div>
        <motion.p className="hero-sub" variants={heroItem}>
          {profile.heroSub}
        </motion.p>
        <motion.div className="tagline" variants={heroItem}>
          <StarGlyph size={16} />
          <span>{profile.tagline}</span>
        </motion.div>
        <motion.div className="hero-ctas" variants={heroItem}>
          <button className="quest-btn" onClick={beginQuest}>
            <StarGlyph size={15} stroke="currentColor" />
            <span>Begin Quest</span>
            <StarGlyph size={15} stroke="currentColor" />
          </button>
          <p className="quest-sub">{profile.questSub}</p>
          <button
            className="skip-link"
            onClick={() => travelTo({ dest: 'arcana' })}
          >
            {profile.skipLabel}
          </button>
        </motion.div>
        <motion.div className="social-row" variants={heroItem}>
          {socialLinks.map((link) =>
            link.icon === 'email' ? (
              <a
                key={link.icon}
                href={link.href}
                title={link.label}
                aria-label={link.label}
              >
                <SocialIcon icon={link.icon} />
              </a>
            ) : (
              <a
                key={link.icon}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
                aria-label={link.label}
              >
                <SocialIcon icon={link.icon} />
              </a>
            ),
          )}
          <button
            onClick={() => travelTo({ dest: 'campfire' })}
            title="Contact"
            aria-label="Contact"
          >
            <ScrollIcon />
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="arcana-stage"
        variants={heroStage}
        initial={reducedMotion ? false : 'hidden'}
        animate="visible"
        transition={{ delay: 0.55 }}
      >
        <div className="pedestal">
          <svg
            className="ped-rings"
            viewBox="0 0 420 130"
            fill="none"
            aria-hidden="true"
          >
            <ellipse
              cx={210}
              cy={78}
              rx={150}
              ry={34}
              stroke="rgba(212,175,55,.35)"
              strokeWidth={1}
            />
            <ellipse
              cx={210}
              cy={78}
              rx={112}
              ry={25}
              stroke="rgba(212,175,55,.28)"
              strokeWidth={0.8}
              strokeDasharray="3 6"
            />
            <ellipse
              cx={210}
              cy={78}
              rx={70}
              ry={15.5}
              stroke="rgba(241,215,154,.4)"
              strokeWidth={0.8}
            />
            <circle cx={60} cy={78} r={2} fill="rgba(241,215,154,.7)" />
            <circle cx={360} cy={78} r={2} fill="rgba(241,215,154,.7)" />
            <circle cx={210} cy={112} r={1.6} fill="rgba(241,215,154,.5)" />
          </svg>
          <div className="ped-glow" />
          <RandomizerCard />
        </div>
        <div className="draw-note">
          Click to draw a random project from the deck
        </div>
      </motion.div>
    </div>
  );
}
