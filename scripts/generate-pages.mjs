// Build-time generator: writes a standalone static landing page for every
// entry in seo-pages.mjs to dist/<slug>/index.html, plus the full sitemap.
// Runs after `vite build`. Pages are self-contained (inline CSS) so they render
// and rank without the SPA, and each cross-links back to the homepage and to
// sibling pages (internal-link hub).

import { mkdirSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ALL_PAGES } from './seo-pages.mjs'
import { CONTACT, RATING, BRANDS, fmtPhone, waLink } from '../src/data/site.js'
import { SERVICES } from '../src/data/services.js'
import { FAQS } from '../src/data/faqs.js'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist')
const SITE = 'https://zaidelectronicsmumbai.com'
const tel = `+91${CONTACT.phones[0]}`

const addressLd = {
  '@type': 'PostalAddress',
  streetAddress: 'Shop No. 6, H-Sector, B-Line, Balaji Mandir Rd, Opp. Saibaba Mandir, Near Madina Dairy, Dhobi Ghat',
  addressLocality: 'Cheeta Camp, Trombay',
  addressRegion: 'Maharashtra',
  postalCode: '400088',
  addressCountry: 'IN',
}

const businessLd = {
  '@type': ['ElectronicsStore', 'LocalBusiness'],
  '@id': `${SITE}/#business`,
  name: 'Zaid Electronics',
  url: `${SITE}/`,
  image: `${SITE}/og-image.jpg`,
  telephone: '+91-98214-73182',
  priceRange: '₹₹',
  address: addressLd,
  geo: { '@type': 'GeoCoordinates', latitude: 19.0426, longitude: 72.9065 },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: RATING.score, reviewCount: '190', bestRating: '5' },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '10:00', closes: '21:30',
  }],
}

const faqLd = {
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question', name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const CSS = `
:root{--paper:#f3efe4;--ink:#17140d;--green:#0c8a46;--yellow:#ffce34;--muted:#6b6459;--line:#17140d}
*{margin:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{background:var(--paper);color:var(--ink);font-family:Inter,system-ui,sans-serif;line-height:1.6;-webkit-font-smoothing:antialiased}
a{color:inherit}
.mono{font-family:'Space Mono',monospace}
.wrap{width:min(1040px,92%);margin-inline:auto}
.strip{background:var(--ink);color:var(--paper)}
.strip .wrap{display:flex;justify-content:space-between;gap:1rem;padding:.5rem 0;font-family:'Space Mono',monospace;font-size:.66rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase}
.strip .y{color:var(--yellow)}
header{border-bottom:2px solid var(--ink);background:var(--paper);position:sticky;top:0;z-index:10}
header .wrap{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.75rem 0}
.brand{display:flex;align-items:center;gap:.6rem;text-decoration:none}
.badge{width:40px;height:40px;display:grid;place-items:center;border:2px solid var(--ink);border-radius:6px;background:var(--yellow);font-family:'Space Grotesk',sans-serif;font-weight:700;box-shadow:3px 3px 0 var(--ink)}
.brand b{font-family:'Space Grotesk',sans-serif;font-size:1.05rem;letter-spacing:-.01em}
.brand small{display:block;font-family:'Space Mono',monospace;font-size:.58rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.btn{display:inline-flex;align-items:center;gap:.4rem;border:2px solid var(--ink);border-radius:5px;padding:.6rem 1.1rem;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:.9rem;text-decoration:none;box-shadow:4px 4px 0 var(--ink);transition:transform .12s,box-shadow .12s}
.btn:hover{transform:translate(2px,2px);box-shadow:2px 2px 0 var(--ink)}
.btn-green{background:var(--green);color:#fff}
.btn-white{background:#fff;color:var(--ink)}
.btn-yellow{background:var(--yellow);color:var(--ink)}
main{padding:2.5rem 0 3rem}
.eyebrow{font-family:'Space Mono',monospace;font-size:.72rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--green)}
h1{font-family:'Space Grotesk',sans-serif;font-weight:700;letter-spacing:-.03em;line-height:1.02;font-size:clamp(2rem,5.5vw,3.2rem);margin:.6rem 0 1rem}
h2{font-family:'Space Grotesk',sans-serif;font-weight:700;letter-spacing:-.02em;font-size:1.5rem;margin:2.4rem 0 1rem}
.answer{border:2px solid var(--ink);border-left-width:10px;border-left-color:var(--yellow);background:#fff;border-radius:6px;padding:1.1rem 1.3rem;box-shadow:5px 5px 0 var(--ink);font-size:1.02rem;margin-bottom:1.6rem}
p{max-width:70ch;margin-bottom:1rem;color:#241f16}
.btns{display:flex;flex-wrap:wrap;gap:.8rem;margin:1.4rem 0 .5rem}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:1rem}
.card{border:2px solid var(--ink);background:#fff;border-radius:6px;padding:1.1rem 1.2rem;box-shadow:4px 4px 0 var(--ink)}
.card h3{font-family:'Space Grotesk',sans-serif;font-size:1.05rem;margin-bottom:.3rem}
.card p{font-size:.88rem;color:var(--muted);margin:0}
.chips{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.6rem}
.chip{font-family:'Space Mono',monospace;font-size:.68rem;font-weight:700;text-transform:uppercase;border:2px solid var(--ink);border-radius:4px;padding:.2rem .55rem;background:var(--paper)}
.links{display:flex;flex-wrap:wrap;gap:.5rem}
.links a{font-family:'Space Mono',monospace;font-size:.76rem;font-weight:700;text-transform:uppercase;border:2px solid var(--ink);border-radius:5px;padding:.45rem .7rem;text-decoration:none;background:#fff;box-shadow:3px 3px 0 var(--ink)}
.links a:hover{background:var(--yellow)}
details{border:2px solid var(--ink);border-radius:6px;background:#fff;margin-bottom:.6rem;box-shadow:4px 4px 0 var(--ink)}
summary{cursor:pointer;list-style:none;padding:.9rem 1.1rem;font-family:'Space Grotesk',sans-serif;font-weight:700}
summary::-webkit-details-marker{display:none}
details p{padding:0 1.1rem 1rem;color:var(--muted);font-size:.93rem}
.nap{border:2px solid var(--ink);border-radius:6px;background:#fff;padding:1.2rem 1.3rem;box-shadow:5px 5px 0 var(--ink)}
.nap b{font-family:'Space Grotesk',sans-serif}
footer{border-top:2px solid var(--ink);background:var(--ink);color:var(--paper);margin-top:2.5rem}
footer .wrap{padding:2rem 0;font-size:.85rem}
footer a{color:var(--yellow)}
footer .areas{color:rgba(243,239,228,.55);font-size:.78rem;margin-top:.8rem}
`

const svcCards = SERVICES.map(
  (s) => `<div class="card"><h3>${s.title}</h3><p>${s.desc}</p></div>`
).join('')

const faqHtml = FAQS.map(
  (f) => `<details><summary>${f.q}</summary><p>${f.a}</p></details>`
).join('')

const brandChips = BRANDS.map((b) => `<span class="chip">${b}</span>`).join('')

function relatedLinks(current) {
  return ALL_PAGES.filter((p) => p.slug !== current)
    .slice(0, 8)
    .map((p) => `<a href="/${p.slug}/">${p.h1}</a>`)
    .join('')
}

function pageHtml(p) {
  const url = `${SITE}/${p.slug}/`
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      businessLd,
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: p.h1, item: url },
        ],
      },
      {
        '@type': 'Service',
        name: p.keyword,
        serviceType: 'Television repair service',
        provider: { '@id': `${SITE}/#business` },
        areaServed: { '@type': 'City', name: 'Mumbai' },
        description: p.aeoAnswer,
        url,
      },
      faqLd,
    ],
  }
  const intro = p.intro.map((t) => `<p>${t}</p>`).join('')
  return `<!doctype html>
<html lang="en-IN">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${p.metaTitle}</title>
<meta name="description" content="${p.metaDescription}" />
<meta name="author" content="Zaid Electronics" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
<meta name="theme-color" content="#f3efe4" />
<link rel="canonical" href="${url}" />
<meta name="geo.region" content="IN-MH" />
<meta name="geo.placename" content="Cheeta Camp, Trombay, Mumbai" />
<meta name="geo.position" content="19.0426;72.9065" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Zaid Electronics" />
<meta property="og:title" content="${p.metaTitle}" />
<meta property="og:description" content="${p.metaDescription}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${SITE}/og-image.jpg" />
<meta property="og:locale" content="en_IN" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="${SITE}/og-image.jpg" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Space+Mono:wght@700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
<script type="application/ld+json">${JSON.stringify(graph)}</script>
<style>${CSS}</style>
</head>
<body>
<div class="strip"><div class="wrap"><span class="y">★ Free diagnosis · Doorstep service · 90-day warranty</span><span>${CONTACT.hours}</span></div></div>
<header><div class="wrap">
  <a class="brand" href="/"><span class="badge">Ze</span><span><b>ZAID ELECTRONICS</b><small>TV Repair Workshop · Mumbai</small></span></a>
  <a class="btn btn-green" href="tel:${tel}">Call ${fmtPhone(CONTACT.phones[0])}</a>
</div></header>
<main><div class="wrap">
  <p class="eyebrow">${p.eyebrow}</p>
  <h1>${p.h1}</h1>
  <div class="answer">${p.aeoAnswer}</div>
  ${intro}
  <div class="btns">
    <a class="btn btn-green" href="tel:${tel}">📞 Call ${fmtPhone(CONTACT.phones[0])}</a>
    <a class="btn btn-white" href="${waLink(`Hi Zaid Electronics! I need: ${p.keyword}.`)}" target="_blank" rel="noopener">WhatsApp a Photo</a>
  </div>

  <h2>What we fix</h2>
  <div class="grid">${svcCards}</div>
  <div class="chips" style="margin-top:1rem">${brandChips}</div>

  <h2>Why Zaid Electronics</h2>
  <p>Big service centres quote a new panel for every screen fault. We find the real fault and fix it at component level — which is why your bill is a fraction of theirs. Free diagnosis, a fixed price agreed on WhatsApp before we start, and a written 90-day warranty on every repair. Rated ${RATING.score}★ by ${RATING.count} customers on Google, at the same counter since ${CONTACT.since}.</p>

  <h2>Questions customers ask</h2>
  ${faqHtml}

  <h2>Visit or call</h2>
  <div class="nap">
    <p style="margin:0 0 .4rem"><b>Zaid Electronics</b> — TV, LCD, LED repair &amp; panel bonding</p>
    <p style="margin:0 0 .4rem">${CONTACT.address}</p>
    <p style="margin:0 0 .4rem"><b>Call / WhatsApp:</b> <a href="tel:+91${CONTACT.phones[0]}">${fmtPhone(CONTACT.phones[0])}</a> · <a href="tel:+91${CONTACT.phones[1]}">${fmtPhone(CONTACT.phones[1])}</a></p>
    <p style="margin:0"><b>Hours:</b> ${CONTACT.hours} · <a href="${CONTACT.directions}" target="_blank" rel="noopener">Get directions</a></p>
  </div>

  <h2>More TV repair pages</h2>
  <div class="links">${relatedLinks(p.slug)}<a href="/" style="background:var(--yellow)">← Main site</a></div>
</div></main>
<footer><div class="wrap">
  <p style="margin:0"><b style="font-family:'Space Grotesk',sans-serif">Zaid Electronics</b> — TV repair in Mumbai since ${CONTACT.since}. LED, LCD, Smart TV &amp; panel bonding. Free diagnosis · 90-day warranty. <a href="/">Home</a></p>
  <p class="areas">Areas served: Trombay · Cheeta Camp · Chembur · Govandi · Mankhurd · Kurla · Sion · Wadala · Ghatkopar &amp; all of Mumbai · © ${new Date().getFullYear()} Zaid Electronics</p>
</div></footer>
</body>
</html>`
}

// ---- write pages ----
let count = 0
for (const p of ALL_PAGES) {
  const dir = join(DIST, p.slug)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), pageHtml(p), 'utf8')
  count++
}

// ---- write full sitemap ----
const today = new Date().toISOString().slice(0, 10)
const urls = [
  { loc: `${SITE}/`, priority: '1.0' },
  ...ALL_PAGES.map((p) => ({ loc: `${SITE}/${p.slug}/`, priority: '0.8' })),
]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`).join('\n')}
</urlset>
`
writeFileSync(join(DIST, 'sitemap.xml'), sitemap, 'utf8')

console.log(`generate-pages: wrote ${count} landing pages + sitemap (${urls.length} urls)`)
