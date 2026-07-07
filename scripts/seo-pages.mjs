// Programmatic SEO pages — service and area long-tail landing pages.
//
// Each entry produces a standalone static HTML page at dist/<slug>/index.html
// with its own <title>, meta description, canonical, OG, and JSON-LD
// (BreadcrumbList + Service + LocalBusiness + FAQPage). Written by hand — each
// targets a specific search intent with unique copy, not templated filler.
//
// `aeoAnswer` is the 40–60 word direct answer placed right under the H1 — this
// is what Google AI Overviews / ChatGPT / voice assistants lift as the answer.

export const SERVICE_PAGES = [
  {
    slug: 'led-tv-repair-mumbai',
    keyword: 'LED TV repair in Mumbai',
    metaTitle: 'LED TV Repair in Mumbai — Backlight, Power & Panel | Zaid Electronics',
    metaDescription:
      'LED TV repair in Mumbai — backlight, power & board faults fixed at component level. Free diagnosis, doorstep service, 90-day warranty. Call 98214 73182.',
    h1: 'LED TV Repair in Mumbai',
    eyebrow: 'LED TV Repair · Mumbai',
    aeoAnswer:
      'Zaid Electronics repairs LED TVs of every brand in Mumbai — no power, no picture, half-dark screen and backlight failures fixed at component level, not by swapping the whole board. Free diagnosis, a fixed price agreed before work, and a 90-day written warranty. Doorstep service available. Call +91 98214 73182.',
    intro: [
      'An LED TV that won’t switch on, shows no picture, or has a half-dark screen is almost always a backlight, power-supply or motherboard fault — not a dead TV. We diagnose the exact failed component and replace just that part, which is why our bills are a fraction of a service centre’s.',
      'Bring your set to our Cheeta Camp workshop or book a doorstep visit anywhere in Mumbai. You get an honest diagnosis for free and an exact price on WhatsApp before we open a single screw.',
    ],
  },
  {
    slug: 'lcd-tv-repair-mumbai',
    keyword: 'LCD TV repair in Mumbai',
    metaTitle: 'LCD TV Repair in Mumbai — T-CON, Inverter & Sound | Zaid Electronics',
    metaDescription:
      'LCD TV repair in Mumbai — T-CON, inverter, backlight & audio faults repaired honestly, not written off. Free diagnosis, 90-day warranty. Call 98214 73182.',
    h1: 'LCD TV Repair in Mumbai',
    eyebrow: 'LCD TV Repair · Mumbai',
    aeoAnswer:
      'Zaid Electronics repairs LCD televisions across Mumbai — T-CON board, inverter, backlight and audio-section faults on older LCD sets that other shops tell you to throw away. Free diagnosis, fixed price up front and a 90-day written warranty. Doorstep pickup and drop available. Call +91 98214 73182.',
    intro: [
      'Older LCD televisions are very often worth repairing. Lines, patches, a dim screen or no sound usually trace back to the T-CON board, inverter or audio section — all repairable at component level for far less than a replacement.',
      'We’ll tell you honestly whether your LCD set is worth fixing before you spend anything. Diagnosis is free, at the shop or your home.',
    ],
  },
  {
    slug: 'tv-panel-repair-bonding-mumbai',
    keyword: 'TV panel repair and bonding in Mumbai',
    metaTitle: 'TV Panel Repair & Bonding in Mumbai (COF/TAB) | Zaid Electronics',
    metaDescription:
      'TV panel repair & COF/TAB bonding in Mumbai — screen lines fixed for up to 70% less than a new panel. In-house machine, 90-day warranty. Call 98214 73182.',
    h1: 'TV Panel Repair & Bonding in Mumbai',
    eyebrow: 'Panel Repair & Bonding · Mumbai',
    aeoAnswer:
      'Lines on a TV screen are usually a COF/TAB bonding fault, not a dead panel. Zaid Electronics repairs them in-house on a bonding machine in Mumbai — typically up to 70% cheaper than replacing the whole panel — with a 90-day written warranty. Free diagnosis first. Call +91 98214 73182.',
    intro: [
      'When a service centre sees vertical or horizontal lines on your screen, they usually quote a full panel replacement — often ₹12,000–₹15,000 or more. In most cases that isn’t needed: the fault is in the COF/TAB bonding between the panel and its driver, which we re-bond on our own machine.',
      'This is the work Zaid Electronics is known for. Panel bonding typically costs a fraction of replacement and takes 1–3 days. If a panel is genuinely beyond repair, we’ll tell you straight.',
    ],
  },
  {
    slug: 'smart-tv-repair-mumbai',
    keyword: 'Smart and Android TV repair in Mumbai',
    metaTitle: 'Smart & Android TV Repair in Mumbai | Zaid Electronics',
    metaDescription:
      'Smart & Android TV repair in Mumbai — logo stuck, boot-loop, app & Wi-Fi faults fixed by software flashing and board repair. 90-day warranty. Call 98214 73182.',
    h1: 'Smart & Android TV Repair in Mumbai',
    eyebrow: 'Smart & Android TV · Mumbai',
    aeoAnswer:
      'Zaid Electronics fixes Smart and Android TVs in Mumbai — stuck on the logo, boot-loops, crashing apps and Wi-Fi drops resolved with software flashing and board-level repair, for every brand. Free diagnosis, fixed price up front, 90-day warranty. Doorstep service available. Call +91 98214 73182.',
    intro: [
      'Smart TV problems are often software, not a dead set. A TV stuck on the brand logo, rebooting in a loop, or dropping Wi-Fi can usually be fixed by re-flashing the firmware or repairing the main board.',
      'We handle Android TV, Google TV and every smart platform across all brands. Diagnosis is free and we quote the exact price before starting.',
    ],
  },
  {
    slug: 'doorstep-tv-repair-mumbai',
    keyword: 'Doorstep TV repair in Mumbai',
    metaTitle: 'Doorstep TV Repair in Mumbai — Home Service | Zaid Electronics',
    metaDescription:
      'Doorstep TV repair in Mumbai, 7 days a week — technician visits home for LED, LCD & Smart TVs. Free pickup & drop, 90-day warranty. Call 98214 73182.',
    h1: 'Doorstep TV Repair in Mumbai',
    eyebrow: 'Doorstep Service · Mumbai',
    aeoAnswer:
      'Zaid Electronics offers doorstep TV repair across Mumbai, 7 days a week. A technician visits your home to diagnose and repair LED, LCD and Smart TVs; wall-mounted and big-screen sets are handled on the spot where possible, otherwise pickup and drop is free. Free diagnosis, 90-day warranty. Call +91 98214 73182.',
    intro: [
      'Wall-mounted or big-screen TV that’s hard to move? Our technician comes to you anywhere in Mumbai, diagnoses the fault at your home for free, and repairs on the spot where possible.',
      'If the set needs bench work, we pick it up and drop it back free of charge — you only pay the agreed repair price.',
    ],
  },
]

// Nearby localities/landmarks give each area page genuinely different copy.
export const AREA_PAGES = [
  { slug: 'tv-repair-cheeta-camp', area: 'Cheeta Camp', near: 'Cheeta Camp, Trombay — our own neighbourhood, opposite Sai Baba Mandir on Balaji Mandir Road' },
  { slug: 'tv-repair-trombay', area: 'Trombay', near: 'Trombay, including Cheeta Camp, the BARC belt and Mahul Road' },
  { slug: 'tv-repair-chembur', area: 'Chembur', near: 'Chembur — Diamond Garden, RC Marg, Chembur station and Chembur East' },
  { slug: 'tv-repair-govandi', area: 'Govandi', near: 'Govandi — Shivaji Nagar, Baiganwadi, Govandi station and Deonar' },
  { slug: 'tv-repair-mankhurd', area: 'Mankhurd', near: 'Mankhurd — Maharashtra Nagar, Mankhurd station and Vashi Naka' },
  { slug: 'tv-repair-kurla', area: 'Kurla', near: 'Kurla — Nehru Nagar, Kurla station, Kurla East and Chunabhatti' },
  { slug: 'tv-repair-sion', area: 'Sion', near: 'Sion — Sion-Koliwada, Pratiksha Nagar and Sion station' },
  { slug: 'tv-repair-wadala', area: 'Wadala', near: 'Wadala — Wadala East, Antop Hill and the Wadala truck terminal area' },
  { slug: 'tv-repair-ghatkopar', area: 'Ghatkopar', near: 'Ghatkopar — Pant Nagar, Ghatkopar East and Rajawadi' },
].map((a) => ({
  ...a,
  kind: 'area',
  keyword: `TV repair in ${a.area}`,
  metaTitle: `TV Repair in ${a.area}, Mumbai — LED, LCD & Panel | Zaid Electronics`,
  metaDescription: `TV repair in ${a.area}, Mumbai — LED, LCD, Smart TV & panel bonding, all brands. Free diagnosis, doorstep service, 90-day warranty. 4.9★. Call 98214 73182.`,
  h1: `TV Repair in ${a.area}`,
  eyebrow: `TV Repair · ${a.area}, Mumbai`,
  aeoAnswer: `Zaid Electronics repairs LED, LCD and Smart TVs and does in-house panel bonding for customers in ${a.area}, Mumbai. Free diagnosis, a fixed price agreed before work, doorstep visits with free pickup and drop, and a 90-day written warranty. Rated 4.9★ by 190+ customers. Call +91 98214 73182.`,
  intro: [
    `Need a TV repaired in ${a.area}? Zaid Electronics serves ${a.near}. We fix LED, LCD, Smart and Android TVs of every brand — from no-power and backlight faults to screen lines and software issues — and specialise in panel repair &amp; bonding that saves you buying a new panel.`,
    `Book a doorstep visit in ${a.area} or bring your set to our nearby Cheeta Camp workshop. Diagnosis is always free and you approve the price before any work starts.`,
  ],
}))

export const ALL_PAGES = [...SERVICE_PAGES.map((p) => ({ ...p, kind: 'service' })), ...AREA_PAGES]
