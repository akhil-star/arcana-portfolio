import { useEffect, useRef } from 'react';
import { projects, projectOrder } from '@/data/projects';
import { profile } from '@/data/profile';
import { useAppState, type DestKey } from '@/hooks/useAppState';
import { StarGlyph } from './icons/ArcanaIcons';
import { burstSparkles } from '@/utils/sparkles';

const NAV: { key: DestKey; label: string }[] = [
  { key: 'landing', label: 'Landing' },
  { key: 'crossroads', label: 'Crossroads' },
  { key: 'arcana', label: 'Arcana Hall' },
  { key: 'library', label: 'Ancient Library' },
  { key: 'forge', label: 'Forge' },
  { key: 'guildhall', label: 'Guild Hall' },
  { key: 'campfire', label: 'Campfire' },
];

/** Fixed header — brand (→ landing), compass nav, sound & motion toggles. */
export function Hud() {
  const {
    location,
    travelTo,
    secretUnlocked,
    soundOn,
    toggleSound,
    toggleMotion,
    useTransitionFX,
    toggleTransitionFX,
  } = useAppState();
  // A case study highlights "Arcana Hall" in the compass.
  const activeKey = location.dest === 'case' ? 'arcana' : location.dest;

  return (
    <header className="hud">
      <button
        className="brand"
        onClick={() => travelTo({ dest: 'landing' })}
        aria-label="Return to the landing"
      >
        <StarGlyph size={16} />
        <span className="brand-name">{profile.shortName}</span>
        <span className="brand-sep" />
        <span className="brand-tag">{profile.brandTag}</span>
      </button>

      <nav id="compass" aria-label="Realm navigation">
        {NAV.map((item) => (
          <button
            key={item.key}
            className={activeKey === item.key ? 'active' : undefined}
            onClick={() => travelTo({ dest: item.key })}
          >
            {item.label}
          </button>
        ))}
        <button
          className={secretUnlocked ? 'secret unlocked' : 'secret'}
          onClick={() => travelTo({ dest: 'secret' })}
          aria-hidden={!secretUnlocked}
          tabIndex={secretUnlocked ? 0 : -1}
        >
          Behind the Scenes
        </button>
      </nav>

      <div className="hud-toggles">
        <button
          id="sound-toggle"
          className={soundOn ? undefined : 'muted'}
          onClick={toggleSound}
          title="Toggle ambient theme"
          aria-label="Toggle ambient theme"
          aria-pressed={soundOn}
        >
          <svg
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--gold-primary)"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3 C8 3 7 6 7 9 C7 13 5 15 5 15 H19 C19 15 17 13 17 9 C17 6 16 3 12 3 Z" />
            <path d="M10 18 C10 19.2 10.9 20 12 20 C13.1 20 14 19.2 14 18" />
            <path id="sound-slash" d="M5 19 L19 5" />
          </svg>
        </button>
        <button
          id="motion-toggle"
          onClick={toggleMotion}
          title="Toggle ambient motion"
          aria-label="Toggle ambient motion"
        >
          <svg
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--gold-primary)"
            strokeWidth={1.4}
          >
            <circle cx={12} cy={12} r={10} />
            <path id="motion-slash" d="M5 19 L19 5" />
          </svg>
        </button>
        <button
          id="transition-toggle"
          onClick={toggleTransitionFX}
          title="Toggle cinematic transitions"
          aria-label="Toggle cinematic transitions"
          className={useTransitionFX ? undefined : 'muted'}
        >
          <svg
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--gold-primary)"
            strokeWidth={1.4}
          >
            <path d="M3 12 H21" />
            <path d="M7 8 L3 12 L7 16" />
            <path d="M17 8 L21 12 L17 16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

/** Quiet "collect every card" progress dots, bottom-right. */
export function CollectTrack() {
  const { visited, secretUnlocked } = useAppState();
  const celebrated = useRef(false);

  /* One sparkle celebration when the final card is collected. */
  useEffect(() => {
    if (secretUnlocked && !celebrated.current) {
      celebrated.current = true;
      burstSparkles(window.innerWidth - 90, 26, 10);
    }
  }, [secretUnlocked]);

  return (
    <div id="collect-track" title="Cards discovered">
      {projectOrder.map((id) => (
        <span
          key={id}
          className={visited.has(id) ? 'dot done' : 'dot'}
          title={projects[id].title}
        />
      ))}
    </div>
  );
}

/** Landing-only cue at the bottom of the screen. */
export function ScrollCue() {
  return (
    <div className="scroll-cue-bottom" aria-hidden="true">
      <span className="mouse-icon" />
      <span>No scrolls. Only journeys.</span>
    </div>
  );
}
