//Getting date and hour in format 2025-06-05 15:00 PM
import { timeline } from "../consts"

export function getDateAndHour(day: Date, selectedEvent: number) {
    return selectedEvent === -1 ? formatDateAndHour(day, 0) : formatDateAndHour(day, selectedEvent)
}

function formatDateAndHour(day: Date, selectedEvent: number) {
    if(day === null) {
        return ["", ""]
    }
    const date = day
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const dayNumber = String(date.getDate()).padStart(2, '0')
    const [hours, ampm] = timeline[selectedEvent].time.split(" ")
    const minutes = "00"
    const formattedHours = ampm === "PM" ? String(Number(hours)+12) : String(Number(hours))
    return [`${year}-${month}-${dayNumber}`, `${formattedHours}:${minutes}_${ampm}`]
}


