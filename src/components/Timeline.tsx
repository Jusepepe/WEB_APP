import { TimeEvent } from "./TimeEvent.tsx";
import { useState } from "preact/hooks";
import results0 from "../../public/images/muestras/results0.jpg";
import results1 from "../../public/images/muestras/results1.jpg"

type TimelineEvent = {
    time: string,
    color: string
}

const imageUrls : string[] = [
    'https://picsum.photos/300/200?random=1',
    'https://picsum.photos/300/200?random=2',
    'https://picsum.photos/300/200?random=3',
    'https://picsum.photos/300/200?random=4',
    'https://picsum.photos/300/200?random=5',
    'https://picsum.photos/300/200?random=6',
    'https://picsum.photos/300/200?random=7',
    'https://picsum.photos/300/200?random=8',
    'https://picsum.photos/300/200?random=9', 
    'https://picsum.photos/300/200?random=10', 
    'https://picsum.photos/300/200?random=11', 
    'https://picsum.photos/300/200?random=12', 
    'https://picsum.photos/300/200?random=13', 
];

const imagesrc : ImageMetadata[] = [
    results0,
    results1,
    results0,
    results1,
    results0,
    results1,
    results0,
    results1,
    results0,
    results0,
    results1,
    results0,
    results1,
]

const timeline: TimelineEvent[] = [
    {time: "6 AM", color: "bg-gray-400"},
    {time: "8 AM", color: "bg-gray-400"},
    {time: "10 AM", color: "bg-gray-400"},
    {time: "12 PM", color: "bg-gray-400"},
    {time: "2 PM", color: "bg-gray-400"},
    {time: "4 PM", color: "bg-gray-400"},
    {time: "6 PM", color: "bg-gray-400"},
]

export function Timeline() {
    const [selected, setSelected] = useState(-1)

    const handleClick = (index: number) => {
        setSelected(index)
        if (index === selected) {
            setSelected(-1)
        }
    }
    return (
        <ul class="flex flex-col gap-2 h-full overflow-y-auto overflow-x-clip no-scrollbar">
            {timeline.map((item, index) => (
                <TimeEvent key={index} {...item} image={imagesrc[index].src} index={index} selected={selected === index} setSelected={handleClick}/>
            ))}
        </ul>
    )
}