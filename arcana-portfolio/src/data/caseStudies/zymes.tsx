import { assets } from '../assets';
import type { CaseStudy } from './types';

export const zymes: CaseStudy = {
  id: 'zymes',
  heroImage: assets.heroes.zymes,
  heroImageAlt: 'Zymes — key art',
  categoryLine: (
    <>
      Multi-Product Ecosystem · Parent Platform · UX / Product Design ·{' '}
      <a href="https://zymez.com/" target="_blank" rel="noopener noreferrer">
        zymez.com ↗
      </a>
    </>
  ),
  meta: [
    { label: 'My Role', value: 'Product / UX Designer' },
    { label: 'Scope', value: 'Six Products · One Ecosystem' },
    { label: 'Domains', value: 'Healthcare · Enterprise · Operations' },
  ],
  nextLead: 'Draw the next card in the deck.',
  sections: [
    {
      num: '01',
      heading: 'The Ecosystem',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              Zymes is not a single application — it is a{' '}
              <strong>parent platform and product shell</strong>, conceptually
              closer to a platform like Zoho than to any one product. Within it
              live six products, each with its own users, goals and workflows.
            </>
          ),
        },
        {
          type: 'illustration',
          art: 'ecomap',
          caption: 'The Zymes ecosystem — one platform shell, six products',
        },
        { type: 'ecoGrid' },
        {
          type: 'paragraph',
          content: (
            <>
              This case study is therefore not the story of one interface. It is
              the story of designing <strong>across</strong> an ecosystem — and
              of learning when products should share and when they must differ.
            </>
          ),
        },
      ],
    },
    {
      num: '02',
      heading: 'The Challenge',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              Designing one product is complex. Designing several within one
              ecosystem introduces a different order of problem: each product
              may have different users, different goals, different workflows,
              different information structures and different levels of
              complexity — yet all of them exist under one roof.
            </>
          ),
        },
        {
          type: 'flow',
          nodes: [
            { label: 'One Platform', tone: 'gold' },
            { label: 'Multiple Products' },
            { label: 'Multiple Users & Workflows' },
            { label: 'Different UX Problems' },
            { label: 'Different Design Responses' },
            { label: 'One Broader Ecosystem', tone: 'gold' },
          ],
        },
      ],
    },
    {
      num: '03',
      heading: 'The Design Tension',
      blocks: [
        {
          type: 'baGrid',
          panels: [
            {
              tag: 'Standardise where it helps',
              title: 'Ecosystem consistency',
              emphasis: true,
              bullets: [
                'Visual language',
                'Design patterns & components',
                'Interaction conventions',
                'Accessibility & usability principles',
              ],
            },
            {
              tag: 'Adapt where it matters',
              title: 'Product-specific UX',
              emphasis: true,
              bullets: [
                'User workflows',
                'Information architecture',
                'Task priorities & data structures',
                'Navigation & interaction models',
              ],
            },
          ],
        },
        {
          type: 'note',
          content: (
            <>
              How might we design individual products that feel purposeful for
              their specific users — while still belonging to a coherent broader
              ecosystem?
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              Good ecosystem design does not mean making every product
              identical.{' '}
              <strong>
                Shared foundations create coherence; product-specific UX creates
                relevance.
              </strong>
            </>
          ),
        },
      ],
    },
    {
      num: '04',
      heading: 'My Role',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              I worked as a Product / UX Designer across products within the
              ecosystem — not designing every product end-to-end, but moving
              between them: understanding each product's context, designing for
              its users, solving its information architecture problems, and
              carrying patterns across only where they genuinely improved
              usability.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              The work spans healthcare, enterprise and operational experiences
              — thinking at both the product level and the ecosystem level.
            </>
          ),
        },
      ],
    },
    {
      num: '05',
      heading: 'Product Deep Dives',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              The six products below demonstrate the breadth of the ecosystem.
              Where the work supports it, each follows the same reasoning:{' '}
              <strong>problem → approach → solution → learning</strong>. Where
              detailed context sits under NDA or awaits content, the section
              stays deliberately concise.
            </>
          ),
        },
      ],
    },
    {
      num: '06',
      heading: 'Viewmo',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>A product within the Zymes ecosystem, designed research-first.</>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              The work moved from user research into{' '}
              <strong>40+ screens of wireframe flows</strong>, interactive Figma
              prototypes, and accessible, responsive design — refined through
              usability testing and cross-functional design reviews in iterative
              cycles.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              <strong>My contribution —</strong> user research · 40+ wireframe
              flows · interactive prototypes · usability testing · iterative
              refinement.
            </>
          ),
        },
      ],
    },
    {
      num: '07',
      heading: 'Smart Slot',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              Intelligent slot scheduling — helping teams allocate appointments
              and resources without collisions or dead time.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              <strong>My contribution —</strong> UX / product design of core
              flows and screens.
            </>
          ),
        },
      ],
    },
    {
      num: '08',
      heading: 'IDIM',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              Identity and information management for the ecosystem — one
              profile, consistent across every Zymes product.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              <strong>My contribution —</strong> UX / product design
              contribution across key workflows.
            </>
          ),
        },
      ],
    },
    {
      num: '09',
      heading: 'Care Smart',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              Care coordination made practical — organising care activities and
              information for the people who deliver them.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              <strong>My contribution —</strong> UX / product design of primary
              user journeys.
            </>
          ),
        },
      ],
    },
    {
      num: '10',
      heading: 'SmartQ',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              Smart queue management — turning waiting into a transparent,
              predictable experience for visitors and staff alike.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              <strong>My contribution —</strong> UX / product design of core
              screens and interactions.
            </>
          ),
        },
      ],
    },
    {
      num: '11',
      heading: 'PrepaSure',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              An NHS-facing preparation and assurance product — helping
              healthcare teams arrive ready, with the right information in hand.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              <strong>My contribution —</strong> UX / product design within a
              healthcare context — clinical claims deliberately out of scope.
            </>
          ),
        },
      ],
    },
    {
      num: '12',
      heading: 'A Complex Information Architecture Challenge',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              Within the broader ecosystem, one of the more complex information
              architecture challenges involved representing hierarchical
              capability, competency and skill information — potentially
              hundreds of interconnected entities.
            </>
          ),
        },
        {
          type: 'pidr',
          rows: [
            [
              'Problem',
              'Large amounts of interconnected workforce-ability information: one capability holds many competencies; each competency holds many skills.',
            ],
            [
              'Design question',
              'How can users understand the relationships while still managing individual entities — without losing context?',
            ],
            [
              'Design response',
              'Hierarchy kept visible, depth made optional: progressive disclosure and contextual navigation from capability to competency to skill.',
            ],
            [
              'Learning',
              'Complex data becomes manageable when its structure is revealed, not flattened.',
            ],
          ],
        },
        {
          type: 'illustration',
          art: 'ontology',
          caption:
            'Capability → Competency → Skill — one IA challenge within the ecosystem, not the definition of it',
        },
      ],
    },
    {
      num: '13',
      heading: 'Designing Across Zymes',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              Every product began with the same questions and ended with
              different answers:
            </>
          ),
        },
        {
          type: 'flow',
          nodes: [
            { label: 'Understand the product', tone: 'gold' },
            { label: 'Who is using it?' },
            { label: 'What are they trying to accomplish?' },
            { label: 'What information do they need?' },
            { label: 'Where does the current experience create friction?' },
            { label: 'What is the simplest useful solution?' },
            {
              label: 'What patterns can be reused?',
              sub: 'and what must stay unique?',
              tone: 'gold',
            },
          ],
        },
      ],
    },
    {
      num: '14',
      heading: 'The Design Principle',
      blocks: [
        {
          type: 'note',
          content: <>Standardise where it helps. Adapt where it matters.</>,
        },
        {
          type: 'paragraph',
          content: (
            <>
              Consistency should support usability, never restrict it. The
              ecosystem feels coherent not because every product behaves
              identically, but because the decisions behind them are consistent.
            </>
          ),
        },
      ],
    },
    {
      num: '15',
      heading: 'What I Learned',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              <strong>Ecosystem design is a discipline of judgement.</strong>{' '}
              The hard skill is not building a design system — it is knowing,
              product by product, when the system serves the user and when it
              gets in their way.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              <strong>Breadth builds better designers.</strong> Moving between
              healthcare, enterprise and operational products sharpened the
              ability to enter an unfamiliar context and find its core task
              quickly.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              <strong>
                Good ecosystem design is not about making every product look or
                behave identically.
              </strong>{' '}
              It is about creating a coherent foundation while allowing each
              product to solve its own problem well.
            </>
          ),
        },
      ],
    },
  ],
};
