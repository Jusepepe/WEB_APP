import { Rail } from "../TrackComponents/Rail.tsx"
import { ThreeDots } from "../../assets/icons/ThreeDots.tsx"
import { useState, useCallback } from "react"
import { LoadSpinner } from "../LoadSpinner.tsx"

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`


export function ImageBox({src, inView}: {src: string, inView: boolean}) {

    const url = decodeURIComponent(src)
    let orientation = "front-left"
    let angle = ""
    try {
        const direction = url.split("/")[url.split("/").length - 2]
        const position = url.split("/")[url.split("/").length - 1].split("_")[1].split(".")[0].toLowerCase()
        angle = url.split("/")[url.split("/").length - 1].split("_")[0]
        orientation = direction + "-" + position
    } catch (error) {
        
    }

    const [hasLoaded, setHasLoaded] = useState(false)

    const setLoaded = useCallback(() => {
        if (inView) setHasLoaded(true)
    }, [inView, setHasLoaded])

    return (
        <div className="relative group hover:cursor-pointer grow-0 shrink-0 basis-[90%] min-w-0 pl-2 snap-center aspect-video">
            {!hasLoaded && <LoadSpinner/>}
            <img className="rounded-lg w-full h-full inset-shadow-md" src={inView ? src : PLACEHOLDER_SRC} alt="" onLoad={setLoaded}/>
            <Rail orientation={orientation}/>
            <button className="absolute top-2 right-2 bg-black/50 backdrop-blur-xs rounded-lg p-1">
                <ThreeDots/>
            </button>
            <p className="absolute bottom-20 left-4 text-white text-xm">{angle}</p>
        </div>
    )
}