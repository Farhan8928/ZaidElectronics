import { Plus } from 'lucide-react'
import Reveal, { SectionHeading } from '../components/Reveal.jsx'
import { FAQS } from '../data/faqs.js'
import { waLink } from '../data/site.js'

/**
 * FAQ built on native <details>/<summary> rather than a JS accordion:
 *
 *   1. Zero JS state — the browser opens/closes in a single paint frame,
 *      which stays smooth on the low/mid-range Android phones most repair
 *      customers browse on.
 *   2. `name="faq"` (baseline since 2024) gives one-open-at-a-time for free.
 *   3. Accessible + crawlable by default — Google reads the Q&A for rich
 *      results. Mirror this copy into FAQPage JSON-LD in index.html if added.
 */
export default function Faq() {
  return (
    <section id="faq" className="border-b-2 border-ink py-16 md:py-24">
      <div className="container-narrow">
        <SectionHeading
          num="06 / FAQ"
          eyebrow="Questions"
          title="Asked at the counter, daily"
          lead={
            <>
              Something else on your mind?{' '}
              <a
                className="font-bold text-green underline decoration-2 underline-offset-2"
                href={waLink('Hi Zaid Electronics! I have a question about my TV.')}
                target="_blank"
                rel="noreferrer"
              >
                Ask on WhatsApp
              </a>{' '}
              — we reply within minutes during shop hours.
            </>
          }
        />

        <ol className="mt-10 grid list-none gap-4 p-0">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <li>
                <details name="faq" open={i === 0} className="card group overflow-hidden open:bg-white">
                  <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
                    <span className="font-mono text-[0.72rem] font-bold text-green">Q.{i + 1}</span>
                    <h3 className="flex-grow font-display text-[1.02rem] font-bold text-ink">{f.q}</h3>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[4px] border-2 border-ink bg-paper text-ink transition-transform duration-200 group-open:rotate-45 group-open:bg-green group-open:text-white">
                      <Plus size={16} />
                    </span>
                  </summary>
                  <p className="border-t-2 border-dashed border-ink/20 px-5 py-4 text-[0.93rem] leading-relaxed text-muted">
                    {f.a}
                  </p>
                </details>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
