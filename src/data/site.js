/**
 * Single source of truth for the shop's business facts.
 *
 * Every phone number, address and headline metric on the site reads from
 * here — so when the shop's details change, they change in exactly one place
 * and stay consistent across the nav, hero, contact block, footer and the
 * sticky mobile call bar.
 */
export const CONTACT = {
  name: 'Zaid Electronics',
  proprietor: 'Asif',
  since: 2000,
  phones: ['9821473182', '9326494446'],
  whatsapp: '919821473182',
  emails: ['asif6pr6@gmail.com', 'asif_itbuz@yahoo.co.in'],
  addressLines: [
    'Shop No. 6, H-Sector, B-Line, Balaji Mandir Rd,',
    'Opp. Saibaba Mandir, Near Madina Dairy, Dhobi Ghat,',
    'Cheeta Camp, Trombay, Mumbai, Maharashtra 400088',
  ],
  address:
    'Shop No. 6, H-Sector, B-Line, Balaji Mandir Rd, Opp. Saibaba Mandir, Near Madina Dairy, Dhobi Ghat, Cheeta Camp, Trombay, Mumbai, Maharashtra 400088',
  hours: 'Open 7 days · 10:00 am – 9:30 pm',
  mapEmbed:
    'https://www.google.com/maps?q=Zaid+Electronics,+Balaji+Mandir+Rd,+Cheeta+Camp,+Trombay,+Mumbai,+Maharashtra+400088&output=embed',
  directions:
    'https://www.google.com/maps/search/?api=1&query=Zaid+Electronics+Balaji+Mandir+Rd+Cheeta+Camp+Trombay+Mumbai+400088',
}

import { LIVE_RATING } from './rating.gen.js'

/**
 * Headline trust metrics — score/count come from rating.gen.js, which
 * scripts/fetch-rating.mjs refreshes from the live Google Business listing
 * on every Vercel build (daily redeploy keeps it current). The exact count
 * is shown everywhere so it always matches the Google map widget.
 */
export const RATING = {
  score: LIVE_RATING.score.toFixed(1),
  count: String(LIVE_RATING.count),
  countExact: String(LIVE_RATING.count),
  repairs: '10,000+',
  years: '25+',
}

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'How It Works', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const HERO_POINTS = [
  'Free diagnosis — at the shop or your doorstep',
  'Fixed price approved by you before any work starts',
  'Honest timelines, quoted up front',
  '90-day written warranty on every repair',
]

export const BRANDS = [
  'Samsung',
  'LG',
  'Sony',
  'Mi',
  'OnePlus',
  'TCL',
  'Panasonic',
  'Videocon',
  'Onida',
  'BPL',
  'Haier',
  'VU',
]

/**
 * Links to the generated SEO landing pages (scripts/seo-pages.mjs). Rendered in
 * the footer so the homepage passes link equity to them and they're crawlable
 * — keep these slugs in sync with scripts/seo-pages.mjs.
 */
export const SERVICE_LINKS = [
  { label: 'LED TV Repair in Mumbai', href: '/led-tv-repair-mumbai/' },
  { label: 'LCD TV Repair in Mumbai', href: '/lcd-tv-repair-mumbai/' },
  { label: 'Panel Repair & Bonding', href: '/tv-panel-repair-bonding-mumbai/' },
  { label: 'Smart & Android TV Repair', href: '/smart-tv-repair-mumbai/' },
  { label: 'Doorstep TV Repair', href: '/doorstep-tv-repair-mumbai/' },
]

export const AREA_LINKS = [
  // Harbour line / east belt
  { label: 'Chembur', href: '/tv-repair-chembur/' },
  { label: 'Govandi', href: '/tv-repair-govandi/' },
  { label: 'Mankhurd', href: '/tv-repair-mankhurd/' },
  { label: 'Trombay', href: '/tv-repair-trombay/' },
  { label: 'Kurla', href: '/tv-repair-kurla/' },
  { label: 'Cheeta Camp', href: '/tv-repair-cheeta-camp/' },
  { label: 'Sion', href: '/tv-repair-sion/' },
  { label: 'Wadala', href: '/tv-repair-wadala/' },
  { label: 'Ghatkopar', href: '/tv-repair-ghatkopar/' },
  // Central line
  { label: 'Dadar', href: '/tv-repair-dadar/' },
  { label: 'Vikhroli', href: '/tv-repair-vikhroli/' },
  { label: 'Bhandup', href: '/tv-repair-bhandup/' },
  { label: 'Mulund', href: '/tv-repair-mulund/' },
  { label: 'Powai', href: '/tv-repair-powai/' },
  { label: 'Thane', href: '/tv-repair-thane/' },
  // Western line
  { label: 'Lower Parel', href: '/tv-repair-lower-parel/' },
  { label: 'Bandra', href: '/tv-repair-bandra/' },
  { label: 'Santacruz', href: '/tv-repair-santacruz/' },
  { label: 'Andheri', href: '/tv-repair-andheri/' },
  { label: 'Goregaon', href: '/tv-repair-goregaon/' },
  { label: 'Malad', href: '/tv-repair-malad/' },
  { label: 'Kandivali', href: '/tv-repair-kandivali/' },
  { label: 'Borivali', href: '/tv-repair-borivali/' },
  { label: 'Navi Mumbai', href: '/tv-repair-navi-mumbai/' },
]

/** Format a bare 10-digit number as a readable +91 phone string. */
export const fmtPhone = (p) => `+91 ${p.replace(/(\d{5})(\d{5})/, '$1 $2')}`

/** Build a click-to-chat WhatsApp URL with a pre-filled message. */
export const waLink = (text) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`
