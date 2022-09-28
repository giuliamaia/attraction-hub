import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {  getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDPrmZ48YmU0KathoTz1CyCVODfaVBZY9s",
  authDomain: "attractionhub.firebaseapp.com",
  projectId: "attractionhub",
  storageBucket: "attractionhub.appspot.com",
  messagingSenderId: "136348923366",
  appId: "1:136348923366:web:d19f7f0ae8f31946fdd227"
});

export const auth = getAuth(firebaseApp);

export const db = getFirestore(firebaseApp);