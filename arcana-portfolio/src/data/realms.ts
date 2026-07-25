import type { Realm } from './types';

/** The five floating islands on the Crossroads world map. */
export const realms: Realm[] = [
  {
    key: 'arcana',
    x: 19,
    y: 37,
    eyebrow: 'Projects',
    name: 'Arcana Hall',
    note: 'Five drawn chapters',
  },
  {
    key: 'library',
    x: 79,
    y: 33,
    eyebrow: 'About',
    name: 'The Origin Chronicle',
    note: 'The observatory archive',
  },
  {
    key: 'forge',
    x: 13,
    y: 68,
    eyebrow: 'Skills',
    name: 'The Forge',
    note: 'Abilities & craft',
  },
  {
    key: 'guildhall',
    x: 87,
    y: 66,
    eyebrow: 'Experience',
    name: 'Guild Records',
    note: 'Roles & campaigns',
  },
  {
    key: 'campfire',
    x: 50,
    y: 78,
    eyebrow: 'Contact',
    name: 'The Campfire',
    note: 'The final chapter',
  },
];

/** Dotted travel paths between islands (viewBox 0-100 coordinates). */
export const realmPaths: string[] = [
  'M19 37 Q30 60 50 78',
  'M79 33 Q68 58 50 78',
  'M13 68 Q30 76 50 78',
  'M87 66 Q70 76 50 78',
  'M19 37 Q50 16 79 33',
];
