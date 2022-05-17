import './style.css'
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PresentValue from './pages/PresentValue'
import AboutPage from './pages/AboutPage'
import HowToPage from './pages/HowToPage'
import { useSelector } from 'react-redux'
import { firebaseConnect, isLoaded } from 'react-redux-firebase'
import {getAuth, onAuthStateChanged} from "firebase/auth";

const App = () => {

  const loggedIn = useSelector(state => !(state.firebase.auth.isEmpty))

  const ProtectedRoute = ({ children }) => {
    if (!loggedIn) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

    return (
        <div className="fillWindow">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            {loggedIn?
              <>
              <Route path="/monitor" element={<PresentValue />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/guide" element={<HowToPage />} />
              </>
              :
              <></>
            }
            
          </Routes>
        </BrowserRouter>
        </div>
    )
  
  // }

    // return (
    //   <>
    //     <div className="fillWindow">
    //       <BrowserRouter>
    //         <Routes>
    //             <Route exact path="/" element={<LandingPage />} />
    //             <Route path="/monitor" element={
    //                 <ProtectedRoute>
    //                   <PresentValue />
    //                 </ProtectedRoute>
    //               }/>
    //             <Route path="/about" element={<AboutPage />} />
    //             <Route path="/how-to" element={<HowToPage />} />
    //           </Routes>
    //         </BrowserRouter>
    //       </div>
    //   </>
    // )
  }

export default App