import { Phone, MessageCircle, Mail, MapPin, Clock, Navigation } from 'lucide-react'
import Reveal, { SectionHeading } from '../components/Reveal.jsx'
import { CONTACT, fmtPhone, waLink } from '../data/site.js'

export default function Contact() {
  return (
    <section id="contact" className="border-b-2 border-ink py-16 md:py-24">
      <div className="container-x">
        <SectionHeading
          num="07 / FIND US"
          eyebrow="Visit or call"
          title="Come to the workshop, or we come to you"
          lead="Walk in for a free check-up, or book a doorstep visit — 7 days a week across Mumbai."
        />

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="card flex h-full flex-col p-6">
              <div className="grid gap-0 border-t-2 border-ink">
                <Row icon={Phone} title="Call / WhatsApp">
                  {CONTACT.phones.map((p) => (
                    <a key={p} href={`tel:+91${p}`} className="block py-1 hover:text-green">
                      {fmtPhone(p)}
                    </a>
                  ))}
                </Row>
                <Row icon={MapPin} title="Shop Address">
                  {CONTACT.address}
                </Row>
                <Row icon={Clock} title="Working Hours">
                  {CONTACT.hours}
                </Row>
                <Row icon={Mail} title="Email" last>
                  {CONTACT.emails.map((e) => (
                    <a key={e} href={`mailto:${e}`} className="block py-1 hover:text-green">
                      {e}
                    </a>
                  ))}
                </Row>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-green" href={`tel:+91${CONTACT.phones[0]}`}>
                  <Phone size={16} /> Call Now
                </a>
                <a
                  className="btn btn-white"
                  href={waLink('Hi Zaid Electronics! I would like a free TV diagnosis.')}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
                <a className="btn btn-white" href={CONTACT.directions} target="_blank" rel="noreferrer">
                  <Navigation size={16} /> Directions
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="card h-full min-h-[340px] overflow-hidden p-0 lg:min-h-[440px]">
              <iframe
                title="Zaid Electronics location — Mumbai"
                src={CONTACT.mapEmbed}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0 grayscale-[20%]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Row({ icon: Icon, title, children, last = false }) {
  return (
    <div className={`flex items-start gap-3.5 py-4 ${last ? '' : 'border-b-2 border-dashed border-ink/25'}`}>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[5px] border-2 border-ink bg-paper text-green">
        <Icon size={18} />
      </span>
      <div className="text-[0.92rem] text-muted">
        <strong className="mb-0.5 block font-mono text-[0.68rem] font-bold uppercase tracking-[0.1em] text-ink">
          {title}
        </strong>
        {children}
      </div>
    </div>
  )
}
