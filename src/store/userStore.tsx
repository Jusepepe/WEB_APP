import create from "zustand";
import type { Data, Detections } from "../utility/types";

interface State {
    tracePath: number;
    selectedEvent: string;
    day: Date | null;
    type: string;
    images: Data;
    detections: Detections;
}

interface Actions{
    setSelectedTrace: (tracePath: number) => void;
    setSelectedEvent: (index: string) => void;
    setDay: (day: Date) => void;
    setType: (type: string) => void;
    setImages: (images: Data) => void;
    setDetections: (detections: Detections) => void;
}

export const useUserStore = create<State & Actions>((set) => ({
    tracePath: -1,
    selectedEvent: "-1",
    day: null,
    type: "processed",
    images: [],
    detections: [],
    setSelectedTrace: (tracePath: number) => set({ tracePath: tracePath }),
    setSelectedEvent: (index: string) => set({ selectedEvent: index }),
    setDay: (day: Date) => set({ day: day }),
    setType: (type: string) => set({ type: type }),
    setImages: (images: Data) => set({ images: images }),
    setDetections: (detections: Detections) => set({ detections: detections }),
}))
