import type { ProjectId } from '../types';
import type { CaseStudy } from './types';
import { casey } from './casey';
import { tachyon } from './tachyon';
import { shiftpartner } from './shiftpartner';
import { zymes } from './zymes';
import { deutschealigners } from './deutsche';

/**
 * Case study registry — one entry per flagship project.
 * To add a case study: create `<name>.tsx` following the CaseStudy
 * interface, then register it here and in data/projects.ts.
 */
export const caseStudies: Record<ProjectId, CaseStudy> = {
  casey,
  tachyon,
  shiftpartner,
  zymes,
  deutschealigners,
};

export type {
  CaseStudy,
  CaseSection,
  CaseBlock,
  FlowNode,
  StatusTone,
  BaPanel,
} from './types';
