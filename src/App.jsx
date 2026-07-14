import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import Agency from './pages/Agency.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import ServicePage from './pages/ServicePage.jsx'
import Blog from './pages/Blog.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/agency" element={<Agency />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/:category/:service" element={<ServicePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
