
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore" 
const GLOBAL = require('../app.config')


const firebaseConfig = {
    apiKey: GLOBAL.default.extra.apiKey,
    authDomain: GLOBAL.default.extra.authDomain,
    projectId: GLOBAL.default.extra.projectId,
    storageBucket: GLOBAL.default.extra.storageBucket,
    messagingSenderId: GLOBAL.default.extra.messagingSenderId,
    appId: GLOBAL.default.extra.appId,
    measurementId: GLOBAL.default.extra.measurementId
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();