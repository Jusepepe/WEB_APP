export function Rail({orientation}: {orientation: string}) {
    return (
        <div className="absolute top-2 left-4 w-15 h-10 grid grid-cols-3 grid-rows-2 items-center gap-1 p-2 bg-black/50 backdrop-blur-xs hover:cursor-default">
            <div className={`rounded-sm aspect-square ${orientation === "front-left" ? 'bg-gray-500' : 'bg-white'}`}></div>
            <div className={`rounded-sm aspect-square ${orientation === "front-center" ? 'bg-gray-500' : 'bg-white'}`}></div>
            <div className={`rounded-sm aspect-square ${orientation === "front-right" ? 'bg-gray-500' : 'bg-white'}`}></div>
            <div className={`rounded-sm aspect-square ${orientation === "back-left" ? 'bg-gray-500' : 'bg-white'}`}></div>
            <div className={`rounded-sm aspect-square ${orientation === "back-center" ? 'bg-gray-500' : 'bg-white'}`}></div>
            <div className={`rounded-sm aspect-square ${orientation === "back-right" ? 'bg-gray-500' : 'bg-white'}`}></div>
        </div>
    )
}