import { ShieldCheck } from 'lucide-react'
import Reveal, { SectionHeading } from '../components/Reveal.jsx'
import { GUARANTEES } from '../data/services.js'

/**
 * "Zero-risk" band on ink — the only fully dark section in the body. Removing
 * perceived risk ("no fix, no fee") right before the contact block lowers the
 * barrier to picking up the phone.
 */
export default function Guarantee() {
  return (
    <section className="border-b-2 border-ink bg-ink py-16 text-paper md:py-24" aria-label="Our guarantees">
      <div className="container-x">
        <SectionHeading
          num="05 / ZERO-RISK PROMISE"
          eyebrow="Our promise"
          title="You are covered, in writing"
          invert
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {GUARANTEES.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-[6px] border-2 border-paper bg-ink-soft/40 p-6 shadow-hard-paper">
                <span className="mb-4 grid h-12 w-12 place-items-center rounded-[6px] border-2 border-ink bg-yellow text-ink">
                  <ShieldCheck size={24} />
                </span>
                <h3 className="mb-2 font-display text-[1.15rem] font-bold text-paper">{g.title}</h3>
                <p className="text-[0.9rem] text-paper/70">{g.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
