export function TracePickerButton({id, selected, handleClick}: {id: number, selected: boolean, handleClick: (id: number) => void}) {
    return (
        <button className={`h-full w-48 px-5 py-2 rounded-lg text-black text-sm font-semibold cursor-pointer ${selected ? 'bg-black text-white' : 'hover:bg-gray-200'}`} onClick={() => handleClick(id)}>
            <p className="p-0">Track {id}</p>
        </button>
    )
}