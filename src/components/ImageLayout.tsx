//Importar results0.jpg y results1.jpg  
import { ImageBox } from "./ImageBox";
import { useUserStore } from "../store/userStore";
import { getPublicUrl } from "../utility/s3";
import { useEffect } from "react";
import type { Data } from "../utility/types";
import { getDateAndHour } from "../utility/getDateAndHour";

const baseUrl = import.meta.env.DEV 
      ? 'http://localhost:4321' 
      : '';

export function ImageLayout() {
    const { tracePath, day, type, selectedEvent, objects, setObjects } = useUserStore()   
    const dateAndHour = getDateAndHour()

    useEffect(() => {
        fetch(`${baseUrl}/api/s3-list/${type}?dateAndHour=${dateAndHour[0]}/${dateAndHour[1]}&tracePath=${tracePath}`)
        .then((res) => res.json())
        .then((data: Data) => {
            setObjects(data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [type, selectedEvent, day, tracePath])

    return (
        <>
            <div className="flex flex-col w-full gap-2 p-0">
                <h1 className="text-black font-semibold text-xl p-0">Imagenes</h1>
                <div className="flex flex-row gap-2 overflow-x-scroll p-0 snap-x no-scrollbar snap-mandatory">
                    {objects.map((object) => (
                        <ImageBox key={object.Key} src={getPublicUrl(object.Key)} name={tracePath.toString()} date={day.toDateString()} objectKey={object.Key} />
                    ))}
                </div>
            </div>
            <button className="bg-gray-400 rounded-lg p-2 text-black hover:bg-gray-500 hover:text-white" onClick={() => useUserStore.setState({ type: type === "processed" ? "raw" : "processed" })}>
                {type === "processed" ? "Raw" : "Processed"}
            </button>
        </>
    )
}
