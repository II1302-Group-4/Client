import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Component from './components/Component'
import ExampleComponents from './components/ExampleComponents'

const App = () => {


  return (
    <BrowserRouter>
      <Routes >
        <Route exact path="/" element={<Component />} />
        <Route path="/test" element={<ExampleComponents />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App