import { ChevronDown } from 'lucide-react'
import Reveal, { SectionHeading } from '../components/Reveal.jsx'
import { FAQS } from '../data/faqs.js'
import { waLink } from '../data/site.js'

/**
 * FAQ accordion built on native <details>/<summary> rather than a
 * JS-controlled component. Reasons:
 *
 *   1. Zero JS state — no useState, no AnimatePresence, no re-render on tap.
 *      The browser opens/closes in a single paint frame, which stays smooth
 *      on the low/mid-range Android phones most repair customers browse on.
 *
 *   2. The `name="faq"` attribute (baseline across evergreen browsers since
 *      2024) gives one-open-at-a-time behaviour for free — open one, the
 *      others close, no code.
 *
 *   3. Accessible and crawlable by default: native keyboard support,
 *      screen-reader semantics, and Google can read the Q&A for rich results.
 *      Mirror this copy into a FAQPage JSON-LD block in index.html if added.
 */
export default function Faq() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions Customers Ask Us Daily"
          lead={
            <>
              Something else on your mind?{' '}
              <a
                className="font-semibold text-brand-600 underline underline-offset-2"
                href={waLink('Hi Zaid Electronics! I have a question about my TV.')}
                target="_blank"
                rel="noreferrer"
              >
                Ask us on WhatsApp
              </a>{' '}
              — we reply within minutes during shop hours.
            </>
          }
          center
        />

        <ol className="mt-10 grid list-none gap-2.5 p-0">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <li>
                <details
                  name="faq"
                  open={i === 0}
                  className="card group overflow-hidden open:border-brand-500/40"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
                    <h3 className="font-display text-base font-bold md:text-[1.05rem]">{f.q}</h3>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-muted transition-transform duration-200 group-open:rotate-180 group-open:border-brand-500 group-open:bg-brand-500 group-open:text-white">
                      <ChevronDown size={16} />
                    </span>
                  </summary>
                  <p className="px-5 pb-5 -mt-1 text-[0.93rem] leading-relaxed text-muted">{f.a}</p>
                </details>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
