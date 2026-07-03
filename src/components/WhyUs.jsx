import Reveal, { SectionHeading } from './Reveal.jsx'
import { CONTACT, FEATURES } from '../data.js'

export default function WhyUs() {
  return (
    <section className="section section--ink" id="why-us">
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="The workshop"
          title={
            <>
              Repair what others <em>replace</em>
            </>
          }
          invert
        />

        <div className="quote">
          <Reveal>
            <blockquote className="quote__text">
              &ldquo;Half the sets that reach my counter were already told{' '}
              <em>&lsquo;panel replace karo, 15,000 lagega.&rsquo;</em> Most of them go home
              repaired for a third of that. That&rsquo;s the whole business — find the actual
              fault, fix the actual fault.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="quote__by">
              — {CONTACT.proprietor}, proprietor · at the same counter since {CONTACT.since}
            </p>
          </Reveal>
        </div>

        <div className="creed">
          {FEATURES.map((f, i) => (
            <Reveal key={f.no} delay={i * 0.07}>
              <div className="creed__item">
                <span className="creed__no">{f.no}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
