// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC1DadIIQ7Srak0ejCemLf6i5n4kGFO7xg",
  authDomain: "login-resume-system.firebaseapp.com",
  projectId: "login-resume-system",
  storageBucket: "login-resume-system.appspot.com",
  messagingSenderId: "267060851838",
  appId: "1:267060851838:web:bd5f2d9923a1fb16fa142f",
  measurementId: "G-3D7E36HFCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);