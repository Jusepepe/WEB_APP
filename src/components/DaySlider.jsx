import { useState } from "preact/hooks";

const dayNames = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

export function DaySlider() {   
    const [day, setDay] = useState(new Date())
    let yesterday = new Date(day)
    yesterday.setDate(yesterday.getDate() - 1)
    let tomorrow = new Date(day)
    tomorrow.setDate(tomorrow.getDate() + 1)
    
    function changeDay(num) {
        setDay(new Date(day.setDate(day.getDate() + num)))
    }
    
    return (
        <div>
            <h1 class="text-gray-300 font-semibold text-xl">{monthNames[day.getMonth()]}</h1>
            <div class="flex flex-row bg-gray-800 rounded-lg">
                <button onclick={() => changeDay(-1)} class="hover:cursor-pointer hover:bg-blue-500 p-2 rounded-lg transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                </button>
                <button onclick={() => changeDay(-1)} class={`flex flex-col items-center p-2 rounded-lg hover:bg-blue-500 w-24 hover:cursor-pointer`}>
                    <p class={`text-gray-300 font-semibold text-md`}>{dayNames[yesterday.getDay()]}</p>
                    <p class={`text-black font-semibold text-md`}>{yesterday.getDate()}</p>
                </button>
                <button onclick={() => changeDay(0)} class={`flex flex-col items-center bg-gray-900 p-2 rounded-lg hover:bg-blue-500 w-24 hover:cursor-pointer`}>
                    <p class={`text-white font-semibold text-md`}>{dayNames[day.getDay()]}</p>
                    <p class={`text-gray-300 font-semibold text-md`}>{day.getDate()}</p>
                </button>
                <button onclick={() => changeDay(1)} class={`flex flex-col items-center p-2 rounded-lg hover:bg-blue-500 w-24 hover:cursor-pointer`}>
                    <p class={`text-gray-300 font-semibold text-md`}>{dayNames[tomorrow.getDay()]}</p>
                    <p class={`text-black font-semibold text-md`}>{tomorrow.getDate()}</p>
                </button>
                <button onclick={() => changeDay(1)} class="hover:cursor-pointer hover:bg-blue-500 p-2 rounded-lg transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    )
}