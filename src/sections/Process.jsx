import Reveal, { SectionHeading } from '../components/Reveal.jsx'
import { PROCESS } from '../data/services.js'

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="How It Works"
          title="From Broken to Fixed in 4 Steps"
          lead="Clear process, zero surprises. Most customers have their TV back the same day."
          center
        />

        <ol className="mt-12 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.09}>
              <li className="card h-full p-7 transition duration-300 hover:-translate-y-1 hover:shadow-pop">
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-[1.1rem] font-extrabold text-white shadow-cta">
                  {p.step}
                </span>
                <h3 className="mb-1 text-[1.08rem] font-extrabold">{p.title}</h3>
                <p className="text-[0.88rem] text-muted">{p.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
