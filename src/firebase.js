// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAedQAptjzUcoCFbqLDxFwgElo40QZ7AD4",
  authDomain: "react-app-c3fd2.firebaseapp.com",
  projectId: "react-app-c3fd2",
  storageBucket: "react-app-c3fd2.appspot.com",
  messagingSenderId: "439022792313",
  appId: "1:439022792313:web:720775d54b2717a0792ea8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
