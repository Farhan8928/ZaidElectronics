import { ShieldCheck } from 'lucide-react'
import Reveal, { SectionHeading } from '../components/Reveal.jsx'
import { GUARANTEES } from '../data/services.js'

/**
 * Dark "zero-risk" band.
 *
 * Deliberately the only dark section in the body — the tonal shift makes the
 * guarantees feel like a distinct promise block, and removing perceived risk
 * ("no fix, no fee") right before the contact section lowers the barrier to
 * calling.
 */
export default function Guarantee() {
  return (
    <section
      className="bg-[radial-gradient(700px_300px_at_50%_0%,rgba(255,200,44,0.12),transparent_70%),linear-gradient(160deg,theme(colors.brand.700),#06331b)] py-20 text-white"
      aria-label="Our guarantees"
    >
      <div className="container-x">
        <SectionHeading eyebrow="Zero-Risk Promise" title="You Are Covered, In Writing" center invert />

        <div className="mx-auto mt-12 grid max-w-[560px] gap-6 lg:max-w-none lg:grid-cols-3">
          {GUARANTEES.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.09}>
              <div className="h-full rounded-3xl border border-white/15 bg-white/[0.06] p-8 text-center">
                <span className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-gold text-ink-900">
                  <ShieldCheck size={26} />
                </span>
                <h3 className="mb-2 text-[1.12rem] font-extrabold">{g.title}</h3>
                <p className="text-[0.9rem] text-white/75">{g.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
