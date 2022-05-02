// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBr4wdrMZQY9EgmXybeUKRtDWiPxnEUCJA",
  authDomain: "resume-maker-c35bd.firebaseapp.com",
  projectId: "resume-maker-c35bd",
  storageBucket: "resume-maker-c35bd.appspot.com",
  messagingSenderId: "181859682589",
  appId: "1:181859682589:web:1c27b1dea8a84a3e69b9f4",
  measurementId: "G-68HQY7YW84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);