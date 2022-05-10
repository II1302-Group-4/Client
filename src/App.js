import './style.css'
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PresentValue from './pages/PresentValue'
import AboutPage from './pages/AboutPage'
import HowToPage from './pages/HowToPage'
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'

const App = () => {

  const loggedIn = useSelector(state => state.firebase.auth.uid)

  function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth);
    if (!isLoaded(auth)) return <div></div>;
    return children;
  }

    return (
      <AuthIsLoaded>
        <div className="fillWindow">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            {loggedIn?
              <>
              <Route path="/monitor" element={<PresentValue />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/how-to" element={<HowToPage />} />
              </>
              :
              <></>
            }
            
          </Routes>
        </BrowserRouter>
        </div>
      </AuthIsLoaded>
    )
  
  }

export default App
