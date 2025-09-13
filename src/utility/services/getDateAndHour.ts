//Getting date and hour in format 2025-06-05 15:00 PM
import { timeline } from "../consts"

export function formatDateAndHour(day: Date, selectedEvent: string) {
    if(day === null) {
        return ["", ""]
    }
    const date = day
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const dayNumber = String(date.getDate()).padStart(2, '0')
    const [hourAndMinute, ampm] = selectedEvent.split(" ")
    return [`${year}-${month}-${dayNumber}`, `${hourAndMinute}_${ampm}`]
}


