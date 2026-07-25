import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { SourceMapConsumer } from 'source-map';

const mapPath = resolve(process.cwd(), 'dist/assets/index-s--uWiRY.js.map');
const raw = readFileSync(mapPath, 'utf8');

const positions = [
  { line: 49, column: 128647 },
  { line: 49, column: 129031 },
];

SourceMapConsumer.with(JSON.parse(raw), null, (consumer) => {
  for (const pos of positions) {
    const orig = consumer.originalPositionFor(pos);
    console.log(JSON.stringify({ pos, orig }, null, 2));
  }
});
