import { useUserStore } from "../store/userStore.tsx";

type Trace = {
    name : string,
    id : number
}

const tracePathList: Trace[] = [
    {name: "Trace 1", id: 1},
    {name: "Trace 2", id: 2},
    {name: "Trace 3", id: 3},
    {name: "Trace 4", id: 4},
    {name: "Trace 5", id: 5},
    {name: "Trace 6", id: 6},
]

export function TracePicker() {
    const { setSelectedTrace, tracePath } = useUserStore()
    
    const handleClick = (id : number) => {
        setSelectedTrace(id)
    }

    return (
        <div class="h-8 flex flex-row items-center p-0 gap-0.5 flex-nowrap">
            <button class={`h-full w-48 px-5 py-2 rounded-lg text-black text-sm font-semibold cursor-pointer ${tracePathList[tracePath].id === 1 ? 'bg-black text-white' : 'hover:bg-gray-200'}`} onClick={() => handleClick(0)}>
                <p class="p-0">Track 1</p>
            </button>
            <button class={`h-full w-48 px-5 py-2 rounded-lg text-black text-sm font-semibold cursor-pointer ${tracePathList[tracePath].id === 2 ? 'bg-black text-white' : 'hover:bg-gray-200'}`} onClick={() => handleClick(1)}>
                <p class="p-0">Track 2</p>
            </button>
            <button class={`h-full w-48 px-5 py-2 rounded-lg text-black text-sm font-semibold cursor-pointer ${tracePathList[tracePath].id === 3 ? 'bg-black text-white' : 'hover:bg-gray-200'}`} onClick={() => handleClick(2)}>
                <p class="p-0">Track 3</p>
            </button>
            <button class={`h-full w-48 px-5 py-2 rounded-lg text-black text-sm font-semibold cursor-pointer ${tracePathList[tracePath].id === 4 ? 'bg-black text-white' : 'hover:bg-gray-200'}`} onClick={() => handleClick(3)}>
                <p class="p-0">Track 4</p>
            </button>
            <button class={`h-full w-48 px-5 py-2 rounded-lg text-black text-sm font-semibold cursor-pointer ${tracePathList[tracePath].id === 5 ? 'bg-black text-white' : 'hover:bg-gray-200'}`} onClick={() => handleClick(4)}> 
                <p class="p-0">Track 5</p>
            </button>
            <button class={`h-full w-48 px-5 py-2 rounded-lg text-black text-sm font-semibold cursor-pointer ${tracePathList[tracePath].id === 6 ? 'bg-black text-white' : 'hover:bg-gray-200'}`} onClick={() => handleClick(5)}>
                <p class="p-0">Track 6</p>
            </button>
            
        </div>
    )
}