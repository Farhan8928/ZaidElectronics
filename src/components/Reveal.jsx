import { motion } from 'framer-motion'

/**
 * Scroll-reveal wrapper — one shared entrance animation so every block reveals
 * with the same timing. `once` keeps it firing only on first entry.
 */
const EASE = [0.22, 0.61, 0.36, 1]

export default function Reveal({ children, delay = 0, y = 22, className, ...rest }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/**
 * Section header in the "job ticket" voice: a monospace numbered label, a big
 * Space Grotesk title, and an optional lead line. `num` prints the section
 * index (e.g. "01 / OUR SERVICES") — a running industrial motif down the page.
 */
export function SectionHeading({ num, eyebrow, title, lead, center = false, invert = false }) {
  return (
    <div className={`max-w-[720px] ${center ? 'mx-auto text-center' : ''}`}>
      <Reveal>
        <p className={`label ${invert ? 'text-yellow' : ''}`}>
          {num && <span className={invert ? 'text-paper/50' : 'text-ink/50'}>[ {num} ]</span>}
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.07}>
        <h2 className={`display-xl mt-4 ${invert ? 'text-paper' : 'text-ink'}`}>{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.14}>
          <p className={`mt-4 text-[1.02rem] ${invert ? 'text-paper/70' : 'text-muted'}`}>{lead}</p>
        </Reveal>
      )}
    </div>
  )
}
