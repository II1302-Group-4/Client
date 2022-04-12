import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import PresentDataPage from './pages/PresentDataPage'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
          <Route exact path="/presentdata" element={<PresentDataPage/>}/>

        {/* example page route
        <Route path="/user" element={<UserPage/>} /> */}

      </Routes>

    </BrowserRouter>

  )
}

export default App
