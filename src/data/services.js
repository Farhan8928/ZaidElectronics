/**
 * Services shown in the "What we fix" grid.
 *
 * `featured: true` marks the panel-bonding card — the shop's highest-margin,
 * most-differentiated service — so the UI can visually promote it (border +
 * "Most Popular" flag). Only one item should carry the flag.
 *
 * Images are Unsplash URLs with width + format params so we never ship a
 * full-resolution file to a phone.
 */
export const SERVICES = [
  {
    title: 'LED TV Repair',
    desc: 'No power, no picture, half-dark screen or backlight failure — repaired at component level, same day in most cases.',
    points: ['Backlight & power faults', 'Motherboard repair'],
    img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1000&auto=format&fit=crop',
    alt: 'Large LED TV in a living room',
  },
  {
    title: 'LCD TV Repair',
    desc: 'Inverter faults, T-CON issues, sound problems — older sets repaired honestly instead of being written off.',
    points: ['T-CON & inverter boards', 'Audio section repair'],
    img: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1000&auto=format&fit=crop',
    alt: 'Television sets in a workshop',
  },
  {
    title: 'Panel Repair & Bonding',
    desc: 'Lines on screen? Don’t pay ₹15,000 for a new panel. Our in-house COF/TAB bonding repairs it for up to 70% less.',
    points: ['COF / TAB bonding in-house', 'Save up to 70% vs replacement'],
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    alt: 'Close-up of a TV panel circuit board',
    featured: true,
  },
  {
    title: 'Smart & Android TV',
    desc: 'Stuck on logo, apps crashing, Wi-Fi dropping — software flashing and board-level fixes for every smart brand.',
    points: ['Software flashing', 'Boot-loop & Wi-Fi fixes'],
    img: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=1000&auto=format&fit=crop',
    alt: 'Circuit board of a smart TV',
  },
  {
    title: 'Doorstep Repair',
    desc: 'Technician at your home anywhere in Mumbai. Wall-mounted and big screens handled on the spot where possible.',
    points: ['Same-day home visits', 'Free pickup & drop'],
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop',
    alt: 'Technician testing electronics with a multimeter',
  },
  {
    title: 'Buy & Sell TVs',
    desc: 'Fair cash price for your old or dead TV. Bench-tested refurbished sets available with warranty.',
    points: ['Instant old-TV quote', 'Refurbished with warranty'],
    img: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1000&auto=format&fit=crop',
    alt: 'Collection of electronics and gadgets',
  },
]

/** "Why us" value props, paired with the savings example beside them. */
export const WHY_POINTS = [
  {
    title: 'Component-level experts',
    desc: 'We replace the failed ₹300 part, not the whole ₹8,000 board. That’s how your bill stays small.',
  },
  {
    title: 'Transparent fixed pricing',
    desc: 'Exact quote on WhatsApp before work begins. The price you approve is the price you pay.',
  },
  {
    title: 'Same-day turnaround',
    desc: 'Power, backlight and software faults usually go home the same evening.',
  },
  {
    title: '15+ years of trust',
    desc: 'The same proprietor at the same counter since 2009. Your neighbours already know us.',
  },
]

/** Real-world price comparison used to make the savings concrete. */
export const SAVINGS = {
  them: {
    label: 'Service centre quote',
    value: '₹15,000',
    note: 'Full panel replacement',
  },
  us: {
    label: 'Zaid Electronics repair',
    value: '₹2,800 – ₹4,500',
    note: 'COF/TAB bonding, 90-day warranty',
  },
  save: 'You save up to 70%',
  img: 'https://images.unsplash.com/photo-1580584126903-c17d41830450?q=80&w=1200&auto=format&fit=crop',
}

export const PROCESS = [
  {
    step: '1',
    title: 'Call or WhatsApp',
    desc: 'Send a photo or video of the problem. We usually reply within minutes during shop hours.',
  },
  {
    step: '2',
    title: 'Free diagnosis',
    desc: 'At the shop or your doorstep — we find the exact fault and tell you honestly if it’s worth repairing.',
  },
  {
    step: '3',
    title: 'Approve the fixed price',
    desc: 'One clear quote covering parts and labour. Work starts only after your yes.',
  },
  {
    step: '4',
    title: 'Same-day repair & warranty',
    desc: 'Bench-tested, delivered back, with a written 90-day warranty slip in your hand.',
  },
]

export const GUARANTEES = [
  {
    title: '90-day written warranty',
    desc: 'Every repair leaves with a signed warranty slip. Same fault returns? We fix it free.',
  },
  {
    title: 'No fix, no fee',
    desc: 'If we can’t repair your TV, the diagnosis costs you nothing. Zero risk to check.',
  },
  {
    title: 'Genuine parts only',
    desc: 'Tested components with warranty — never refurbished parts sold as new.',
  },
]
