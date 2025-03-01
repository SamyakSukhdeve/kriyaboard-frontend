import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { create } from "zustand";
import { auth, githubProvider, googleProvider } from "../config/firebase";
import { db } from "../config/firebase";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  users: [],

  getAllUsers: async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = querySnapshot.docs.map((u) => ({ id: u.id, ...u.data() }));
    set({ users: users });
  },

  signUpWithGoogle: async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
      const userData = {
        id: result.user.uid,
        displayName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      try {
        const userCollection = collection(db, "users");
        const userDocRef = doc(userCollection, result.user.uid);
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
        id: result.user.uid,
        displayName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      try {
        const userCollection = collection(db, "users");
        const userDocRef = doc(userCollection, result.user.uid);
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
      id: user.uid,
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
