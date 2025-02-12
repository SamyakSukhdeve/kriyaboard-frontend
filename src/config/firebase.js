import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app);
