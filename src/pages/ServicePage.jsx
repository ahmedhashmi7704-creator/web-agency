import { useParams, Link, Navigate } from 'react-router-dom'
import { getService } from '../data/services.js'
import PageHero from '../components/PageHero.jsx'

export default function ServicePage() {
  const { category, service } = useParams()
  const svc = getService(category, service)
  if (!svc) return <Navigate to="/404" replace />

  const siblings = svc.category.services.filter((s) => s.slug !== svc.slug)

  return (
    <>
      <PageHero eyebrow={svc.category.nav} title={svc.title} lead={svc.summary} accent={svc.category.color} />
      <section className="section">
        <div className="container two-col">
          <div>
            {svc.body.map((p, i) => <p className="section__body" key={i}>{p}</p>)}
            <Link to="/agency" className="btn btn--primary" style={{ marginTop: '1.5rem' }}>Start a project</Link>
          </div>
          <div className="side-card">
            <h4>Also in {svc.category.nav}</h4>
            <ul>
              {siblings.map((s) => (
                <li key={s.slug}><Link to={`/${svc.category.slug}/${s.slug}`}>{s.title}</Link></li>
              ))}
            </ul>
            <Link to={`/${svc.category.slug}`} className="side-card__back">← Back to {svc.category.nav}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
