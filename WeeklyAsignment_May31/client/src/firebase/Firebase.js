import { initializeApp } from "firebase/app";
import {getFiredtore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDTphsA35rmgUnR3HRbcnXo5AA2LYOV4gM",
  authDomain: "weekly-assignment-cloundinary.firebaseapp.com",
  projectId: "weekly-assignment-cloundinary",
  storageBucket: "weekly-assignment-cloundinary.appspot.com",
  messagingSenderId: "417023804655",
  appId: "1:417023804655:web:09ea5800e48c8e0200871a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFiredtore(app);