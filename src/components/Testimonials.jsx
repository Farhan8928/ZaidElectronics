import Reveal, { SectionHeading } from './Reveal.jsx'
import { TESTIMONIALS } from '../data.js'

function Stars({ n }) {
  return (
    <span className="review__stars" aria-label={`${n} out of 5 stars`}>
      {'★'.repeat(n)}
      <span aria-hidden="true">{'★'.repeat(5 - n)}</span>
    </span>
  )
}

export default function Testimonials() {
  const featured = TESTIMONIALS.find((t) => t.featured)
  const rest = TESTIMONIALS.filter((t) => !t.featured)

  return (
    <section className="section section--rule" id="reviews">
      <div className="container">
        <SectionHeading
          index="05"
          eyebrow="Word of mouth"
          title={
            <>
              Neighbours talk. <em>This is what they say.</em>
            </>
          }
        />

        <Reveal>
          <figure className="review review--featured">
            <Stars n={featured.rating} />
            <blockquote>&ldquo;{featured.text}&rdquo;</blockquote>
            <figcaption>
              {featured.name} · <span>{featured.area}</span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="review__grid">
          {rest.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="review">
                <Stars n={t.rating} />
                <blockquote>&ldquo;{t.text}&rdquo;</blockquote>
                <figcaption>
                  {t.name} · <span>{t.area}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
