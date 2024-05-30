import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVre1NJjWElrOKkXJjmfPdln6BQB4D2kM",
  authDomain: "entrega-final-gomez-perotti.firebaseapp.com",
  projectId: "entrega-final-gomez-perotti",
  storageBucket: "entrega-final-gomez-perotti.appspot.com",
  messagingSenderId: "823813247465",
  appId: "1:823813247465:web:dab323a4acd19b3b25bb78"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
