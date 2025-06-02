export function TimeEvent({ time, color, image, index, selected, setSelected }: { time: string, color: string, image: string, index: number, selected: boolean, setSelected: (num: number) => void }) {
    return (
    <li class={`flex flex-row items-center justify-start gap-2 rounded-lg hover:cursor-pointer hover:scale-105 transition-all duration-200 hover:bg-gray-100 p-2 ${selected ? 'bg-gray-100' : ''}`} onClick={() => setSelected(index)}>
        <button class={`h-3 w-3 ${color} rounded-full ${selected ? 'bg-gray-900' : ''}`}>
        </button>
        <img class="w-28 h-20 rounded-lg" src={image} alt={`Slide ${index + 1}`} />
        <div>
            <h1 class="text-black font-semibold text-sm">{time}</h1>
            <p class="text-gray-400 text-xs">Premade Trace</p>
        </div>
    </li>
    )
}