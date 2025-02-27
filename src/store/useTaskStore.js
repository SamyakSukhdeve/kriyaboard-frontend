import { create } from "zustand";

import { db } from "@/config/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

const useTaskStore = create((set) => ({
  isLoading: false,
  tasks: [],

  createTask: async (taskData) => {
    set({ isLoading: true });
    try {
      const taskCollection = collection(db, "tasks");
      const taskDoc = await addDoc(taskCollection, taskData);
      console.log(taskDoc);
      set({ isLoading: false });
    } catch (error) {
      console.log(error);
      set({ isLoading: false });
    }
  },

  getAllTask: async () => {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    const tasks = querySnapshot.docs.map((t) => ({ id: t.id, ...t.data() }));
    return tasks;
  },
}));

export default useTaskStore;
