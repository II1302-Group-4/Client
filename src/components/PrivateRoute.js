import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
import {getAuth, onAuthStateChanged} from "firebase/auth";


// const PrivateRoute = ({ children }) => {
//   const loggedIn = useSelector(state => !(state.firebase.auth.isEmpty))

//   if (!loggedIn) {
//     return <Navigate to="/" replace />;
//   }
//   return children;
// };

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated or if auth is not
// yet loaded
// const PrivateRoute = () => {
//   // TODO: Not working, you can still access the not accessible locations
// //   const auth = useSelector(state => state.firebase.auth.uid);
// //   console.log(auth.uid)
//   //const loggedIn = isLoaded(auth) && !isEmpty(auth);

//   const auth = getAuth();
//   let loggedIn = onAuthStateChanged(auth, (user) => {
//       if (user) {
//           return true;
//       } else {
//           return false;
//       }
//   })

  
//   return loggedIn? <Outlet/> : <Navigate to="/" />;
// }

const PrivateRoute = () => {
  const auth = useSelector(state => !(state.firebase.auth.isEmpty))

  return auth? <Outlet/> : <Navigate to="/" />;
}

export default PrivateRoute;