// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2pz4uY0yktH1Io9hP1V5LWJpACvQx4ZY",
  authDomain: "ciccc-cloudinary.firebaseapp.com",
  projectId: "ciccc-cloudinary",
  storageBucket: "ciccc-cloudinary.appspot.com",
  messagingSenderId: "491592532518",
  appId: "1:491592532518:web:739f1d13380e60524c9ce7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);