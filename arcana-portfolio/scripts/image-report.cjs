const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, '..', 'public', 'assets');
if (!fs.existsSync(dir)) {
  console.error('No public/assets directory');
  process.exit(1);
}

function walk(d) {
  const entries = fs.readdirSync(d, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(d, e.name);
    if (e.isDirectory()) walk(full);
    else {
      const stat = fs.statSync(full);
      console.log(`${path.relative(dir, full)} - ${(stat.size/1024).toFixed(1)} KB`);
    }
  }
}

walk(dir);
