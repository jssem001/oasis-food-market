// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAyIw_zftebCQk_aMfby_27N6bo3igYfk",
  authDomain: "oasis-fm.firebaseapp.com",
  projectId: "oasis-fm",
  storageBucket: "oasis-fm.appspot.com",
  messagingSenderId: "38203015355",
  appId: "1:38203015355:web:213b19c6a6b8e0daa6a99e",
  measurementId: "G-10XRB4VNRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)