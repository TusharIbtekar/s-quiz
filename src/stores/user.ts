import { create } from "zustand";

type User = {
  id: string;
  email: string;
  password: string;
  role: string;
};
type State = { users: User[] };

type Action = {};
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
};

export const useUserStore = create<State & Action>(() => ({
  ...initialState,
}));
