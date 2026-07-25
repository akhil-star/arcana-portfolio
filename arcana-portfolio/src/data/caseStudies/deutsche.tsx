import { assets } from '../assets';
import type { CaseStudy } from './types';

export const deutschealigners: CaseStudy = {
  id: 'deutschealigners',
  heroImage: assets.heroes.deutschealigners,
  heroImageAlt: 'Deutsche Aligners — key art',
  categoryLine:
    'Premium Clear Aligner Platform · B2B Dental · UX / Product Design',
  meta: [
    { label: 'My Role', value: 'Lead Product Designer' },
    { label: 'Domain', value: 'Dental · Healthcare' },
    { label: 'Users', value: 'Patients & Dental Professionals' },
  ],
  nextLead: 'The deck comes full circle.',
  sections: [
    {
      num: '01',
      heading: 'Overview',
      blocks: [
        {
          type: 'note',
          content: (
            <>
              Precision isn't just how teeth are aligned — it's how every
              interaction is crafted.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              Deutsche Aligners is a premium clear aligner platform that
              simplifies the orthodontic journey for both patients and dental
              professionals — a connected ecosystem combining consultation,
              treatment tracking, appointment management and patient education.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              The objective wasn't to design another healthcare interface. It
              was to transform a traditionally clinical, confusing experience
              into one that feels{' '}
              <strong>reassuring, transparent and effortless</strong>.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              As Lead Product Designer I owned the work end to end: product
              strategy, UX research, information architecture, user flows,
              wireframing, UI design, the design system, interactive prototypes
              and developer handoff.
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
              Orthodontic treatment spans 12–24 months. The physical treatment
              is carefully planned; the digital experience around it is usually
              fragmented. Patients rely on phone calls, emails, paper
              instructions and memory. Clinics spend their time answering
              repetitive questions and chasing follow-ups manually.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              Frustration on both sides — for a treatment that demands months of
              quiet commitment.
            </>
          ),
        },
      ],
    },
    {
      num: '03',
      heading: 'The Problem',
      blocks: [
        {
          type: 'pidr',
          rows: [
            [
              'Treatment felt invisible',
              "Unlike braces, clear aligners give no constant visual reassurance. Patients lose motivation because they can't see progress.",
            ],
            [
              "Patients couldn't follow along",
              '“Which aligner should I be wearing? When do I change trays? How many weeks are left?” — the most common questions had no obvious home.',
            ],
            [
              'Communication was fragmented',
              'Appointments, reminders, instructions and documents lived across WhatsApp, email, SMS and phone calls.',
            ],
            [
              'Clinics answered the same questions daily',
              '“When is my next appointment? Can I switch trays? What if I miss a day?” — time taken from treatment planning.',
            ],
          ],
        },
        {
          type: 'note',
          content: (
            <>
              How might we create a digital experience that keeps patients
              informed and motivated throughout their orthodontic journey —
              while reducing unnecessary administrative work for dental clinics?
            </>
          ),
        },
      ],
    },
    {
      num: '04',
      heading: 'Business Goals',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              Increase patient confidence throughout treatment · reduce
              administrative overhead for clinics · improve dentist–patient
              communication · create a premium digital experience worthy of the
              brand · help patients complete treatment successfully.
            </>
          ),
        },
      ],
    },
    {
      num: '05',
      heading: 'Understanding Users',
      blocks: [
        {
          type: 'baGrid',
          panels: [
            {
              tag: 'Primary · Patient',
              title: 'Emma, 24',
              emphasis: true,
              intro: (
                <>
                  A young working professional who wants straighter teeth but
                  doesn't fully understand orthodontics. Values convenience,
                  simplicity and transparency.
                </>
              ),
              bullets: [
                <>
                  <strong>Goals</strong> — understand progress, get reminders,
                  stay motivated, reach her dentist easily
                </>,
                <>
                  <strong>Frustrations</strong> — confusing terminology,
                  forgotten tray changes, not knowing if treatment is working
                </>,
              ],
            },
            {
              tag: 'Secondary · Clinician',
              title: 'Dr. James',
              emphasis: true,
              intro: (
                <>
                  An orthodontist managing dozens of active patients
                  simultaneously.
                </>
              ),
              bullets: [
                <>
                  <strong>Goals</strong> — monitor treatment efficiently, reduce
                  repetitive communication, organise records, spend more time on
                  treatment planning
                </>,
              ],
            },
          ],
        },
      ],
    },
    {
      num: '06',
      heading: 'Research & Key Insight',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              I studied existing orthodontic experiences and analysed leading
              aligner brands — Invisalign, ClearCorrect, Byte. A pattern
              emerged: most products sell aligners well and support the months{' '}
              <em>after</em> poorly. Patients receive little guidance once
              treatment begins. That gap was the opportunity.
            </>
          ),
        },
        {
          type: 'note',
          content: (
            <>
              Patients don't need more information. They need the right
              information at the right time. Confidence comes from clarity — not
              complexity.
            </>
          ),
        },
      ],
    },
    {
      num: '07',
      heading: 'Design Principles',
      blocks: [
        {
          type: 'principles',
          items: [
            {
              title: 'Clarity over complexity',
              body: <>Every screen should answer a single question.</>,
            },
            {
              title: 'Progress creates motivation',
              body: (
                <>
                  Patients stay committed when they can see how far they've
                  come.
                </>
              ),
            },
            {
              title: 'Reassurance builds trust',
              body: (
                <>Medical experiences should reduce anxiety, not add to it.</>
              ),
            },
            {
              title: 'Consistency reduces load',
              body: (
                <>
                  A predictable interface lets users focus on treatment, not the
                  product.
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      num: '08',
      heading: 'The Patient Dashboard',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              Instead of isolated screens, the solution is an integrated
              treatment ecosystem — and it opens by answering the questions
              patients ask most:{' '}
              <strong>
                current aligner, days until the next tray, treatment progress,
                the upcoming appointment and today's wear reminder.
              </strong>{' '}
              Everything important is visible within seconds.
            </>
          ),
        },
        {
          type: 'illustration',
          art: 'aligntrack',
          caption:
            'The patient dashboard — the most-asked questions, answered at a glance',
        },
      ],
    },
    {
      num: '09',
      heading: 'The Interactive Treatment Timeline',
      blocks: [
        {
          type: 'pidr',
          rows: [
            [
              'Problem',
              'Clear aligner treatment is invisible — months pass with no felt progress.',
            ],
            [
              'Design decision',
              'Show treatment as a visual journey rather than a list: completed stages, current stage, upcoming milestones, estimated completion.',
            ],
            [
              'Impact',
              'An invisible medical process becomes tangible — and motivating.',
            ],
          ],
        },
        {
          type: 'illustration',
          art: 'timeline',
          caption: 'The treatment timeline — an invisible process made visible',
        },
      ],
    },
    {
      num: '10',
      heading: 'Everyday Care, Self-Served',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              <strong>Smart appointments</strong> — book, reschedule, get
              reminders and clinic directions without calling the clinic.
            </>
          ),
        },
        {
          type: 'illustration',
          art: 'calendar',
          caption:
            'Appointment management — self-service booking and reminders',
        },
        {
          type: 'paragraph',
          content: (
            <>
              <strong>Progress gallery</strong> — patients upload photos through
              treatment; a timeline comparison reveals changes that would
              otherwise go unnoticed, reinforcing motivation across long
              treatment periods.
            </>
          ),
        },
        {
          type: 'illustration',
          art: 'gallery',
          caption:
            'The progress gallery — week-by-week comparison makes change visible',
        },
        {
          type: 'paragraph',
          content: (
            <>
              <strong>Secure messaging</strong> — one channel instead of four:
              conversations with the dentist live inside the platform, linked to
              the treatment case.
            </>
          ),
        },
        {
          type: 'illustration',
          art: 'chat',
          caption:
            'Secure messaging — dentist contact inside the treatment context',
        },
      ],
    },
    {
      num: '11',
      heading: 'The Dentist Dashboard',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              Clinicians get a centralised workspace: active cases, treatment
              progress, upload approvals, appointments and patient records in
              one place — replacing the manual follow-up work that consumed
              clinic time.
            </>
          ),
        },
        {
          type: 'illustration',
          art: 'console',
          caption:
            'The clinician workspace — cases, progress and approvals centralised',
        },
      ],
    },
    {
      num: '12',
      heading: 'Information Architecture',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              Navigation is deliberately minimal — six sections, each a clear
              mental model rather than a feature list:
            </>
          ),
        },
        {
          type: 'flow',
          nodes: [
            { label: 'Dashboard', tone: 'gold' },
            { label: 'Treatment' },
            { label: 'Appointments' },
            { label: 'Progress' },
            { label: 'Messages' },
            { label: 'Profile' },
          ],
        },
      ],
    },
    {
      num: '13',
      heading: 'Design System & Accessibility',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              A reusable component system — typography scale, spacing tokens,
              buttons, cards, progress indicators, navigation, inputs, status
              badges, interaction states and accessibility guidelines — keeps
              every screen consistent and lets future features ship without
              reinventing patterns.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              Accessibility is treated as table stakes for healthcare: high
              contrast, large touch targets, readable typography, keyboard
              access, clear hierarchy and descriptive labels.
            </>
          ),
        },
        {
          type: 'illustration',
          art: 'ds',
          caption:
            'System foundations — tokens, components, states and accessibility guidelines',
        },
      ],
    },
    {
      num: '14',
      heading: 'Prototype & Testing',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              Interactive prototypes were tested with users across navigation,
              the treatment timeline, the appointment flow and dashboard
              hierarchy. Users consistently preferred{' '}
              <strong>
                visual progress indicators over text-heavy treatment summaries
              </strong>{' '}
              — and successive iterations simplified navigation and stripped out
              medical terminology.
            </>
          ),
        },
      ],
    },
    {
      num: '15',
      heading: 'The Final Outcome',
      blocks: [
        {
          type: 'paragraph',
          content: (
            <>
              Treatment becomes a guided experience instead of disconnected
              interactions. Patients always know{' '}
              <strong>
                where they are, what's next, and how they're progressing
              </strong>
              ; dentists get a streamlined workflow with less repetitive
              communication and centralised information.
            </>
          ),
        },
        {
          type: 'ndaVisual',
          caption: 'The final experience — one representative screen',
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
              <strong>Healthcare design is reassurance design.</strong> People
              don't just need functional interfaces — they need to feel that
              things are under control. Visual progress, plain language and
              timely reminders did more for confidence than any feature.
            </>
          ),
        },
        {
          type: 'paragraph',
          content: (
            <>
              <strong>
                The best healthcare experiences don't simply present information
              </strong>{' '}
              — they build trust through clarity, empathy and consistency.
            </>
          ),
        },
        {
          type: 'paragraph',
          muted: true,
          content: (
            <>
              Deliverables: UX research · competitive analysis · personas ·
              journey mapping · information architecture · wireframes ·
              interactive prototype · high-fidelity UI · design system ·
              usability testing · developer handoff.
            </>
          ),
        },
      ],
    },
  ],
};
