import { TimeEvent } from "./TimeEvent.tsx";
import { useUserStore } from "../../store/userStore.tsx";
import { useEffect } from "react";
import { useTimelineStore } from "../../store/timelineStore.tsx";
import { getThumbnailUrl } from "../../utility/s3";
import { formatDateAndHour } from "../../utility/services/getDateAndHour";

export function Timeline() {
    const { day, setSelectedEvent , selectedEvent } = useUserStore(store => ({day: store.day, setSelectedEvent: store.setSelectedEvent, selectedEvent: store.selectedEvent}))
    const { timeEvents } = useTimelineStore(store => ({timeEvents: store.timeEvents}))

    const handleClick = (hour: string) => {
        setSelectedEvent(selectedEvent === hour ? "-1" : hour)
    }

    useEffect(() => {
        setSelectedEvent("-1")
    }, [day])
    
    return (
        <ul className="flex flex-col gap-2 h-full overflow-y-auto overflow-x-clip no-scrollbar">
            {timeEvents.map((item, index) => {
                const [date, hour] = formatDateAndHour(day!, item.time)
                return (
                    <TimeEvent key={index} {...item} image={getThumbnailUrl(date, hour)} index={index} selected={selectedEvent === item.time} setSelected={handleClick}/>
                )
            })}
        </ul>
    )
}