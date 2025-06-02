import create from "zustand";

interface State {
    tracePath: number;
    index: number;
    day: Date;
}

interface Actions{
    setSelectedTrace: (tracePath: number) => void;
    setEventSelected: (index: number) => void;
    setDay: (day: Date) => void;
}

export const useUserStore = create<State & Actions>((set) => ({
    tracePath: 0,
    index: -1,
    day: new Date(),
    setSelectedTrace: (tracePath: number) => set({ tracePath: tracePath }),
    setEventSelected: (index: number) => set({ index: index }),
    setDay: (day: Date) => set({ day: day }),
}))
