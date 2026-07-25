import { assets } from '../assets';
import type { CaseStudy } from './types';

export const casey: CaseStudy = {
  id: 'casey',
  heroImage: assets.heroes.casey,
  heroImageAlt: 'Casey — key art',
  categoryLine:
    'AI-Powered Legal & Product Compliance Platform · UX / Product Design',
  meta: [
    { label: 'My Role', value: 'Product Designer' },
    { label: 'Domain', value: 'Legal · Compliance · AI' },
    { label: 'Users', value: 'Lawyers & Compliance Professionals' },
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
              A product that is legal in one market can be non-compliant in the
              next. For the companies Casey serves, every product must be
              checked against the regulations of every market it enters — and
              the burden of proving compliance falls on lawyers working through
              large volumes of regulatory text and product evidence.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              Casey is an AI-driven compliance platform built to carry part of
              that burden: it analyses products against regulatory requirements
              and assembles the evidence a lawyer needs to reach a defensible
              judgement.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              <strong>
                AI can read faster than any lawyer. But it cannot take
                responsibility.
              </strong>{' '}
              The design challenge was to build a workflow where AI analysis and
              human judgement strengthen each other instead of competing.
            </>
          ),
        },
      ],
    },
    {
      num: '02',
      heading: 'The People',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              The primary users are lawyers and compliance professionals. They
              work on behalf of clients — companies whose products must be
              assessed by category, market and regulation. Their output is not a
              dashboard: it is a judgement, backed by evidence, delivered as a
              report.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              That framing shaped every decision. A lawyer will not accept an AI
              verdict they cannot interrogate. The interface had to expose{' '}
              <strong>why</strong> the system reached each result, and leave the
              final word with the human.
            </>
          ),
        },
      ],
    },
    {
      num: '03',
      heading: 'The Complexity',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              A single review spans companies, products, product categories,
              regulations, compliance requirements, evidence, AI analysis, peer
              assignments and reporting. Each layer multiplies the one before
              it: one product × many markets × many regulations × many
              requirements per regulation.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              The volume is exactly why AI helps — and exactly why a broken step
              is so costly. If the lawyer loses context anywhere in that chain,
              they lose confidence in everything downstream.
            </>
          ),
        },
      ],
    },
    {
      num: '04',
      heading: 'The Existing Workflow',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              The compliance journey follows the lawyer's own mental model —
              from client to product to regulation to judgement:
            </>
          ),
        },
        {
          type: 'flow',
          nodes: [
            { label: 'Client / Company' },
            {
              label: 'Product',
              sub: 'details · images · ingredients · claims',
            },
            { label: 'Product Category' },
            { label: 'Regulatory Requirements', sub: 'via Playbook' },
            { label: 'AI Analysis', tone: 'gold' },
            { label: 'Evidence' },
            { label: 'Compliance Result' },
            { label: 'Lawyer Review' },
            { label: 'Report' },
          ],
        },
        {
          type: 'illustration',
          art: 'workflow',
          caption: 'The review workspace — abstracted (screens under NDA)',
        },
      ],
    },
    {
      num: '05',
      heading: 'The Breaking Point',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              Most of this chain worked. One link broke it: when the AI could
              not find enough evidence to answer a compliance question, it
              returned a status —
            </>
          ),
        },
        {
          type: 'flow',
          nodes: [
            { label: 'AI Analysis', tone: 'gold' },
            { label: '“No Evidence Found”', tone: 'break' },
            { label: '…no clear next step', tone: 'break' },
          ],
        },
        {
          type: 'paragraph',
          content: (
            <>
              The status was honest, but it was a dead end. The lawyer was left
              holding questions the interface didn't answer:{' '}
              <strong>
                What requirement is being evaluated? Why was evidence not found?
                What is missing? Can I provide it? Will the AI look again?
              </strong>
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              Every unanswered “No Evidence Found” either stalled the review or
              pushed the lawyer back to manual work outside the platform — the
              very work Casey existed to remove.
            </>
          ),
        },
      ],
    },
    {
      num: '06',
      heading: 'The Design Question',
      blocks: [
        {
          type: 'note',
          content: (
            <>
              How might we help lawyers move from a missing-evidence state
              toward resolution — without losing context, and without losing
              confidence in the AI's analysis?
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              This became the central question of the project. Not “how do we
              show AI results,” but “how do we make an inconclusive AI result{' '}
              <strong>actionable</strong>.”
            </>
          ),
        },
      ],
    },
    {
      num: '07',
      heading: 'Exploring the Solution',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              The turning point in the thinking was reframing “No Evidence
              Found” from a <strong>verdict</strong> into a{' '}
              <strong>request</strong> — the system asking the lawyer for help,
              in the middle of a loop, rather than announcing a failure at the
              end of one.
            </>
          ),
        },
        {
          type: 'pidr',
          rows: [
            [
              'Problem',
              'The lawyer receives “No Evidence Found” but cannot act on it.',
            ],
            [
              'Insight',
              'The user needs a clear path from uncertainty to resolution — inside the review, not outside it.',
            ],
            [
              'Design decision',
              'Treat missing evidence as a first-class workflow state with its own filter, detail view and input path — not a terminal status label.',
            ],
            [
              'Solution',
              "A dedicated missing-evidence flow: understand the question, see what's missing, add information, re-run the analysis.",
            ],
            [
              'Impact',
              'The dead end becomes a loop: lawyer input feeds AI re-evaluation, and the review keeps moving.',
            ],
          ],
        },
        {
          type: 'illustration',
          art: 'explorations',
          caption: 'Iterations — the missing-evidence flow, abstracted',
        },
      ],
    },
    {
      num: '08',
      heading: 'The New Workflow',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              The final model is a closed loop between AI analysis and human
              review:
            </>
          ),
        },
        {
          type: 'flow',
          nodes: [
            { label: 'AI Analysis', tone: 'gold' },
            { label: 'Compliance Result' },
            { label: '“No Evidence Found”', tone: 'break' },
            {
              label: 'Lawyer Investigation',
              sub: 'question · context · recommended evidence',
            },
            { label: 'Manual Input / Additional Evidence' },
            { label: 'AI Re-evaluation', tone: 'gold' },
            { label: 'Updated Result' },
            { label: 'Lawyer Review', tone: 'gold' },
          ],
        },
        {
          type: 'paragraph',
          content: (
            <>
              Neither side owns the outcome alone. The AI does the reading; the
              lawyer supplies judgement and missing context; the AI incorporates
              it and answers again — all without leaving the review.
            </>
          ),
        },
      ],
    },
    {
      num: '09',
      heading: 'Designing the Results',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              Every requirement resolves to one of five outcomes, designed to be
              read at a glance and investigated in depth:
            </>
          ),
        },
        {
          type: 'statusRow',
          statuses: [
            { tone: 'ok', label: 'Compliant' },
            { tone: 'risk', label: 'At Risk' },
            { tone: 'partial', label: 'Partial' },
            { tone: 'na', label: 'Not Applicable' },
            { tone: 'noev', label: 'No Evidence Found' },
          ],
        },
        {
          type: 'paragraph',
          content: (
            <>
              Two complementary views serve two reading modes.{' '}
              <strong>Tabular View</strong> answers “where does this product
              stand overall?” — every requirement, filterable by outcome.{' '}
              <strong>Review Mode</strong> answers “why?” — one requirement at a
              time, with the compliance question, the AI's reasoning, the
              evidence and regulation citations side by side.
            </>
          ),
        },
        {
          type: 'illustration',
          art: 'tabular',
          caption:
            'Tabular View — the full compliance picture, filterable by outcome',
        },
        {
          type: 'illustration',
          art: 'review',
          caption:
            'Review Mode — one requirement, its question, evidence and reasoning',
        },
      ],
    },
    {
      num: '10',
      heading: 'Resolving Missing Evidence',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              The strongest expression of the design question — the complete
              before and after:
            </>
          ),
        },
        {
          type: 'baGrid',
          panels: [
            {
              tag: 'Before',
              title: 'A dead end',
              bullets: [
                'AI returns “No Evidence Found”',
                'No explanation of what is missing',
                'No way to respond',
                'Resolution happens outside the platform',
              ],
            },
            {
              tag: 'After',
              title: 'An actionable workflow',
              emphasis: true,
              bullets: [
                'Filter the review to no-evidence items',
                'Open the specific requirement and its question',
                "See what's missing and the recommended evidence",
                'Provide manual input or attach evidence',
                'Submit → AI re-evaluates the requirement',
                'Review the updated outcome in context',
              ],
            },
          ],
        },
        {
          type: 'illustration',
          art: 'loop',
          caption:
            'The missing-evidence loop — investigate · provide input · re-evaluate',
        },
      ],
    },
    {
      num: '11',
      heading: 'The Broader Experience',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              The missing-evidence loop sits inside a wider system that begins
              long before any review:
            </>
          ),
        },
        {
          type: 'flow',
          nodes: [
            {
              label: 'Horizon Scan',
              tone: 'gold',
              sub: 'identify relevant laws & regulations',
            },
            {
              label: 'Build / Update Playbook',
              sub: 'regulations → compliance questions',
            },
            { label: 'Start Review', sub: 'client · product · markets' },
            { label: 'Run AI Analysis → Resolve → Re-evaluate' },
            { label: 'Generate Report', tone: 'gold' },
          ],
        },
        {
          type: 'paragraph',
          content: (
            <>
              Around it, the product supports the rest of the lawyer's working
              life: <strong>My Audits</strong> and{' '}
              <strong>My Assignments</strong> for workload, peer assignment for
              shared reviews, geographic compliance on a world map, product
              details with images, ingredients and claims, and report generation
              as the final artefact.
            </>
          ),
        },
        {
          type: 'illustration',
          art: 'map',
          caption:
            'Geographic compliance — product status across markets, abstracted',
        },
      ],
    },
    {
      num: '12',
      heading: 'The Final Experience',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              The finished product reads the way a lawyer works: status at a
              glance, reasoning on demand, and a clear path through every
              inconclusive result. The evidence workflow below is one of the few
              screens cleared for sharing — the rest sits under NDA.
            </>
          ),
        },
        {
          type: 'image',
          src: assets.screens.caseyEvidence,
          alt: 'Casey — recommended evidence and evidence upload screen',
          fit: 'contain',
          caption:
            "Recommended Evidence & Evidence Upload — the lawyer sees exactly what's missing and provides it without leaving the review",
        },
      ],
    },
    {
      num: '13',
      heading: 'What I Learned',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              <strong>
                AI features fail at their edges, not their centres.
              </strong>{' '}
              The happy path — AI finds evidence, returns a verdict — was never
              the hard design problem. The product's credibility was decided by
              what happened when the AI came back empty-handed.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              <strong>Inconclusive states deserve first-class design.</strong>{' '}
              Treating “No Evidence Found” as a workflow rather than a label was
              the single highest-leverage decision in the project.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              <strong>
                Trust is built by keeping the human in the loop, visibly.
              </strong>{' '}
              Lawyers accepted the AI's analysis because the interface always
              showed its question, its evidence and its reasoning — and always
              gave them the last word.
            </>
          ),
        },
      ],
    },
  ],
};
