import { useEffect, useState } from 'react'
import { Phone, Menu, X, BadgeCheck, Clock } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { CONTACT, NAV_LINKS, fmtPhone } from '../data/site.js'

/** Brand lockup — reused in the nav and footer. */
function Brand({ subtleSub = false }) {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Zaid Electronics home">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-lg font-extrabold text-white shadow-cta">
        Ze
      </span>
      <span className="flex flex-col font-display font-extrabold leading-tight">
        Zaid Electronics
        <small
          className={`font-sans text-[0.68rem] font-medium ${
            subtleSub ? 'text-white/55' : 'text-muted'
          }`}
        >
          TV Repair Experts · Mumbai
        </small>
      </span>
    </a>
  )
}

export { Brand }

/**
 * Sticky navigation.
 *
 * The header stays transparent over the hero and only gains a border +
 * shadow once the user scrolls (`scrolled`) — that keeps the first
 * impression clean while still separating the bar from content further
 * down. The phone number sits in the bar on desktop because tap-to-call is
 * the page's primary conversion action.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header id="top" className="fixed inset-x-0 top-0 z-[100]">
      {/* Utility strip — trust promise + hours */}
      <div className="bg-brand-900 text-[#eafff2]">
        <div className="container-x flex items-center justify-between gap-6 py-1.5 text-[0.78rem] font-medium">
          <span className="inline-flex items-center gap-1.5">
            <BadgeCheck size={14} className="text-gold" />
            Free diagnosis · Same-day repair · 90-day warranty
          </span>
          <span className="hidden items-center gap-1.5 sm:inline-flex">
            <Clock size={14} className="text-gold" />
            {CONTACT.hours}
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b bg-white/90 backdrop-blur transition-colors ${
          scrolled ? 'border-line shadow-card' : 'border-transparent'
        }`}
      >
        <div className="container-x flex items-center justify-between gap-8 py-3">
          <Brand />

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.9rem] font-semibold text-muted transition-colors hover:text-brand-600"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden flex-col items-end leading-tight md:flex">
              <span className="text-[0.68rem] font-medium text-muted">Call now — we answer</span>
              <a
                href={`tel:+91${CONTACT.phones[0]}`}
                className="font-display text-[1.02rem] font-extrabold text-brand-600"
              >
                {fmtPhone(CONTACT.phones[0])}
              </a>
            </div>
            <a className="btn btn-primary" href={`tel:+91${CONTACT.phones[0]}`}>
              <Phone size={17} />
              <span className="hidden sm:inline">Call Now</span>
            </a>
            <button
              className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white text-ink-900 lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="overflow-hidden border-b border-line bg-white shadow-pop lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            aria-label="Mobile"
          >
            <div className="container-x flex flex-col py-2 pb-5">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3.5 font-semibold"
                >
                  {l.label}
                </a>
              ))}
              <a
                className="btn btn-primary btn-block mt-4"
                href={`tel:+91${CONTACT.phones[0]}`}
                onClick={() => setOpen(false)}
              >
                <Phone size={17} /> Call {fmtPhone(CONTACT.phones[0])}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
