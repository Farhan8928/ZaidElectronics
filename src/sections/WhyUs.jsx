import { CheckCircle2, TrendingDown } from 'lucide-react'
import Reveal, { SectionHeading } from '../components/Reveal.jsx'
import { WHY_POINTS, SAVINGS } from '../data/services.js'

/**
 * Objection-handling section.
 *
 * The core sales argument for this shop is "we repair what big service
 * centres tell you to replace." Rather than just assert it, the panel on
 * the right turns it into a concrete, side-by-side rupee comparison — the
 * strongest single persuasion element on the page.
 */
export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="bg-[linear-gradient(180deg,theme(colors.paper),#eef4f0_50%,theme(colors.paper))] py-16 md:py-24"
    >
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeading
            eyebrow="Why Zaid Electronics"
            title="We Repair What Service Centres Replace"
            lead="Big service centres quote a new panel for every screen problem. We find the actual fault and fix it — that's why your bill is a fraction of theirs."
          />

          <div className="mt-8 grid gap-6">
            {WHY_POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-brand-500" />
                  <div>
                    <h3 className="text-[1.05rem] font-extrabold">{p.title}</h3>
                    <p className="text-[0.9rem] text-muted">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="card mx-auto max-w-[620px] overflow-hidden shadow-float">
            <div className="aspect-[16/8] overflow-hidden">
              <img
                src={SAVINGS.img}
                alt="Technician repairing a TV circuit board"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-4 flex items-center gap-2 text-[1.05rem] font-extrabold">
                <TrendingDown size={20} className="text-brand-500" /> Real example: 43″ screen with lines
              </h3>

              <PriceRow data={SAVINGS.them} tone="them" />
              <PriceRow data={SAVINGS.us} tone="us" />

              <p className="mt-3.5 rounded-xl border border-dashed border-gold bg-gold-soft py-3 text-center font-display text-[1.02rem] font-extrabold text-brand-700">
                {SAVINGS.save}
              </p>
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
    <div
      className={`mb-1.5 flex items-center justify-between gap-4 rounded-xl px-4 py-3.5 ${
        isThem ? 'bg-[#fbeeee]' : 'bg-brand-50'
      }`}
    >
      <div>
        <span className="block text-[0.92rem] font-semibold">{data.label}</span>
        <small className="text-[0.76rem] text-muted">{data.note}</small>
      </div>
      <strong
        className={`whitespace-nowrap font-display text-[1.15rem] font-extrabold ${
          isThem ? 'text-[#b3362c] line-through decoration-2' : 'text-brand-700'
        }`}
      >
        {data.value}
      </strong>
    </div>
  )
}
