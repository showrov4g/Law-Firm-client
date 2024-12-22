// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwrn0NcwUCzOdttzpdm5SH-xthnLfkhgg",
  authDomain: "assignment11-495e5.firebaseapp.com",
  projectId: "assignment11-495e5",
  storageBucket: "assignment11-495e5.firebasestorage.app",
  messagingSenderId: "414287410860",
  appId: "1:414287410860:web:75e47ddd689c57645f5109",
  measurementId: "G-MWEYJW82EG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);