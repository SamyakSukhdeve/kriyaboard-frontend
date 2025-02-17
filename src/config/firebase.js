import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDExn-R-0fZ8ad54pcLF0QBiHO-PHXzm5M",
  authDomain: "kanban-8bd0d.firebaseapp.com",
  projectId: "kanban-8bd0d",
  storageBucket: "kanban-8bd0d.firebasestorage.app",
  messagingSenderId: "123546179392",
  appId: "1:123546179392:web:09c50ccdaf91f0aa4f8ca5",
  measurementId: "G-ET0RF73GYY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
