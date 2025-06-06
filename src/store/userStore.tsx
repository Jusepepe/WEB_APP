import create from "zustand";

interface State {
    tracePath: number;
    selectedEvent: number;
    day: Date;
}

interface Actions{
    setSelectedTrace: (tracePath: number) => void;
    setSelectedEvent: (index: number) => void;
    setDay: (day: Date) => void;
}

export const useUserStore = create<State & Actions>((set) => ({
    tracePath: -1,
    selectedEvent: -1,
    day: new Date(),
    setSelectedTrace: (tracePath: number) => set({ tracePath: tracePath }),
    setSelectedEvent: (index: number) => set({ selectedEvent: index }),
    setDay: (day: Date) => set({ day: day }),
}))
