// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import  firebase  from "firebase/compat/app";
import 'firebase/compat/firestore'

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBrIZmgH0blHB8XDPtG7YbQj5aiL4uM0v0",
  authDomain: "project4-14-10-22.firebaseapp.com",
  projectId: "project4-14-10-22",
  storageBucket: "project4-14-10-22.appspot.com",
  messagingSenderId: "259400317425",
  appId: "1:259400317425:web:098990cf43027465112c50",
  measurementId: "G-Q0YMLY5ZBG"
});

const db = firebaseConfig.firestore()
export { db }