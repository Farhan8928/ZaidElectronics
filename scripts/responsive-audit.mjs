import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

// Point TARGET at your running dev server (default) or a preview build.
const TARGET = process.env.URL || 'http://localhost:5173/'
const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', '.audit-shots')
mkdirSync(OUT, { recursive: true })

const VIEWPORTS = [
  { name: 'phone-320', width: 320, height: 640 },
  { name: 'phone-360', width: 360, height: 800 },
  { name: 'phone-390', width: 390, height: 844 },
  { name: 'phone-414', width: 414, height: 896 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'laptop-1366', width: 1366, height: 768 },
  { name: 'desktop-1920', width: 1920, height: 1080 },
]

const inspect = (vw) => {
  const docW = document.documentElement.clientWidth
  const scrollW = document.documentElement.scrollWidth
  const offenders = []
  for (const el of document.querySelectorAll('body *')) {
    const r = el.getBoundingClientRect()
    if (r.width === 0 || r.height === 0) continue
    if (r.right > docW + 1 || r.left < -1) {
      const cs = getComputedStyle(el)
      if (cs.position === 'fixed') continue
      offenders.push({
        tag: el.tagName.toLowerCase(),
        cls: (el.className || '').toString().slice(0, 55),
        left: Math.round(r.left),
        right: Math.round(r.right),
        w: Math.round(r.width),
        text: (el.textContent || '').trim().slice(0, 26),
      })
    }
  }
  const smallTaps = []
  if (vw <= 480) {
    for (const el of document.querySelectorAll('a, button, input, textarea, summary')) {
      const r = el.getBoundingClientRect()
      if (r.width === 0 || r.height === 0) continue
      if (r.height < 36) {
        smallTaps.push({
          tag: el.tagName.toLowerCase(),
          h: Math.round(r.height),
          text: (el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 22),
        })
      }
    }
  }
  return {
    docW, scrollW,
    horizontalOverflow: scrollW > docW + 1,
    overflowAmount: scrollW - docW,
    offenders: offenders.slice(0, 25),
    smallTaps: smallTaps.slice(0, 15),
  }
}

const browser = await chromium.launch()
const results = []

for (const vp of VIEWPORTS) {
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
    isMobile: vp.width <= 480,
    hasTouch: vp.width <= 480,
  })
  const page = await ctx.newPage()
  await page.goto(TARGET, { waitUntil: 'networkidle' })
  await page.waitForTimeout(500)
  const report = await page.evaluate(inspect, vp.width)
  results.push({ viewport: vp.name, ...report })
  await page.screenshot({ path: `${OUT}/${vp.name}.png`, fullPage: true })
  if (vp.name === 'phone-390') {
    const toggle = page.locator('button[aria-label="Open menu"]')
    if (await toggle.count()) {
      await toggle.first().click()
      await page.waitForTimeout(400)
      await page.screenshot({ path: `${OUT}/phone-390-menu.png` })
    }
  }
  await ctx.close()
}
await browser.close()

console.log('\n===== RESPONSIVE AUDIT =====')
for (const r of results) {
  console.log(`\n### ${r.viewport}  docW=${r.docW} scrollW=${r.scrollW}`)
  console.log(`   overflow: ${r.horizontalOverflow ? 'YES +' + r.overflowAmount + 'px' : 'no'}`)
  if (r.offenders.length) {
    console.log('   OFFENDERS:')
    for (const o of r.offenders) console.log(`     <${o.tag}> R=${o.right} w=${o.w} "${o.text}" .${o.cls}`)
  }
  if (r.smallTaps.length) {
    console.log('   SMALL TAPS:')
    for (const t of r.smallTaps) console.log(`     <${t.tag}> h=${t.h} "${t.text}"`)
  }
}
console.log('\n===== END =====')
