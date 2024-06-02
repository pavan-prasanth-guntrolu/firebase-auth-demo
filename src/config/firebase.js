import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiF4l4EvXCXSMKqG4m2glF14iGNSCjF7w",
  authDomain: "fir-course-71f2a.firebaseapp.com",
  projectId: "fir-course-71f2a",
  storageBucket: "fir-course-71f2a.appspot.com",
  messagingSenderId: "506697137414",
  appId: "1:506697137414:web:588de3e5de63f7952e3287",
  measurementId: "G-7Q23VDB9Z4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
