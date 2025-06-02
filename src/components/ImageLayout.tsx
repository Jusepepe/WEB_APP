//Importar results0.jpg y results1.jpg
import results0 from "../../public/images/muestras/results0.jpg"
import results1 from "../../public/images/muestras/results1.jpg"
import { ImageBox } from "./ImageBox";

export function ImageLayout() {
    return (
        <div class="flex flex-col w-full gap-2 p-0">
            <h1 class="text-black font-semibold text-xl">Imagenes</h1>
            <div class="flex flex-row gap-2 w-full overflow-x-auto no-scrollbar p-0">
                <ImageBox src={results0.src} name="Trace 1" date="2025-06-02"/>
                <ImageBox src={results1.src} name="Trace 2" date="2025-06-02"/>     
            </div>
        </div>
    )
}
