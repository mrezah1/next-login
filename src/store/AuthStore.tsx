import { create } from "zustand";
import { persist } from "zustand/middleware";

interface typeStore {
  isAuthenticated: boolean;
  user: any;
  token: string;
  setUser: (user: any) => void;
  setToken: (token: string) => void;
  login: (token: string, user: any) => void;
  clearAuth: () => void;
}

const useAuthStore = create<typeStore>()(
  persist(
    (set) => ({
      user: null,
      token: "",
      isAuthenticated: false,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      login: (user, token) => set({ token, user, isAuthenticated: !!user }),
      clearAuth: () => set({ user: null, token: "", isAuthenticated: false }), // Ensure token is cleared as a string
    }),
    {
      name: "auth-storage", // Key for localStorage
    }
  )
);

export default useAuthStore;
