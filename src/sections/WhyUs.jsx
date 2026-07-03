import { Check } from 'lucide-react'
import Reveal, { SectionHeading } from '../components/Reveal.jsx'
import { WHY_POINTS, SAVINGS } from '../data/services.js'

/**
 * Objection-handling section. The shop's core argument — "we repair what big
 * centres tell you to replace" — is proven with a receipt-style side-by-side
 * price comparison rather than just asserted. That invoice block is the
 * strongest single persuasion element on the page.
 */
export default function WhyUs() {
  return (
    <section id="why-us" className="border-b-2 border-ink bg-paper-deep py-16 md:py-24">
      <div className="container-x grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <SectionHeading
            num="02 / WHY US"
            eyebrow="The workshop"
            title="We repair what service centres replace"
            lead="Big centres quote a new panel for every screen fault. We find the real fault and fix it — which is why your bill is a fraction of theirs."
          />

          <div className="mt-8 grid gap-0 border-t-2 border-ink">
            {WHY_POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="flex items-start gap-4 border-b-2 border-dashed border-ink/25 py-4">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-[4px] border-2 border-ink bg-green text-white">
                    <Check size={15} strokeWidth={3} />
                  </span>
                  <div>
                    <h3 className="font-display text-[1.05rem] font-bold text-ink">{p.title}</h3>
                    <p className="text-[0.9rem] text-muted">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Receipt-style savings comparison */}
        <Reveal delay={0.15}>
          <div className="card overflow-hidden shadow-hard-lg">
            <div className="aspect-[16/7] overflow-hidden border-b-2 border-ink">
              <img
                src={SAVINGS.img}
                alt="Close-up of a technician repairing a television circuit board"
                loading="lazy"
                className="h-full w-full object-cover grayscale-[30%]"
              />
            </div>
            <div className="p-6">
              <p className="mb-4 font-mono text-[0.72rem] font-bold uppercase tracking-[0.1em] text-muted">
                ▸ Real job · 43″ screen with lines
              </p>

              <PriceRow data={SAVINGS.them} tone="them" />
              <PriceRow data={SAVINGS.us} tone="us" />

              <div className="mt-4 flex items-center justify-between rounded-[5px] border-2 border-ink bg-yellow px-4 py-3">
                <span className="font-mono text-[0.72rem] font-bold uppercase tracking-[0.08em] text-ink">
                  Total saved
                </span>
                <strong className="font-display text-[1.2rem] font-bold text-ink">{SAVINGS.save}</strong>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function PriceRow({ data, tone }) {
  const isThem = tone === 'them'
  return (
    <div className="flex items-center justify-between gap-4 border-b-2 border-dashed border-ink/25 py-3">
      <div>
        <span className="block font-mono text-[0.72rem] font-bold uppercase tracking-[0.06em] text-ink">
          {data.label}
        </span>
        <small className="text-[0.76rem] text-muted">{data.note}</small>
      </div>
      <strong
        className={`whitespace-nowrap font-display text-[1.15rem] font-bold ${
          isThem ? 'text-red line-through' : 'text-green'
        }`}
      >
        {data.value}
      </strong>
    </div>
  )
}
