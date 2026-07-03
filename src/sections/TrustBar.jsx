import { Star } from 'lucide-react'
import { BRANDS, RATING } from '../data/site.js'

const STATS = [
  { value: RATING.score, star: true, label: `${RATING.count} happy customers` },
  { value: RATING.repairs, label: 'TVs repaired since 2009' },
  { value: RATING.years, label: 'years of experience' },
  { value: '90-day', label: 'written warranty' },
]

/**
 * Proof strip directly under the hero — headline metrics + the full brand
 * list. Placed high on purpose: a visitor deciding whether to trust an
 * unknown local shop wants numbers and "do they handle my brand?" answered
 * before they read any marketing copy.
 */
export default function TrustBar() {
  return (
    <section className="border-y border-line bg-white py-7" aria-label="Trust and brands">
      <div className="container-x flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`text-center ${i < STATS.length - 1 ? 'md:border-r md:border-line' : ''}`}
            >
              <strong className="inline-flex items-center gap-1 font-display text-[1.7rem] font-extrabold text-brand-600">
                {s.value}
                {s.star && <Star size={15} className="fill-gold text-gold" />}
              </strong>
              <span className="block text-[0.8rem] text-muted">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2 border-t border-dashed border-line pt-5">
          <p className="text-[0.8rem] font-semibold text-muted">All brands repaired:</p>
          <ul className="flex flex-wrap justify-center gap-1.5">
            {BRANDS.map((b) => (
              <li key={b} className="chip">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
