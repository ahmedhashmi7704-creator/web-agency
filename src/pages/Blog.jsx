import PageHero from '../components/PageHero.jsx'

const posts = [
  {
    title: 'Why most rebrands fail before design even starts',
    excerpt: 'The problem is rarely the logo. It\u2019s skipping the positioning work that should happen first.',
    date: 'Jun 2026',
    category: 'Brand Strategy',
  },
  {
    title: 'A simpler way to prioritize your CRO backlog',
    excerpt: 'A two-axis framework for deciding which tests are actually worth running next quarter.',
    date: 'May 2026',
    category: 'Analytics & ROI',
  },
  {
    title: 'What actually moves organic rankings in 2026',
    excerpt: 'Less about keyword density, more about demonstrable expertise and technical fundamentals.',
    date: 'Apr 2026',
    category: 'Digital Growth',
  },
  {
    title: 'Design systems that survive contact with real engineers',
    excerpt: 'The handoff gap between Figma and production is where most systems quietly die.',
    date: 'Mar 2026',
    category: 'Tech & UX',
  },
  {
    title: 'A short framework for briefing video production',
    excerpt: 'The three questions that separate a usable creative brief from a wish list.',
    date: 'Feb 2026',
    category: 'Creative & Innovation',
  },
]

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes from the studio."
        lead="Field notes on strategy, design, and growth — written from the inside of real client work, not theory."
      />
      <section className="section">
        <div className="container blog-list">
          {posts.map((p) => (
            <article className="blog-card" key={p.title}>
              <span className="blog-card__meta">{p.category} · {p.date}</span>
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
