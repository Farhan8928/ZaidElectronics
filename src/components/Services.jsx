import { ArrowUpRight } from 'lucide-react'
import Reveal, { SectionHeading } from './Reveal.jsx'
import { SERVICES, waLink } from '../data.js'

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeading
          index="01"
          eyebrow="What we fix"
          title={
            <>
              Six things we do, <em>properly</em>
            </>
          }
          lead="No menu of a hundred services. These six, done at component level, every single day."
        />

        <div className="svc" role="list">
          {SERVICES.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.04}>
              <a
                role="listitem"
                className={`svc__row ${s.featured ? 'svc__row--featured' : ''}`}
                href={waLink(`Hi Zaid Electronics! I need help with: ${s.title}`)}
                target="_blank"
                rel="noreferrer"
              >
                <span className="svc__no">{s.no}</span>
                <div className="svc__main">
                  <h3 className="svc__title">
                    {s.title}
                    {s.featured && <span className="svc__badge">Known for this</span>}
                  </h3>
                  <p className="svc__desc">{s.desc}</p>
                  <ul className="svc__tags">
                    {s.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
                <span className="svc__thumb" aria-hidden="true">
                  <img src={s.img} alt="" loading="lazy" />
                </span>
                <span className="svc__arrow" aria-hidden="true">
                  <ArrowUpRight size={22} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="svc__note">
            Not sure which one you need? <a href={waLink('Hi! Sending a photo of my TV problem — what is the fault?')} target="_blank" rel="noreferrer">Send a photo on WhatsApp</a> — we usually reply with the likely fault within minutes.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
