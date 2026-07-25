/**
 * NDA-safe abstract UI illustrations, drawn in the design system's
 * line-art language. Each entry is a static SVG string rendered by
 * <CsIllustration /> via innerHTML (content is fully static — no user
 * input ever flows through these strings).
 *
 * Why strings and not JSX: these are dense generative drawings built
 * from small primitives (bars, frames, dots). Keeping them as compact
 * template builders preserves the original art exactly and keeps each
 * drawing a single readable expression. To add a drawing: compose the
 * primitives below, add it to `illustrations`, and reference it from a
 * case study with { type: "illustration", art: "<key>" }.
 */

/* ---------- palette (CSS variables resolve inside inline SVG) ---------- */
const SL = 'rgba(92,107,130,.55)'; // slate fill (muted content bars)
const SL2 = 'rgba(59,70,86,.9)'; // slate stroke (frames)
const AU = 'var(--gold-primary)'; // gold accent
const AH = 'var(--gold-highlight)'; // gold highlight
const ST = {
  ok: '#8FB89A',
  risk: '#E8A87C',
  partial: '#F1D79A',
  na: 'rgba(120,128,142,.8)',
} as const;

/* ---------- drawing primitives ---------- */
/** Rounded content bar (stand-in for a line of text / a control). */
function bar(
  x: number,
  y: number,
  w: number,
  h: number,
  c?: string,
  rx?: number,
): string {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx ?? h / 2}" fill="${c || SL}"/>`;
}
/** Stroked frame (stand-in for a panel / card). `dash` = dashed border. */
function frame(
  x: number,
  y: number,
  w: number,
  h: number,
  c?: string,
  dash?: boolean,
): string {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="none" stroke="${c || SL2}" stroke-width="1.2"${dash ? ' stroke-dasharray="5 5"' : ''}/>`;
}
/** Status dot. `dash` = outlined/pending state. */
function dot(x: number, y: number, c: string, dash?: boolean): string {
  return dash
    ? `<circle cx="${x}" cy="${y}" r="5" fill="none" stroke="${c}" stroke-width="1.2" stroke-dasharray="3 3"/>`
    : `<circle cx="${x}" cy="${y}" r="5" fill="${c}"/>`;
}
/** Small uppercase caption label. */
function lbl(x: number, y: number, t: string, anchor?: string): string {
  return `<text x="${x}" y="${y}" fill="${AU}" font-size="11" letter-spacing="2.5" text-anchor="${anchor || 'middle'}" font-family="Inter, sans-serif">${t}</text>`;
}

/* ---------- the drawings ---------- */

const workflow = `<svg viewBox="0 0 800 360">${frame(20, 20, 760, 320)}${frame(36, 36, 130, 288, SL2)}${bar(52, 56, 86, 8, AU)}${[0, 1, 2, 3].map((i) => bar(52, 84 + i * 26, 70 + ((i * 23) % 28), 7)).join('')}${bar(190, 44, 180, 10, 'rgba(184,189,199,.7)')}${frame(600, 38, 164, 22, SL2)}${[
  0, 1, 2, 3, 4, 5,
]
  .map((i) => {
    const y = 96 + i * 40;
    const g = i === 2;
    return (
      (g ? frame(184, y - 14, 584, 32, AU) : '') +
      dot(206, y, g ? AH : SL) +
      bar(
        226,
        y - 4,
        180 + ((i * 37) % 90),
        8,
        g ? 'rgba(241,215,154,.85)' : undefined,
      ) +
      bar(460, y - 4, 90, 8) +
      dot(740, y, [ST.ok, ST.partial, ST.ok, ST.risk, ST.na, ST.ok][i])
    );
  })
  .join('')}</svg>`;

const explorations = `<svg viewBox="0 0 800 340"><g transform="rotate(-5 250 180)">${frame(120, 80, 260, 200, SL2, true)}${bar(140, 104, 120, 9)}${[0, 1, 2].map((i) => bar(140, 132 + i * 24, 200 - ((i * 31) % 60), 7)).join('')}</g><g transform="rotate(4 560 170)">${frame(430, 70, 260, 200, SL2, true)}${bar(450, 94, 140, 9)}${frame(450, 120, 220, 60, SL, true)}${[0, 1].map((i) => bar(450, 196 + i * 24, 180 - i * 40, 7)).join('')}</g>${frame(270, 120, 260, 200, AU)}${bar(290, 144, 130, 9, 'rgba(241,215,154,.85)')}${frame(290, 170, 220, 70, SL2, true)}${bar(290, 256, 190, 7)}${bar(290, 278, 150, 7)}</svg>`;

const tabular = `<svg viewBox="0 0 800 380">${frame(20, 20, 760, 340)}${[0, 1, 2].map((i) => frame(560 + i * 76, 34, 64, 22, i === 2 ? AU : SL2)).join('')}${bar(40, 42, 120, 10, 'rgba(184,189,199,.7)')}${[0, 1, 2, 3].map((i) => bar(46 + i * 150, 86, 70, 8, 'rgba(120,128,142,.7)')).join('')}<line x1="36" y1="108" x2="764" y2="108" stroke="${SL2}"/>${(
  ['ok', 'risk', 'partial', 'noev', 'ok', 'na', 'risk'] as const
)
  .map((s, i) => {
    const y = 134 + i * 32;
    return (
      bar(46, y - 4, 110 + ((i * 41) % 70), 8) +
      bar(240, y - 4, 80, 8) +
      bar(400, y - 4, 120, 8) +
      (s === 'noev' ? dot(700, y, AU, true) : dot(700, y, ST[s]))
    );
  })
  .join('')}</svg>`;

const review = `<svg viewBox="0 0 800 380">${frame(20, 20, 760, 340)}${frame(36, 36, 180, 308, SL2)}${[
  0, 1, 2, 3, 4, 5,
]
  .map((i) => {
    const y = 58 + i * 36;
    return (
      (i === 1 ? frame(46, y - 12, 160, 28, AU) : '') +
      bar(
        58,
        y - 4,
        100 + ((i * 29) % 40),
        7,
        i === 1 ? 'rgba(241,215,154,.85)' : undefined,
      )
    );
  })
  .join(
    '',
  )}${bar(240, 52, 220, 11, 'rgba(184,189,199,.75)')}${frame(240, 80, 524, 74, SL2)}${bar(256, 98, 340, 8)}${bar(256, 120, 420, 8)}${frame(240, 170, 254, 86, SL2)}${frame(510, 170, 254, 86, SL2)}${bar(256, 188, 140, 8)}${bar(526, 188, 140, 8)}${bar(256, 210, 190, 7)}${bar(526, 210, 190, 7)}${bar(240, 276, 300, 7, 'rgba(120,128,142,.7)')}${bar(240, 296, 260, 7, 'rgba(120,128,142,.7)')}<rect x="640" y="312" width="124" height="30" rx="6" fill="none" stroke="${AU}" stroke-width="1.4"/>${bar(664, 323, 76, 8, AU)}</svg>`;

const loop = `<svg viewBox="0 0 900 330">${frame(20, 30, 250, 230)}${dot(48, 58, AU, true)}${bar(64, 54, 120, 9, 'rgba(184,189,199,.75)')}${frame(40, 84, 210, 64, AU, true)}${bar(56, 102, 150, 8)}${bar(56, 122, 110, 7)}${bar(40, 168, 180, 7)}${bar(40, 190, 140, 7)}${lbl(145, 290, 'INVESTIGATE')}<path d="M282 145 L308 145 M300 137 L310 145 L300 153" stroke="${AU}" stroke-width="1.4" fill="none"/>${frame(325, 30, 250, 230)}${bar(345, 58, 130, 9, 'rgba(184,189,199,.75)')}${frame(345, 84, 210, 26, SL2)}${frame(345, 120, 210, 26, SL2)}${frame(345, 156, 210, 58, SL2, true)}<rect x="455" y="226" width="100" height="26" rx="6" fill="none" stroke="${AU}" stroke-width="1.4"/>${bar(473, 236, 64, 7, AU)}${lbl(450, 290, 'PROVIDE INPUT')}<path d="M587 145 L613 145 M605 137 L615 145 L605 153" stroke="${AU}" stroke-width="1.4" fill="none"/>${frame(630, 30, 250, 230)}<path d="M755 84 a30 30 0 1 1 -21 9 M734 93 l-2 -12 M734 93 l12 -2" stroke="${AU}" stroke-width="1.6" fill="none"/>${dot(755, 114, ST.ok)}${bar(690, 170, 130, 8)}${bar(690, 192, 100, 7)}${bar(690, 214, 160, 7)}${lbl(755, 290, 'RE-EVALUATE')}</svg>`;

const map = `<svg viewBox="0 0 800 340"><g stroke="${SL2}" fill="none"><ellipse cx="400" cy="170" rx="330" ry="130"/><ellipse cx="400" cy="170" rx="330" ry="58" opacity=".5"/><path d="M400 40 V300 M220 62 Q180 170 220 278 M580 62 Q620 170 580 278" opacity=".5"/></g><g stroke="${AU}" fill="none" stroke-dasharray="3 6"><path d="M250 140 Q400 60 560 130"/><path d="M300 220 Q460 260 600 190"/></g>${dot(250, 140, ST.ok)}${dot(560, 130, ST.partial)}${dot(300, 220, ST.ok)}${dot(600, 190, ST.risk)}${dot(430, 110, AU, true)}${dot(480, 240, ST.na)}</svg>`;

/* ---- Tachyon ---- */

const docs = `<svg viewBox="0 0 800 340">${frame(20, 20, 760, 300)}${frame(48, 52, 330, 236, AU, true)}<path d="M213 120 v56 M195 148 l18 -20 18 20" stroke="${AU}" stroke-width="1.6" fill="none"/>${bar(133, 196, 160, 9)}${bar(163, 220, 100, 7)}${frame(420, 52, 332, 236, SL2)}${bar(440, 74, 150, 10, 'rgba(184,189,199,.75)')}${frame(440, 100, 292, 26, SL2)}${frame(440, 136, 292, 26, SL2)}${frame(440, 172, 292, 58, SL2, true)}<rect x="612" y="246" width="120" height="28" rx="6" fill="none" stroke="${AU}" stroke-width="1.4"/>${bar(636, 257, 72, 7, AU)}${lbl(213, 310, 'UPLOAD DOCUMENT')}${lbl(586, 310, 'ENTER MANUALLY')}</svg>`;

const calendar = `<svg viewBox="0 0 800 340">${frame(20, 20, 760, 300)}${bar(40, 42, 140, 10, 'rgba(184,189,199,.75)')}${[
  0, 1, 2, 3, 4, 5, 6,
]
  .map((i) => {
    const x = 40 + i * 106;
    const today = i === 2;
    return (
      (today ? frame(x - 6, 70, 100, 230, AU) : '') +
      bar(
        x + 18,
        84,
        50,
        8,
        today ? 'rgba(241,215,154,.85)' : 'rgba(120,128,142,.7)',
      ) +
      (i < 6
        ? `<line x1="${x + 100}" y1="70" x2="${x + 100}" y2="300" stroke="${SL2}" opacity=".4"/>`
        : '')
    );
  })
  .join('')}${(
  [
    [0, 120, ST.ok],
    [2, 120, AU],
    [2, 164, ST.partial],
    [1, 208, SL],
    [3, 140, SL],
    [4, 190, ST.ok],
    [5, 120, SL],
    [2, 230, SL],
    [6, 160, ST.partial],
  ] as [number, number, string][]
)
  .map(
    (e) =>
      `<rect x="${44 + e[0] * 106}" y="${e[1]}" width="84" height="30" rx="6" fill="none" stroke="${e[2]}" stroke-width="1.3"/>`,
  )
  .join('')}</svg>`;

const adherence = `<svg viewBox="0 0 800 340">${frame(20, 20, 760, 300)}<circle cx="170" cy="150" r="72" fill="none" stroke="${SL2}" stroke-width="10"/><path d="M170 78 a72 72 0 1 1 -62 108" fill="none" stroke="${AU}" stroke-width="10" stroke-linecap="round"/>${bar(140, 248, 60, 8, AU)}${[0, 1, 2, 3, 4, 5, 6].map((i) => dot(110 + i * 20, 286, i < 5 ? ST.ok : 'rgba(59,70,86,.9)')).join('')}${[
  0, 1, 2, 3,
]
  .map((i) => {
    const y = 70 + i * 58;
    const done = i < 2;
    return (
      frame(320, y, 440, 44, SL2) +
      (done
        ? `<path d="M344 ${y + 22} l7 7 12 -14" stroke="${ST.ok}" stroke-width="2" fill="none"/>`
        : dot(350, y + 22, i === 2 ? AU : 'rgba(59,70,86,.9)', i === 3)) +
      bar(376, y + 13, 160 + ((i * 43) % 80), 8) +
      bar(376, y + 29, 90, 6, 'rgba(59,70,86,.9)')
    );
  })
  .join('')}</svg>`;

const devices = `<svg viewBox="0 0 800 340">${frame(20, 20, 760, 300)}${frame(56, 80, 120, 180, AU)}${bar(96, 244, 40, 6, AU)}<circle cx="116" cy="150" r="34" fill="none" stroke="${AU}" stroke-width="1.4"/><path d="M100 150 l10 -14 8 22 8 -12 6 4" stroke="${AH}" stroke-width="1.6" fill="none"/>${[
  0, 1, 2,
]
  .map((i) => {
    const x = 240 + i * 180;
    return (
      frame(x, 70, 160, 90, SL2) +
      bar(x + 16, 88, 70, 7, 'rgba(120,128,142,.7)') +
      bar(x + 16, 110, 50, 12, i === 1 ? AU : 'rgba(184,189,199,.7)', 3) +
      `<path d="M${x + 16} 146 q14 -16 28 -4 t28 -6 t28 2 t28 -8" stroke="${i === 1 ? AH : SL}" fill="none" stroke-width="1.4"/>`
    );
  })
  .join(
    '',
  )}${frame(240, 190, 520, 70, SL2, true)}${dot(276, 225, ST.ok)}${bar(296, 220, 180, 8)}<path d="M700 210 l-8 10 h16 l-8 10 M700 210 v-6 M692 240 l8 10 8 -10" stroke="${AU}" stroke-width="1.3" fill="none"/>${lbl(500, 300, 'APPLE HEALTH · HEALTH CONNECT · BLE DEVICES')}</svg>`;

const chat = `<svg viewBox="0 0 800 340">${frame(20, 20, 760, 300)}${frame(120, 52, 360, 58, SL2)}${bar(140, 70, 240, 8)}${bar(140, 88, 160, 7)}${frame(320, 128, 360, 74, AU)}${bar(340, 146, 280, 8, 'rgba(241,215,154,.85)')}${bar(340, 166, 220, 7, 'rgba(212,175,55,.6)')}${bar(340, 184, 180, 7, 'rgba(212,175,55,.6)')}${frame(120, 220, 300, 44, SL2)}${bar(140, 238, 200, 8)}${frame(120, 282, 560, 32, SL2)}${[
  0, 1, 2, 3, 4, 5, 6, 7,
]
  .map(
    (i) =>
      `<line x1="${560 + i * 10}" y1="${298 - [4, 8, 12, 7, 10, 5, 9, 6][i] / 2}" x2="${560 + i * 10}" y2="${298 + [4, 8, 12, 7, 10, 5, 9, 6][i] / 2}" stroke="${AU}" stroke-width="2"/>`,
  )
  .join(
    '',
  )}<circle cx="90" cy="165" r="26" fill="none" stroke="${AU}" stroke-width="1.4"/>${dot(90, 165, AU)}</svg>`;

const consoleArt = `<svg viewBox="0 0 800 380">${frame(20, 20, 760, 340)}${frame(36, 36, 150, 308, SL2)}${[0, 1, 2, 3, 4].map((i) => bar(52, 60 + i * 30, 90 + ((i * 27) % 40), 7, i === 0 ? AU : undefined)).join('')}${frame(202, 36, 340, 150, SL2)}${bar(218, 54, 120, 9, 'rgba(184,189,199,.75)')}${(
  ['ok', 'risk', 'ok', 'partial'] as const
)
  .map((s, i) => {
    const y = 84 + i * 26;
    return (
      dot(226, y, ST[s]) +
      bar(244, y - 4, 140 + ((i * 37) % 80), 8) +
      bar(456, y - 4, 60, 8)
    );
  })
  .join(
    '',
  )}${frame(556, 36, 208, 150, SL2)}${bar(572, 54, 90, 9, 'rgba(184,189,199,.75)')}<path d="M572 160 v-52 M600 160 v-70 M628 160 v-38 M656 160 v-60 M684 160 v-24 M712 160 v-44" stroke="${AU}" stroke-width="10" opacity=".7"/>${frame(202, 200, 562, 144, SL2)}${bar(218, 218, 150, 9, 'rgba(184,189,199,.75)')}${[
  0, 1, 2,
]
  .map((i) => {
    const y = 246 + i * 30;
    return (
      bar(218, y, 110, 8) +
      bar(360, y, 260 - ((i * 57) % 120), 8, i === 0 ? AU : undefined) +
      dot(740, y + 4, [ST.risk, ST.partial, ST.ok][i])
    );
  })
  .join('')}</svg>`;

const risk = `<svg viewBox="0 0 800 360">${frame(20, 20, 760, 300)}${(
  [
    ['STABLE', ST.ok, 4],
    ['NEEDS ATTENTION', ST.partial, 3],
    ['HIGH RISK', ST.risk, 2],
  ] as [string, string, number][]
)
  .map((col, ci) => {
    const x = 44 + ci * 250;
    let s = `<rect x="${x}" y="44" width="226" height="250" rx="8" fill="none" stroke="${col[1]}" stroke-width="1.2" opacity=".55"/>`;
    s += dot(x + 22, 66, col[1]) + lbl(x + 120, 71, col[0]);
    for (let i = 0; i < col[2]; i++) {
      const y = 92 + i * 48;
      s +=
        frame(x + 16, y, 194, 36, SL2) +
        dot(x + 36, y + 18, col[1]) +
        bar(x + 52, y + 14, 100 - ((i * 23) % 40), 7);
    }
    return s;
  })
  .join(
    '',
  )}${lbl(400, 340, 'SIGNALS: ADHERENCE · VITALS · CARE ACTIVITY · PATIENT INPUTS')}</svg>`;

const heat = `<svg viewBox="0 0 800 340">${frame(20, 20, 760, 300)}${bar(44, 44, 160, 10, 'rgba(184,189,199,.75)')}${Array.from(
  { length: 7 },
  (_, r) =>
    Array.from({ length: 14 }, (_, c) => {
      const v = [0.08, 0.16, 0.3, 0.5, 0.75, 0.4, 0.2][(r * 3 + c) % 7];
      return `<rect x="${44 + c * 30}" y="${76 + r * 26}" width="24" height="20" rx="3" fill="rgba(212,175,55,${v})"/>`;
    }).join(''),
).join(
  '',
)}${frame(500, 76, 264, 178, SL2)}${bar(516, 92, 110, 8, 'rgba(184,189,199,.75)')}${[
  0, 1, 2, 3,
]
  .map((i) => {
    const y = 120 + i * 30;
    return (
      dot(528, y + 4, [ST.risk, ST.partial, ST.ok, ST.ok][i]) +
      bar(544, y, 160 - ((i * 41) % 70), 8)
    );
  })
  .join(
    '',
  )}${lbl(230, 300, 'ADHERENCE HEAT MAP')}${lbl(632, 300, 'PRIORITISED PATIENTS')}</svg>`;

/* ---- Shift Partner ---- */

const heuristic = `<svg viewBox="0 0 800 340">${frame(20, 20, 760, 300)}${[
  0, 1, 2,
]
  .map((i) => {
    const x = 44 + i * 168;
    return (
      frame(x, 48, 148, 200, SL2) +
      bar(x + 14, 66, 80, 8, 'rgba(120,128,142,.7)') +
      [0, 1, 2]
        .map((j) => bar(x + 14, 92 + j * 24, 110 - ((j * 29) % 50), 7))
        .join('') +
      dot(x + 130, 60, [ST.risk, ST.partial, ST.risk][i])
    );
  })
  .join(
    '',
  )}<path d="M188 60 L570 84 M356 60 L570 132 M524 60 L570 180" stroke="${SL2}" stroke-dasharray="3 5" fill="none"/>${[
  0, 1, 2,
]
  .map((i) => {
    const y = 72 + i * 48;
    return (
      frame(572, y, 192, 38, i === 0 ? AU : SL2) +
      dot(590, y + 19, [ST.risk, ST.risk, ST.partial][i]) +
      bar(604, y + 15, 130 - ((i * 33) % 50), 7)
    );
  })
  .join(
    '',
  )}${lbl(296, 290, 'EVALUATED SCREENS')}${lbl(668, 290, 'PRIORITISED ISSUES')}</svg>`;

const inputfix = `<svg viewBox="0 0 800 340">${frame(20, 20, 760, 300)}${frame(48, 60, 320, 180, SL2, true)}${bar(68, 84, 90, 8, 'rgba(120,128,142,.7)')}${frame(68, 104, 280, 30, 'rgba(232,168,124,.6)')}<path d="M322 112 l14 14 M336 112 l-14 14" stroke="${ST.risk}" stroke-width="1.6"/>${bar(68, 156, 180, 7)}${lbl(208, 280, 'BEFORE · CALENDAR NEVER TRIGGERS')}${frame(432, 60, 320, 180, AU)}${bar(452, 84, 90, 8, 'rgba(120,128,142,.7)')}${frame(452, 104, 280, 30, AU)}<path d="M706 112 h14 v14 h-14 z M706 118 h14" stroke="${AH}" fill="none" stroke-width="1.3"/>${frame(452, 144, 200, 78, SL2)}${Array.from(
  { length: 3 },
  (_, r) =>
    Array.from(
      { length: 6 },
      (_, cc) =>
        `<rect x="${464 + cc * 30}" y="${156 + r * 20}" width="18" height="12" rx="2" fill="${r === 1 && cc === 3 ? AU : 'rgba(59,70,86,.9)'}"/>`,
    ).join(''),
).join('')}${lbl(592, 280, 'AFTER · PREDICTABLE TRIGGER')}</svg>`;

const nav = `<svg viewBox="0 0 800 340">${frame(20, 20, 760, 300)}${frame(48, 52, 320, 236, SL2, true)}${(
  [
    [70, 80, 90],
    [210, 100, 70],
    [110, 150, 110],
    [240, 190, 60],
    [80, 230, 100],
    [190, 130, 50],
  ] as [number, number, number][]
)
  .map((p) => bar(p[0], p[1], p[2], 8))
  .join(
    '',
  )}<path d="M300 240 l20 18 M320 240 l-20 18" stroke="${ST.risk}" stroke-width="1.4"/>${lbl(208, 310, 'BEFORE · SCATTERED')}${frame(432, 52, 130, 236, AU)}${bar(452, 74, 80, 9, AU)}${[0, 1, 2].map((i) => bar(452, 104 + i * 24, 70 + ((i * 17) % 20), 7)).join('')}<line x1="452" y1="182" x2="542" y2="182" stroke="${SL2}"/>${[0, 1].map((i) => bar(452, 196 + i * 24, 60 + i * 14, 7)).join('')}${bar(452, 262, 50, 7, 'rgba(120,128,142,.7)')}${frame(576, 52, 176, 110, SL2)}${bar(592, 70, 90, 8, 'rgba(184,189,199,.75)')}${[0, 1].map((i) => bar(592, 94 + i * 22, 120 - i * 30, 7)).join('')}${frame(576, 176, 176, 112, SL2)}${bar(592, 194, 70, 8, 'rgba(184,189,199,.75)')}${[0, 1].map((i) => bar(592, 218 + i * 22, 110 - i * 20, 7)).join('')}${lbl(592, 310, 'AFTER · GROUPED & PREDICTABLE')}</svg>`;

const mobiledev = `<svg viewBox="0 0 800 340">${frame(20, 20, 760, 300)}${frame(90, 44, 150, 252, SL2, true)}<circle cx="165" cy="120" r="10" fill="none" stroke="${ST.risk}" stroke-width="1.3" stroke-dasharray="3 3"/>${bar(130, 160, 70, 6)}${bar(130, 180, 50, 6)}${lbl(165, 320, 'BEFORE · SMALL TARGETS')}${frame(400, 44, 150, 252, AU)}<circle cx="475" cy="120" r="24" fill="none" stroke="${AU}" stroke-width="1.5"/>${dot(475, 120, AH)}${frame(420, 164, 110, 34, SL2)}${frame(420, 208, 110, 34, SL2)}${lbl(475, 320, 'AFTER · 44PX+ TARGETS')}${frame(610, 84, 150, 172, SL2)}${bar(626, 104, 80, 8, 'rgba(184,189,199,.75)')}${bar(626, 130, 110, 10, 'rgba(212,175,55,.9)')}${bar(626, 152, 110, 10, 'rgba(212,175,55,.45)')}${bar(626, 174, 110, 10, 'rgba(212,175,55,.2)')}${lbl(685, 320, 'CONTRAST & STATES')}</svg>`;

const ontology = `<svg viewBox="0 0 900 400"><path d="M190 200 C260 200 260 96 330 96 M190 200 C260 200 260 200 330 200 M190 200 C260 200 260 304 330 304 M520 96 C580 96 580 66 640 66 M520 96 C580 96 580 126 640 126 M520 200 C580 200 580 180 640 180 M520 200 C580 200 580 230 640 230 M520 304 C580 304 580 304 640 304" stroke="${SL2}" fill="none"/><rect x="40" y="172" width="150" height="56" rx="8" fill="none" stroke="${AU}" stroke-width="1.5"/>${bar(62, 192, 106, 9, AU)}${lbl(115, 246, 'CAPABILITY')}${[
  96, 200, 304,
]
  .map(
    (y, i) =>
      `<rect x="330" y="${y - 24}" width="190" height="48" rx="8" fill="none" stroke="rgba(212,175,55,.55)" stroke-width="1.2"/>` +
      bar(350, y - 5, 120 - ((i * 27) % 40), 8),
  )
  .join('')}${lbl(425, 360, 'COMPETENCIES')}${[66, 126, 180, 230, 304]
  .map(
    (y, i) =>
      `<rect x="640" y="${y - 16}" width="150" height="32" rx="16" fill="none" stroke="${SL2}"/>` +
      bar(660, y - 4, 90 - ((i * 23) % 40), 7),
  )
  .join(
    '',
  )}<rect x="640" y="338" width="150" height="32" rx="16" fill="none" stroke="${SL2}" stroke-dasharray="4 4"/>${lbl(715, 359, '+ MANY MORE')}${lbl(715, 40, 'SKILLS')}</svg>`;

const match = `<svg viewBox="0 0 800 380">${frame(20, 20, 760, 340)}${(
  [
    [86, 0.86, ST.ok],
    [128, 0.64, ST.partial],
  ] as [number, number, string][]
)
  .map((r) => {
    const y = r[0];
    return (
      dot(52, y, SL) +
      bar(72, y - 5, 130, 9) +
      `<rect x="420" y="${y - 8}" width="200" height="14" rx="7" fill="none" stroke="${SL2}"/><rect x="420" y="${y - 8}" width="${200 * r[1]}" height="14" rx="7" fill="${r[2]}" opacity=".8"/>` +
      bar(660, y - 5, 50, 9, 'rgba(184,189,199,.75)')
    );
  })
  .join(
    '',
  )}${frame(40, 160, 720, 120, AU)}${dot(64, 186, SL)}${bar(84, 181, 130, 9, 'rgba(241,215,154,.85)')}<rect x="420" y="178" width="200" height="14" rx="7" fill="none" stroke="${AU}"/><rect x="420" y="178" width="188" height="14" rx="7" fill="${ST.ok}" opacity=".85"/>${[
  0, 1, 2, 3, 4,
]
  .map(
    (i) =>
      `<rect x="${64 + i * 140}" y="216" width="120" height="26" rx="13" fill="none" stroke="rgba(212,175,55,.5)"/>` +
      bar(84 + i * 140, 226, 76 - ((i * 19) % 30), 7),
  )
  .join('')}${lbl(400, 264, 'CAPABILITY · COMPETENCY · SKILL CONTRIBUTIONS')}${(
  [[318, 0.45, ST.risk]] as [number, number, string][]
)
  .map((r) => {
    const y = r[0];
    return (
      dot(52, y, SL) +
      bar(72, y - 5, 110, 9) +
      `<rect x="420" y="${y - 8}" width="200" height="14" rx="7" fill="none" stroke="${SL2}"/><rect x="420" y="${y - 8}" width="${200 * r[1]}" height="14" rx="7" fill="${r[2]}" opacity=".8"/>`
    );
  })
  .join('')}</svg>`;

const redeploy = `<svg viewBox="0 0 900 330">${frame(20, 40, 250, 240)}${bar(40, 64, 110, 9, 'rgba(184,189,199,.75)')}${frame(40, 90, 210, 70, AU, true)}${bar(56, 108, 150, 8)}${bar(56, 130, 100, 7)}${[
  0, 1,
]
  .map(
    (i) =>
      `<rect x="${40 + i * 110}" y="180" width="96" height="26" rx="13" fill="none" stroke="rgba(212,175,55,.5)"/>` +
      bar(58 + i * 110, 190, 58, 7),
  )
  .join(
    '',
  )}${lbl(145, 308, 'SHIFT REQUIREMENT')}<path d="M282 160 L308 160 M300 152 L310 160 L300 168" stroke="${AU}" stroke-width="1.4" fill="none"/>${frame(325, 40, 250, 240)}${bar(345, 64, 120, 9, 'rgba(184,189,199,.75)')}${(
  [
    ['ok', 0.9],
    ['partial', 0.62],
    ['risk', 0.38],
  ] as ['ok' | 'partial' | 'risk', number][]
)
  .map((s, i) => {
    const y = 98 + i * 52;
    return (
      dot(353, y + 8, SL) +
      bar(371, y + 3, 80, 8) +
      `<rect x="461" y="${y}" width="90" height="12" rx="6" fill="none" stroke="${SL2}"/><rect x="461" y="${y}" width="${90 * s[1]}" height="12" rx="6" fill="${ST[s[0]]}" opacity=".8"/>`
    );
  })
  .join(
    '',
  )}${lbl(450, 308, 'AVAILABLE STAFF · MATCH')}<path d="M587 160 L613 160 M605 152 L615 160 L605 168" stroke="${AU}" stroke-width="1.4" fill="none"/>${frame(630, 40, 250, 240)}${bar(650, 64, 120, 9, 'rgba(184,189,199,.75)')}${frame(650, 92, 210, 84, SL2)}${bar(666, 110, 150, 8)}${bar(666, 132, 120, 7)}${bar(666, 150, 90, 7)}<rect x="700" y="210" width="140" height="32" rx="6" fill="none" stroke="${AU}" stroke-width="1.5"/>${bar(728, 222, 84, 8, AU)}${lbl(755, 308, 'REVIEW & ACT')}</svg>`;

const ds = `<svg viewBox="0 0 800 340">${frame(20, 20, 760, 300)}${[
  '#0B0F14',
  '#121620',
  '#1E2532',
  '#2A3342',
  '#D4AF37',
  '#F1D79A',
]
  .map(
    (c, i) =>
      `<rect x="${44 + i * 58}" y="48" width="46" height="34" rx="6" fill="${c}" stroke="${SL2}"/>`,
  )
  .join('')}${lbl(216, 110, 'COLOUR TOKENS')}${[0, 1, 2, 3, 4, 5]
  .map((i) => {
    const x = 470 + i * 50;
    return `<g stroke="${AU}" fill="none" stroke-width="1.4"><circle cx="${x}" cy="65" r="12" opacity="${i % 2 ? 0.55 : 1}"/>${
      i % 3 === 0
        ? `<path d="M${x - 5} 65 h10 M${x} 60 v10"/>`
        : i % 3 === 1
          ? `<path d="M${x - 5} 60 l10 10 M${x + 5} 60 l-10 10"/>`
          : `<rect x="${x - 5}" y="60" width="10" height="10" transform="rotate(45 ${x} 65)"/>`
    }</g>`;
  })
  .join('')}${lbl(595, 110, 'ICON LANGUAGE')}${(
  [
    ['DEFAULT', SL2],
    ['HOVER', AU],
    ['DISABLED', 'rgba(59,70,86,.5)'],
  ] as [string, string][]
)
  .map(
    (b, i) =>
      `<rect x="${44 + i * 160}" y="150" width="140" height="36" rx="6" fill="none" stroke="${b[1]}" stroke-width="1.4"/>` +
      bar(74 + i * 160, 164, 80, 8, i === 1 ? AU : SL),
  )
  .join('')}${lbl(266, 214, 'INTERACTION STATES')}${[0, 1, 2, 3]
  .map(
    (i) =>
      `<line x1="${560 + i * 50}" y1="150" x2="${560 + i * 50}" y2="186" stroke="${AU}" opacity=".5"/>`,
  )
  .join(
    '',
  )}${bar(560, 164, 150, 8)}${lbl(635, 214, 'SPACING SCALE')}${frame(44, 240, 716, 56, SL2)}${bar(64, 258, 120, 9, 'rgba(184,189,199,.75)')}${bar(64, 278, 200, 7)}${dot(720, 268, ST.ok)}${lbl(400, 320, 'SHARED COMPONENTS · CONSISTENT HIERARCHY')}</svg>`;

/* ---- Zymes ---- */

const ecomap = `<svg viewBox="0 0 900 430"><path d="${[150, 450, 750].map((x) => `M450 106 C450 150 ${x} 150 ${x} 196`).join(' ')} ${[150, 450, 750].map((x) => `M${x} 252 C${x} 280 ${x} 290 ${x} 316`).join(' ')}" stroke="${SL2}" fill="none"/><rect x="320" y="36" width="260" height="70" rx="10" fill="none" stroke="${AU}" stroke-width="1.6"/><text x="450" y="66" fill="${AH}" font-size="20" letter-spacing="6" text-anchor="middle" font-family="Cinzel, serif">ZYMES</text><text x="450" y="90" fill="${AU}" font-size="10" letter-spacing="2.5" text-anchor="middle" font-family="Inter, sans-serif">PARENT PLATFORM · PRODUCT SHELL</text>${(
  [
    ['VIEWMO', 150, 196],
    ['SMART SLOT', 450, 196],
    ['IDIM', 750, 196],
    ['CARE SMART', 150, 316],
    ['SMARTQ', 450, 316],
    ['PREPASURE', 750, 316],
  ] as [string, number, number][]
)
  .map(
    (p) =>
      `<rect x="${p[1] - 110}" y="${p[2]}" width="220" height="56" rx="8" fill="none" stroke="rgba(212,175,55,.5)" stroke-width="1.2"/><text x="${p[1]}" y="${p[2] + 33}" fill="var(--text-primary)" font-size="14" letter-spacing="3" text-anchor="middle" font-family="Cinzel, serif">${p[0]}</text>`,
  )
  .join('')}</svg>`;

/* ---- Deutsche Aligners ---- */

const aligntrack = `<svg viewBox="0 0 800 360">${frame(20, 20, 760, 320)}<circle cx="150" cy="150" r="78" fill="none" stroke="${SL2}" stroke-width="10"/><path d="M150 72 a78 78 0 1 1 -74 55" fill="none" stroke="${AU}" stroke-width="10" stroke-linecap="round"/><text x="150" y="144" fill="${AH}" font-size="30" text-anchor="middle" font-family="Cinzel, serif">12</text><text x="150" y="170" fill="var(--text-tertiary)" font-size="11" letter-spacing="2" text-anchor="middle" font-family="Inter, sans-serif">OF 28 TRAYS</text>${lbl(150, 266, 'CURRENT ALIGNER')}${frame(290, 60, 220, 84, SL2)}${bar(310, 80, 110, 8, 'rgba(120,128,142,.7)')}<text x="310" y="124" fill="${AH}" font-size="22" font-family="Cinzel, serif">5 DAYS</text>${lbl(400, 168, 'UNTIL NEXT TRAY')}${frame(534, 60, 220, 84, SL2)}${bar(554, 80, 100, 8, 'rgba(120,128,142,.7)')}${dot(566, 116, ST.ok)}${bar(584, 111, 120, 8)}${lbl(644, 168, 'NEXT APPOINTMENT')}${frame(290, 196, 464, 88, AU, true)}${bar(310, 216, 140, 8)}<rect x="310" y="240" width="424" height="12" rx="6" fill="none" stroke="${SL2}"/><rect x="310" y="240" width="180" height="12" rx="6" fill="${AU}" opacity=".85"/>${lbl(522, 312, 'TREATMENT PROGRESS · DAILY WEAR REMINDER')}</svg>`;

const timeline = `<svg viewBox="0 0 900 300"><line x1="60" y1="150" x2="840" y2="150" stroke="${SL2}" stroke-width="2"/><line x1="60" y1="150" x2="420" y2="150" stroke="${AU}" stroke-width="2"/>${(
  [
    [100, 'ok'],
    [220, 'ok'],
    [340, 'ok'],
    [420, 'cur'],
    [560, 'up'],
    [700, 'up'],
    [820, 'up'],
  ] as [number, string][]
)
  .map((m, i) => {
    const done = m[1] === 'ok';
    const cur = m[1] === 'cur';
    return (
      `<circle cx="${m[0]}" cy="150" r="${cur ? 14 : 8}" fill="${done ? ST.ok : cur ? 'none' : '#1E2532'}" stroke="${cur ? AU : done ? ST.ok : SL2}" stroke-width="${cur ? 2 : 1.3}"/>` +
      (cur ? `<circle cx="${m[0]}" cy="150" r="5" fill="${AH}"/>` : '') +
      bar(
        m[0] - 30,
        i % 2 ? 186 : 96,
        60,
        7,
        done || cur ? undefined : 'rgba(59,70,86,.9)',
      )
    );
  })
  .join(
    '',
  )}${lbl(240, 250, 'COMPLETED')}${lbl(420, 250, 'CURRENT STAGE')}${lbl(700, 250, 'UPCOMING · ESTIMATED COMPLETION')}</svg>`;

const gallery = `<svg viewBox="0 0 800 320">${frame(20, 20, 760, 280)}${[
  0, 1, 2, 3,
]
  .map((i) => {
    const x = 48 + i * 150;
    return (
      frame(x, 56, 130, 130, i === 3 ? AU : SL2) +
      `<circle cx="${x + 38}" cy="96" r="12" fill="none" stroke="${i === 3 ? AU : SL}"/><path d="M${x + 14} 160 l30 -26 22 18 28 -34 22 42" stroke="${i === 3 ? AU : SL}" fill="none" stroke-width="1.3"/>` +
      bar(x + 34, 198, 60, 6, 'rgba(120,128,142,.7)')
    );
  })
  .join(
    '',
  )}${lbl(400, 260, 'WEEK 1 → WEEK 6 → WEEK 12 → TODAY · COMPARE')}</svg>`;

/**
 * NDA silhouette — an abstract product screen with a PROTECTED seal,
 * used where the real screens cannot be shown.
 */
export const ndaSilhouette = `<svg viewBox="0 0 800 340" style="width:100%;height:100%;" preserveAspectRatio="xMidYMid meet">${frame(20, 20, 760, 300)}${frame(36, 36, 140, 268, SL2)}${[0, 1, 2, 3].map((i) => bar(52, 62 + i * 28, 90 - ((i * 23) % 40), 7, i === 0 ? AU : undefined)).join('')}${frame(192, 36, 420, 150, SL2)}${bar(210, 56, 160, 9, 'rgba(184,189,199,.6)')}${[0, 1, 2].map((i) => bar(210, 86 + i * 26, 300 - ((i * 57) % 120), 8)).join('')}${frame(628, 36, 136, 150, SL2)}<circle cx="696" cy="96" r="34" fill="none" stroke="${AU}" stroke-width="1.4" opacity=".6"/>${frame(192, 200, 572, 104, SL2)}${[0, 1, 2].map((i) => bar(210, 220 + i * 26, 240 + ((i * 67) % 160), 8)).join('')}<g><rect x="270" y="128" width="260" height="66" rx="8" fill="rgba(11,15,20,.88)" stroke="${AU}" stroke-width="1.2"/><path d="M330 172 v-14 a12 12 0 0 1 24 0 v14 M324 172 h36 v22 h-36 z" transform="translate(-24,-30)" fill="none" stroke="${AH}" stroke-width="1.5"/><text x="415" y="158" fill="${AH}" font-size="14" letter-spacing="4" text-anchor="middle" font-family="Cinzel, serif">PROTECTED</text><text x="415" y="178" fill="var(--text-tertiary)" font-size="10" letter-spacing="3" text-anchor="middle" font-family="Inter, sans-serif">FULL SCREENS UNDER NDA · AVAILABLE IN INTERVIEW</text></g></svg>`;

export const illustrations = {
  // Casey
  workflow,
  explorations,
  tabular,
  review,
  loop,
  map,
  // Tachyon
  docs,
  calendar,
  adherence,
  devices,
  chat,
  console: consoleArt,
  risk,
  heat,
  // Shift Partner
  heuristic,
  inputfix,
  nav,
  mobiledev,
  ontology,
  match,
  redeploy,
  ds,
  // Zymes
  ecomap,
  // Deutsche Aligners
  aligntrack,
  timeline,
  gallery,
} as const;

export type IllustrationId = keyof typeof illustrations;
