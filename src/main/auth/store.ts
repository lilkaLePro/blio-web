import { create } from "zustand";

type CurrentUserProps = {
  firstname: string;
  lastname: string;
  id: string;
  email: string;
  setId: (id: string) => void;
  setFirstname: (firtsname: string) => void;
  setLastname: (lastname: string) => void;
}

export const userCurrentUserStore = create<CurrentUserProps>((set) => ({
  id: '',
  firstname: '',
  lastname: '',
  email: '',
  setId: (id: string) => set(() => ({ id: id })),
  setFirstname: (firstname: string) => set(() => ({ firstname: firstname })),
  setLastname: (lastname: string) => set(() => ({ lastname: lastname}))
}));

