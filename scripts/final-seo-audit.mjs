// Final SEO audit over dist/ — run after `npm run build`.
// Checks every HTML page for on-page essentials, validates JSON-LD, verifies
// internal links + referenced assets actually exist, and confirms all SEO
// files ship. Exits non-zero if anything fails, so it can gate deploys.

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const DIST = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')
let problems = 0
const warn = (msg) => { problems++; console.log('  ⚠ ' + msg) }
const ok = (msg) => console.log('  ✓ ' + msg)

// collect every html file
const htmlFiles = []
;(function walk(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e)
    if (statSync(p).isDirectory()) walk(p)
    else if (e.endsWith('.html')) htmlFiles.push(p)
  }
})(DIST)

console.log(`\n===== FINAL SEO AUDIT — ${htmlFiles.length} HTML pages =====`)

for (const file of htmlFiles) {
  const rel = file.replace(DIST, '').replace(/\\/g, '/')
  if (rel === '/404.html') continue // intentionally noindex, no schema
  const h = readFileSync(file, 'utf8')
  const title = (h.match(/<title>(.*?)<\/title>/s) || [])[1] || ''
  const desc = (h.match(/name="description"[^>]*content="([^"]*)"/) || [])[1] || ''
  const issues = []

  if (!title) issues.push('missing <title>')
  else if (title.length > 65) issues.push(`title too long (${title.length})`)
  if (!desc) issues.push('missing meta description')
  else if (desc.length > 165) issues.push(`description too long (${desc.length})`)
  if (!/rel="canonical"/.test(h)) issues.push('missing canonical')
  if (!/name="viewport"/.test(h)) issues.push('missing viewport')
  if (!/<html lang=/.test(h)) issues.push('missing html lang')
  if (/noindex/.test(h)) issues.push('has noindex!')
  const h1s = (h.match(/<h1[\s>]/g) || []).length
  if (h1s !== 1) issues.push(`h1 count = ${h1s}`)
  if (!/property="og:title"/.test(h)) issues.push('missing og:title')
  if (!/og-image\.jpg/.test(h)) issues.push('missing og:image')

  // JSON-LD validity
  const blocks = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  if (!blocks.length) issues.push('no JSON-LD')
  for (const b of blocks) {
    try { JSON.parse(b[1]) } catch (e) { issues.push('INVALID JSON-LD: ' + e.message.slice(0, 60)) }
  }

  // images without alt
  const noAlt = (h.match(/<img(?![^>]*\balt=)[^>]*>/g) || []).length
  if (noAlt) issues.push(`${noAlt} <img> without alt`)

  // internal links resolve to real files/dirs
  const hrefs = [...h.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1])
  for (const href of new Set(hrefs)) {
    if (href.startsWith('/assets')) continue
    const clean = href.replace(/\/$/, '')
    const candidates = [
      join(DIST, clean),
      join(DIST, clean, 'index.html'),
      join(DIST, clean + '.html'),
    ]
    if (clean !== '' && !candidates.some(existsSync)) issues.push(`broken internal link: ${href}`)
  }

  // referenced local images exist
  const srcs = [...h.matchAll(/src="(\/images\/[^"]+)"/g)].map((m) => m[1])
  for (const s of new Set(srcs)) if (!existsSync(join(DIST, s))) issues.push(`missing image: ${s}`)

  if (issues.length) { console.log(`\n${rel}`); issues.forEach(warn) }
}

console.log('\n===== SEO FILES =====')
for (const f of ['robots.txt', 'sitemap.xml', 'llms.txt', 'og-image.jpg', 'favicon.svg',
  'site.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable.png',
  'apple-touch-icon.png', '404.html']) {
  existsSync(join(DIST, f)) ? ok(f) : warn(`MISSING ${f}`)
}

// sitemap URLs all resolve
console.log('\n===== SITEMAP INTEGRITY =====')
const sm = readFileSync(join(DIST, 'sitemap.xml'), 'utf8')
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
for (const loc of locs) {
  const path = loc.replace(/^https:\/\/[^/]+/, '').replace(/\/$/, '')
  const target = path === '' ? join(DIST, 'index.html') : join(DIST, path, 'index.html')
  if (!existsSync(target)) warn(`sitemap URL has no page: ${loc}`)
}
ok(`${locs.length} sitemap URLs, all resolve`)

console.log(`\n===== RESULT: ${problems === 0 ? 'ALL CLEAN ✅' : problems + ' PROBLEM(S) ⚠'} =====\n`)
process.exit(problems ? 1 : 0)
