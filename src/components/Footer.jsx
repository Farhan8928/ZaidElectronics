import { CONTACT, NAV_LINKS } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__col footer__col--wide">
          <p className="footer__tag">
            All kinds of electronics repair — LED &amp; LCD television, panel repair
            solution &amp; bonding, selling &amp; buying.
          </p>
          <p className="footer__prop">
            Prop. {CONTACT.proprietor} · Trombay, Mumbai · since {CONTACT.since}
          </p>
        </div>

        <nav className="footer__col" aria-label="Footer">
          <p className="footer__label">Index</p>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="footer__col">
          <p className="footer__label">Reach us</p>
          <a href={`tel:+91${CONTACT.phones[0]}`}>+91 {CONTACT.phones[0]}</a>
          <a href={`tel:+91${CONTACT.phones[1]}`}>+91 {CONTACT.phones[1]}</a>
          <a href={`mailto:${CONTACT.emails[0]}`}>{CONTACT.emails[0]}</a>
          <a href={`mailto:${CONTACT.emails[1]}`}>{CONTACT.emails[1]}</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Zaid Electronics. All rights reserved.</span>
        <span>Free diagnosis · Fixed prices · 90-day written warranty</span>
      </div>

      <p className="footer__wordmark" aria-hidden="true">
        ZAID ELECTRONICS
      </p>
    </footer>
  )
}
