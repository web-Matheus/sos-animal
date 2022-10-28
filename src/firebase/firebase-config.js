// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQp_H16CLiPMyFLtBEzhvUxbzYjl7fnH8",
  authDomain: "sosanimais-d9fee.firebaseapp.com",
  projectId: "sosanimais-d9fee",
  storageBucket: "sosanimais-d9fee.appspot.com",
  messagingSenderId: "2843302268",
  appId: "1:2843302268:web:666292eae86305ea5facf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
