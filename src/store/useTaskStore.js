import { create } from "zustand";

import { db } from "@/config/firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

const useTaskStore = create((set) => ({
  isLoading: false,
  tasks: [],

  createTask: async (taskData, projectId) => {
    set({ isLoading: true });

    try {
      const taskCollection = collection(db, "tasks");
      const taskDoc = await addDoc(taskCollection, {
        task: taskData.task,
        createdAt: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "2-digit",
        }),
        priority: taskData.priority,
        dueDate: new Date(taskData.dueDate).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "2-digit",
        }),
        status: "To Do",
        assignTo: JSON.parse(taskData.assignTo),
        projectId: projectId,
      });
      console.log(taskDoc);
      set({ isLoading: false });
    } catch (error) {
      console.log(error);
      set({ isLoading: false });
    }
  },

  getAllTask: async () => {
    await onSnapshot(collection(db, "tasks"), (data) => {
      const tasks = data.docs.map((t) => ({ id: t.id, ...t.data() }));
      set({ tasks: tasks });
    });
  },
}));

export default useTaskStore;
