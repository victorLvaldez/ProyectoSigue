
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore" 
const GLOBAL = require('../app.config')


const firebaseConfig = {
    apiKey: "AIzaSyAML8Q2ZwFPAOKffW1kVfHi1q2a176ekvg",
    authDomain: "proyectosigueapp.firebaseapp.com",
    projectId: "proyectosigueapp",
    storageBucket: "proyectosigueapp.appspot.com",
    messagingSenderId: "283332517535",
    appId: "1:283332517535:web:790f4105d00a7554794caa",
    measurementId: "G-5TZQ5SKMML"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();