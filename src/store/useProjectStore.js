import { db } from "@/config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { create } from "zustand";

const useProjectStore = create((set) => ({
  users: [],
  getAllUsers: async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = querySnapshot.docs.map((u) => ({ id: u.id, ...u.data() }));
    set({ users: users });
    return users;
  },
}));

export default useProjectStore;
