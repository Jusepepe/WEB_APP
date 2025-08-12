import { useUserStore } from "../../store/userStore";
import { getDateAndHour } from "../services/getDateAndHour";
import { getS3Images, getS3Detections } from "../services/s3Objects";

export function useS3() {
    const { tracePath, type, day, selectedEvent, setImages, setDetections } = useUserStore()
    const [date, hour] = getDateAndHour(day!, selectedEvent)


    const refreshS3Images = () => {
        getS3Images(type, tracePath, date, hour).then(images => {
            setImages(images)
        })
    }

    const refreshS3Detections = () => {
        getS3Detections(tracePath, date, hour).then(detections => {
            setDetections(detections)
        })
    }

    return {
        refreshS3Images,
        refreshS3Detections
    }

}
