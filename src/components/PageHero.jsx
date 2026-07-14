export default function PageHero({ eyebrow, title, lead, accent }) {
  return (
    <section className="page-hero" style={accent ? { '--accent': accent } : undefined}>
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {lead && <p className="page-hero__lead">{lead}</p>}
      </div>
    </section>
  )
}
