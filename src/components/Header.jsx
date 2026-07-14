import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { categories } from '../data/services.js'
import ContactModal from './ContactModal.jsx'

const staticLinks = [
  { to: '/work', label: 'Work' },
  { to: '/agency', label: 'Agency' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openSub, setOpenSub] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="site-header__bar container">
          <Link to="/" className="site-logo" onClick={() => setMenuOpen(false)} aria-label="Web Agency — Home">
            <span className="site-logo__mark">W</span>
            <span className="site-logo__word">Web Agency</span>
          </Link>

          <button className="cta-pill" onClick={() => setContactOpen(true)}>Let&rsquo;s Talk</button>

          <button
            className={`burger ${menuOpen ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`nav-overlay ${menuOpen ? 'is-open' : ''}`}>
        <nav className="nav-overlay__list container">
          <ul>
            {staticLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} onClick={() => setMenuOpen(false)}>{l.label}</NavLink>
              </li>
            ))}
            {categories.map((cat) => (
              <li key={cat.slug} className={openSub === cat.slug ? 'is-open' : ''}>
                <div className="nav-overlay__row">
                  <NavLink to={`/${cat.slug}`} onClick={() => setMenuOpen(false)}>{cat.nav}</NavLink>
                  <button
                    className="nav-overlay__toggle"
                    aria-label={`Toggle ${cat.nav} submenu`}
                    onClick={() => setOpenSub(openSub === cat.slug ? null : cat.slug)}
                  >
                    {openSub === cat.slug ? '–' : '+'}
                  </button>
                </div>
                <ul className="nav-overlay__sub">
                  {cat.services.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/${cat.slug}/${s.slug}`} onClick={() => setMenuOpen(false)}>{s.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li>
              <NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink>
            </li>
          </ul>

          <div className="nav-overlay__contact">
            <p className="eyebrow">Working worldwide</p>
            <a href="mailto:hello@webagency.com">hello@webagency.com</a>
          </div>
        </nav>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}
