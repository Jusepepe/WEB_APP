import { useUserStore } from "../../store/userStore";
import { getDateAndHour } from "../services/getDateAndHour";
import { getS3Images } from "../services/s3Objects";

export function useS3() {
    const { tracePath, type, day, selectedEvent, setImages } = useUserStore()
    const [date, hour] = getDateAndHour(day!, selectedEvent)


    const refreshS3Images = () => {
        getS3Images(type, tracePath, date, hour).then(images => {
            setImages(images)
        })
    }

    return {
        refreshS3Images
    }

}
