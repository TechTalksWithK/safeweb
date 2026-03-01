import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutPage from './pages/AboutPage'
import ReviewsPage from './pages/ReviewsPage'
import StudiesPage from './pages/StudiesPage'
import FAQPage from './pages/FAQPage'
import SponsorshipsPage from './pages/SponsorshipsPage'
import BlogTrainingAndTestingModelsPage from './pages/BlogTrainingAndTestingModelsPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function HomePage() {
  return (
    <>
      <HeroSection />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans relative">

        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/"             element={<HomePage />} />
          <Route path="/about-us"     element={<AboutPage />} />
          <Route path="/reviews"      element={<ReviewsPage />} />
          <Route path="/studies"      element={<StudiesPage />} />
          <Route path="/faq"          element={<FAQPage />} />
          <Route path="/sponsorships" element={<SponsorshipsPage />} />
          <Route
            path="/blog/training-and-testing-the-models"
            element={<BlogTrainingAndTestingModelsPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
