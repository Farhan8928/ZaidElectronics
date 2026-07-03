import { BRANDS } from '../data.js'

export default function Brands() {
  const row = [...BRANDS, ...BRANDS]
  return (
    <section className="ticker" aria-label="Brands we repair">
      <div className="ticker__track">
        {row.map((b, i) => (
          <span className="ticker__item" key={`${b}-${i}`}>
            {b} <span aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
    </section>
  )
}
