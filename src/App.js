import './style.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PresentValue from './pages/PresentValue'
import AboutPage from './pages/AboutPage'
import HowToPage from './pages/HowToPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/monitor" element={<PresentValue />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/how-to" element={<HowToPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
