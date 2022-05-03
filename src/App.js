import './style.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PresentValue from './pages/PresentValue'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/data" element={<PresentValue />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
