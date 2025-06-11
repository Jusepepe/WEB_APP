import { useUserStore } from "../store/userStore";
import { useChangeDay } from "../utility/changeDay";

const dayNames = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

type DayButtonProps = {
    selected: boolean,
    change: number
}

export function DayButton({ selected, change }: DayButtonProps) {

    const { day } = useUserStore()
    const changeDay = useChangeDay()
    
    const date = new Date(day)
    date.setDate(date.getDate() + change)
    const display = {
        date: date.getDate(),
        day: date.getDay()
    }

    const handleClick = () => {
        changeDay(change)
    }

    return (
        <button onClick={handleClick} className={`flex flex-col items-center justify-center p-0 rounded-lg min-w-12 h-12 hover:cursor-pointer ${selected ? 'bg-black hover:bg-black' : 'hover:bg-gray-100'}`}>
            <p className={`text-gray-400 font-semibold text-sm ${selected ? 'text-white' : ''}`}>{dayNames[display.day]}</p>
            <p className={`text-black font-semibold text-md ${selected ? 'text-white' : ''}`}>{display.date}</p>
        </button>
    )
}