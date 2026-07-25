import type { SubProject, SubProjectId } from './types';

/** The six product modules inside the Zymes ecosystem. */
export const subProjects: Record<SubProjectId, SubProject> = {
  viewmo: { id: 'viewmo', name: 'Viewmo', order: '1 of 6' },
  smartslot: { id: 'smartslot', name: 'Smart Slot', order: '2 of 6' },
  idim: { id: 'idim', name: 'IDIM', order: '3 of 6' },
  caresmart: { id: 'caresmart', name: 'Care Smart', order: '4 of 6' },
  smartq: { id: 'smartq', name: 'SmartQ', order: '5 of 6' },
  prepasure: { id: 'prepasure', name: 'PrepaSure', order: '6 of 6' },
};

export const subProjectOrder: SubProjectId[] = [
  'viewmo',
  'smartslot',
  'idim',
  'caresmart',
  'smartq',
  'prepasure',
];
