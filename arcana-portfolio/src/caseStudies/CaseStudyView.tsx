import { useRef } from 'react';
import type { ProjectId } from '@/data/types';
import { projects, nextProjectId } from '@/data/projects';
import { subProjects, subProjectOrder } from '@/data/subProjects';
import { caseStudies } from '@/data/caseStudies';
import type { CaseBlock, CaseSection } from '@/data/caseStudies';
import {
  illustrations,
  ndaSilhouette,
  type IllustrationId,
} from '@/data/caseStudies/illustrations';
import { useAppState } from '@/hooks/useAppState';
import { DiamondDivider, ImageSlot } from '@/components/shared';
import { Reveal } from '@/animations/Reveal';
import { burstPortalRing } from '@/animations/TravelOverlays';

/* ------------------------------------------------------------------ */
/* Block renderers                                                     */
/* ------------------------------------------------------------------ */

/** Static SVG art (no user input ever flows into these strings). */
function CsIllustration({
  art,
  caption,
}: {
  art: IllustrationId;
  caption: string;
}) {
  return (
    <Reveal as="figure" className="cs-figure">
      <div
        className="cs-illus"
        dangerouslySetInnerHTML={{ __html: illustrations[art] }}
      />
      <div className="cs-cap">{caption}</div>
    </Reveal>
  );
}

function NdaVisual({ caption }: { caption: string }) {
  return (
    <Reveal as="figure" className="cs-figure">
      <div
        className="cs-visual"
        dangerouslySetInnerHTML={{ __html: ndaSilhouette }}
      />
      <div className="cs-cap">{caption}</div>
    </Reveal>
  );
}

/** The six Zymes ecosystem modules (data from subProjects.ts). */
function EcoGrid() {
  return (
    <Reveal>
      <div className="eco-grid" style={{ margin: '26px 0' }}>
        {subProjectOrder.map((id) => {
          const module = subProjects[id];
          return (
            <div key={id} className="eco-card" style={{ cursor: 'default' }}>
              <span className="eco-name">{module.name}</span>
              <span className="eco-order">
                Module {module.order} · chapter in progress
              </span>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}

function Block({ block }: { block: CaseBlock }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className={block.muted ? 'cs-p deliverables' : 'cs-p'}>
          {block.content}
        </p>
      );
    case 'note':
      return <div className="cs-note">{block.content}</div>;
    case 'flow':
      return (
        <div className="flow-v">
          {block.nodes.map((node, i) => (
            <div key={i} style={{ display: 'contents' }}>
              {i > 0 && <div className="flow-arrow">↓</div>}
              <div
                className={node.tone ? `flow-node ${node.tone}` : 'flow-node'}
              >
                {node.label}
                {node.sub && <small>{node.sub}</small>}
              </div>
            </div>
          ))}
        </div>
      );
    case 'flowDuo':
      return (
        <div className="flow-duo">
          {block.columns.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <Block block={{ type: 'flow', nodes: col.nodes }} />
            </div>
          ))}
        </div>
      );
    case 'pidr':
      return (
        <div className="pidr">
          {block.rows.map((row, i) => (
            <div key={i} className="pidr-row">
              <div className="pidr-k">{row[0]}</div>
              <div className="pidr-v">{row[1]}</div>
            </div>
          ))}
        </div>
      );
    case 'statusRow':
      return (
        <div className="status-row">
          {block.statuses.map((status) => (
            <span key={status.label} className={`status st-${status.tone}`}>
              <i />
              {status.label}
            </span>
          ))}
        </div>
      );
    case 'baGrid':
      return (
        <div className="ba-grid">
          {block.panels.map((panel) => (
            <div
              key={panel.title}
              className={panel.emphasis ? 'ba-panel after' : 'ba-panel'}
            >
              <div className="ba-tag">{panel.tag}</div>
              <div className="ba-title">{panel.title}</div>
              {panel.intro && <p className="ba-body">{panel.intro}</p>}
              <ul className="ba-list">
                {panel.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    case 'principles':
      return (
        <div className="ia-groups">
          {block.items.map((item) => (
            <div key={item.title} className="ia-col">
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      );
    case 'illustration':
      return <CsIllustration art={block.art} caption={block.caption} />;
    case 'image':
      return (
        <Reveal as="figure" className="cs-figure">
          <div
            className={
              block.height && block.height !== 'default'
                ? `cs-visual ${block.height}`
                : 'cs-visual'
            }
          >
            <ImageSlot
              src={block.src}
              alt={block.alt}
              fit={block.fit ?? 'cover'}
            />
          </div>
          <div className="cs-cap">{block.caption}</div>
        </Reveal>
      );
    case 'ndaVisual':
      return <NdaVisual caption={block.caption} />;
    case 'ecoGrid':
      return <EcoGrid />;
  }
}

function Section({ section }: { section: CaseSection }) {
  return (
    <Reveal as="section" className="cs-sec">
      <div className="cs-num">{section.num}</div>
      <h2 className="cs-h">{section.heading}</h2>
      {section.blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* CaseStudyView                                                       */
/* ------------------------------------------------------------------ */

/**
 * The reusable case-study template. All content is data-driven: pass a
 * project id and the view renders that study's hero, sections and
 * next-case footer from src/data/caseStudies/.
 */
export function CaseStudyView({ projectId }: { projectId: ProjectId }) {
  const { travelTo, reducedMotion } = useAppState();
  const study = caseStudies[projectId];
  const project = projects[projectId];
  const nextId = nextProjectId(projectId);
  const next = projects[nextId];
  const nextBtnRef = useRef<HTMLButtonElement>(null);

  const openNext = () => {
    if (!reducedMotion) {
      const r = nextBtnRef.current?.getBoundingClientRect();
      if (r) burstPortalRing(r.left + r.width / 2, r.top + r.height / 2);
    }
    travelTo({ dest: 'case', projectId: nextId }, { kind: 'portal' });
  };

  return (
    <div className="case-view">
      <button
        className="back-link"
        onClick={() => travelTo({ dest: 'arcana' })}
      >
        ← Back to the Arcana Hall
      </button>

      <div className="case-hero">
        <Reveal className="case-hero-band-reveal">
          <div
            className="case-hero-band"
            style={{ background: project.gradient }}
          >
            <ImageSlot src={study.heroImage} alt={study.heroImageAlt} eager />
            <div className="chb-overlay">
              <div className="roman">{project.roman}</div>
              <div className="archetype">
                {project.archetype} · {project.theme}
              </div>
            </div>
          </div>
        </Reveal>
        <h1 className="case-hero-title">{project.title}</h1>
        <p className="case-hero-cat">{study.categoryLine}</p>
        <div className="case-meta-row">
          {study.meta.map((item) => (
            <Reveal key={item.label} className="case-meta-item">
              <div className="case-meta-label">{item.label}</div>
              <div className="case-meta-value">{item.value}</div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="cs-wrap">
        {study.sections.map((section) => (
          <Section key={section.num} section={section} />
        ))}
      </div>

      <Reveal className="next-case">
        <DiamondDivider label="Next Case Study" />
        <p className="next-case-lead">{study.nextLead}</p>
        <button
          ref={nextBtnRef}
          className="btn btn-primary"
          style={{ marginTop: 10 }}
          onClick={openNext}
        >
          <span>{next.title} →</span>
        </button>
      </Reveal>
    </div>
  );
}
