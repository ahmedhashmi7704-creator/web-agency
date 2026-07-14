import { useState } from 'react'
import { projects } from '../data/work.js'
import PageHero from '../components/PageHero.jsx'

const filters = ['All', 'Brand + Web', 'Product UX', 'Growth', 'Brand Strategy', 'App', 'Content']

export default function Work() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Case studies, not portfolios."
        lead="A sample of the brand, product, and growth engagements we've shipped for founders and marketing teams who needed results, not just deliverables."
      />
      <section className="section">
        <div className="container">
          <div className="filter-row">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-chip ${filter === f ? 'is-active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="work-grid work-grid--full">
            {shown.map((p) => (
              <div className="work-card" key={p.slug}>
                <div className="work-card__media">
                  <img src={p.image} alt={`${p.name} project preview`} loading="lazy" />
                </div>
                <div className="work-card__body">
                  <span className="work-card__category">{p.category} · {p.year}</span>
                  <h3>{p.name}</h3>
                  <p>{p.blurb}</p>
                  <div className="tag-row">
                    {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
