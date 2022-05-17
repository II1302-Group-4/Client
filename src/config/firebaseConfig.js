import firebase from "firebase/compat/app";
import "firebase/compat/auth";

let firebaseConfig;

if (process.env.NODE_ENV === "development") {
    firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID 
  };
} else {
    firebaseConfig = {
    apiKey: process.env.APPSETTING_REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.APPSETTING_REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.APPSETTING_REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.APPSETTING_REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.APPSETTING_REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.APPSETTING_REACT_APP_FIREBASE_APP_ID 
  };
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;