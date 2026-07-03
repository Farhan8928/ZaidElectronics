import { Phone, MessageCircle } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { CONTACT, fmtPhone, waLink } from '../data/site.js'

/** Closing conversion banner — the last thing before the footer. */
export default function FinalCta() {
  return (
    <section className="px-5 pb-20 pt-8 md:px-8" aria-label="Get your TV repaired">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="rounded-[28px] bg-[radial-gradient(600px_260px_at_50%_0%,rgba(255,200,44,0.16),transparent_70%),linear-gradient(150deg,theme(colors.brand.600),theme(colors.brand.700))] px-6 py-14 text-center text-white shadow-float md:py-16">
            <h2 className="mx-auto max-w-[22ch] text-balance font-display text-[clamp(1.7rem,3.6vw,2.6rem)] font-extrabold">
              Your TV could be working again by tonight.
            </h2>
            <p className="mx-auto mt-3 text-white/80">
              Free diagnosis · Fixed price before work starts · 90-day written warranty
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a className="btn btn-white btn-lg" href={`tel:+91${CONTACT.phones[0]}`}>
                <Phone size={19} /> Call {fmtPhone(CONTACT.phones[0])}
              </a>
              <a
                className="btn btn-ghost btn-lg"
                href={waLink('Hi Zaid Electronics! My TV needs repair — please send me a free quote.')}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={19} /> WhatsApp a Photo
              </a>
            </div>
            <span className="mt-6 block text-[0.82rem] text-white/65">{CONTACT.hours}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
