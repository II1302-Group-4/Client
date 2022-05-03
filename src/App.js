import './style.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import PresentDataPage from './pages/PresentDataPage'
import LandingPage from './pages/LandingPage'
import PresentValue from './pages/PresentValue'
import TaskBar from './components/TaskBar'


<img src="PolluSense-logos_black.png" alt=" Ye"/>


const App = () => {
  return (
    <BrowserRouter>
    
      <TaskBar />
      <PresentValue />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/presentdata" element={<PresentDataPage />} />
        <Route path="/currentvalue" element={<PresentValue />} />
        {/* example page route
        <Route path="/user" element={<UserPage/>} /> */}

      </Routes>
      
    </BrowserRouter>

  )
}

export default App
