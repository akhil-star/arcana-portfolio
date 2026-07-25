import { assets } from '../assets';
import type { CaseStudy } from './types';

export const tachyon: CaseStudy = {
  id: 'tachyon',
  heroImage: assets.heroes.tachyon,
  heroImageAlt: 'Tachyon — key art',
  categoryLine:
    'AI-Powered Geriatric & Elder Care Platform · UX / Product Design',
  meta: [
    { label: 'My Role', value: 'Product Designer' },
    { label: 'Domain', value: 'Healthcare · Elder Care · AI' },
    { label: 'Users', value: 'Patients, Caregivers & Care Teams' },
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
              Elder care is not an event — it is continuous. An elderly patient
              may be managing multiple medications, a long medical history,
              appointments, investigations, care plans, daily routines, meals,
              vitals and connected health devices, all at once, every day.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              Tachyon is an AI-powered elder-care platform built as a{' '}
              <strong>connected ecosystem</strong>: a patient-facing experience
              for everyday care, and a console for the care teams responsible
              for it.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              The challenge was never a shortage of healthcare information. It
              was helping very different people understand what is happening in
              a patient's care, what needs to happen next, and how it all
              connects.
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
              Five kinds of people share one care journey:{' '}
              <strong>elderly patients</strong> living the routine,{' '}
              <strong>caregivers</strong> supporting it,{' '}
              <strong>care coordinators</strong> orchestrating it, and{' '}
              <strong>doctors and providers</strong> making clinical decisions
              on top of it.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              Each needs a different depth of information at a different moment
              — and any design that served one at the expense of another would
              break the chain of care.
            </>
          ),
        },
      ],
    },
    {
      num: '03',
      heading: 'The Core Tension',
      blocks: [
        {
          type: 'baGrid',
          panels: [
            {
              tag: 'Patients need',
              title: 'Simplicity',
              emphasis: true,
              bullets: [
                '“What do I need to do today?”',
                'Care that fits into daily life',
                'No medical jargon, no dense screens',
              ],
            },
            {
              tag: 'Care teams need',
              title: 'Context',
              emphasis: true,
              bullets: [
                '“How is this patient doing?”',
                '“What needs my attention?”',
                'Adherence, vitals, risk and trends in one view',
              ],
            },
          ],
        },
        {
          type: 'note',
          content: (
            <>
              How might we connect everyday patient care with the broader care
              team's workflow — without overwhelming either side with the
              other's complexity?
            </>
          ),
        },
      ],
    },
    {
      num: '04',
      heading: 'Understanding the Care Journey',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              Before designing screens, I mapped the ecosystem as one continuous
              flow of care information — from the patient's daily actions to the
              care team's decisions:
            </>
          ),
        },
        {
          type: 'flow',
          nodes: [
            { label: 'Patient', tone: 'gold' },
            {
              label: 'Patient App',
              sub: 'care activities · health data · adherence · AI support',
            },
            { label: 'Care Platform' },
            {
              label: 'Care Coordinator / Provider Console',
              sub: 'risk · analytics · timeline',
            },
            { label: 'Care Decisions', tone: 'gold' },
          ],
        },
        {
          type: 'paragraph',
          content: (
            <>
              This single map became the organising principle:{' '}
              <strong>
                the patient experience and the provider experience are not two
                products — they are two views of the same care journey.
              </strong>
            </>
          ),
        },
      ],
    },
    {
      num: '05',
      heading: 'The Design Question',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              The experience is organised around the care journey, not around
              features. Each side gets one governing question:
            </>
          ),
        },
        {
          type: 'flowDuo',
          columns: [
            {
              title: 'Patient',
              nodes: [
                { label: "Today's Care", tone: 'gold' },
                { label: 'Care Plan' },
                { label: 'Routine' },
                { label: 'Adherence' },
                { label: 'Health Data' },
                { label: 'AI Support' },
              ],
            },
            {
              title: 'Care Team',
              nodes: [
                { label: 'Patient Overview', tone: 'gold' },
                { label: 'Care Plan' },
                { label: 'Adherence' },
                { label: 'Risk' },
                { label: 'Analytics' },
                { label: 'Action' },
              ],
            },
          ],
        },
      ],
    },
    {
      num: '06',
      heading: 'Designing the Patient Experience',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              The patient side answers one question before all others:{' '}
              <strong>“What do I need to do today?”</strong> Everything else —
              history, documents, devices, plans — exists to serve that answer.
            </>
          ),
        },
        {
          type: 'pidr',
          rows: [
            [
              'Problem',
              'The patient has many types of healthcare information — medication, history, documents, appointments.',
            ],
            [
              'Design question',
              'How can we make medical information understandable without overwhelming the patient?',
            ],
            [
              'Design response',
              "A structured patient profile: documents, history and medication organised into clear, separate sections — surfaced only when relevant to today's care.",
            ],
          ],
        },
      ],
    },
    {
      num: '07',
      heading: 'Onboarding & Health Information',
      blocks: [
        {
          type: 'pidr',
          rows: [
            [
              'Problem',
              "An elderly patient's records are scattered across sources — and onboarding could easily become one long, hostile form.",
            ],
            [
              'Why it matters',
              'If the care profile starts incomplete, everything downstream — plans, adherence, risk — starts blind.',
            ],
            [
              'Design decision',
              'Progressive collection with two equal paths: Upload Document, or Enter Manually through a structured modal where the user picks the information type first.',
            ],
            [
              'Impact',
              'Users provide information in whatever format is most accessible to them — and the profile grows over time instead of demanding everything up front.',
            ],
          ],
        },
        {
          type: 'illustration',
          art: 'docs',
          caption:
            'Two equal paths into the care profile — upload a document, or enter it manually',
        },
      ],
    },
    {
      num: '08',
      heading: 'Designing Everyday Care',
      blocks: [
        {
          type: 'pidr',
          rows: [
            [
              'Problem',
              'Care activities, appointments and investigations are spread across different days — and dense monthly calendars ask patients to do the interpreting.',
            ],
            [
              'Design question',
              'How can a patient understand what needs to happen today without navigating multiple screens?',
            ],
            [
              'Design response',
              'A care calendar built around daily and weekly understanding — today is always the anchor — with each entry connected back to the care plan it serves.',
            ],
          ],
        },
        {
          type: 'illustration',
          art: 'calendar',
          caption:
            'The care calendar — today anchored, the week readable at a glance',
        },
        {
          type: 'paragraph',
          content: (
            <>
              Long-term care goals become manageable through the same chain:{' '}
              <strong>Care Plan → Routine → Daily Activity → Adherence.</strong>{' '}
              A six-month plan is experienced as a small set of things to do
              today.
            </>
          ),
        },
      ],
    },
    {
      num: '09',
      heading: 'Making Adherence Actionable',
      blocks: [
        {
          type: 'pidr',
          rows: [
            [
              'Problem',
              'Adherence is hard to understand from isolated actions — for patients and care teams alike.',
            ],
            [
              'Design question',
              'How can patients see their progress while care teams see where support is needed?',
            ],
            [
              'Design response',
              'One adherence model, two views: patient-facing progress with gentle positive reinforcement, provider-facing monitoring on the same data.',
            ],
          ],
        },
        {
          type: 'illustration',
          art: 'adherence',
          caption:
            "Daily progress — completion, streaks and the day's remaining activities",
        },
        {
          type: 'paragraph',
          content: (
            <>
              Everyday inputs are made as effortless as possible: meals can be
              marked with a <strong>photo, a description or voice input</strong>
              ; pain and mood are captured as simple self-reports. Multimodal
              input matters for elderly users — a camera or a voice is often
              more accessible than a form. The reinforcement is deliberately
              quiet: motivation without making healthcare feel like a game.
            </>
          ),
        },
      ],
    },
    {
      num: '10',
      heading: 'Connecting Health Data',
      blocks: [
        {
          type: 'pidr',
          rows: [
            [
              'Problem',
              'Health data lives across devices and systems — Apple HealthKit, Health Connect, Samsung, BLE devices.',
            ],
            [
              'Design question',
              'How do we make connected health data useful to patients instead of presenting it as raw technical information?',
            ],
            [
              'Design response',
              'Device connection is visible and understandable, and vitals appear inside the care journey — attached to the plans and activities they inform, not as a separate technical dashboard.',
            ],
          ],
        },
        {
          type: 'illustration',
          art: 'devices',
          caption:
            'Connected devices and vitals — data placed inside the care journey',
        },
      ],
    },
    {
      num: '11',
      heading: 'Introducing AI as a Support Layer',
      blocks: [
        {
          type: 'note',
          content: (
            <>
              AI should reduce friction and help people navigate care — not
              confront them with another complex interface, and never replace
              human care.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              The AI care companion (<strong>Tachyon Rex / Sara</strong>) is a
              conversational layer inside the experience — reachable by text or
              voice — that helps patients understand or act on their care: what
              an entry means, what's next, how to log something.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              It is deliberately framed as a companion, not a clinician: it
              navigates and explains, while diagnosis and decisions remain with
              healthcare professionals.
            </>
          ),
        },
        {
          type: 'image',
          src: assets.screens.tachyonMobileAi,
          alt: 'Tachyon patient app — AI companion guiding a blood pressure reading',
          fit: 'contain',
          height: 'tall',
          caption:
            'The patient app — the companion guides a blood-pressure reading by voice or a single tap',
        },
        {
          type: 'illustration',
          art: 'chat',
          caption:
            'The interaction model — conversational and voice support inside the journey',
        },
      ],
    },
    {
      num: '12',
      heading: 'Designing the Care Team Experience',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              The provider console answers the care team's two questions —{' '}
              <strong>“How is this patient doing?”</strong> and{' '}
              <strong>“What needs my attention?”</strong> — through a modular,
              drag-and-drop workspace: patient overview, care plans and care
              blocks, care calendar, longitudinal timeline, adherence, time
              spent, and an AI assistant of its own.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              EHR onboarding brings existing clinical information into the
              ecosystem, reducing duplicate data entry and keeping continuity
              between what the hospital knows and what the care team sees.
            </>
          ),
        },
        {
          type: 'image',
          src: assets.screens.tachyonConsoleOnboarding,
          alt: 'Tachyon care console — guided patient onboarding',
          fit: 'contain',
          caption:
            'The care console — guided nine-step patient onboarding, from intake to an AI-drafted care plan',
        },
        {
          type: 'illustration',
          art: 'console',
          caption:
            'The console model — overview, adherence analytics and prioritised patients in one workspace',
        },
      ],
    },
    {
      num: '13',
      heading: 'Turning Data Into Action',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              Risk management is the console's sharpest tool. Every patient
              carries a simple, glanceable state:
            </>
          ),
        },
        {
          type: 'statusRow',
          statuses: [
            { tone: 'ok', label: 'Green · Stable' },
            { tone: 'partial', label: 'Amber · Needs attention' },
            { tone: 'risk', label: 'Red · High risk' },
          ],
        },
        {
          type: 'pidr',
          rows: [
            [
              'Problem',
              "Care teams can't scan every data point for every patient — and risk based only on time or isolated events misleads.",
            ],
            [
              'Design question',
              'How can care teams quickly identify which patients need attention?',
            ],
            [
              'Design response',
              'Risk states draw on broader signals together — adherence, vitals, care activity, patient inputs — and the interface leads with the patients who need attention, with progressive disclosure into the why.',
            ],
          ],
        },
        {
          type: 'illustration',
          art: 'risk',
          caption: 'Risk triage — attention flows to amber and red first',
        },
        {
          type: 'illustration',
          art: 'heat',
          caption:
            'Analytics — adherence heat maps and prioritised patient trends',
        },
        {
          type: 'paragraph',
          content: (
            <>
              The design intent is prioritisation of attention — helping humans
              decide where to look — not clinical prediction.
            </>
          ),
        },
      ],
    },
    {
      num: '14',
      heading: 'Connecting the Ecosystem',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              Every patient action feeds the care team's picture; every care
              team decision reshapes the patient's day:
            </>
          ),
        },
        {
          type: 'flow',
          nodes: [
            { label: 'Patient', tone: 'gold' },
            { label: 'Care Activities · Health Data · Adherence' },
            { label: 'AI Support' },
            { label: 'Care Platform' },
            { label: 'Risk Management · Analytics' },
            { label: 'Care Decisions', tone: 'gold' },
            {
              label: "…back into the patient's care plan",
              sub: 'the loop closes',
            },
          ],
        },
        {
          type: 'note',
          content: (
            <>
              The patient experience and provider experience are not two
              separate products. They are two views of the same care journey.
            </>
          ),
        },
      ],
    },
    {
      num: '15',
      heading: 'The Final Experience',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              The finished ecosystem organises everyday care for patients and
              turns patient data and activity into actionable visibility for
              care teams. One representative screen stands in for the rest — the
              work sits under NDA.
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
      num: '16',
      heading: 'What I Learned',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              <strong>
                Complex ecosystems are designed around journeys, not features.
              </strong>{' '}
              The moment the product was organised around the care journey,
              every feature found its place — and the ones without a place
              revealed themselves.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              <strong>
                Simplicity and context are not opposites — they are the same
                data at two depths.
              </strong>{' '}
              One adherence model serving two audiences taught me more about
              information architecture than any dashboard could.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              <strong>In healthcare, restraint is a design skill.</strong> Quiet
              reinforcement instead of gamification, a companion instead of an
              oracle, prioritised attention instead of predicted outcomes — the
              responsible choice was consistently the better design.
            </>
          ),
        },
      ],
    },
  ],
};
