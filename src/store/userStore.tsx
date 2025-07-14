import create from "zustand";
import type { Data } from "../utility/types";

interface State {
    tracePath: number;
    selectedEvent: number;
    day: Date | null;
    type: string;
    images: Data;
}

interface Actions{
    setSelectedTrace: (tracePath: number) => void;
    setSelectedEvent: (index: number) => void;
    setDay: (day: Date) => void;
    setType: (type: string) => void;
    setImages: (images: Data) => void;
}

export const useUserStore = create<State & Actions>((set) => ({
    tracePath: -1,
    selectedEvent: -1,
    day: null,
    type: "processed",
    images: [],
    setSelectedTrace: (tracePath: number) => set({ tracePath: tracePath }),
    setSelectedEvent: (index: number) => set({ selectedEvent: index }),
    setDay: (day: Date) => set({ day: day }),
    setType: (type: string) => set({ type: type }),
    setImages: (images: Data) => set({ images: images }),
}))
