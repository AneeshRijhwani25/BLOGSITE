// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "vit-blog-8d458.firebaseapp.com",
  projectId: "vit-blog-8d458",
  storageBucket: "vit-blog-8d458.appspot.com",
  messagingSenderId: "376668612241",
  appId: "1:376668612241:web:86267f2989df2529864130"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);