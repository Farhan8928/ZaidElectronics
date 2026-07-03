import { Star, MapPin } from 'lucide-react'
import Reveal, { SectionHeading } from '../components/Reveal.jsx'
import { RATING } from '../data/site.js'
import { TESTIMONIALS } from '../data/reviews.js'

/** Inline star row, filled to `n` out of 5. */
function Stars({ n }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={15}
          className={i < n ? 'fill-gold text-gold' : 'text-line'}
        />
      ))}
    </span>
  )
}

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="bg-[linear-gradient(180deg,theme(colors.paper),#eef4f0_50%,theme(colors.paper))] py-16 md:py-24"
    >
      <div className="container-x">
        <SectionHeading eyebrow="Customer Reviews" title="Mumbai Trusts Us With Its TVs" center />

        {/* Aggregate rating badge — mirrors the Google-style summary customers
            recognise, reinforcing the score before the individual quotes. */}
        <Reveal>
          <div className="mx-auto -mt-2 mb-10 flex w-fit items-center gap-4 rounded-2xl border border-line bg-white px-6 py-3.5 shadow-card">
            <strong className="font-display text-[2.3rem] font-extrabold leading-none text-brand-600">
              {RATING.score}
            </strong>
            <div>
              <Stars n={5} />
              <span className="block text-[0.8rem] text-muted">
                Based on {RATING.count} customer reviews
              </span>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <figure className="card flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-pop">
                <Stars n={t.rating} />
                <blockquote className="my-3.5 flex-grow text-[0.93rem] text-muted">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-2.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-50 font-display font-extrabold text-brand-700">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <strong className="block font-display text-[0.9rem] font-bold leading-tight">
                      {t.name}
                    </strong>
                    <small className="inline-flex items-center gap-1 text-[0.75rem] text-faint">
                      <MapPin size={12} /> {t.area}
                    </small>
                  </div>
                  <span className="ml-auto whitespace-nowrap rounded-full bg-brand-50 px-2.5 py-1 text-[0.7rem] font-bold text-brand-500">
                    ✓ Verified
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
