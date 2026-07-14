import { useParams, Link, Navigate } from 'react-router-dom'
import { getCategory } from '../data/services.js'
import PageHero from '../components/PageHero.jsx'

export default function CategoryPage() {
  const { category } = useParams()
  const cat = getCategory(category)
  if (!cat) return <Navigate to="/404" replace />

  return (
    <>
      <PageHero eyebrow={cat.nav} title={cat.tagline} lead={cat.intro} accent={cat.color} />
      <section className="section">
        <div className="container">
          <div className="service-list">
            {cat.services.map((s) => (
              <Link to={`/${cat.slug}/${s.slug}`} key={s.slug} className="service-row">
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <span className="service-row__arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container cta-band">
          <h2>Ready to talk {cat.nav.toLowerCase()}?</h2>
          <p>Tell us about the problem you&rsquo;re solving and we&rsquo;ll tell you how we&rsquo;d approach it.</p>
          <Link to="/agency" className="btn btn--primary">Talk to the studio</Link>
        </div>
      </section>
    </>
  )
}
