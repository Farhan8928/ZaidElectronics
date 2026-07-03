import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  Star,
  MapPin,
  Zap,
  ShieldCheck,
  Send,
} from 'lucide-react'
import { CONTACT, HERO_POINTS, RATING, fmtPhone, waLink } from '../data/site.js'

const EASE = [0.22, 0.61, 0.36, 1]
const rise = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: EASE },
  }),
}

/**
 * Hero lead-capture form.
 *
 * There is no backend to receive submissions, and standing up one (plus
 * spam handling, deliverability, a place for the owner to read them) is
 * overkill for a single-shop site. Instead the form composes a pre-filled
 * WhatsApp message and hands the lead straight to the owner's phone — where
 * he already does business. Zero infra, and the customer lands in a channel
 * he checks constantly.
 */
function LeadForm() {
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
      className="card relative overflow-hidden p-7 pt-8"
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
    >
      <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-500 to-gold" />
      <div className="mb-5">
        <h2 className="font-display text-[1.35rem] font-extrabold">Get your free quote</h2>
        <p className="text-[0.85rem] text-muted">Takes 30 seconds — reply usually within minutes</p>
      </div>

      <form onSubmit={submit} className="grid gap-3.5">
        <Field label="Your name">
          <input
            className="field"
            type="text"
            value={form.name}
            onChange={update('name')}
            placeholder="e.g. Rahul Sharma"
            required
          />
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
        <button type="submit" className="btn btn-wa btn-block btn-lg">
          <Send size={17} /> Get Free Quote on WhatsApp
        </button>
      </form>

      <p className="mt-3.5 flex items-center justify-center gap-1.5 text-[0.75rem] text-muted">
        <ShieldCheck size={14} className="text-brand-500" />
        No spam, no charges — just your repair price.
      </p>
    </motion.div>
  )
}

function Field({ label, children }) {
  return (
    <label className="grid gap-1.5">
      <span className="text-[0.78rem] font-semibold">{label}</span>
      {children}
    </label>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-40 md:pt-44">
      {/* Ambient brand wash behind the hero. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(720px_420px_at_88%_0%,rgba(12,138,70,0.10),transparent_65%),radial-gradient(560px_360px_at_0%_100%,rgba(255,200,44,0.12),transparent_60%),linear-gradient(180deg,#eef6f1,theme(colors.paper)_70%)]"
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            variants={rise}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-[0.82rem] font-medium text-muted shadow-card"
          >
            <span className="inline-flex gap-px text-gold" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="fill-gold" />
              ))}
            </span>
            <strong className="text-ink-900">{RATING.score}/5</strong> rated by {RATING.count} customers
          </motion.div>

          <motion.h1 variants={rise} initial="hidden" animate="show" custom={1} className="display-hero text-balance">
            TV Repair in Mumbai,
            <span className="relative whitespace-nowrap text-brand-600">
              {' '}Fixed the Same Day
              <span
                aria-hidden
                className="absolute inset-x-[2%] bottom-1 -z-10 h-[0.28em] rounded bg-gold/50"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={rise}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-5 max-w-[52ch] text-[1.08rem] text-muted"
          >
            LED, LCD, Smart TV &amp; panel repair at your doorstep or our workshop. Free
            diagnosis, one fixed price, and a 90-day written warranty — since {CONTACT.since}.
          </motion.p>

          <motion.ul
            variants={rise}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-6 grid gap-2.5"
          >
            {HERO_POINTS.map((p) => (
              <li key={p} className="flex items-center gap-2.5 font-medium">
                <CheckCircle2 size={19} className="shrink-0 text-brand-500" /> {p}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={rise}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-8 flex flex-wrap gap-3.5"
          >
            <a className="btn btn-primary btn-lg" href={`tel:+91${CONTACT.phones[0]}`}>
              <Phone size={19} /> Call {fmtPhone(CONTACT.phones[0])}
            </a>
            <a
              className="btn btn-outline btn-lg"
              href={waLink('Hi Zaid Electronics! My TV needs repair. Can you help?')}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={19} /> WhatsApp Us
            </a>
          </motion.div>

          <motion.div
            variants={rise}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-6 flex flex-wrap gap-2.5"
          >
            <Chip icon={Zap}>Same-day service</Chip>
            <Chip icon={MapPin}>All Mumbai — doorstep visits</Chip>
            <Chip icon={ShieldCheck}>90-day warranty</Chip>
          </motion.div>
        </div>

        <LeadForm />
      </div>
    </section>
  )
}

function Chip({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-1.5 text-[0.78rem] font-semibold text-brand-700">
      <Icon size={14} /> {children}
    </span>
  )
}
