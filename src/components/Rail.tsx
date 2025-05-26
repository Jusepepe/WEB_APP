import { useState } from "preact/hooks";

type Trace = {
    name : string,
    id : number
}

const tracePath: Trace[] = [
    {name: "Trace 1", id: 1},
    {name: "Trace 2", id: 2},
    {name: "Trace 3", id: 3},
    {name: "Trace 4", id: 4},
    {name: "Trace 5", id: 5},
    {name: "Trace 6", id: 6},
]

export function Rail() {
    const [selectedTrace, setSelectedTrace] = useState(tracePath[0]);
    
    const handleChange = (e: {currentTarget: HTMLInputElement}) => {
        const value = parseInt(e.currentTarget.value)
        setSelectedTrace(tracePath[value])
    }

    return (
        <div class="flex flex-col items-center w-full h-full p-2 bg-gray-800 rounded-lg border-6 border-gray-600">
            <label class="text-gray-300">SELECT TRACE</label>
            <input type="range" onChange={handleChange} min={0} max={5} class="w-full h-full rounded-lg bg-gray-600 cursor-pointer" list="traceList"/>
            <datalist id="traceList">
                {tracePath.map((trace) => (
                    <option value={trace.id-1} />
                ))}
            </datalist>
            <span class="text-gray-300">{selectedTrace.name}</span>
        </div>
    );
}