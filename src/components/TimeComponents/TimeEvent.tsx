export function TimeEvent({ time, color, image, index, selected, setSelected }: { time: string, color: string, image: string, index: number, selected: boolean, setSelected: (num: string) => void }) {
    return (
    <li className={`flex flex-row items-center justify-start gap-2 rounded-xl hover:cursor-pointer hover:scale-105 transition-all duration-200 hover:bg-gray-100 origin-left p-2 ${selected ? 'bg-gray-100' : ''}`} onClick={() => setSelected(time)}>
        <button className={`h-1 w-1 ${color} rounded-full ${selected ? 'bg-gray-900' : ''}`}>
        </button>
        <img className="w-[128px] h-[72px] rounded-lg aspect-[16/9]" src={image} alt={`Slide ${index + 1}`} />
        <div>
            <h1 className="text-black font-semibold text-sm">{time}</h1>
            <p className="text-gray-400 text-xs">Premade Trace</p>
        </div>
    </li>
    )
}