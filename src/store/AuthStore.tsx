import { create } from "zustand";
import { persist } from "zustand/middleware";

interface typeStore {
  isAuthenticated: boolean;
  user: any;
  login: (user: any) => void;
  clearAuth: () => void;
}

const useAuthStore = create<typeStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: !!user }),
      clearAuth: () => set({ user: null, isAuthenticated: false }), // Ensure token is cleared as a string
    }),
    {
      name: "auth-storage", // Key for localStorage
    }
  )
);

export default useAuthStore;
