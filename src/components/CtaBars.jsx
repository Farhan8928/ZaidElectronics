import { Phone, MessageCircle } from 'lucide-react'
import { CONTACT, waLink } from '../data/site.js'

/**
 * Always-visible contact shortcuts.
 *
 * Two presentations for two contexts:
 *  - Desktop: a floating WhatsApp bubble (bottom-right).
 *  - Mobile: a full-width sticky call/WhatsApp bar pinned to the bottom of
 *    the viewport. Repair customers are overwhelmingly on phones and act on
 *    urgency, so keeping tap-to-call one thumb-reach away is the single
 *    highest-impact conversion element on the page.
 *
 * Visibility is handled purely with Tailwind breakpoints (`md:hidden` /
 * `hidden md:grid`) — no JS, no resize listeners.
 */
export default function CtaBars() {
  const waHref = waLink('Hi Zaid Electronics! My TV needs repair.')

  return (
    <>
      {/* Desktop floating WhatsApp */}
      <a
        className="fixed bottom-6 right-6 z-[90] hidden h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-whatsapp to-whatsapp-deep text-white shadow-wa transition-transform hover:-translate-y-0.5 hover:scale-105 md:grid"
        href={waHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Zaid Electronics on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>

      {/* Mobile sticky call bar */}
      <div
        className="fixed inset-x-0 bottom-0 z-[95] grid grid-cols-2 gap-px border-t border-line pb-[env(safe-area-inset-bottom)] md:hidden"
        role="complementary"
        aria-label="Quick contact"
      >
        <a
          className="flex items-center justify-center gap-2 bg-gradient-to-b from-brand-500 to-brand-600 py-3.5 font-display font-extrabold text-white"
          href={`tel:+91${CONTACT.phones[0]}`}
        >
          <Phone size={19} /> Call Now
        </a>
        <a
          className="flex items-center justify-center gap-2 bg-gradient-to-b from-whatsapp to-whatsapp-deep py-3.5 font-display font-extrabold text-white"
          href={waHref}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={19} /> WhatsApp
        </a>
      </div>
    </>
  )
}
