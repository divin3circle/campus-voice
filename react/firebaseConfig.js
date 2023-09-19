// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3K_Xfd91BkrT8waI_AYRGB65gdJdVCPQ",
  authDomain: "campus-vote-9d9f7.firebaseapp.com",
  projectId: "campus-vote-9d9f7",
  storageBucket: "campus-vote-9d9f7.appspot.com",
  messagingSenderId: "340298967101",
  appId: "1:340298967101:web:b4dad63d170aaeb8956254",
  measurementId: "G-M6KHNQ30BX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
