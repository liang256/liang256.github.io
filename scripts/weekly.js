/* global hexo */
'use strict';

// `npx hexo weekly` — create the next weekly post with an auto-incremented number.
// Scans source/_posts for files named weekly-NNNN.md (and the old "weelky" typo),
// then creates source/_posts/YYYY/MM/weekly-<next>.md from scaffolds/weekly.md.

const fs = require('fs');
const path = require('path');

function findMaxWeekly(dir) {
  let max = 0;
  if (!fs.existsSync(dir)) return max;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      max = Math.max(max, findMaxWeekly(full));
    } else {
      const m = entry.name.match(/^wee(?:kl|lk)y-(\d+)\.md$/);
      if (m) max = Math.max(max, parseInt(m[1], 10));
    }
  }
  return max;
}

hexo.extend.console.register('weekly', 'Create the next weekly post (auto-numbered)', {
  usage: '[subtitle]',
  arguments: [
    { name: 'subtitle', desc: 'Optional subtitle, e.g. "Rain and Tools" → "Weekly Notes 0015: Rain and Tools"' }
  ]
}, async function(args) {
  const postsDir = path.join(this.source_dir, '_posts');
  const num = String(findMaxWeekly(postsDir) + 1).padStart(4, '0');
  const subtitle = args._.join(' ').trim();

  const post = await this.post.create({
    layout: 'weekly',
    slug: `weekly-${num}`,
    title: subtitle ? `Weekly Notes ${num}: ${subtitle}` : `Weekly Notes ${num}`
  });

  this.log.info('Created: %s', path.relative(this.base_dir, post.path));
});
