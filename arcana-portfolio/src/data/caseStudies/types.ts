import type { ReactNode } from 'react';
import type { ProjectId } from '../types';
import type { IllustrationId } from './illustrations';

/** Node in a vertical flow diagram. */
export interface FlowNode {
  label: string;
  /** Small sub-caption under the label. */
  sub?: string;
  /** Visual emphasis: "gold" = key step, "break" = failure state. */
  tone?: 'gold' | 'break';
}

export type StatusTone = 'ok' | 'risk' | 'partial' | 'na' | 'noev';

export interface BaPanel {
  tag: string;
  title: string;
  /** Optional intro paragraph above the bullet list. */
  intro?: ReactNode;
  bullets: ReactNode[];
  /** Gold-rimmed emphasis (the "after"/preferred panel). */
  emphasis?: boolean;
}

/**
 * A case study section is a numbered heading plus an ordered list of
 * content blocks. Adding a new block type = extend this union, then
 * handle it in caseStudies/CaseStudyView.tsx (the renderer).
 */
export type CaseBlock =
  | { type: 'paragraph'; content: ReactNode; muted?: boolean }
  | { type: 'note'; content: ReactNode }
  | { type: 'flow'; nodes: FlowNode[] }
  | { type: 'flowDuo'; columns: { title: string; nodes: FlowNode[] }[] }
  | { type: 'pidr'; rows: [ReactNode, ReactNode][] }
  | { type: 'statusRow'; statuses: { tone: StatusTone; label: string }[] }
  | { type: 'baGrid'; panels: BaPanel[] }
  | { type: 'principles'; items: { title: string; body: ReactNode }[] }
  | { type: 'illustration'; art: IllustrationId; caption: string }
  | {
      type: 'image';
      src: string;
      alt: string;
      caption: string;
      fit?: 'cover' | 'contain';
      height?: 'default' | 'short' | 'tall';
    }
  /** NDA-safe abstract product silhouette with a PROTECTED seal. */
  | { type: 'ndaVisual'; caption: string }
  /** Grid of the six Zymes ecosystem modules (data from subProjects.ts). */
  | { type: 'ecoGrid' };

export interface CaseSection {
  num: string;
  heading: string;
  blocks: CaseBlock[];
}

export interface CaseStudy {
  id: ProjectId;
  /** Hero band background image (see data/assets.ts). */
  heroImage: string;
  heroImageAlt: string;
  /** Line under the title, e.g. category + optional external link. */
  categoryLine: ReactNode;
  meta: { label: string; value: string }[];
  sections: CaseSection[];
  /** Lead-in text above the next-case button. */
  nextLead: string;
}
