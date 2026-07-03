import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Brand } from './Nav.jsx'
import { CONTACT, NAV_LINKS, fmtPhone } from '../data/site.js'
import { SERVICES } from '../data/services.js'

export default function Footer() {
  return (
    <footer className="bg-ink-950 pt-16 text-[#d7e5dc]">
      <div className="container-x grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.3fr]">
        <div>
          <Brand subtleSub />
          <p className="mt-4 max-w-[34ch] text-[0.9rem] text-white/60">
            LED &amp; LCD TV repair, panel repair &amp; bonding, smart TV service, buying
            &amp; selling — serving Mumbai with honest, expert repairs since {CONTACT.since}.
          </p>
        </div>

        <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
          <h4 className="mb-1 text-[0.82rem] font-bold uppercase tracking-[0.1em] text-gold">
            Quick Links
          </h4>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="w-fit text-[0.9rem] text-white/65 hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2.5">
          <h4 className="mb-1 text-[0.82rem] font-bold uppercase tracking-[0.1em] text-gold">
            Services
          </h4>
          {SERVICES.map((s) => (
            <a key={s.title} href="#services" className="w-fit text-[0.9rem] text-white/65 hover:text-white">
              {s.title}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2.5">
          <h4 className="mb-1 text-[0.82rem] font-bold uppercase tracking-[0.1em] text-gold">
            Contact
          </h4>
          <FooterLine icon={Phone}>
            <a href={`tel:+91${CONTACT.phones[0]}`} className="hover:text-white">
              {fmtPhone(CONTACT.phones[0])}
            </a>
          </FooterLine>
          <FooterLine icon={Phone}>
            <a href={`tel:+91${CONTACT.phones[1]}`} className="hover:text-white">
              {fmtPhone(CONTACT.phones[1])}
            </a>
          </FooterLine>
          <FooterLine icon={Mail}>
            <a href={`mailto:${CONTACT.emails[0]}`} className="hover:text-white">
              {CONTACT.emails[0]}
            </a>
          </FooterLine>
          <FooterLine icon={MapPin}>{CONTACT.address}</FooterLine>
          <FooterLine icon={Clock}>{CONTACT.hours}</FooterLine>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-wrap items-center justify-between gap-2 py-5 text-[0.8rem] text-white/45">
          <span>© {new Date().getFullYear()} Zaid Electronics. All rights reserved.</span>
          <span>Prop. {CONTACT.proprietor} · Free diagnosis · 90-day written warranty</span>
        </div>
      </div>
    </footer>
  )
}

function FooterLine({ icon: Icon, children }) {
  return (
    <p className="flex items-start gap-2 text-[0.88rem] text-white/65">
      <Icon size={15} className="mt-0.5 shrink-0 text-gold" />
      <span>{children}</span>
    </p>
  )
}
