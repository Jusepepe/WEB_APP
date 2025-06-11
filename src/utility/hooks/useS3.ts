import { useUserStore } from "../../store/userStore";
import { getDateAndHour } from "../services/getDateAndHour";
import { getS3Objects } from "../services/s3Objects";

export function useS3() {
    const { tracePath, type, day, selectedEvent, setObjects } = useUserStore()
    const [date, hour] = getDateAndHour(day, selectedEvent)


    const refreshS3Objects = () => {
        getS3Objects(type, tracePath, date, hour).then(objects => {
            setObjects(objects)
        })
    }

    return {
        refreshS3Objects
    }

}
