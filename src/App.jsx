import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import DatasetSection from './components/DatasetSection'
import VisualBreakdownSection from './components/VisualBreakdownSection'
import FeaturesDatasetSection from './components/FeaturesDatasetSection'
import HeatmapSection from './components/HeatmapSection'
import PatternsSection from './components/PatternsSection'
import TrainingSection from './components/TrainingSection'
import TestingResultsSection from './components/TestingResultsSection'
import ScannerSection from './components/ScannerSection'
import SummarySection from './components/SummarySection'
import LimitationsSection from './components/LimitationsSection'
import AboutPage from './pages/AboutPage'
import ReviewsPage from './pages/ReviewsPage'
import FAQPage from './pages/FAQPage'
import SponsorshipsPage from './pages/SponsorshipsPage'

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
      <DatasetSection />
      <VisualBreakdownSection />
      <FeaturesDatasetSection />
      <HeatmapSection />
      <PatternsSection />
      <TrainingSection />
      <TestingResultsSection />
      <ScannerSection />
      <SummarySection />
      <LimitationsSection />
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
          <Route path="/faq"          element={<FAQPage />} />
          <Route path="/sponsorships" element={<SponsorshipsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
