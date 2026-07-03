import { Phone, MessageCircle } from 'lucide-react'
import { CONTACT, waLink } from '../data/site.js'

/**
 * Always-visible contact shortcuts. Desktop gets a bordered floating WhatsApp
 * block; mobile gets a full-width sticky call/WhatsApp bar. Repair customers
 * browse on phones and act on urgency, so keeping tap-to-call one thumb away
 * is the single highest-impact conversion element. Visibility is pure
 * Tailwind breakpoints — no JS.
 */
export default function CtaBars() {
  const waHref = waLink('Hi Zaid Electronics! My TV needs repair.')

  return (
    <>
      {/* Desktop floating WhatsApp */}
      <a
        className="fixed bottom-6 right-6 z-[90] hidden h-14 w-14 place-items-center rounded-[8px] border-2 border-ink bg-whatsapp text-white shadow-hard transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-hard-sm md:grid"
        href={waHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Zaid Electronics on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>

      {/* Mobile sticky call bar */}
      <div
        className="fixed inset-x-0 bottom-0 z-[95] grid grid-cols-2 border-t-2 border-ink pb-[env(safe-area-inset-bottom)] md:hidden"
        role="complementary"
        aria-label="Quick contact"
      >
        <a
          className="flex items-center justify-center gap-2 border-r-2 border-ink bg-green py-3.5 font-display font-bold uppercase text-white"
          href={`tel:+91${CONTACT.phones[0]}`}
        >
          <Phone size={18} /> Call Now
        </a>
        <a
          className="flex items-center justify-center gap-2 bg-whatsapp py-3.5 font-display font-bold uppercase text-white"
          href={waHref}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>
    </>
  )
}
