import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvlZ4FekCHdvwbsStiPB-G9DP97jflnNg",
  authDomain: "react-firebase-ebb5d.firebaseapp.com",
  projectId: "react-firebase-ebb5d",
  storageBucket: "react-firebase-ebb5d.appspot.com",
  messagingSenderId: "979236241989",
  appId: "1:979236241989:web:9730b721f7a367096e592c",
  measurementId: "G-HFRJKYHVEW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
