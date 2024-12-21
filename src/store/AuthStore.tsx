import { create } from "zustand";

interface UserState {
  username: string;
  isAuth: boolean;
  login: (username: string) => void;
  logout: () => void;
}

const useAuthStore = create<UserState>((set) => ({
  username: "",
  isAuth: false,
  login: (username) =>
    set({
      username,
      isAuth: true,
    }),
  logout: () =>
    set({
      username: "",
      isAuth: false,
    }),
}));

export default useAuthStore;
