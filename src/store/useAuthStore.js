import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { create } from "zustand";
import { auth, githubProvider, googleProvider } from "../config/firebase";
import { db } from "../config/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,

  signUpWithGoogle: async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
      const userData = {
        displayName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      try {
        const userCollection = collection(db, "users");
        const userDocRef = doc(userCollection, result.user.email);
        await setDoc(userDocRef, userData, { merge: true });
        console.log("User data saved to Firestore");
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  },
  signUpWithGitHub: async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const userData = {
        displayName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      try {
        const userCollection = collection(db, "users");
        const userDocRef = doc(userCollection, result.user.email);
        await setDoc(userDocRef, userData, { merge: true });
        console.log("User data saved to Firestore");
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  },

  logout: async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
    } catch (error) {
      console.log(error);
    }
  },
  setUser: (user) => set({ user }),
}));

onAuthStateChanged(auth, (user) => {
  if (user) {
    useAuthStore.getState().setUser({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    });
  } else {
    useAuthStore.getState().setUser(null);
  }
});

export default useAuthStore;


// "iYRxZ3rv4XZU0jWRd4j6OSSNl763"