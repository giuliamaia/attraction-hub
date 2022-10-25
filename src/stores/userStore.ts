import create from "zustand";
import { User } from 'firebase/auth';

type UserState = {
    user: User;
    setUser: (user: User) => void;
}

export const UseUserStore = create<UserState>((set) => ({
    user: {} as User,
    setUser: (user: User) => set(() => ({ user: user }))
}));