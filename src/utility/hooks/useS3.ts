import { useEffect } from "react";
import { useUserStore } from "../../store/userStore";
import { formatDateAndHour } from "../services/getDateAndHour";
import { getS3Images, getS3Detections } from "../services/s3Objects";

export function useS3() {
    const { type, tracePath, day, selectedEvent, setImages, setDetections } = useUserStore(store => ({
        type: store.type,
        tracePath: store.tracePath,
        day: store.day,
        selectedEvent: store.selectedEvent,
        setImages: store.setImages,
        setDetections: store.setDetections
    }))

    const refreshS3Images = () => {
        const [date, hour] = formatDateAndHour(day!, selectedEvent)
        getS3Images(type, tracePath, date, hour).then(images => {
            setImages(images)
        })
    }

    const refreshS3Detections = (tracePath: number, date: string, hour: string) => {
        getS3Detections(tracePath, date, hour).then(detections => {
            setDetections(detections)
        })
    }

    useEffect(() => {
        if(day === null || selectedEvent === "-1") {
            return
        }
        refreshS3Images()
    }, [type, tracePath, selectedEvent])

}
