const dayNames = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

export function DayButton({ changeDay, selected, day, change }: { changeDay: (num: number) => void, selected: boolean, day: Date, change: number }) {
    const date = new Date(day)
    date.setDate(date.getDate() + change)
    const displayDate = date.getDate()
    const displayDay = date.getDay()


    return (
        <button onClick={() => changeDay(change)} class={`flex flex-col items-center justify-center p-0 rounded-lg min-w-12 h-12 hover:cursor-pointer ${selected ? 'bg-black hover:bg-black' : 'hover:bg-gray-100'}`}>
            <p class={`text-gray-400 font-semibold text-sm ${selected ? 'text-white' : ''}`}>{dayNames[displayDay]}</p>
            <p class={`text-black font-semibold text-md ${selected ? 'text-white' : ''}`}>{displayDate}</p>
        </button>
    )
}