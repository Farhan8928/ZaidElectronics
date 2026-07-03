import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { CONTACT, NAV_LINKS, waLink } from '../data.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__strip">
        <div className="container nav__strip-inner">
          <span>Opp. Sai Baba Mandir, Cheeta Camp, Trombay</span>
          <span className="nav__strip-hours">{CONTACT.hours}</span>
          <a href={`tel:+91${CONTACT.phones[0]}`}>
            Call +91 {CONTACT.phones[0].replace(/(\d{5})(\d{5})/, '$1 $2')}
          </a>
        </div>
      </div>

      <div className="container nav__inner">
        <a href="#top" className="nav__brand" aria-label="Zaid Electronics home">
          Zaid Electronics<span className="nav__brand-star">*</span>
          <small>TV &amp; panel repair workshop — Trombay, Mumbai</small>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a
            className="btn btn--ink"
            href={waLink('Hi Zaid Electronics! My TV needs repair.')}
            target="_blank"
            rel="noreferrer"
          >
            Book a repair <ArrowUpRight size={15} />
          </a>
          <button
            className="nav__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav__mobile"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            aria-label="Mobile"
          >
            <div className="nav__mobile-inner">
              {NAV_LINKS.map((l, i) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                  <span className="nav__mobile-index">0{i + 1}</span> {l.label}
                </a>
              ))}
              <a
                className="btn btn--ink"
                href={`tel:+91${CONTACT.phones[0]}`}
                onClick={() => setOpen(false)}
              >
                Call {CONTACT.phones[0]}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
