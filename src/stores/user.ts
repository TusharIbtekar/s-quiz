import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: string;
  email: string;
  password: string;
  role: string;
};

type State = {
  users: User[];
  currentUser: User | null;
};

const initialState: State = {
  users: [
    {
      id: "1",
      email: "role@user.com",
      role: "user",
      password: "password",
    },
    {
      id: "2",
      email: "role@admin.com",
      role: "admin",
      password: "password",
    },
  ],
  currentUser: null,
};

type Action = {
  // signIn: (email: string, password: string) => void;
  signOut: () => void;
  saveUser: (user: User) => void;
};

export const useAuthStore = create<State & Action>()(
  persist(
    (set) => ({
      ...initialState,
      saveUser: (user) => {
        set({ currentUser: user });
      },
      signOut: () => {
        set({ currentUser: null });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
