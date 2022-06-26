// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { firebase } from "firebase";




const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyA4Y_4IcMfloG8QMybuSPNs8dheQ6eSk5A",
  authDomain: "project1-45036.firebaseapp.com",
  projectId: "project1-45036",
  storageBucket: "project1-45036.appspot.com",
  messagingSenderId: "951904266009",
  appId: "1:951904266009:web:24833f4946802e85198788",
  measurementId: "G-JYGPW7NYRW"
});

const db = firebaseConfig.firebaseshore()
export { db }