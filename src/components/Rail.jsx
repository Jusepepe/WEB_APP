import { useState } from "preact/hooks";

const tracePath = [
    {name: "Trace 1", id: 1},
    {name: "Trace 2", id: 2},
    {name: "Trace 3", id: 3},
    {name: "Trace 4", id: 4},
    {name: "Trace 5", id: 5},
    {name: "Trace 6", id: 6},
]

export function Rail() {
    const [selectedTrace, setSelectedTrace] = useState(tracePath[0]);
    
    return (
        <div class="flex items-center w-full h-16 p-2 bg-gray-800 rounded-lg border-6 border-gray-600">
            <input type="range" value={selectedTrace.id} min={1} max={6} class="w-full h-full rounded-lg bg-gray-600 cursor-pointer"/>
        </div>
    );
}