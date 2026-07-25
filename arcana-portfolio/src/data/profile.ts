import type { SocialLink } from './types';

/**
 * Identity, copy and contact details for the site owner.
 * All personal copy lives here — edit this file to update the hero,
 * about section, contact section and footer.
 */
export const profile = {
  name: 'Dr. Akhil Biju',
  shortName: 'Akhil Biju',
  brandTag: 'Arcana',
  role: 'Product Designer',
  greeting: 'Greetings, traveler.',
  heroSub:
    'Dentist turned product designer — bringing clinical empathy and systems thinking to healthcare and enterprise products.',
  tagline: 'Designer. Problem Solver. Storyteller.',
  questSub: 'Five flagship case studies, told as a journey. Worth the walk.',
  skipLabel: 'In a hurry? Skip straight to the work →',
  email: 'akhiloscar@gmail.com',
  about: {
    eyebrow: 'UX / Product Designer',
    title: 'From Clinical Practice to Product Craft',
    lead: "I'm a dentist turned UX/UI designer with a sharp eye for detail and a deep understanding of human-centred design.",
    body: 'My healthcare background fuels an empathy-driven approach to crafting intuitive, accessible digital experiences across tech, healthcare and education — from NHS workforce tools and elder-care ecosystems to dental lab portals and web3 experiments.',
    badges: ['Figma', 'FigJam', 'Notion', 'Claude'],
    stats: [
      { num: '2', label: 'Careers · Dentistry → Design' },
      { num: '3', label: 'Sectors · Health, Tech, Education' },
      { num: '5', label: 'Flagship Case Studies' },
    ],
  },
  contact: {
    title: 'Draw the Next Card Together',
    lead: "Have a complex problem that needs a clear, intuitive solution? Let's talk.",
    footer: 'Dr Akhil Biju · UX / Product Designer · MMXXVI',
  },
} as const;

export const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dr-akhil-biju-uxui-design/',
    icon: 'linkedin',
  },
  {
    label: 'Behance',
    href: 'https://behance.net/drakhilbiju',
    icon: 'behance',
  },
  { label: 'Email', href: 'mailto:akhiloscar@gmail.com', icon: 'email' },
];
