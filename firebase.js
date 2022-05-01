// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABkbjQxf5KX1k5CiOVVT6h5RpDb_Snx2A",
  authDomain: "exifly-website.firebaseapp.com",
  projectId: "exifly-website",
  storageBucket: "exifly-website.appspot.com",
  messagingSenderId: "437751560482",
  appId: "1:437751560482:web:d77bf347e31ce294560d7b",
  measurementId: "G-0T4G9ZYZ6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);