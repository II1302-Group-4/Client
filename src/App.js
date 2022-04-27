import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import PresentDataPage from './pages/PresentDataPage'
import LandingPage from './pages/LandingPage'
import TaskBar from './components/TaskBar'


const App = () => {
  return (
    <BrowserRouter>
      <TaskBar />

      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/presentdata" element={<PresentDataPage />} />
        <Route path="/landing" element={<LandingPage/>} />
        {/* example page route
        <Route path="/user" element={<UserPage/>} /> */}

      </Routes>

    </BrowserRouter>

  )
}

export default App
