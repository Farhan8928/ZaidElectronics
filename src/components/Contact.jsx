import { Phone, MessageCircle, ArrowUpRight } from 'lucide-react'
import Reveal, { SectionHeading } from './Reveal.jsx'
import { CONTACT, waLink } from '../data.js'

export default function Contact() {
  return (
    <section className="section section--ink" id="contact">
      <div className="container">
        <SectionHeading
          index="07"
          eyebrow="Find us"
          title={
            <>
              Visit the workshop, <em>since {CONTACT.since}</em>
            </>
          }
          invert
        />

        <div className="visit">
          <Reveal className="visit__info">
            <address className="visit__address">
              {CONTACT.addressLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>

            <div className="visit__meta">
              <div className="visit__block">
                <p className="visit__label">Hours</p>
                <p>{CONTACT.hours}</p>
              </div>
              <div className="visit__block">
                <p className="visit__label">Call / WhatsApp</p>
                {CONTACT.phones.map((p) => (
                  <p key={p}>
                    <a href={`tel:+91${p}`}>+91 {p.replace(/(\d{5})(\d{5})/, '$1 $2')}</a>
                  </p>
                ))}
              </div>
              <div className="visit__block">
                <p className="visit__label">Email</p>
                {CONTACT.emails.map((e) => (
                  <p key={e}>
                    <a href={`mailto:${e}`}>{e}</a>
                  </p>
                ))}
              </div>
              <div className="visit__block">
                <p className="visit__label">Serving</p>
                <p>All across Mumbai — doorstep visits &amp; free pickup</p>
              </div>
            </div>

            <div className="visit__ctas">
              <a className="btn btn--paper btn--lg" href={`tel:+91${CONTACT.phones[0]}`}>
                <Phone size={16} /> Call now
              </a>
              <a
                className="btn btn--line-paper btn--lg"
                href={waLink('Hi Zaid Electronics! I would like a free TV diagnosis.')}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} /> WhatsApp the shop
              </a>
              <a
                className="visit__directions"
                href="https://www.google.com/maps/search/?api=1&query=Cheeta+Camp+Trombay+Mumbai+400088"
                target="_blank"
                rel="noreferrer"
              >
                Get directions <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="visit__map">
            <iframe
              title="Zaid Electronics location — Mumbai"
              src={CONTACT.mapEmbed}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
