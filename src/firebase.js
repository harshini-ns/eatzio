// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2EqK28V8GuyAiY4Z7MTP0nP6j1okIWIU",
    authDomain: "eatzio.firebaseapp.com",
    projectId: "eatzio",
    storageBucket: "eatzio.appspot.com",
    messagingSenderId: "298863057538",
    appId: "1:298863057538:web:245797f0d5f34226cfb29b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);