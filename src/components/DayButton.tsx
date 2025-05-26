const dayNames = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

export function DayButton({ changeDay, selected, day, change }: { changeDay: (num: number) => void, selected: boolean, day: Date, change: number }) {
    const date = new Date(day)
    date.setDate(date.getDate() + change)
    const displayDate = date.getDate()
    const displayDay = date.getDay()


    return (
        <button onClick={() => changeDay(change)} class={`flex flex-col items-center p-2 rounded-lg hover:bg-blue-500 min-w-16 hover:cursor-pointer ${selected ? 'bg-gray-900' : ''}`}>
            <p class={`text-gray-300 font-semibold text-md ${selected ? 'text-white' : ''}`}>{dayNames[displayDay]}</p>
            <p class={`text-black font-semibold text-md ${selected ? 'text-gray-300' : ''}`}>{displayDate}</p>
        </button>
    )
}