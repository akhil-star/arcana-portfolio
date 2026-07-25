import type { Project, ProjectId } from './types';

/**
 * The five flagship case studies — "the deck".
 * To add a sixth: add an entry here, append its id to `projectOrder`,
 * and create a matching case study in src/data/caseStudies/.
 */
export const projects: Record<ProjectId, Project> = {
  casey: {
    id: 'casey',
    number: '01',
    roman: 'I',
    title: 'Casey',
    category: 'AI-Powered Legal & Product Compliance Platform',
    type: 'Product Design / UX Design',
    archetype: 'The Archivist',
    theme: 'Law · Knowledge · Judgement',
    gradient:
      'radial-gradient(120% 90% at 50% 20%, var(--indigo), var(--surface-1))',
    icon: 'scales',
    patternPoints: [
      [24, 30],
      [76, 18],
      [126, 40],
      [66, 92],
    ],
    quote:
      'A celestial archive of law, judgement and evidence — an AI-powered compliance platform, drawn as a chapter of the deck.',
    scope: [
      'Horizon Scan',
      'Legislation discovery',
      'Legislation → Obligation → Practical Impact',
      'Playbook creation',
      'Compliance questions',
      'New Review',
      'Evidence collection',
      'AI assessment',
      'My Audit',
      'My Assignments',
      'Lawyer / compliance workflow',
      'Peer / client evidence contribution',
      'Tabular View',
      'Review Mode',
      'No Evidence Found',
      'Additional Information',
      'Manual Input',
      'Re-evaluation',
      'Final Review',
      'Compliance reporting',
    ],
  },
  tachyon: {
    id: 'tachyon',
    number: '02',
    roman: 'II',
    title: 'Tachyon',
    category: 'AI-Powered Geriatric & Elder Care Platform',
    type: 'UX / Product Design',
    archetype: 'The Guardian',
    theme: 'Care · Healing · Protection',
    gradient: 'radial-gradient(120% 90% at 50% 20%, #3A5450, var(--surface-1))',
    icon: 'shield',
    patternPoints: [
      [30, 24],
      [88, 14],
      [120, 52],
      [70, 96],
    ],
    quote:
      "An elder-care ecosystem drawn as a celestial healer's ward — care, coordination and protection in one connected story.",
    scope: [
      'Patient experience',
      'Care coordination',
      'Care Console',
      'Patient app',
      'Care calendar',
      'Care plans',
      'Routines',
      'Questionnaires',
      'Patient responses',
      'Longitudinal patient timeline',
      'Medication adherence',
      'Vitals',
      'Health data integration',
      'Apple Health / Health Connect',
      'Meal tracking',
      'Appointments',
      'Investigations',
      'Risk monitoring',
      'AI / conversational care assistant',
    ],
  },
  shiftpartner: {
    id: 'shiftpartner',
    number: '03',
    roman: 'III',
    title: 'Shift Partner',
    category: 'NHS Workforce Scheduling & Redeployment',
    type: 'UX / Product Design',
    archetype: 'The Wayfarer',
    theme: 'Movement · Teamwork · Coordination',
    gradient:
      'radial-gradient(120% 90% at 50% 20%, var(--indigo-bright), var(--surface-1))',
    icon: 'compass',
    patternPoints: [
      [24, 18],
      [42, 50],
      [10, 42],
    ],
    quote:
      "A workforce of travellers finding their way — NHS shift and redeployment coordination, drawn as a strategist's map.",
    scope: [
      'NHS workforce management',
      'Shift management',
      'Redeployment',
      'Manager workflows',
      'Staff matching',
      'Capability',
      'Competency',
      'Skills',
      'Manager calendar',
      'Alerts',
      'Trust administration',
      'Relevant integrations',
    ],
  },
  zymes: {
    id: 'zymes',
    number: '04',
    roman: 'IV',
    title: 'Zymes',
    category: 'Multi-Product Ecosystem · Parent Platform',
    type: 'UX / Product Design',
    archetype: 'The Alchemist',
    theme: 'One Platform · Many Products',
    gradient: 'radial-gradient(120% 90% at 50% 20%, #33405C, var(--surface-1))',
    icon: 'hex',
    patternPoints: [
      [34, 20],
      [118, 20],
      [70, 60],
      [34, 100],
    ],
    quote:
      'One platform shell, six products, many users — an ecosystem drawn as a single connected story.',
    scope: [],
  },
  deutschealigners: {
    id: 'deutschealigners',
    number: '05',
    roman: 'V',
    title: 'Deutsche Aligners',
    category: 'B2B Dental Lab Management Portal',
    type: 'UX / Product Design',
    archetype: 'The Artisan',
    theme: 'Precision · Craft · Alignment',
    gradient: 'radial-gradient(120% 90% at 50% 20%, #5C4B33, var(--surface-1))',
    icon: 'portals',
    patternPoints: [
      [20, 20],
      [36, 36],
      [12, 50],
    ],
    quote:
      'A B2B portal bringing order and precision to dental lab management — craft, drawn as a chapter of the deck.',
    scope: [],
  },
};

/** Deck order — also the reading order for "next case study". */
export const projectOrder: ProjectId[] = [
  'casey',
  'tachyon',
  'shiftpartner',
  'zymes',
  'deutschealigners',
];

export function nextProjectId(id: ProjectId): ProjectId {
  const idx = projectOrder.indexOf(id);
  return projectOrder[(idx + 1) % projectOrder.length];
}
