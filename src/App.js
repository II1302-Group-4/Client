import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'

//test
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />

        {/* example page route
        <Route path="/user" element={<UserPage/>} /> */}

      </Routes>

    </BrowserRouter>

  )
}

export default App