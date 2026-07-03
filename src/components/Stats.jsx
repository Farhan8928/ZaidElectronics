import Reveal from './Reveal.jsx'
import { STATS } from '../data.js'

export default function Stats() {
  return (
    <section className="tally" aria-label="Our track record">
      <div className="container tally__grid">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.07}>
            <div className="tally__item">
              <span className="tally__value">
                {s.value}
                <em>{s.suffix}</em>
              </span>
              <span className="tally__label">{s.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
