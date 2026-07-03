import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Star, ArrowRight, Send } from 'lucide-react'
import { CONTACT, HERO_POINTS, RATING, fmtPhone, waLink } from '../data/site.js'

const EASE = [0.22, 0.61, 0.36, 1]
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE },
  }),
}

/**
 * Hero lead form, styled as a paper "job card".
 *
 * No backend: the form composes a pre-filled WhatsApp message and hands the
 * lead straight to the owner's phone, where he already does business. Zero
 * infra, and the customer lands in the channel he checks constantly.
 */
function JobCardForm() {
  const [form, setForm] = useState({ name: '', phone: '', problem: '' })
  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const msg =
      `Hi Zaid Electronics! I need a TV repair quote.\n\n` +
      `Name: ${form.name}\nPhone: ${form.phone}\nProblem: ${form.problem}\n\n` +
      `Please send me the estimated price.`
    window.open(waLink(msg), '_blank', 'noopener')
  }

  return (
    <motion.div
      className="card overflow-hidden shadow-hard-lg"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
    >
      {/* Ticket header */}
      <div className="flex items-center justify-between border-b-2 border-ink bg-yellow px-5 py-3">
        <span className="font-mono text-[0.72rem] font-bold uppercase tracking-[0.12em] text-ink">
          ▸ Free Quote Request
        </span>
        <span className="font-mono text-[0.66rem] font-bold text-ink/60">NO. 30-SEC</span>
      </div>

      <form onSubmit={submit} className="grid gap-3.5 p-5">
        <Field label="Your name">
          <input className="field" type="text" value={form.name} onChange={update('name')} placeholder="e.g. Rahul Sharma" required />
        </Field>
        <Field label="Phone number">
          <input
            className="field"
            type="tel"
            value={form.phone}
            onChange={update('phone')}
            placeholder="10-digit mobile number"
            pattern="[0-9+ ]{10,14}"
            required
          />
        </Field>
        <Field label="What's wrong with the TV?">
          <textarea
            className="field resize-none"
            value={form.problem}
            onChange={update('problem')}
            placeholder="e.g. Samsung 43 inch — lines on screen"
            rows={2}
            required
          />
        </Field>
        <button type="submit" className="btn btn-green btn-block btn-lg mt-1">
          <Send size={17} /> Get Free Quote on WhatsApp
        </button>
        <p className="text-center font-mono text-[0.66rem] uppercase tracking-[0.08em] text-muted">
          No spam · No charges · Just your price
        </p>
      </form>
    </motion.div>
  )
}

function Field({ label, children }) {
  return (
    <label className="grid gap-1.5">
      <span className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.1em] text-ink">{label}</span>
      {children}
    </label>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink pb-14 pt-32 md:pb-20 md:pt-36">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <motion.p
            variants={rise}
            initial="hidden"
            animate="show"
            custom={0}
            className="label mb-6"
          >
            [ TV REPAIR · MUMBAI · SINCE {CONTACT.since} ]
          </motion.p>

          <motion.h1 variants={rise} initial="hidden" animate="show" custom={1} className="display-hero text-ink">
            WE FIX
            <br />
            TELE&shy;VISIONS<span className="text-green">.</span>
            <br />
            <span className="mark">SAME DAY.</span>
          </motion.h1>

          <motion.p
            variants={rise}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-[46ch] text-[1.06rem] text-muted"
          >
            LED, LCD, Smart TV &amp; panel bonding — diagnosed free, priced before we start,
            backed by a written 90-day warranty. When the service centre says
            &ldquo;replace the panel&rdquo;, bring it to us first.
          </motion.p>

          <motion.div
            variants={rise}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-7 flex flex-wrap gap-3"
          >
            <a className="btn btn-green btn-lg" href={`tel:+91${CONTACT.phones[0]}`}>
              <Phone size={18} /> Call {fmtPhone(CONTACT.phones[0])}
            </a>
            <a
              className="btn btn-white btn-lg"
              href={waLink('Hi Zaid Electronics! My TV needs repair. Sending a photo of the problem.')}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> WhatsApp a Photo
            </a>
          </motion.div>

          {/* Rating + checklist strip */}
          <motion.div
            variants={rise}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t-2 border-dashed border-ink/20 pt-5"
          >
            <span className="inline-flex items-center gap-1.5 font-mono text-[0.78rem] font-bold">
              <span className="inline-flex text-yellow">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow" />
                ))}
              </span>
              {RATING.score}/5 · {RATING.count} customers
            </span>
            {HERO_POINTS.slice(0, 2).map((p) => (
              <span key={p} className="inline-flex items-center gap-1.5 font-mono text-[0.72rem] text-muted">
                <ArrowRight size={13} className="text-green" /> {p}
              </span>
            ))}
          </motion.div>
        </div>

        <JobCardForm />
      </div>
    </section>
  )
}
