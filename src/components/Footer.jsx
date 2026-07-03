import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Brand } from './Nav.jsx'
import { CONTACT, NAV_LINKS, fmtPhone } from '../data/site.js'
import { SERVICES } from '../data/services.js'

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1.2fr]">
        <div>
          <Brand onDark />
          <p className="mt-4 max-w-[34ch] text-[0.9rem] text-paper/60">
            LED &amp; LCD TV repair, panel repair &amp; bonding, smart-TV service, buying &amp;
            selling — serving Mumbai with honest, expert repairs since {CONTACT.since}.
          </p>
        </div>

        <FooterCol title="Index">
          {NAV_LINKS.map((l) => (
            <FooterLink key={l.href} href={l.href}>
              {l.label}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Services">
          {SERVICES.map((s) => (
            <FooterLink key={s.title} href="#services">
              {s.title}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Reach us">
          <FooterMeta icon={Phone}>
            <a href={`tel:+91${CONTACT.phones[0]}`} className="inline-block py-1 hover:text-yellow">
              {fmtPhone(CONTACT.phones[0])}
            </a>
          </FooterMeta>
          <FooterMeta icon={Phone}>
            <a href={`tel:+91${CONTACT.phones[1]}`} className="inline-block py-1 hover:text-yellow">
              {fmtPhone(CONTACT.phones[1])}
            </a>
          </FooterMeta>
          <FooterMeta icon={Mail}>
            <a href={`mailto:${CONTACT.emails[0]}`} className="inline-block py-1 hover:text-yellow">
              {CONTACT.emails[0]}
            </a>
          </FooterMeta>
          <FooterMeta icon={MapPin}>{CONTACT.address}</FooterMeta>
          <FooterMeta icon={Clock}>{CONTACT.hours}</FooterMeta>
        </FooterCol>
      </div>

      {/* Oversized wordmark strip */}
      <div className="overflow-hidden border-y-2 border-paper/15">
        <p className="select-none whitespace-nowrap py-4 text-center font-display text-[13vw] font-bold uppercase leading-none tracking-tighter text-paper/[0.06]">
          Zaid Electronics · TV Repair Mumbai
        </p>
      </div>

      <div className="container-x flex flex-wrap items-center justify-between gap-2 py-5 font-mono text-[0.66rem] uppercase tracking-[0.1em] text-paper/45">
        <span>© {new Date().getFullYear()} Zaid Electronics · All rights reserved</span>
        <span>Prop. {CONTACT.proprietor} · Free diagnosis · 90-day warranty</span>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }) {
  return (
    <div className="flex flex-col gap-1">
      <h4 className="mb-1.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-yellow">
        {title}
      </h4>
      {children}
    </div>
  )
}

function FooterLink({ href, children }) {
  return (
    <a href={href} className="w-fit py-1.5 text-[0.9rem] text-paper/65 hover:text-yellow">
      {children}
    </a>
  )
}

function FooterMeta({ icon: Icon, children }) {
  return (
    <p className="flex items-start gap-2 py-1 text-[0.88rem] text-paper/65">
      <Icon size={15} className="mt-1 shrink-0 text-yellow" />
      <span>{children}</span>
    </p>
  )
}
