// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcRJ8smWgw8s07Letn1apKSxgH7b_kmLE",
  authDomain: "grocery-store-85346.firebaseapp.com",
  projectId: "grocery-store-85346",
  storageBucket: "grocery-store-85346.appspot.com",
  messagingSenderId: "1073452178758",
  appId: "1:1073452178758:web:a8517d788fa9d54601d947",
  measurementId: "G-N5JSLX4D8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
