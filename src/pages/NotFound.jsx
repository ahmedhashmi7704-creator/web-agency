import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center', padding: '10rem 0' }}>
      <div className="container">
        <p className="eyebrow" style={{ justifyContent: 'center' }}>404</p>
        <h1 className="section__title">That page doesn&rsquo;t exist.</h1>
        <p className="section__body" style={{ margin: '1rem auto 2rem' }}>
          Double-check the link, or head back to the homepage.
        </p>
        <Link to="/" className="btn btn--primary">Back home</Link>
      </div>
    </section>
  )
}
