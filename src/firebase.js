
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
import { getFirestore,doc,getDoc} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCQRRTQX1QAndtAkkU6vfgsZhP8_qbusrM",
    authDomain: "chatapp-74b8c.firebaseapp.com",
    projectId: "chatapp-74b8c",
    storageBucket: "chatapp-74b8c.appspot.com",
    messagingSenderId: "462828430061",
    appId: "1:462828430061:web:224921c73396200a6562e4"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

