//Importar results0.jpg y results1.jpg
import results0 from "../../public/images/muestras/results0.jpg"
import results1 from "../../public/images/muestras/results1.jpg"
import { ImageBox } from "./ImageBox";
import { useUserStore } from "../store/userStore";

export function ImageLayout() {
    const { tracePath, day } = useUserStore()

    return (
        <div className="flex flex-col w-full gap-2 p-0">
            <h1 className="text-black font-semibold text-xl p-0">Imagenes</h1>
            <div className="flex flex-row gap-2 overflow-x-scroll no-scrollbar p-0">
                <ImageBox src={results0.src} name={`Track ${tracePath}`}  date={day.toDateString()}/>
                <ImageBox src={results1.src} name={`Track ${tracePath+1}`} date={day.toDateString()}/>
                <ImageBox src={results1.src} name={`Track ${tracePath+2}`} date={day.toDateString()}/>
                <ImageBox src={results1.src} name={`Track ${tracePath+3}`} date={day.toDateString()}/>
                <ImageBox src={results1.src} name={`Track ${tracePath+4}`} date={day.toDateString()}/>
                <ImageBox src={results1.src} name={`Track ${tracePath+5}`} date={day.toDateString()}/>
            </div>
        </div>
    )
}
