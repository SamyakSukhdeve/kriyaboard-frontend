import { db } from "@/config/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  where,
  query,
  or,
} from "firebase/firestore";
import { create } from "zustand";
import useAuthStore from "./useAuthStore";

const { user } = useAuthStore.getState();

const useProjectStore = create((set) => ({
  projects: [],
  isLoading: false,

  addProject: async (data) => {
    set({ isLoading: true });
    try {
      const projectRef = await addDoc(collection(db, "projects"), {
        projectName: data.projectName,
        createdBy: user.id,
        members: data.members,
        createdAt: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "2-digit",
        }),
      });
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      console.log(error);
    }
  },

  getAllProject: async () => {
    const projectCollectionRef = collection(db, "projects");
    const q = query(
      projectCollectionRef,
      or(
        where("createdBy", "==", user?.id),
        where("members", "array-contains", user?.id)
      )
    );

    try {
      await onSnapshot(q, (data) => {
        const projects = data.docs.map((p) => ({ id: p.id, ...p.data() }));
        set({ projects: projects });
      });
    } catch (error) {
      console.log("Error setting up snapshot listener:", error);
    }
  },
}));

export default useProjectStore;
