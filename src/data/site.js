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

/**
 * Headline trust metrics — kept in sync with the shop's real Google Business
 * listing (4.9★, 190 reviews) so the social proof matches what customers see
 * on the embedded map.
 */
export const RATING = {
  score: '4.9',
  count: '190+',
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
  'Most repairs completed the same day',
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

/** Format a bare 10-digit number as a readable +91 phone string. */
export const fmtPhone = (p) => `+91 ${p.replace(/(\d{5})(\d{5})/, '$1 $2')}`

/** Build a click-to-chat WhatsApp URL with a pre-filled message. */
export const waLink = (text) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`
