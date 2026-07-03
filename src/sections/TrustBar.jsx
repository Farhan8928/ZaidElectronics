import { BRANDS, RATING } from '../data/site.js'

const STATS = [
  { value: RATING.score, suffix: '★', label: 'Customer rating' },
  { value: RATING.repairs, label: 'TVs repaired' },
  { value: RATING.years, label: 'Years at the bench' },
  { value: '90d', label: 'Written warranty' },
]

/**
 * Proof band directly under the hero: headline metrics on an ink block, then
 * an auto-scrolling brand marquee. Placed high because an unknown local shop
 * has to answer "can I trust them / do they handle my brand?" before any
 * marketing copy earns attention.
 */
export default function TrustBar() {
  const row = [...BRANDS, ...BRANDS]
  return (
    <section aria-label="Trust and brands">
      {/* Metrics */}
      <div className="border-b-2 border-ink bg-ink text-paper">
        <div className="container-x grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-4 py-6 text-center ${i > 0 ? 'border-l-2 border-paper/15' : ''} ${
                i === 2 ? 'border-l-0 md:border-l-2' : ''
              }`}
            >
              <div className="font-display text-[2rem] font-bold leading-none">
                {s.value}
                {s.suffix && <span className="text-yellow">{s.suffix}</span>}
              </div>
              <div className="mt-2 font-mono text-[0.66rem] uppercase tracking-[0.1em] text-paper/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand marquee */}
      <div className="overflow-hidden border-b-2 border-ink bg-yellow py-2.5">
        <div className="flex w-max animate-marquee gap-8">
          {row.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="flex items-center gap-8 font-mono text-[0.8rem] font-bold uppercase tracking-[0.12em] text-ink"
            >
              {b} <span aria-hidden>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
