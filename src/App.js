import './style.css'
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PresentValue from './pages/PresentValue'
import AboutPage from './pages/AboutPage'
import HowToPage from './pages/HowToPage'
import { useSelector } from 'react-redux'
import PrivateRoute from './components/PrivateRoute'

const App = () => {

  // const loggedIn = useSelector(state => !(state.firebase.auth.isEmpty))

  // const ProtectedRoute = ({ children }) => {
  //   if (!loggedIn) {
  //     return <Navigate to="/" replace />;
  //   }
  //   return children;
  // };

  return (
    <div className="fillWindow">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />}/>
        <Route exact path="/monitor" element={<PrivateRoute/>}>
          <Route exact path="/monitor" element={<PresentValue />} />
        </Route>
        <Route exact path="/about" element={<PrivateRoute/>}>
          <Route exact path="/about" element={<AboutPage />} />
        </Route>
        <Route exact path="/how-to" element={<PrivateRoute/>}>
          <Route exact path="/how-to" element={<HowToPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
)

    // return (
    //     <div className="fillWindow">
    //     <BrowserRouter>
    //       <Routes>
    //         <Route exact path="/" element={<LandingPage />} />
    //         {loggedIn?
    //           <>
    //           <Route path="/monitor" element={<PresentValue />} />
    //           <Route path="/about" element={<AboutPage />} />
    //           <Route path="/how-to" element={<HowToPage />} />
    //           </>
    //           : 
    //           <></>
    //         }
    //       </Routes>
    //     </BrowserRouter>
    //     </div>
    // )
  
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