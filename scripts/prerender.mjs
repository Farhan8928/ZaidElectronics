// Prerender the homepage: load the built SPA in a headless browser, let the
// scroll-reveal sections animate in, then inject the rendered #root markup back
// into dist/index.html. Crawlers and AI that don't run JS now get the full page
// content; on load, React re-renders identical markup, so users see it instantly.
//
// CI fallback: Vercel's build machine has no browser. Every successful local
// prerender saves the rendered markup to scripts/.prerendered-root.html
// (COMMITTED to git). When no browser is available, that snapshot is injected
// instead — so production always ships a fully prerendered homepage.

import http from 'node:http'
import { readFile, writeFile } from 'node:fs/promises'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join, extname, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist')
const SNAPSHOT = join(ROOT, 'scripts', '.prerendered-root.html')

async function injectIntoDist(rootHtml, sourceNote) {
  const indexPath = join(DIST, 'index.html')
  let html = await readFile(indexPath, 'utf8')
  if (!html.includes('<div id="root"></div>')) {
    console.log('prerender: root placeholder not found — skipping (already prerendered?)')
    return
  }
  html = html.replace('<div id="root"></div>', `<div id="root">${rootHtml}</div>`)
  await writeFile(indexPath, html, 'utf8')
  console.log(`prerender: injected ${rootHtml.length.toLocaleString()} chars (${sourceNote})`)
}
const TYPES = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.svg': 'image/svg+xml', '.json': 'application/json',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.webmanifest': 'application/manifest+json', '.txt': 'text/plain', '.xml': 'application/xml',
}

// minimal static server for dist (SPA-style fallback to index.html)
const server = http.createServer(async (req, res) => {
  const p = decodeURIComponent(req.url.split('?')[0])
  let file = join(DIST, p)
  if (p === '/' || p.endsWith('/') || !existsSync(file)) file = join(DIST, 'index.html')
  try {
    const buf = await readFile(file)
    res.setHeader('Content-Type', TYPES[extname(file)] || 'application/octet-stream')
    res.end(buf)
  } catch {
    res.statusCode = 404
    res.end('not found')
  }
})

await new Promise((r) => server.listen(0, r))
const port = server.address().port

/**
 * Launch Chromium, self-healing for CI (Vercel's build image ships without
 * Playwright browsers): on a missing-executable error we install Chromium
 * once and retry. If a browser is genuinely impossible (very locked-down CI),
 * we skip prerendering with a loud warning instead of failing the deploy —
 * the site still works, it just hydrates client-side only.
 */
async function launchBrowser() {
  try {
    return await chromium.launch()
  } catch (err) {
    console.log('prerender: chromium not found, installing (one-time, ~30s)…')
    try {
      const { execSync } = await import('node:child_process')
      execSync('npx playwright install chromium', { stdio: 'inherit' })
      return await chromium.launch()
    } catch (err2) {
      console.warn('prerender: no browser available in this environment.')
      console.warn('           Reason:', err2.message.split('\n')[0])
      return null
    }
  }
}

const browser = await launchBrowser()
if (!browser) {
  // CI fallback: inject the committed snapshot from the last local prerender.
  if (existsSync(SNAPSHOT)) {
    await injectIntoDist(readFileSync(SNAPSHOT, 'utf8'), 'committed snapshot')
  } else {
    console.warn('prerender: SKIPPED — no snapshot found either; homepage renders client-side only.')
  }
  server.close()
  process.exit(0)
}
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
await page.goto(`http://localhost:${port}/`, { waitUntil: 'networkidle' })

// Trigger every scroll-reveal section so the captured DOM is fully visible.
await page.evaluate(async () => {
  const h = document.body.scrollHeight
  for (let y = 0; y < h; y += 400) {
    window.scrollTo(0, y)
    await new Promise((r) => setTimeout(r, 50))
  }
  window.scrollTo(0, 0)
})
await page.waitForTimeout(900)

const root = await page.evaluate(() => document.getElementById('root').innerHTML)
await browser.close()
server.close()

// Save the snapshot for CI (committed to git), then inject into dist.
writeFileSync(SNAPSHOT, root, 'utf8')
await injectIntoDist(root, 'live render')
