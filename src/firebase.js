import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAsev7n7A12fykM96RI7yhcTLhiraABOd8",
    authDomain: "todo-app-23b4a.firebaseapp.com",
    projectId: "todo-app-23b4a",
    storageBucket: "todo-app-23b4a.firebasestorage.app",
    messagingSenderId: "587816876445",
    appId: "1:587816876445:web:128641611e96c548475774",
    measurementId: "G-MPMQ4EK8GP"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
