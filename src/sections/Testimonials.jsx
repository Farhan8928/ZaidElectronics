import { Star, MapPin } from 'lucide-react'
import Reveal, { SectionHeading } from '../components/Reveal.jsx'
import { RATING } from '../data/site.js'
import { TESTIMONIALS } from '../data/reviews.js'
import { GOOGLE_REVIEWS } from '../data/reviews.gen.js'

function Stars({ n }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={15} className={i < n ? 'fill-yellow text-yellow' : 'text-ink/20'} />
      ))}
    </span>
  )
}

/**
 * Reviews grid. When the build has API credentials, reviews.gen.js carries
 * the shop's real Google reviews (top 5, refreshed daily) and we show those —
 * verbatim, with author attribution, per Google's display policy. Otherwise
 * we fall back to the curated testimonials.
 */
export default function Testimonials() {
  const real = GOOGLE_REVIEWS.length >= 3
  const items = real
    ? GOOGLE_REVIEWS.map((r) => ({ ...r, sub: r.when, badge: 'Google review' }))
    : TESTIMONIALS.map((t) => ({ ...t, sub: t.area, badge: '✓ Verified' }))

  return (
    <section id="reviews" className="border-b-2 border-ink bg-paper-deep py-16 md:py-24">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            num="04 / REVIEWS"
            eyebrow="Word of mouth"
            title="Mumbai trusts us with its TVs"
          />
          <Reveal>
            <div className="flex items-center gap-3 rounded-[6px] border-2 border-ink bg-white px-5 py-3 shadow-hard">
              <span className="font-display text-[2.2rem] font-bold leading-none text-green">
                {RATING.score}
              </span>
              <div>
                <Stars n={5} />
                <span className="mt-1 block font-mono text-[0.66rem] uppercase tracking-[0.06em] text-muted">
                  {RATING.count} reviews on Google
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={`${t.name}-${i}`} delay={(i % 3) * 0.07}>
              <figure className="card flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <Stars n={t.rating} />
                  <span className="rounded-[4px] border-2 border-ink bg-green px-2 py-0.5 font-mono text-[0.6rem] font-bold uppercase text-white">
                    {t.badge}
                  </span>
                </div>
                <blockquote className="my-4 flex-grow text-[0.93rem] text-ink [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:8] overflow-hidden">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t-2 border-dashed border-ink/20 pt-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[5px] border-2 border-ink bg-yellow font-display font-bold text-ink">
                    {t.name.charAt(0)}
                  </span>
                  <div className="font-mono">
                    <strong className="block text-[0.8rem] font-bold uppercase tracking-[0.04em] text-ink">
                      {t.name}
                    </strong>
                    <small className="inline-flex items-center gap-1 text-[0.68rem] uppercase tracking-[0.06em] text-muted">
                      {!real && <MapPin size={12} />} {t.sub}
                    </small>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
