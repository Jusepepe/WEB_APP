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
        <>
        {/* <div class="flex flex-col items-center w-full h-full p-2 bg-gray-800 rounded-lg border-6 border-gray-600">
            <label class="text-gray-300">SELECT TRACE</label>
            <input type="range" onChange={handleChange} min={0} max={5} class="w-full h-full rounded-lg bg-transparent appearance-none cursor-pointer" list="traceList"/>
            <datalist id="traceList">
                {tracePath.map((trace) => (
                    <option value={trace.id-1} />
                ))}
            </datalist>
            <span class="text-gray-300">{selectedTrace.name}</span>
        </div> */}
        <div class="flex flex-col items-center w-full p-2 bg-gray-100 rounded-lg gap-2">
            <label class="text-black font-semibold">SELECT TRACE</label>
                <input 
                    type="range" 
                    onChange={handleChange}
                    value={selectedTrace.id-1}
                    min={0} 
                    max={tracePath.length-1} 
                    class="range-slider w-full h-12 appearance-none bg-transparent cursor-pointer"
                />
                <style jsx>{`
                    .range-slider::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        width: 48px;
                        height: 48px;
                        background-image: url('https://i.pinimg.com/736x/c4/05/c6/c405c6d3048f9263a1ada429e2697c0f.jpg');
                        background-size: cover;
                        background-position: center;
                        border-radius: 50%;
                        cursor: pointer;
                        margin-top: 0px;
                    }
                    .range-slider::-moz-range-thumb {
                        width: 48px;
                        height: 48px;
                        background-image: url('https://picsum.photos/24/24');
                        background-size: cover;
                        border-radius: 50%;
                        cursor: pointer;
                        margin-top: 0px;
                    }
                    .range-slider::-webkit-slider-runnable-track {
                        height: 48px;
                        background: #ffffff;
                        border: none;
                        border-radius: 4px;
                    }
                    
                    .range-slider:hover::-webkit-slider-thumb {
                        transform: scale(1.2);
                    }

                    .range-slider:active::-webkit-slider-thumb {
                        transform: scale(1.2);
                    }

                `}</style>
            <span class="text-black font-semibold text-sm">{selectedTrace.name}</span>
        </div>
    </>
);
}