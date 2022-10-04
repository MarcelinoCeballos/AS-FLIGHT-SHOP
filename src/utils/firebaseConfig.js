// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB07ygiy2H4suQ08omD4-uw8AB5pRDt8jQ",
  authDomain: "as-flight-shop.firebaseapp.com",
  projectId: "as-flight-shop",
  storageBucket: "as-flight-shop.appspot.com",
  messagingSenderId: "1006600458322",
  appId: "1:1006600458322:web:dde379a48a93fa9f728f8b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
