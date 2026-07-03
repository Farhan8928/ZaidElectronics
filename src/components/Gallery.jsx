import Reveal, { SectionHeading } from './Reveal.jsx'
import { GALLERY } from '../data.js'

export default function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="On the bench"
          title={
            <>
              The work, <em>up close</em>
            </>
          }
          lead="Board-level repair is slow, careful work. This is what it looks like."
        />
      </div>

      <div className="plates container">
        {GALLERY.map((g, i) => (
          <Reveal key={g.src} delay={(i % 3) * 0.06} className={`plates__cell plates__cell--${i + 1}`}>
            <figure className="plate">
              <img src={g.src} alt={g.alt} loading="lazy" />
              <figcaption>
                <span className="plate__tag">{g.tag}</span>
                <span className="plate__label">{g.label}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
