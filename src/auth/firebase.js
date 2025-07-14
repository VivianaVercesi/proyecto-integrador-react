// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

// Configuración del proyecto Firebase
const firebaseConfig = {
   apiKey: "AIzaSyBV9QaCR7zTwC7JgftEPXVYhzsX1JG7cgk",
  authDomain: "e-commerce-d0b9a.firebaseapp.com",
  projectId: "e-commerce-d0b9a",
  storageBucket: "e-commerce-d0b9a.firebasestorage.app",
  messagingSenderId: "519978888680",
  appId: "1:519978888680:web:21debb8091de427d32885d",
  measurementId: "G-3YHFEXFHG4"
};

// Initializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// Inicializar Firestore
const db = getFirestore(app); //Este es el acceso a la base de datos

// Función para crear usuarios
export function createUser(email, password ) {
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        console.log("Credenciales", userCredential)
        return userCredential.user;
        console.log(user)
        // ...
    })
    .catch((error) => {
        console.error("Error al crear usuario:", error.code, error.message);
        throw error;
        // ..
    });
}
 
// Función para iniciar sesión
export function loginEmailPass(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential.user)
    .catch((error) => {
      if (error.code === "auth/user-not-found") {
        throw new Error("El usuario no está registrado.");
      } else if (error.code === "auth/wrong-password") {
        throw new Error("La contraseña es incorrecta.");
      } else if (error.code === "auth/invalid-credential") {
        throw new Error("Credenciales inválidas. Verificá email y contraseña.");
      } else {
        throw new Error("Error al iniciar sesión: " + error.message);
      }
    });
}

   
export { db, collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc };