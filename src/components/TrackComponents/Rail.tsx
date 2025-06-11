export function Rail({selected}: {selected: number}) {
    return (
        <div className="absolute top-2 left-4 w-15 h-10 grid grid-cols-3 grid-rows-2 items-center gap-1 p-2 bg-black/50 backdrop-blur-xs hover:cursor-default">
            <div className={`rounded-sm aspect-square ${selected === 1 ? 'bg-gray-500' : 'bg-white'}`}></div>
            <div className={`rounded-sm aspect-square ${selected === 2 ? 'bg-gray-500' : 'bg-white'}`}></div>
            <div className={`rounded-sm aspect-square ${selected === 3 ? 'bg-gray-500' : 'bg-white'}`}></div>
            <div className={`rounded-sm aspect-square ${selected === 4 ? 'bg-gray-500' : 'bg-white'}`}></div>
            <div className={`rounded-sm aspect-square ${selected === 5 ? 'bg-gray-500' : 'bg-white'}`}></div>
            <div className={`rounded-sm aspect-square ${selected === 6 ? 'bg-gray-500' : 'bg-white'}`}></div>
        </div>
    )
}