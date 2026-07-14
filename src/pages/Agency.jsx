import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const values = [
  { title: 'Senior on every project', body: 'The strategists and designers you meet in the first call are the ones doing the work in week six.' },
  { title: 'Evidence over opinion', body: 'Research and data set direction. Taste refines it — it doesn\u2019t replace it.' },
  { title: 'Ship, then iterate', body: 'We favor a working version in market over a perfect one in a deck.' },
  { title: 'Plain-language reporting', body: 'You get straight answers about what worked, what didn\u2019t, and why.' },
]

const process = [
  { phase: 'Discover', detail: 'Research, stakeholder interviews, and a clear brief everyone agrees on before design starts.' },
  { phase: 'Design', detail: 'Strategy translated into identity, product, or campaign concepts, tested before they\u2019re built.' },
  { phase: 'Build', detail: 'Engineering and production against the agreed scope, with weekly visibility into progress.' },
  { phase: 'Grow', detail: 'Launch, measure, and iterate — the work doesn\u2019t stop at hand-off.' },
]

export default function Agency() {
  return (
    <>
      <PageHero
        eyebrow="Agency"
        title="A small studio built to do senior-level work at every stage."
        lead="Northlane Digital is an independent agency working across brand strategy, creative production, digital growth, and product design and engineering."
      />

      <section className="section">
        <div className="container two-col">
          <div>
            <p className="eyebrow">How we work</p>
            <h2 className="section__title">No account layers between you and the work.</h2>
            <p className="section__body">
              Most agencies sell you senior strategists in the pitch and hand you a junior team afterward.
              We keep engagements small on purpose — the people scoping your project are the same people
              writing the copy, shipping the code, and reporting the results.
            </p>
            <p className="section__body">
              That means fewer clients at a time, but faster decisions, tighter feedback loops, and work
              that reflects nine years of pattern-matching across categories, not a template.
            </p>
          </div>
          <div className="stat-block">
            <div><strong>9+</strong><span>years in market</span></div>
            <div><strong>40+</strong><span>brands shipped</span></div>
            <div><strong>5</strong><span>core disciplines</span></div>
            <div><strong>24h</strong><span>typical response time</span></div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <p className="eyebrow">What we believe</p>
          <h2 className="section__title">Principles we hold ourselves to</h2>
          <div className="value-grid">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Process</p>
          <h2 className="section__title">How an engagement runs</h2>
          <div className="process-row">
            {process.map((step, i) => (
              <div className="process-step" key={step.phase}>
                <span className="process-step__index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{step.phase}</h3>
                <p>{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-band">
          <h2>Curious if we&rsquo;re a fit?</h2>
          <p>Most engagements start with a short discovery call — no deck, no pressure.</p>
          <Link to="/work" className="btn btn--primary">See the work first</Link>
        </div>
      </section>
    </>
  )
}
