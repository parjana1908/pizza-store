import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" 
const firebaseConfig = {
  apiKey: "AIzaSyAk4c-tf3l2E9t0C2CAth1uWOYjARxrq4A",
  authDomain: "pizza-291d6.firebaseapp.com",
  projectId: "pizza-291d6",
  storageBucket: "pizza-291d6.firebasestorage.app",
  messagingSenderId: "722911488339",
  appId: "1:722911488339:web:a6b54f4362ab60e30019a6",
  measurementId: "G-LLLHJZB1XN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth