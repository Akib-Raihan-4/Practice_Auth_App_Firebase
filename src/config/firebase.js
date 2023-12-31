import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, FacebookAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCDkAoaR2vd56R6VpR_WmpYQTGr8ujR8c0",
  authDomain: "prac-auth-2a69f.firebaseapp.com",
  projectId: "prac-auth-2a69f",
  storageBucket: "prac-auth-2a69f.appspot.com",
  messagingSenderId: "787529243323",
  appId: "1:787529243323:web:add8a922daecb84e99a79e",
  measurementId: "G-QTCZ3N4Q7J"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const fbProvider = new FacebookAuthProvider()

export const db = getFirestore(app)