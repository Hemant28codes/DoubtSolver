/* eslint-disable prettier/prettier */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAUAxib0PtrLxsB_Iih3MwnjywsNayEfgI",
    authDomain: "instagram-cdbaf.firebaseapp.com",
    projectId: "instagram-cdbaf",
    storageBucket: "instagram-cdbaf.appspot.com",
    messagingSenderId: "653947709768",
    appId: "1:653947709768:web:341e3c98190cb0b61bab7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};