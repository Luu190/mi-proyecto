// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaQjNSHrKH53uuLpVn5cSLk5-KyhVvtug",
  authDomain: "mi-proyecto-react-52faa.firebaseapp.com",
  projectId: "mi-proyecto-react-52faa",
  storageBucket: "mi-proyecto-react-52faa.firebasestorage.app",
  messagingSenderId: "138106756232",
  appId: "1:138106756232:web:83b1ae4cf5a9bfb096533d",
  measurementId: "G-LHKF1S3SLD"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Servicios principales
export const auth = getAuth(app);
export const db = getFirestore(app);

// Google provider
const provider = new GoogleAuthProvider();

// Función login con Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user; 
  } catch (error) {
    console.error("Error en Google Auth:", error);
    throw error;
  }
};

export default app;
