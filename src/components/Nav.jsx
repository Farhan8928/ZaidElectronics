import { useEffect, useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { CONTACT, NAV_LINKS, fmtPhone } from '../data/site.js'

/** Brand lockup — a bordered yellow "Ze" block + wordmark. Reused in footer. */
export function Brand({ onDark = false }) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Zaid Electronics home">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[5px] border-2 border-ink bg-yellow font-display text-lg font-bold text-ink shadow-hard-sm">
        Ze
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.05rem] font-bold tracking-tight ${
            onDark ? 'text-paper' : 'text-ink'
          }`}
        >
          ZAID ELECTRONICS
        </span>
        <span className={`mt-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] ${onDark ? 'text-paper/55' : 'text-muted'}`}>
          TV Repair Workshop · Mumbai
        </span>
      </span>
    </a>
  )
}

/**
 * Sticky nav. A mono utility strip on top (trust promise + hours), then the
 * main bar which gains a hard bottom border once scrolled. Tap-to-call is the
 * primary action so the number + a solid green Call button live in the bar.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header id="top" className="fixed inset-x-0 top-0 z-[100]">
      {/* Utility strip */}
      <div className="border-b-2 border-ink bg-ink text-paper">
        <div className="container-x flex items-center justify-between py-1.5 font-mono text-[0.66rem] font-bold uppercase tracking-[0.12em]">
          <span className="text-yellow">★ Free diagnosis · Doorstep service · 90-day warranty</span>
          <span className="hidden sm:block">{CONTACT.hours}</span>
        </div>
      </div>

      {/* Main bar */}
      <div className={`border-b-2 bg-paper transition-colors ${scrolled ? 'border-ink' : 'border-transparent'}`}>
        <div className="container-x flex items-center justify-between gap-6 py-3">
          <Brand />

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[0.72rem] font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:text-green"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:+91${CONTACT.phones[0]}`}
              className="hidden text-right leading-tight md:block"
            >
              <span className="block font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted">
                Call — we answer
              </span>
              <span className="font-display text-[1rem] font-bold text-green">
                {fmtPhone(CONTACT.phones[0])}
              </span>
            </a>
            <a className="btn btn-green" href={`tel:+91${CONTACT.phones[0]}`}>
              <Phone size={16} />
              <span className="hidden sm:inline">Call Now</span>
            </a>
            <button
              className="grid h-11 w-11 place-items-center rounded-[5px] border-2 border-ink bg-white shadow-hard-sm lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="overflow-hidden border-b-2 border-ink bg-paper lg:hidden"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            aria-label="Mobile"
          >
            <div className="container-x flex flex-col py-2 pb-5">
              {NAV_LINKS.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 border-b-2 border-dashed border-ink/20 py-3.5 font-display font-bold uppercase"
                >
                  <span className="font-mono text-[0.7rem] text-green">0{i + 1}</span>
                  {l.label}
                </a>
              ))}
              <a
                className="btn btn-green btn-block mt-4"
                href={`tel:+91${CONTACT.phones[0]}`}
                onClick={() => setOpen(false)}
              >
                <Phone size={16} /> Call {fmtPhone(CONTACT.phones[0])}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
