import { motion } from 'framer-motion'
import { ArrowDownRight, Phone, MessageCircle } from 'lucide-react'
import { CONTACT, waLink } from '../data.js'

const rise = {
  hidden: { opacity: 0, y: 34 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.08 * i, ease: [0.22, 0.61, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <motion.p variants={rise} initial="hidden" animate="show" custom={0} className="hero__kicker">
          A repair workshop, not a replacement counter — serving Mumbai since {CONTACT.since}
        </motion.p>

        <h1 className="hero__title">
          <motion.span variants={rise} initial="hidden" animate="show" custom={1} className="hero__line">
            We bring dead
          </motion.span>
          <motion.span variants={rise} initial="hidden" animate="show" custom={2} className="hero__line">
            <em>televisions</em> back
          </motion.span>
          <motion.span variants={rise} initial="hidden" animate="show" custom={3} className="hero__line">
            to life<span className="hero__dot">.</span>
          </motion.span>
        </h1>

        <div className="hero__row">
          <motion.div variants={rise} initial="hidden" animate="show" custom={4} className="hero__intro">
            <p>
              LED &amp; LCD repair, panel bonding, smart-TV software — diagnosed free,
              priced before we start, and backed by a written{' '}
              <mark>90-day warranty</mark>. When the service centre says
              &ldquo;replace the panel&rdquo;, bring it to us first.
            </p>
            <div className="hero__ctas">
              <a className="btn btn--ink btn--lg" href={`tel:+91${CONTACT.phones[0]}`}>
                <Phone size={16} /> Call the shop
              </a>
              <a
                className="btn btn--line btn--lg"
                href={waLink('Hi Zaid Electronics! My TV needs repair. Sending a photo of the problem.')}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} /> WhatsApp a photo
              </a>
            </div>
            <p className="hero__scroll">
              <ArrowDownRight size={14} /> Scroll — what we fix, how we price, where we are
            </p>
          </motion.div>

          <motion.figure
            variants={rise}
            initial="hidden"
            animate="show"
            custom={5}
            className="hero__media"
          >
            <img
              src="https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1500&auto=format&fit=crop"
              alt="Televisions of every generation stacked in a workshop"
              loading="eager"
            />
            <figcaption>Every generation of set has passed over this counter.</figcaption>
          </motion.figure>

          <motion.aside
            variants={rise}
            initial="hidden"
            animate="show"
            custom={6}
            className="job-card"
            aria-label="Example repair job card"
          >
            <p className="job-card__head">
              JOB CARD <span>№ 4-1082</span>
            </p>
            <dl>
              <div>
                <dt>SET</dt>
                <dd>Samsung 43&Prime; LED</dd>
              </div>
              <div>
                <dt>FAULT</dt>
                <dd>Vertical lines, left half</dd>
              </div>
              <div>
                <dt>FINDING</dt>
                <dd>COF bonding failure</dd>
              </div>
              <div>
                <dt>QUOTED</dt>
                <dd>₹2,800 fixed</dd>
              </div>
              <div>
                <dt>PANEL SAVED</dt>
                <dd>₹14,500 not spent</dd>
              </div>
              <div>
                <dt>STATUS</dt>
                <dd className="job-card__status">● Repaired, same day</dd>
              </div>
            </dl>
            <p className="job-card__foot">90-day written warranty · bench-tested 6 hrs</p>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
