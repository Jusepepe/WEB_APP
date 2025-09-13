import { Rail } from "../TrackComponents/Rail.tsx"
import { ThreeDots } from "../../assets/icons/ThreeDots.tsx"
import { useState, useCallback } from "react"
import { LoadSpinner } from "../LoadSpinner.tsx"

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`


export function ImageBox({src, inView}: {src: string, inView: boolean}) {

    const url = decodeURIComponent(src)
    let orientation = "front"
    let parts: string[] = []
    let fileName = ""
    let tracePath = ""
    let date = ""
    let hour = ""
    let type = ""
    let fullName = ""
    try {
        parts = url.split("/")
        fileName = parts.at(-1)!
        orientation = parts.at(-2)!
        tracePath = parts.at(-3)!
        hour = parts.at(-4)!
        type = parts.at(-5)!
        date = parts.at(-6)!
        fullName = `${date}/${type}/${hour}/${tracePath}/${orientation}/${fileName}`

    } catch (error) {
        console.error(error)
    }

    const [hasLoaded, setHasLoaded] = useState(false)

    const setLoaded = useCallback(() => {
        if (inView) setHasLoaded(true)
    }, [inView, setHasLoaded])

    return (
        <div className="relative group hover:cursor-pointer grow-0 shrink-0 basis-[90%] min-w-0 pl-2 snap-center aspect-video">
            {!hasLoaded && <LoadSpinner/>}
            <p className="absolute top-2 left-5 text-black text-xs font-semibold">{fullName}</p>
            <img className="rounded-lg w-full h-full inset-shadow-md" src={inView ? src : PLACEHOLDER_SRC} alt="" onLoad={setLoaded}/>
            {/*<Rail orientation={orientation}/>*/}
            <button className="absolute top-2 right-2 bg-black/50 backdrop-blur-xs rounded-lg p-1">
                <ThreeDots/>
            </button>
        </div>
    )
}