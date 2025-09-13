import { useUserStore } from "../../store/userStore";
import { useTimelineStore } from "../../store/timelineStore";
import { useEffect } from "react";
import { getHoursbyDate } from "../services/s3Objects";
import { formatDateAndHour } from "../services/getDateAndHour";
import type { TimelineEvent } from "../types";

export function useDay({change}: {change: number}) {
    const { day, setDay, setSelectedEvent } = useUserStore(store => ({day: store.day, setDay: store.setDay, setSelectedEvent: store.setSelectedEvent}))  
    const { setTimeEvents } = useTimelineStore(store => ({setTimeEvents: store.setTimeEvents}))

    useEffect(() => {
        if(day === null) {
            setDay(new Date())
        }

        getHoursbyDate(formatDateAndHour(day!, "-1")[0]).then(hours => {
            let timelineEvents: TimelineEvent[] = []
            hours.forEach((hour: string) => {
                timelineEvents.push({
                    time: `${hour.split("_")[0] } ${hour.split("_")[1]}`,
                    color: "bg-gray-400"
                })
            })
            console.log(timelineEvents)
            setTimeEvents(timelineEvents)
        })
    }, [day])

    if(day === null) {
        return {
            handleDayButtonClick: () => {},
            display: {
                date: 0,
                day: 0
            }
        }
    }

    const date = new Date(day)
    date.setDate(date.getDate() + change)

    const display = {
        date: date.getDate(),
        day: date.getDay()
    }

    const handleDayButtonClick = async () => {
        setDay(date)
        setSelectedEvent("-1")
    }

    return {
        handleDayButtonClick,
        display
    }
}
