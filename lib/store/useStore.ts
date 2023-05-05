import { create } from "zustand";

interface StoreInterface {
    heroScroll: any;
    setHeroScroll: (a:any) => void
}

export const useStore = create<StoreInterface>(set => ({
    heroScroll: {},
    setHeroScroll: (a:any) => set(({heroScroll}:any) => ({
        heroScroll: a,
    }))
}))