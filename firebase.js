// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwWYoAmsYCE5H1ryLGjds6riySmrgjQ_4",
  authDomain: "pantryapp-a57c4.firebaseapp.com",
  projectId: "pantryapp-a57c4",
  storageBucket: "pantryapp-a57c4.appspot.com",
  messagingSenderId: "892264347327",
  appId: "1:892264347327:web:869052eabf05ef966d780a",
  measurementId: "G-J5P2EZZEFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {app, firestore} 

