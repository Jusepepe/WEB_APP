import { TimeEvent } from "./TimeEvent.tsx";
import { useUserStore } from "../store/userStore.tsx";

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
    const { setSelectedEvent , selectedEvent} = useUserStore()

    const handleClick = (index: number) => {
        setSelectedEvent(index)
        if (index === selectedEvent) {
            setSelectedEvent(-1)
        }
    }
    return (
        <ul className="flex flex-col gap-2 h-full overflow-y-auto overflow-x-clip no-scrollbar">
            {timeline.map((item, index) => (
                <TimeEvent key={index} {...item} image={imageUrls[index]} index={index} selected={selectedEvent === index} setSelected={handleClick}/>
            ))}
        </ul>
    )
}