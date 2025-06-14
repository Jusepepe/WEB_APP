import { useUserStore } from "../../store/userStore";
import { useEffect } from "react";

export function useDay({change}: {change: number}) {
    const { day, setDay, setSelectedEvent } = useUserStore(store => ({day: store.day, setDay: store.setDay, setSelectedEvent: store.setSelectedEvent}))  

    useEffect(() => {
        if(day === null) {
            setDay(new Date())
        }
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

    const handleDayButtonClick = () => {
        setDay(date)
        setSelectedEvent(-1)
    }

    return {
        handleDayButtonClick,
        display
    }
}
