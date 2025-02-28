import { create } from "zustand";
import { StoreApi, UseBoundStore } from 'zustand'

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
) => {
  let store = _store as WithSelectors<typeof _store>
  store.use = {}
  for (let k of Object.keys(store.getState())) {
    ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
  }

  return store
}

type CurrentUserProps = {
  firstname: string;
  lastname: string;
  id: string;
  email: string;
  setId: (id: string) => void;
  setFirstname: (firtsname: string) => void;
  setLastname: (lastname: string) => void;
}

export const userCurrentUserStore = createSelectors(create<CurrentUserProps>((set) => ({
  id: '',
  firstname: '',
  lastname: '',
  email: '',
  setId: (id: string) => set(() => ({ id: id })),
  setFirstname: (firstname: string) => set(() => ({ firstname: firstname })),
  setLastname: (lastname: string) => set(() => ({ lastname: lastname}))
})))

