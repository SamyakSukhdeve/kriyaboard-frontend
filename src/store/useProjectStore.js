import { db } from "@/config/firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { create } from "zustand";
import useAuthStore from "./useAuthStore";

const useProjectStore = create((set) => ({
  projects: [],
  isLoading: false,

  addProject: async (data) => {
    set({ isLoading: true });
    try {
      const { user } = useAuthStore.getState();

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
    await onSnapshot(collection(db, "projects"), (data) => {
      const project = data.docs.map((p) => ({ id: p.id, ...p.data() }));
      set({ projects: project });
    });
  },
}));

export default useProjectStore;
