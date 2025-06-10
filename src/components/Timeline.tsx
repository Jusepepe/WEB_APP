import { TimeEvent } from "./TimeEvent.tsx";
import { useUserStore } from "../store/userStore.tsx";
import { imageUrls, timeline } from "../utility/consts";

export function Timeline() {
    const { setSelectedEvent , selectedEvent } = useUserStore()

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