/**
 * Cursor sparkles — transient DOM particles appended to #sparkle-layer.
 * Imperative on purpose: hundreds of short-lived elements should never
 * pass through React state.
 */
export function spawnSparkle(x: number, y: number) {
  const layer = document.getElementById('sparkle-layer');
  if (!layer) return;
  const s = document.createElement('div');
  s.className = 'sparkle';
  s.style.left = `${x + (Math.random() * 16 - 8)}px`;
  s.style.top = `${y + (Math.random() * 16 - 8)}px`;
  layer.appendChild(s);
  setTimeout(() => s.remove(), 750);
}

/** A short burst of sparkles around a point (island hovers, unlocks). */
export function burstSparkles(x: number, y: number, n: number) {
  for (let i = 0; i < n; i++) {
    setTimeout(
      () =>
        spawnSparkle(
          x + (Math.random() * 60 - 30),
          y + (Math.random() * 60 - 30),
        ),
      i * 30,
    );
  }
}
