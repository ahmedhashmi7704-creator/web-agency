import { Link } from 'react-router-dom'
import HeroField from '../components/HeroField.jsx'
import Marquee from '../components/Marquee.jsx'
import { categories } from '../data/services.js'
import { projects } from '../data/work.js'

const words = ['Strategy.', 'Design.', 'Engineering.', 'Growth.']

export default function Home() {
  return (
    <>
      <section className="hero">
        <HeroField />
        <div className="container hero__inner">
          <p className="eyebrow">Northlane Digital — Est. 2018</p>
          <h1 className="hero__title">
            We build brands<br />that <span className="hero__accent">perform</span>,<br />not just brands<br />that look good.
          </h1>
          <div className="hero__words" aria-hidden="true">
            {words.map((w) => <span key={w}>{w}</span>)}
          </div>
          <p className="hero__sub">
            A senior, full-stack digital agency: brand strategy, web development, and growth
            marketing under one roof. No account layers, no juniors — the people who pitch
            you are the people who do the work.
          </p>
          <div className="hero__actions">
            <Link to="/work" className="btn btn--primary">See our work</Link>
            <Link to="/agency" className="btn btn--ghost">Meet the studio</Link>
          </div>
        </div>
      </section>

      <Marquee />

      <section className="section">
        <div className="container">
          <p className="eyebrow">What we do</p>
          <h2 className="section__title">Five disciplines. One accountable team.</h2>
          <div className="pillar-grid">
            {categories.map((cat) => (
              <Link to={`/${cat.slug}`} key={cat.slug} className="pillar-card" style={{ '--accent': cat.color }}>
                <h3>{cat.title}</h3>
                <p>{cat.tagline}</p>
                <ul>
                  {cat.services.map((s) => <li key={s.slug}>{s.title}</li>)}
                </ul>
                <span className="pillar-card__arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__head">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="section__title">Recent engagements</h2>
            </div>
            <Link to="/work" className="btn btn--ghost">View all work</Link>
          </div>
          <div className="work-grid">
            {projects.slice(0, 3).map((p) => (
              <div className="work-card" key={p.slug}>
                <div className="work-card__media">
                  <img src={p.image} alt={`${p.name} project preview`} loading="lazy" />
                </div>
                <div className="work-card__body">
                  <span className="work-card__category">{p.category} · {p.year}</span>
                  <h3>{p.name}</h3>
                  <p>{p.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-band">
          <h2>Have a project worth doing right?</h2>
          <p>Tell us where you are and where you want to be. We&rsquo;ll tell you honestly whether we&rsquo;re the right fit.</p>
          <Link to="/agency" className="btn btn--primary">Start a conversation</Link>
        </div>
      </section>
    </>
  )
}
