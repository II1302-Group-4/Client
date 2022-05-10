import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4DZ4nGUWqOx7pMtYIMQid-H-7TBpeqSo",
  authDomain: "pollusense-3c51b.firebaseapp.com",
  projectId: "pollusense-3c51b",
  storageBucket: "pollusense-3c51b.appspot.com",
  messagingSenderId: "514369000464",
  appId: "1:514369000464:web:3070202934e8915f13e695"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;