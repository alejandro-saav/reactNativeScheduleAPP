// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAgljjdaweiB9iXtZbwdcJ6yKI9OoyNDAM",
  authDomain: "reactnativescheduleapp.firebaseapp.com",
  projectId: "reactnativescheduleapp",
  storageBucket: "reactnativescheduleapp.appspot.com",
  messagingSenderId: "513886389890",
  appId: "1:513886389890:web:3020cc60ca30a7f806d69b",
  measurementId: "G-0Z2K7QLW8R",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export default app;
