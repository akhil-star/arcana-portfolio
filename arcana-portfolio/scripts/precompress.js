const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const dist = path.resolve(__dirname, '..', 'dist');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (/\.(js|css|html|json|svg|txt)$/.test(e.name)) compress(full);
  }
}

function compress(file) {
  const content = fs.readFileSync(file);
  // gzip
  const gz = zlib.gzipSync(content, { level: zlib.constants.Z_BEST_COMPRESSION });
  fs.writeFileSync(file + '.gz', gz);
  // brotli
  const br = zlib.brotliCompressSync(content, { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 11 } });
  fs.writeFileSync(file + '.br', br);
  console.log('compressed', file);
}

if (!fs.existsSync(dist)) {
  console.error('dist/ not found — run `npm run build` first');
  process.exit(1);
}
walk(dist);
console.log('precompress complete');
