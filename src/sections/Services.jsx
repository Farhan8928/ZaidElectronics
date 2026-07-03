import { CheckCircle2, ArrowRight } from 'lucide-react'
import Reveal, { SectionHeading } from '../components/Reveal.jsx'
import { SERVICES } from '../data/services.js'
import { waLink } from '../data/site.js'

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Services"
          title="Every TV Problem, One Trusted Shop"
          lead="Pick your problem — get a free diagnosis and a fixed price before any work starts."
          center
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service: s }) {
  return (
    <article
      className={`card group relative flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:shadow-float ${
        s.featured ? 'border-2 border-brand-500' : 'hover:border-brand-500/35'
      }`}
    >
      {s.featured && (
        <span className="absolute left-3.5 top-3.5 z-10 rounded-full bg-gold px-3 py-1 font-display text-[0.7rem] font-extrabold text-ink-900 shadow-card">
          Most Popular — Save up to 70%
        </span>
      )}
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={s.img}
          alt={s.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-grow flex-col p-6">
        <h3 className="text-[1.22rem] font-extrabold">{s.title}</h3>
        <p className="mt-2 flex-grow text-[0.92rem] text-muted">{s.desc}</p>
        <ul className="my-4 grid gap-1.5">
          {s.points.map((p) => (
            <li key={p} className="flex items-center gap-2 text-[0.85rem] font-medium">
              <CheckCircle2 size={16} className="shrink-0 text-brand-500" /> {p}
            </li>
          ))}
        </ul>
        <a
          className="inline-flex items-center gap-1.5 font-display text-[0.92rem] font-extrabold text-brand-600 transition-all hover:gap-2.5"
          href={waLink(`Hi Zaid Electronics! I need: ${s.title}. Please send me a free quote.`)}
          target="_blank"
          rel="noreferrer"
        >
          Get free quote <ArrowRight size={16} />
        </a>
      </div>
    </article>
  )
}
