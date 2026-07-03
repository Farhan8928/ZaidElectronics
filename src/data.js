export const CONTACT = {
  name: 'Zaid Electronics',
  proprietor: 'Asif',
  since: 2009,
  phones: ['9821473182', '9326494446'],
  whatsapp: '919821473182',
  emails: ['asif6pr6@gmail.com', 'asif_itbuz@yahoo.co.in'],
  addressLines: ['Shop No. 6, H-Sector, B-Line,', 'Mumbai — 400 088'],
  address: 'Shop No. 6, H-Sector, B-Line, Mumbai — 400 088',
  hours: 'Open Mon–Sun · 10 am – 9:30 pm',
  mapEmbed:
    'https://www.google.com/maps?q=Cheeta%20Camp%2C%20Trombay%2C%20Mumbai%20400088&output=embed',
}

export const waLink = (text) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`

export const NAV_LINKS = [
  { label: 'What we fix', href: '#services' },
  { label: 'The workshop', href: '#why-us' },
  { label: 'How it works', href: '#process' },
  { label: 'Word of mouth', href: '#reviews' },
  { label: 'Questions', href: '#faq' },
  { label: 'Find us', href: '#contact' },
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
  'Sansui',
  'Realme',
]

export const SERVICES = [
  {
    no: '01',
    title: 'LED TV repair',
    desc: 'No power, no picture, half screen dark, backlight gone — we open the set, find the failed component and replace that one part. Not the whole board.',
    tags: ['Backlight strips', 'Power supply', 'Motherboard'],
    img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=900&auto=format&fit=crop',
  },
  {
    no: '02',
    title: 'LCD TV repair',
    desc: 'Older LCD sets are worth repairing — inverter faults, T-CON issues, sound problems. Most are back home within a day.',
    tags: ['T-CON board', 'Inverter', 'Audio section'],
    img: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=900&auto=format&fit=crop',
  },
  {
    no: '03',
    title: 'Panel repair & bonding',
    desc: 'Lines on the screen? Service centres say "replace the panel". We repair it — COF and TAB bonding done in-house on our bonding machine. This is the work we are known for.',
    tags: ['COF bonding', 'TAB bonding', 'Line faults'],
    featured: true,
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop',
  },
  {
    no: '04',
    title: 'Smart & Android TV',
    desc: 'Stuck on the logo, apps crashing, Wi-Fi dropping — software flashing and board-level fixes for smart sets of every brand.',
    tags: ['Software flash', 'Boot loop', 'Wi-Fi faults'],
    img: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=900&auto=format&fit=crop',
  },
  {
    no: '05',
    title: 'Doorstep visits',
    desc: 'Wall-mounted set? Big screen? We come to you, anywhere in Mumbai. Pickup and drop is free if the repair happens at the shop.',
    tags: ['Home visit', 'Free pickup–drop'],
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=900&auto=format&fit=crop',
  },
  {
    no: '06',
    title: 'Buying & selling',
    desc: 'Old set lying dead at home? We buy it at a fair price. Need a TV on a budget? Refurbished sets, tested on the bench, sold with warranty.',
    tags: ['Old TV purchase', 'Refurbished sets'],
    img: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=900&auto=format&fit=crop',
  },
]

export const FEATURES = [
  {
    no: '01',
    title: 'Diagnosis is free. Always.',
    desc: 'Bring the set in or call us home — you hear the exact fault and the exact price before we lift a screwdriver.',
  },
  {
    no: '02',
    title: 'We repair what others replace',
    desc: 'Component-level work on boards and panels. A ₹300 IC should not cost you a ₹15,000 panel.',
  },
  {
    no: '03',
    title: 'Written 90-day warranty',
    desc: 'Every job leaves with a warranty slip. Same fault comes back, we fix it free. Simple.',
  },
  {
    no: '04',
    title: 'Same-day, most of the time',
    desc: 'Power and backlight faults usually go home the same evening. Bonding jobs take 1–3 days.',
  },
]

export const PROCESS = [
  {
    step: '01',
    title: 'Tell us the problem',
    desc: 'Call or WhatsApp a photo/video of the fault. Brand, size, what happened — that’s all we need to start.',
  },
  {
    step: '02',
    title: 'Free check-up',
    desc: 'We diagnose at the shop or at your home and tell you exactly what failed. No charge for looking.',
  },
  {
    step: '03',
    title: 'One fixed price',
    desc: 'You get the full price before work begins — parts, labour, everything. Say yes, and only then we open the set.',
  },
  {
    step: '04',
    title: 'Repaired & returned',
    desc: 'Bench-tested for hours, delivered back, warranty slip in hand. Most sets go home the same day.',
  },
]

export const STATS = [
  { value: '15', suffix: '+', label: 'years at the same counter' },
  { value: '10,000', suffix: '+', label: 'sets repaired & returned' },
  { value: '70', suffix: '%', label: 'saved vs. panel replacement' },
  { value: '90', suffix: '-day', label: 'written warranty on every job' },
]

export const TESTIMONIALS = [
  {
    name: 'Ramesh Pawar',
    area: 'Wadala',
    text: 'Two service centres quoted ₹14,000 to replace the panel of my 43-inch Samsung. Asif bhai repaired the bonding for ₹2,800. Eight months now — not a single line on the screen.',
    rating: 5,
    featured: true,
  },
  {
    name: 'Shabana Shaikh',
    area: 'Kurla',
    text: 'Checked the TV for free, sent the price on WhatsApp, delivered it the same evening. This is how every shop should work.',
    rating: 5,
  },
  {
    name: 'Vikram Nair',
    area: 'Chembur',
    text: 'Sony Bravia stuck on the logo. Software flashed, home in a day, proper warranty slip. Honest work.',
    rating: 5,
  },
  {
    name: 'Farhan Qureshi',
    area: 'Sion',
    text: 'Sold my dead TV to them at a fair price and bought a refurbished 32-inch with warranty. Both deals were clean.',
    rating: 5,
  },
]

export const FAQS = [
  {
    q: 'Is the diagnosis really free?',
    a: 'Yes. Whether you bring the set to the shop or we visit your home, checking the fault costs nothing. You pay only if you approve the repair price.',
  },
  {
    q: 'My screen has lines. Is the panel dead?',
    a: 'Usually not. Vertical or horizontal lines are most often a COF/TAB bonding fault — repairable on our bonding machine at roughly a third of panel-replacement cost. We tell you honestly if a panel is truly beyond repair.',
  },
  {
    q: 'Which brands do you handle?',
    a: 'All of them — Samsung, LG, Sony, Mi, OnePlus, TCL, Panasonic, Videocon, Onida, BPL and more. LED, LCD, Smart TV, Android TV, 4K and QLED sets.',
  },
  {
    q: 'How long does a repair take?',
    a: 'Power, backlight and software faults: usually the same day. Panel bonding: 1–3 days depending on the panel. You get a time estimate along with the price quote.',
  },
  {
    q: 'Do you come home for repairs?',
    a: 'Yes — doorstep visits are available across Mumbai. Wall-mounted and big-screen sets are handled at home where possible; otherwise pickup and drop is free.',
  },
  {
    q: 'What does the warranty cover?',
    a: 'Every repair carries a written warranty of up to 90 days on the work done. If the same fault returns in that period, we repair it again at no cost.',
  },
]

export const GALLERY = [
  {
    src: 'https://images.unsplash.com/photo-1580584126903-c17d41830450?q=80&w=1200&auto=format&fit=crop',
    alt: 'Precision soldering on a television circuit board',
    label: 'Board-level soldering',
    tag: 'FIG. 01',
  },
  {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    alt: 'Close-up of an electronic circuit board',
    label: 'Component-level diagnosis',
    tag: 'FIG. 02',
  },
  {
    src: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1200&auto=format&fit=crop',
    alt: 'Stack of televisions of different generations',
    label: 'Every generation of set',
    tag: 'FIG. 03',
  },
  {
    src: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=1200&auto=format&fit=crop',
    alt: 'Green printed circuit board under inspection',
    label: 'T-CON & mainboard work',
    tag: 'FIG. 04',
  },
  {
    src: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1200&auto=format&fit=crop',
    alt: 'Television being tested with a remote',
    label: 'Hours of bench testing',
    tag: 'FIG. 05',
  },
  {
    src: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1200&auto=format&fit=crop',
    alt: 'Soldering iron at work on electronics',
    label: 'In-house bonding & rework',
    tag: 'FIG. 06',
  },
]
