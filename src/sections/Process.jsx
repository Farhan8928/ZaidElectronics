import Reveal, { SectionHeading } from '../components/Reveal.jsx'
import { PROCESS } from '../data/services.js'

export default function Process() {
  return (
    <section id="process" className="border-b-2 border-ink py-16 md:py-24">
      <div className="container-x">
        <SectionHeading
          num="03 / HOW IT WORKS"
          eyebrow="The process"
          title="From broken to fixed in 4 steps"
          lead="Clear process, zero surprises. Most sets go home the same day."
        />

        <ol className="mt-12 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.08}>
              <li className="card flex h-full flex-col p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-display text-[3rem] font-bold leading-none text-ink/15">
                    {String(p.step).padStart(2, '0')}
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-[5px] border-2 border-ink bg-green font-mono text-[0.9rem] font-bold text-white">
                    {p.step}
                  </span>
                </div>
                <h3 className="mb-1.5 font-display text-[1.08rem] font-bold text-ink">{p.title}</h3>
                <p className="text-[0.88rem] text-muted">{p.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
