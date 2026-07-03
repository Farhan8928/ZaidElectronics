import Reveal, { SectionHeading } from './Reveal.jsx'
import { PROCESS } from '../data.js'

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="How it works"
          title={
            <>
              No surprises, <em>ever</em>
            </>
          }
          lead="The price you approve is the price you pay. Here is the whole journey, start to finish."
        />

        <ol className="steps">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.08}>
              <li className="steps__item">
                <span className="steps__no">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
