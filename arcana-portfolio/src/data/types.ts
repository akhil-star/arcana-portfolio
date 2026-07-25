import type { ReactNode } from 'react';

/** The five flagship case-study projects ("the Arcana"). */
export type ProjectId =
  'casey' | 'tachyon' | 'shiftpartner' | 'zymes' | 'deutschealigners';

/** Products living inside the Zymes ecosystem. */
export type SubProjectId =
  'viewmo' | 'smartslot' | 'idim' | 'caresmart' | 'smartq' | 'prepasure';

/** Icon identifiers for the tarot-card art (see components/icons/ArcanaIcons). */
export type ArcanaIconId = 'scales' | 'shield' | 'compass' | 'hex' | 'portals';

export interface Project {
  id: ProjectId;
  /** "01" … "05" */
  number: string;
  /** Roman numeral shown on the card and case hero. */
  roman: string;
  title: string;
  category: string;
  type: string;
  /** Tarot archetype, e.g. "The Archivist". */
  archetype: string;
  /** Thematic tagline, e.g. "Law · Knowledge · Judgement". */
  theme: string;
  /** CSS gradient for the card art background. */
  gradient: string;
  icon: ArcanaIconId;
  /** Points for the constellation line pattern drawn behind the icon. */
  patternPoints: [number, number][];
  /** Poetic one-line summary used on the card grid. */
  quote: string;
  /**
   * Feature scope captured during discovery. Kept as reference data —
   * the five flagship case studies tell the full story in prose, so
   * this is not currently rendered anywhere.
   */
  scope: string[];
}

export interface SubProject {
  id: SubProjectId;
  name: string;
  /** "1 of 6" — position within the Zymes ecosystem. */
  order: string;
}

export interface ProductWorld {
  id: string;
  name: string;
  category: string;
  note: string;
}

export interface ExperienceEntry {
  years: string;
  role: string;
  org: string;
  note?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

/** A floating island on the Crossroads world map. */
export interface Realm {
  key: 'arcana' | 'library' | 'forge' | 'guildhall' | 'campfire';
  /** Percent position on the map. */
  x: number;
  y: number;
  eyebrow: string;
  name: string;
  note: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'linkedin' | 'behance' | 'email';
}

export type RichText = ReactNode;
