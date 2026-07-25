import { assets } from '../assets';
import type { CaseStudy } from './types';

export const shiftpartner: CaseStudy = {
  id: 'shiftpartner',
  heroImage: assets.heroes.shiftpartner,
  heroImageAlt: 'Shift Partner — key art',
  categoryLine: (
    <>
      NHS Workforce Scheduling &amp; Redeployment · UX / Product Design ·{' '}
      <a
        href="https://shiftpartner.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        shiftpartner.com ↗
      </a>
    </>
  ),
  meta: [
    { label: 'My Role', value: 'Product Designer' },
    { label: 'Domain', value: 'NHS · Workforce · Enterprise' },
    { label: 'Users', value: 'Managers & Healthcare Teams' },
  ],
  nextLead: 'Draw the next card in the deck.',
  sections: [
    {
      num: '01',
      heading: 'The Challenge',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              In an NHS trust, filling a shift is never just filling a shift. A
              manager is weighing requirements, availability, capabilities,
              competencies and skills — often under time pressure, often for
              wards that cannot safely run short.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              Shift Partner is a workforce scheduling, shift management and
              redeployment platform for exactly this work. The design problem
              was an <strong>information problem</strong>: enough context to
              decide confidently, without so much that nothing can be scanned.
            </>
          ),
        },
      ],
    },
    {
      num: '02',
      heading: 'The Users',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              <strong>Managers</strong> plan rosters, fill gaps, approve swaps
              and redeploy staff. <strong>Staff</strong> view and manage their
              own shifts. <strong>Trust administrators</strong> maintain the
              workforce structure behind both. The platform also connects to
              existing NHS systems such as Optima — it lives inside an
              ecosystem, not alongside it.
            </>
          ),
        },
      ],
    },
    {
      num: '03',
      heading: 'The Decision They Need to Make',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              Strip away the screens, and every manager task reduces to one
              chain of questions:
            </>
          ),
        },
        {
          type: 'flow',
          nodes: [
            { label: 'What shifts need to be filled?' },
            { label: 'Who is available?' },
            {
              label: 'Who has the right capabilities?',
              sub: 'competencies · skills',
            },
            { label: 'How well does each person match?', tone: 'gold' },
            { label: 'Decide — assign, swap or redeploy', tone: 'gold' },
          ],
        },
        {
          type: 'note',
          content: (
            <>
              How might we make complex workforce information easier to
              understand and act on, so managers can make faster, more confident
              staffing and redeployment decisions?
            </>
          ),
        },
      ],
    },
    {
      num: '04',
      heading: 'The Existing Experience',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              I did not design this platform from scratch. I joined an existing
              product with real users and real constraints, and my job was to{' '}
              <strong>evaluate it honestly and improve it deliberately</strong>{' '}
              — usability, consistency, accessibility and information hierarchy.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              That framing matters: in enterprise healthcare, incremental
              clarity compounds. The work was to find where the experience
              fought its users, and fix those places first.
            </>
          ),
        },
      ],
    },
    {
      num: '05',
      heading: 'Heuristic Evaluation',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              The starting instrument was a heuristic evaluation across the
              product — sign-up, the home experience, input behaviour, calendar
              interactions, navigation, mobile interactions and accessibility.
            </>
          ),
        },
        {
          type: 'illustration',
          art: 'heuristic',
          caption:
            'Heuristic evaluation — issues flagged per screen, collected and prioritised',
        },
      ],
    },
    {
      num: '06',
      heading: 'Prioritising the Problems',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              Not every finding deserves equal attention. Each issue was
              prioritised by one test:{' '}
              <strong>
                how much does it affect the user's ability to complete an
                important task?
              </strong>
            </>
          ),
        },
        {
          type: 'statusRow',
          statuses: [
            { tone: 'risk', label: 'Blocks a core task' },
            { tone: 'partial', label: 'Adds friction' },
            { tone: 'ok', label: 'Cosmetic' },
          ],
        },
        {
          type: 'paragraph',
          content: (
            <>
              The highest-priority issues clustered into three groups: broken
              fundamentals, unclear structure, and real-device accessibility —
              the next three chapters.
            </>
          ),
        },
      ],
    },
    {
      num: '07',
      heading: 'Fixing the Fundamentals',
      blocks: [
        {
          type: 'pidr',
          rows: [
            [
              'Problem',
              "Basic interactions didn't behave as users expect — the date-of-birth field, for example, failed to reliably trigger its calendar.",
            ],
            [
              'Design question',
              'How can we make basic form interactions behave the way users naturally expect?',
            ],
            [
              'Design response',
              'Rework input behaviour and calendar triggering so the interaction is predictable — tap the field, get the calendar, every time.',
            ],
            [
              'Result',
              'A more predictable, accessible form experience. Small fixes, outsized effect: friction in a fundamental interaction taxes every task built on it.',
            ],
          ],
        },
        {
          type: 'illustration',
          art: 'inputfix',
          caption:
            'Before — the calendar interaction fails silently. After — a predictable, visible trigger',
        },
      ],
    },
    {
      num: '08',
      heading: 'Creating a Clearer Information Architecture',
      blocks: [
        {
          type: 'pidr',
          rows: [
            [
              'Problem',
              'Important navigation and actions — including basics like logout — were not where users expected them; icon language and colour usage varied across areas.',
            ],
            [
              'Design question',
              'How might we create a clearer mental model of the product?',
            ],
            [
              'Design response',
              'Reorganise navigation into predictable groups, straighten the hierarchy of the home experience, and make icons and colour mean the same thing everywhere.',
            ],
            [
              'Result',
              'Users can better answer the two questions that matter: where am I, and what can I do next? Cleaner was a side effect — clearer was the goal.',
            ],
          ],
        },
        {
          type: 'illustration',
          art: 'nav',
          caption:
            'Navigation before and after — from scattered actions to grouped, predictable structure',
        },
      ],
    },
    {
      num: '09',
      heading: 'Designing for Real-World Accessibility',
      blocks: [
        {
          type: 'pidr',
          rows: [
            [
              'Problem',
              'An interaction can technically work and still be hard to use on the actual devices NHS teams carry — small touch targets, cursor colour mismatches, unreliable interaction states.',
            ],
            [
              'Design question',
              'How can we make interactions accessible and reliable across the devices healthcare teams really use?',
            ],
            [
              'Design response',
              'Review touch targets, interaction states and visual behaviour against real usage — accessibility as part of usable-in-a-ward, not a separate checklist.',
            ],
            [
              'Result',
              'A more robust experience in real-world NHS environments.',
            ],
          ],
        },
        {
          type: 'illustration',
          art: 'mobiledev',
          caption:
            'Touch targets, states and contrast — reviewed against real NHS devices',
        },
      ],
    },
    {
      num: '10',
      heading: 'The Complexity Beneath the Interface',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              The most important design problem sat below the screens. A
              person's suitability for a shift depends on a structured hierarchy
              of workforce ability:
            </>
          ),
        },
        {
          type: 'flow',
          nodes: [
            {
              label: 'Capability',
              tone: 'gold',
              sub: 'a broad area of ability or expertise',
            },
            {
              label: 'Competency',
              sub: 'a specific proficiency within that capability',
            },
            { label: 'Skill', sub: 'a specific skill within that competency' },
          ],
        },
        {
          type: 'paragraph',
          content: (
            <>
              One capability holds many competencies; each competency holds many
              skills; and there are many capabilities. At trust scale this is a{' '}
              <strong>large, living data structure</strong> — not a settings
              page.
            </>
          ),
        },
        {
          type: 'note',
          content: (
            <>
              How do we represent a large workforce skill structure without
              losing the hierarchy — or overwhelming the person managing it?
            </>
          ),
        },
      ],
    },
    {
      num: '11',
      heading: 'Designing the Hierarchy',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              The answer was to keep the hierarchy visible and let depth be
              optional: view capabilities, expand into competencies, expand
              again into skills — and edit any entity in place at any level.
            </>
          ),
        },
        {
          type: 'illustration',
          art: 'ontology',
          caption:
            'The Capability → Competency → Skill tree — expandable, editable, built for scale',
        },
        {
          type: 'paragraph',
          content: (
            <>
              Every decision assumed scale: the structure had to stay navigable
              with hundreds of entries, not just the handful that fits in a
              mockup.
            </>
          ),
        },
      ],
    },
    {
      num: '12',
      heading: 'Connecting Skills to Workforce Decisions',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              The hierarchy is not managed for its own sake. It exists so the
              system can hold both sides of a staffing decision in the same
              language:
            </>
          ),
        },
        {
          type: 'flow',
          nodes: [
            {
              label: 'Shift Requirement',
              tone: 'gold',
              sub: 'required capability · competency · skills',
            },
            {
              label: 'Available Staff',
              sub: 'their capability · competency · skills',
            },
            { label: 'Match', tone: 'gold' },
            { label: 'Manager Decision' },
          ],
        },
        {
          type: 'paragraph',
          content: (
            <>
              When requirement and person are described by the same structure,
              “who fits this shift?” becomes a question the interface can help
              answer.
            </>
          ),
        },
      ],
    },
    {
      num: '13',
      heading: 'Redeployment',
      blocks: [
        {
          type: 'pidr',
          rows: [
            [
              'Problem',
              'Redeployment asks a manager to move people based on workforce needs — the highest-stakes version of the staffing decision.',
            ],
            [
              'Design question',
              'How do we reduce the cognitive effort of understanding a requirement, the available people and their suitability — in one pass?',
            ],
            [
              'Design response',
              'A workflow that follows the decision itself: understand the shift need → find available people → understand the match → review details → act.',
            ],
          ],
        },
        {
          type: 'illustration',
          art: 'redeploy',
          caption: 'The redeployment flow — requirement, matched staff, action',
        },
      ],
    },
    {
      num: '14',
      heading: 'Designing for Progressive Disclosure',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              The match score is the clearest expression of the product's design
              principle:{' '}
              <strong>
                surface what the decision needs first; keep the rest one step
                away.
              </strong>
            </>
          ),
        },
        {
          type: 'flow',
          nodes: [
            {
              label: '“How good is this match?”',
              tone: 'gold',
              sub: 'high-level score, scannable in a list',
            },
            {
              label: '“Why is this person a good match?”',
              sub: 'expanded detail',
            },
            {
              label:
                '“Which capabilities, competencies and skills contribute?”',
              sub: 'the full relationship',
            },
          ],
        },
        {
          type: 'illustration',
          art: 'match',
          caption:
            'Match scores — scannable at a glance, explainable on demand',
        },
        {
          type: 'paragraph',
          content: (
            <>
              The same principle runs through the manager's daily surface —
              calendar, shift tiles, alerts, staff information and swap requests
              all lead with the decision-critical layer.
            </>
          ),
        },
      ],
    },
    {
      num: '15',
      heading: 'Building Consistency',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              Fixing screens one at a time would have re-created the
              inconsistency it fixed. The longer-term work was systemic: a
              shared icon language, colour tokens, navigation patterns,
              components, interaction states and a consistent spacing and
              hierarchy scale.
            </>
          ),
        },
        {
          type: 'illustration',
          art: 'ds',
          caption:
            'System foundations — tokens, icons, states and shared components',
        },
      ],
    },
    {
      num: '16',
      heading: 'The Final Experience',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              The result is a clearer, more structured workforce experience —
              one that connects shift requirements to staff capability and lets
              managers move from overview to evidence at their own pace. One
              representative screen stands in for the rest — the work sits under
              NDA.
            </>
          ),
        },
        {
          type: 'ndaVisual',
          caption:
            'The final experience — one NDA-cleared representative screen',
        },
      ],
    },
    {
      num: '17',
      heading: 'What I Learned',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              <strong>Fundamentals are leverage.</strong> A broken date field
              costs more than an unpolished dashboard — prioritising by task
              impact beat prioritising by visibility every time.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              <strong>Structure is a UX deliverable.</strong> The Capability →
              Competency → Skill model did more for usability than any single
              screen, because it gave requirement and person a shared language.
            </>
          ),
        },
        {
          type: 'note',
          content: (
            <>
              Good enterprise UX does not remove complexity by hiding it. It
              makes complexity understandable by revealing the right information
              at the right time.
            </>
          ),
        },
      ],
    },
  ],
};
