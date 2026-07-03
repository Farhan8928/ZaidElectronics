import { Phone, MessageCircle, Mail, MapPin, Clock, Navigation } from 'lucide-react'
import Reveal, { SectionHeading } from '../components/Reveal.jsx'
import { CONTACT, fmtPhone, waLink } from '../data/site.js'

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[linear-gradient(180deg,theme(colors.paper),#eef4f0_50%,theme(colors.paper))] py-16 md:py-24"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Visit or Call"
          title="Find Us in Mumbai"
          lead="Walk in for a free check-up, or book a doorstep visit — 7 days a week."
          center
        />

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="card flex h-full flex-col p-7">
              <div className="grid gap-5">
                <Row icon={Phone} title="Call / WhatsApp">
                  {CONTACT.phones.map((p) => (
                    <a key={p} href={`tel:+91${p}`} className="block hover:text-brand-600">
                      {fmtPhone(p)}
                    </a>
                  ))}
                </Row>
                <Row icon={MapPin} title="Shop Address">
                  <p>{CONTACT.address}</p>
                </Row>
                <Row icon={Clock} title="Working Hours">
                  <p>{CONTACT.hours}</p>
                </Row>
                <Row icon={Mail} title="Email">
                  {CONTACT.emails.map((e) => (
                    <a key={e} href={`mailto:${e}`} className="block hover:text-brand-600">
                      {e}
                    </a>
                  ))}
                </Row>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-primary btn-lg" href={`tel:+91${CONTACT.phones[0]}`}>
                  <Phone size={17} /> Call Now
                </a>
                <a
                  className="btn btn-wa btn-lg"
                  href={waLink('Hi Zaid Electronics! I would like a free TV diagnosis.')}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={17} /> WhatsApp
                </a>
                <a className="btn btn-outline btn-lg" href={CONTACT.directions} target="_blank" rel="noreferrer">
                  <Navigation size={17} /> Directions
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="card h-full min-h-[340px] overflow-hidden lg:min-h-[420px]">
              <iframe
                title="Zaid Electronics location — Mumbai"
                src={CONTACT.mapEmbed}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Row({ icon: Icon, title, children }) {
  return (
    <div className="flex items-start gap-3.5">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
        <Icon size={19} />
      </span>
      <div className="text-[0.92rem] text-muted">
        <strong className="mb-0.5 block font-display text-[0.95rem] text-ink-900">{title}</strong>
        {children}
      </div>
    </div>
  )
}
