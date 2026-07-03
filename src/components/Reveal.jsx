import { motion } from 'framer-motion'

/**
 * Scroll-reveal wrapper.
 *
 * A single place for the site's entrance animation so every section shares
 * the same easing and timing. `viewport.once` keeps it firing only on first
 * entry — re-animating on every scroll-past reads as noise, not polish.
 */
const EASE = [0.22, 0.61, 0.36, 1]

export default function Reveal({ children, delay = 0, y = 24, className, ...rest }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/**
 * Shared section header (eyebrow + title + optional lead paragraph).
 * `center` and `invert` cover the two layouts used across the page so no
 * section re-implements this markup.
 */
export function SectionHeading({ eyebrow, title, lead, center = false, invert = false }) {
  return (
    <div className={`max-w-[680px] ${center ? 'mx-auto text-center' : ''}`}>
      <Reveal>
        <span className={`eyebrow ${invert ? 'eyebrow--invert' : ''}`}>{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.07}>
        <h2 className={`display-xl mt-4 ${invert ? 'text-white' : ''}`}>{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.14}>
          <p className={`mt-3.5 text-[1.02rem] ${invert ? 'text-white/75' : 'text-muted'}`}>
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  )
}
