import { useRef } from 'react';
import { motion } from 'framer-motion';
import { projects, projectOrder } from '@/data/projects';
import { productWorlds } from '@/data/productWorlds';
import type { Project } from '@/data/types';
import { useAppState } from '@/hooks/useAppState';
import { dealCard, staggerChildren } from '@/animations/variants';
import { ArcanaIcon, LinePattern } from '@/components/icons/ArcanaIcons';
import { DiamondDivider } from '@/components/shared';
import { Reveal } from '@/animations/Reveal';
import { burstPortalRing } from '@/animations/TravelOverlays';

/** One tarot card in the fanned deck. */
function TarotCard({ project, index }: { project: Project; index: number }) {
  const { travelTo, reducedMotion } = useAppState();
  const ref = useRef<HTMLButtonElement>(null);

  const open = () => {
    if (!reducedMotion) {
      const r = ref.current?.getBoundingClientRect();
      if (r) burstPortalRing(r.left + r.width / 2, r.top + r.height / 2);
    }
    travelTo({ dest: 'case', projectId: project.id }, { kind: 'portal' });
  };

  return (
    <motion.button
      ref={ref}
      className={`tcard tcard-${index + 1}`}
      variants={dealCard}
      onClick={open}
      aria-label={`Open the ${project.title} case study`}
    >
      <div className="tcard-face">
        <div className="tcard-art" style={{ background: project.gradient }}>
          <LinePattern points={project.patternPoints} />
          <span className="icon-glow" />
          <ArcanaIcon id={project.icon} />
        </div>
        <div className="tcard-eyebrow">
          {project.roman} · {project.archetype}
        </div>
        <div className="tcard-title">{project.title}</div>
        <div className="tcard-cat">{project.category}</div>
        <div className="tcard-cta">View Case Study →</div>
      </div>
    </motion.button>
  );
}

/**
 * Arcana Hall — the five-card tarot spread (flagship case studies) and
 * the Product Worlds grid (lighter supporting projects) beneath it.
 */
export function ArcanaHall() {
  const { reducedMotion } = useAppState();

  return (
    <div className="wrap">
      <div className="section-eyebrow">
        Every project is a story. Every story is a lesson.
      </div>
      <h2 className="section-title">Arcana Hall</h2>
      <p className="section-lead">
        Five featured case studies — the primary chapters of this portfolio.
        Draw a card to begin.
      </p>

      <div className="deck">
        <motion.div
          className="deck-inner"
          variants={staggerChildren(0.06, 0.15)}
          initial={reducedMotion ? false : 'hidden'}
          animate="visible"
        >
          {projectOrder.map((id, i) => (
            <TarotCard key={id} project={projects[id]} index={i} />
          ))}
        </motion.div>
      </div>

      <div style={{ marginTop: 70 }}>
        <DiamondDivider label="Product Worlds" />
      </div>
      <p className="section-lead" style={{ marginTop: 18, marginBottom: 28 }}>
        Supporting projects — smaller stories, selected visuals, lighter weight.
      </p>
      <div className="pw-grid">
        {productWorlds.map((world) => (
          <Reveal key={world.id} className="pw-card">
            <div className="pw-body">
              <div className="pw-name">{world.name}</div>
              <div className="pw-cat">{world.category}</div>
              <div className="pw-note">{world.note}</div>
              <span className="pw-cta">Explore · coming soon</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
