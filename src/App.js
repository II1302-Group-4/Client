import './style.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PresentValue from './pages/PresentValue'
import AboutPage from './pages/AboutPage'
import HowToPage from './pages/HowToPage'
import { useSelector } from 'react-redux'
import { isLoaded } from "react-redux-firebase"

const App = () => {

  const loggedIn = useSelector(state => !(state.firebase.auth.isEmpty) && state.firebase.auth.uid)

  function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth);
    if (!isLoaded(auth)) return <div></div>;
    return children;
  }

  if (!loggedIn) {
    return (
      <AuthIsLoaded>

        <div className="fillWindow">
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/monitor" element={<Navigate to="/" />} />
              <Route path="/about" element={<Navigate to="/" />} />
              <Route path="/how-to" element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AuthIsLoaded>

    )
  }

  if (loggedIn) {
    return (
      <AuthIsLoaded>

        <div className="fillWindow">
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Navigate to="/monitor" />} />
              <Route exact path="/monitor" element={<PresentValue />} />
              <Route exact path="/about" element={<AboutPage />} />
              <Route exact path="/how-to" element={<HowToPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AuthIsLoaded>

    )
  }
}

export default App