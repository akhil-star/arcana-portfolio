import { assets } from '@/data/assets';
import { profile, socialLinks } from '@/data/profile';
import { skills } from '@/data/skills';
import { experience, education } from '@/data/experience';
import type { ExperienceEntry } from '@/data/types';
import { useAppState } from '@/hooks/useAppState';
import {
  DiamondDivider,
  ImageSlot,
  ManuscriptPanel,
  RealmPlate,
} from '@/components/shared';
import { Reveal } from '@/animations/Reveal';

/* ------------------------------------------------------------------ */
/* LIBRARY — About                                                     */
/* ------------------------------------------------------------------ */
export function Library() {
  return (
    <div className="wrap">
      <DiamondDivider label="About the Designer" />
      <Reveal className="realm-plate-reveal">
        <RealmPlate
          src={assets.plates.library}
          alt="The archive — an old observatory library"
          caption="The Origin Chronicle · the archive"
        />
      </Reveal>
      <div className="about-grid">
        <div>
          <Reveal className="about-portrait">
            <ImageSlot
              src={assets.portrait}
              alt={`Portrait of ${profile.name}`}
            />
          </Reveal>
          <div className="about-badges">
            {profile.about.badges.map((badge) => (
              <span key={badge} className="badge">
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="about-eyebrow">{profile.about.eyebrow}</div>
          <h2 className="about-title">{profile.about.title}</h2>
          <p className="about-lead">{profile.about.lead}</p>
          <p className="about-body">{profile.about.body}</p>
          <div className="stat-row">
            {profile.about.stats.map((stat) => (
              <div key={stat.label}>
                <div className="stat-num">{stat.num}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FORGE — Skills                                                      */
/* ------------------------------------------------------------------ */
export function Forge() {
  return (
    <div className="wrap">
      <DiamondDivider label="The Forge · Skills & Specialisations" />
      <Reveal>
        <RealmPlate
          src={assets.plates.forge}
          alt="The workshop — a smith's forge of tools and blueprints"
          caption="The Forge · the workshop"
        />
      </Reveal>
      <div className="skills-grid">
        {skills.map((group) => (
          <Reveal key={group.title} className="skill-card">
            <div className="skill-title">{group.title}</div>
            <div className="skill-chips">
              {group.items.map((skill) => (
                <span key={skill} className="chip static">
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* GUILD HALL — Experience                                             */
/* ------------------------------------------------------------------ */
function ExperienceRow({ entry }: { entry: ExperienceEntry }) {
  return (
    <Reveal className="exp-row">
      <div className="exp-years">{entry.years}</div>
      <div>
        <div className="exp-role">{entry.role}</div>
        <div className="exp-org">{entry.org}</div>
        {entry.note && <div className="exp-note">{entry.note}</div>}
      </div>
    </Reveal>
  );
}

export function Guildhall() {
  return (
    <div className="wrap">
      <DiamondDivider label="Guild Hall · Experience" />
      <Reveal>
        <RealmPlate
          src={assets.plates.guildhall}
          alt="The ledger room — a records hall of maps, seals and charts"
          caption="Guild Records · the ledger room"
        />
      </Reveal>
      <div className="exp-list">
        {experience.map((entry) => (
          <ExperienceRow key={`${entry.years}-${entry.role}`} entry={entry} />
        ))}
      </div>
      <div style={{ marginTop: 56, marginBottom: 24 }}>
        <DiamondDivider label="Training · Education" />
      </div>
      <div className="exp-list">
        {education.map((entry) => (
          <ExperienceRow key={`${entry.years}-${entry.role}`} entry={entry} />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CAMPFIRE — Contact                                                  */
/* ------------------------------------------------------------------ */
export function Campfire() {
  const [linkedin, behance] = socialLinks;
  return (
    <div className="wrap">
      <DiamondDivider label="Campfire · Contact" />
      <Reveal>
        <RealmPlate
          src={assets.plates.campfire}
          alt="A campfire under the stars"
          caption="The Campfire · journey's rest"
          height={220}
        />
      </Reveal>
      <h2 className="contact-title">{profile.contact.title}</h2>
      <p className="contact-lead">{profile.contact.lead}</p>
      <div className="contact-ctas">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          <span>{profile.email}</span>
        </a>
        <a
          className="btn btn-secondary"
          href={linkedin.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>LinkedIn</span>
        </a>
        <a
          className="btn btn-secondary"
          href={behance.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Behance</span>
        </a>
      </div>
      <div className="footer-line">{profile.contact.footer}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SECRET — unlocked after visiting all five arcana                    */
/* ------------------------------------------------------------------ */
export function Secret() {
  const { travelTo } = useAppState();
  return (
    <div className="wrap">
      <div className="section-eyebrow">Hidden Chapter</div>
      <h2 className="section-title">Behind the Scenes</h2>
      <p className="section-lead">
        You drew every card in the deck. A quiet reward for the thorough.
      </p>
      <ManuscriptPanel
        eyebrow="A Note From the Cartographer"
        title="Thank You for Exploring"
        style={{ maxWidth: 640, margin: '0 auto' }}
      >
        Placeholder — this is where a behind-the-scenes note, process reel, or
        bonus content can live once you're ready to write it. You found this by
        visiting every arcana in the deck.
      </ManuscriptPanel>
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <button
          className="btn btn-secondary"
          onClick={() => travelTo({ dest: 'crossroads' })}
        >
          <span>← Back to the Crossroads</span>
        </button>
      </div>
    </div>
  );
}
