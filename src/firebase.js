import { initializeApp } from "firebase/app";
import {  getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "dev-paul-d5e92.firebaseapp.com",
  projectId: "dev-paul-d5e92",
  storageBucket: "dev-paul-d5e92.appspot.com",
  messagingSenderId: "903254457481",
  appId: "1:903254457481:web:a44f743daa695758b61a58",
  measurementId: "G-1ECLTD2WRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


