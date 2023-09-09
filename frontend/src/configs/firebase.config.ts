// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANTdL1gszPiOL1qnawusMQjgusEO6jzOI",
  authDomain: "receip-de570.firebaseapp.com",
  projectId: "receip-de570",
  storageBucket: "receip-de570.appspot.com",
  messagingSenderId: "1087454334428",
  appId: "1:1087454334428:web:8066aea5e12801d0621319",
  measurementId: "G-5JD1EXSW2S",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
