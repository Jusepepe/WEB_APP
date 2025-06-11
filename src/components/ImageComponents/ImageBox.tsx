import { Rail } from "../TrackComponents/Rail.tsx"
import { ThreeDots } from "../../assets/icons/ThreeDots.tsx"


export function ImageBox({src}: {src: string}) {
    const track = 0

    return (
        <div className="relative group hover:cursor-pointer grow-0 shrink-0 basis-[90%] min-w-0 h-full pl-2 snap-center aspect-video">
            <img className="rounded-lg w-full h-full inset-shadow-md" src={src} alt=""/>
            <Rail selected={track+1}/>
            <button className="absolute top-2 right-2 bg-black/50 backdrop-blur-xs rounded-lg p-1">
                <ThreeDots/>
            </button>
        </div>
    )
}