import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDOLG4iVF7pWk7eY3g7oHGUZjO1IZsmIxQ",
  authDomain: "portfolio-7e0ed.firebaseapp.com",
  projectId: "portfolio-7e0ed",
  storageBucket: "portfolio-7e0ed.appspot.com",
  messagingSenderId: "536110470738",
  appId: "1:536110470738:web:3a8ca55830532fafdeb18b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
