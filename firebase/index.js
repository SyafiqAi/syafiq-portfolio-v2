// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNMZ9yGrQ2qy8mgLpGJppeWo3b7v74jnM",
  authDomain: "syafiq-aiman.firebaseapp.com",
  projectId: "syafiq-aiman",
  storageBucket: "syafiq-aiman.appspot.com",
  messagingSenderId: "730730426982",
  appId: "1:730730426982:web:37886366e76f908a76f3a7",
  measurementId: "G-WL35V7FTDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const analytics = getAnalytics(app);
