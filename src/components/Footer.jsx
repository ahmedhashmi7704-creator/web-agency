import { Link } from 'react-router-dom'
import { categories } from '../data/services.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Link to="/" className="site-logo">
            <span className="site-logo__mark">W</span>
            <span className="site-logo__word">Web Agency</span>
          </Link>
          <p>Strategy, design, and growth — under one senior team.</p>
          <a href="mailto:hello@webagency.com" className="site-footer__email">hello@webagency.com</a>
        </div>

        {categories.map((cat) => (
          <div key={cat.slug} className="site-footer__col">
            <h4><Link to={`/${cat.slug}`}>{cat.nav}</Link></h4>
            <ul>
              {cat.services.map((s) => (
                <li key={s.slug}><Link to={`/${cat.slug}/${s.slug}`}>{s.title}</Link></li>
              ))}
            </ul>
          </div>
        ))}

        <div className="site-footer__col">
          <h4>Studio</h4>
          <ul>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/agency">Agency</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} Web Agency. All rights reserved.</p>
        <div className="site-footer__social">
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="X / Twitter">X</a>
          <a href="#" aria-label="LinkedIn">LI</a>
        </div>
      </div>
    </footer>
  )
}
