import { useState } from 'react'
import { Plus } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal, { SectionHeading } from './Reveal.jsx'
import { FAQS, waLink } from '../data.js'

function FaqItem({ item, open, onToggle, index }) {
  return (
    <Reveal delay={index * 0.04}>
      <div className={`faq__item ${open ? 'faq__item--open' : ''}`}>
        <button
          className="faq__q"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-panel-${index}`}
        >
          <span className="faq__index">Q.{index + 1}</span>
          <span className="faq__text">{item.q}</span>
          <Plus size={18} className="faq__plus" aria-hidden="true" />
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={`faq-panel-${index}`}
              className="faq__a"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <p>{item.a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section className="section" id="faq">
      <div className="container faq__wrap">
        <div className="faq__side">
          <SectionHeading
            index="06"
            eyebrow="Questions"
            title={
              <>
                Asked at the counter, <em>daily</em>
              </>
            }
          />
          <Reveal delay={0.1}>
            <p className="faq__more">
              Something else on your mind?{' '}
              <a
                href={waLink('Hi Zaid Electronics! I have a question about my TV.')}
                target="_blank"
                rel="noreferrer"
              >
                Ask on WhatsApp
              </a>{' '}
              — we reply fast during shop hours.
            </p>
          </Reveal>
        </div>

        <div className="faq">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
