import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 26, className, ...rest }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ index, eyebrow, title, lead, invert = false }) {
  return (
    <div className={`sec-head ${invert ? 'sec-head--invert' : ''}`}>
      <Reveal>
        <p className="sec-head__label">
          <span className="sec-head__index">({index})</span> {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="sec-head__title">{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.16}>
          <p className="sec-head__lead">{lead}</p>
        </Reveal>
      )}
    </div>
  )
}
