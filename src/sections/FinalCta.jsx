import { Phone, MessageCircle } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { CONTACT, fmtPhone, waLink } from '../data/site.js'

/** Closing conversion block — full-bleed green slab, the last push before the footer. */
export default function FinalCta() {
  return (
    <section className="bg-green py-16 text-white md:py-20" aria-label="Get your TV repaired">
      <div className="container-x text-center">
        <Reveal>
          <p className="label mb-5 justify-center text-white/70">[ READY WHEN YOU ARE ]</p>
          <h2 className="display-hero mx-auto max-w-[16ch] text-white">
            Let&rsquo;s get your TV working again.
          </h2>
          <p className="mx-auto mt-5 max-w-[48ch] font-mono text-[0.82rem] font-bold uppercase tracking-[0.06em] text-white/80">
            Free diagnosis · Fixed price up front · 90-day written warranty
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a className="btn btn-yellow btn-lg btn-on-dark" href={`tel:+91${CONTACT.phones[0]}`}>
              <Phone size={18} /> Call {fmtPhone(CONTACT.phones[0])}
            </a>
            <a
              className="btn btn-white btn-lg btn-on-dark"
              href={waLink('Hi Zaid Electronics! My TV needs repair — please send me a free quote.')}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> WhatsApp a Photo
            </a>
          </div>
          <p className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-white/60">
            {CONTACT.hours}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
