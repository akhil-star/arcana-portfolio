import { useRef, useState } from 'react';
import { projects, projectOrder } from '@/data/projects';
import { useAppState } from '@/hooks/useAppState';
import { burstPortalRing } from '@/animations/TravelOverlays';

/**
 * The Arcana Randomizer — the collectible card on the landing pedestal.
 * Click: shuffle animation → reveal a random project's roman numeral →
 * portal-travel to that case study. Long-press: levitate, just for
 * delight.
 */
export function RandomizerCard() {
  const { travelTo, traveling, reducedMotion } = useAppState();
  const [mark, setMark] = useState('?');
  const [drawing, setDrawing] = useState(false);
  const cardRef = useRef<HTMLButtonElement>(null);
  const pressTimer = useRef<number>();

  const draw = () => {
    if (traveling || drawing) return;
    const id = projectOrder[Math.floor(Math.random() * projectOrder.length)];
    if (reducedMotion) {
      travelTo({ dest: 'case', projectId: id });
      return;
    }
    setDrawing(true);
    window.setTimeout(() => setMark(projects[id].roman), 350);
    window.setTimeout(() => {
      setDrawing(false);
      const rect = cardRef.current?.getBoundingClientRect();
      if (rect)
        burstPortalRing(rect.left + rect.width / 2, rect.top + rect.height / 2);
      travelTo({ dest: 'case', projectId: id }, { kind: 'portal' });
      window.setTimeout(() => setMark('?'), 900);
    }, 700);
  };

  const onPointerDown = () => {
    pressTimer.current = window.setTimeout(() => {
      if (cardRef.current)
        cardRef.current.style.transform = 'translateY(-14px)';
    }, 550);
  };
  const onPointerRelease = () => {
    window.clearTimeout(pressTimer.current);
    if (cardRef.current) cardRef.current.style.transform = '';
  };

  return (
    <button
      ref={cardRef}
      className={drawing ? 'randomizer-card drawing' : 'randomizer-card'}
      onClick={draw}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerRelease}
      onPointerLeave={onPointerRelease}
      title="Click to draw a random project from the deck"
      aria-label="Draw a random case study from the deck"
    >
      <div className="rc-sheen" />
      <svg
        className="rc-web"
        viewBox="0 0 278 444"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="rgba(241,215,154,.4)" strokeWidth={0.6}>
          <path d="M40 90 L139 60 L238 96 M60 330 L139 380 L220 336" />
          <path d="M40 90 L60 330 M238 96 L220 336 M139 60 L139 120" />
          <circle cx={139} cy={222} r={104} opacity={0.5} />
          <circle cx={139} cy={222} r={128} opacity={0.3} />
        </g>
        <g fill="rgba(241,215,154,.8)">
          <circle cx={40} cy={90} r={2} />
          <circle cx={139} cy={60} r={2.4} />
          <circle cx={238} cy={96} r={2} />
          <circle cx={60} cy={330} r={2} />
          <circle cx={139} cy={380} r={2.4} />
          <circle cx={220} cy={336} r={2} />
        </g>
        <g stroke="rgba(212,175,55,.8)" strokeWidth={1.2}>
          <path d="M22 34 L22 22 L34 22 M244 22 L256 22 L256 34 M256 410 L256 422 L244 422 M34 422 L22 422 L22 410" />
        </g>
        <path
          d="M139 14 L142 22 L150 25 L142 28 L139 36 L136 28 L128 25 L136 22 Z"
          fill="rgba(241,215,154,.85)"
        />
      </svg>
      <div className="rc-face">
        <div className="rc-label">The Arcana</div>
        <div className="rc-sigil">
          <svg viewBox="0 0 130 130" fill="none" aria-hidden="true">
            <circle
              cx={65}
              cy={65}
              r={62}
              stroke="var(--gold-muted)"
              strokeWidth={1}
              opacity={0.5}
            />
            <circle
              cx={65}
              cy={65}
              r={46}
              stroke="var(--gold-muted)"
              strokeWidth={1}
              opacity={0.4}
            />
            <path
              d="M65 3 L65 127 M3 65 L127 65 M21 21 L109 109 M109 21 L21 109"
              stroke="var(--gold-muted)"
              strokeWidth={1}
              opacity={0.3}
            />
          </svg>
          <span className="rc-mark">{mark}</span>
        </div>
        <div className="rc-title">The Randomizer</div>
        <div className="rc-divider" />
        <div className="rc-caption">
          Draw a card.
          <br />
          Uncover a story.
        </div>
      </div>
    </button>
  );
}
