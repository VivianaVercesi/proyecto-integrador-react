// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB3FkNKRJ2-yjOzP52MtpTYDZ05Zt7oXQ",
  authDomain: "pruebaauth-c4b03.firebaseapp.com",
  projectId: "pruebaauth-c4b03",
  storageBucket: "pruebaauth-c4b03.firebasestorage.app",
  messagingSenderId: "778599847752",
  appId: "1:778599847752:web:cf7f0a8e6af0d3a078057d",
  measurementId: "G-L1YD8Y54GY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

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

   
