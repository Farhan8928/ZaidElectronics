import { ArrowUpRight, Check } from 'lucide-react'
import Reveal, { SectionHeading } from '../components/Reveal.jsx'
import { SERVICES } from '../data/services.js'
import { waLink } from '../data/site.js'

export default function Services() {
  return (
    <section id="services" className="border-b-2 border-ink py-16 md:py-24">
      <div className="container-x">
        <SectionHeading
          num="01 / OUR SERVICES"
          eyebrow="What we fix"
          title="Every TV problem, one trusted workshop"
          lead="Pick your fault — free diagnosis, one fixed price before any work starts."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.07}>
              <ServiceBlock service={s} index={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceBlock({ service: s, index }) {
  const no = String(index).padStart(2, '0')
  return (
    <a
      href={waLink(`Hi Zaid Electronics! I need: ${s.title}. Please send me a free quote.`)}
      target="_blank"
      rel="noreferrer"
      className={`group flex h-full flex-col rounded-[6px] border-2 border-ink shadow-hard transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none ${
        s.featured ? 'bg-yellow' : 'bg-white'
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-ink">
        <img
          src={s.img}
          alt={s.alt}
          loading="lazy"
          className="h-full w-full object-cover grayscale-[35%] transition-all duration-500 group-hover:grayscale-0"
        />
        <span className="absolute left-0 top-0 border-b-2 border-r-2 border-ink bg-ink px-2.5 py-1 font-mono text-[0.8rem] font-bold text-paper">
          {no}
        </span>
        {s.featured && (
          <span className="absolute right-3 top-3 rotate-3 rounded-[4px] border-2 border-ink bg-green px-2.5 py-1 font-mono text-[0.62rem] font-bold uppercase text-white shadow-hard-sm">
            Save up to 70%
          </span>
        )}
      </div>

      <div className="flex flex-grow flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[1.2rem] font-bold text-ink">{s.title}</h3>
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[4px] border-2 border-ink bg-paper text-ink transition group-hover:bg-green group-hover:text-white">
            <ArrowUpRight size={16} />
          </span>
        </div>
        <p className="mt-2 flex-grow text-[0.9rem] text-muted">{s.desc}</p>
        <ul className="mt-4 flex flex-col gap-1.5 border-t-2 border-dashed border-ink/20 pt-3">
          {s.points.map((p) => (
            <li key={p} className="flex items-center gap-2 font-mono text-[0.72rem] font-bold uppercase tracking-[0.03em] text-ink">
              <Check size={14} className="shrink-0 text-green" /> {p}
            </li>
          ))}
        </ul>
      </div>
    </a>
  )
}
