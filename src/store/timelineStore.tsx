import create from "zustand";
import type { TimelineEvent } from "../utility/types";

interface State {
    timeEvents: TimelineEvent[];
}

interface Actions {
    setTimeEvents: (timeEvents: TimelineEvent[]) => void;
}

export const useTimelineStore = create<State & Actions>((set) => ({
    timeEvents: [],
    setTimeEvents: (timeEvents: TimelineEvent[]) => set({ timeEvents: timeEvents }),
}))
