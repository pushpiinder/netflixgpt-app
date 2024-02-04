// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuwP6bd9YrFbt_jcch4OoMYWJauWKQr0U",
  authDomain: "netflixgpt-9da86.firebaseapp.com",
  projectId: "netflixgpt-9da86",
  storageBucket: "netflixgpt-9da86.appspot.com",
  messagingSenderId: "302548752212",
  appId: "1:302548752212:web:00789b98f21478a4f01ac1",
  measurementId: "G-P4Z81KM0J7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
