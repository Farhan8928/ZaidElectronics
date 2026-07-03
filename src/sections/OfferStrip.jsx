import { Phone, MessageCircle, BadgePercent } from 'lucide-react'
import { CONTACT, fmtPhone, waLink } from '../data/site.js'

/**
 * Mid-page urgency band.
 *
 * A single, time-bound offer ("call before 6 pm for a same-day visit")
 * breaks up the scroll with a colour block and gives an on-the-fence
 * visitor a concrete reason to act now rather than bookmark and forget.
 */
export default function OfferStrip() {
  return (
    <section
      className="bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 py-12 text-white"
      aria-label="Free diagnosis offer"
    >
      <div className="container-x flex flex-wrap items-center justify-between gap-10">
        <div>
          <span className="mb-3.5 inline-flex items-center gap-1.5 rounded-full bg-gold px-3.5 py-1.5 font-display text-[0.75rem] font-extrabold uppercase tracking-[0.06em] text-ink-900">
            <BadgePercent size={16} /> Limited slots daily
          </span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold">
            Free diagnosis at your doorstep — <em className="not-italic text-gold">book today’s visit</em>
          </h2>
          <p className="mt-1 text-white/80">
            Call before 6 pm for a same-day technician visit anywhere in Mumbai.
          </p>
        </div>
        <div className="flex flex-wrap gap-3.5">
          <a className="btn btn-white btn-lg" href={`tel:+91${CONTACT.phones[0]}`}>
            <Phone size={18} /> {fmtPhone(CONTACT.phones[0])}
          </a>
          <a
            className="btn btn-ghost btn-lg"
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
