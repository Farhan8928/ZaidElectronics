import { Phone, MessageCircle } from 'lucide-react'
import { CONTACT, fmtPhone, waLink } from '../data/site.js'

/**
 * Mid-page urgency block. A single time-bound offer on a solid yellow slab
 * gives an on-the-fence visitor a concrete reason to act now instead of
 * bookmarking and forgetting.
 */
export default function OfferStrip() {
  return (
    <section className="border-b-2 border-ink bg-yellow py-12" aria-label="Free diagnosis offer">
      <div className="container-x flex flex-wrap items-center justify-between gap-8">
        <div className="max-w-[34ch]">
          <span className="mb-3 inline-block rounded-[4px] border-2 border-ink bg-ink px-3 py-1 font-mono text-[0.66rem] font-bold uppercase tracking-[0.1em] text-yellow">
            ● Limited slots daily
          </span>
          <h2 className="display-xl text-ink">
            Free doorstep diagnosis — book today.
          </h2>
          <p className="mt-2 font-mono text-[0.8rem] font-bold uppercase tracking-[0.04em] text-ink/70">
            Call to book a free doorstep visit anywhere in Mumbai
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="btn btn-ink btn-lg" href={`tel:+91${CONTACT.phones[0]}`}>
            <Phone size={18} /> {fmtPhone(CONTACT.phones[0])}
          </a>
          <a
            className="btn btn-white btn-lg"
            href={waLink('Hi! I want to book a free doorstep diagnosis today.')}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> Book on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
