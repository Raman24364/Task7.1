import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5AYxFTBvQVXB0CdiIyflnbrWH1dDHsqc",
  authDomain: "react-project-6ecf8.firebaseapp.com",
  projectId: "react-project-6ecf8",
  storageBucket: "react-project-6ecf8.appspot.com",
  messagingSenderId: "984285540790",
  appId: "1:984285540790:web:5fccbabb6ffcabcf741117",
  measurementId: "G-VSJ4KX5LF6"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);
export {auth, db} ;


