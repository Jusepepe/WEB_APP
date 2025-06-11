import useEmblaCarousel from "embla-carousel-react";
import { ImageBox } from "./ImageBox";
import { useUserStore } from "../store/userStore";
import { getPublicUrl } from "../utility/s3";
import { useEffect } from "react";
import { ImageBarComp } from "./ImageBarComp";
import { useS3 } from "../utility/hooks/useS3";

export function ImageCarrousel() {
    const { day, tracePath, type, selectedEvent, objects } = useUserStore()
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true , align: "center"});
    const { refreshS3Objects } = useS3()

    useEffect(
        refreshS3Objects,
        [day, selectedEvent, type, tracePath]
    )

    const scrollPrev = () => {
        if (emblaApi) {
            emblaApi.scrollPrev();
        }
    }

    const scrollNext = () => {
        if (emblaApi) {
            emblaApi.scrollNext();
        }
    }

    return (
        <div className="relative flex flex-col gap-2 w-[100%] bg-gray-300 p-1.5 rounded-lg">
            <div className="flex flex-row justify-start">
                <p className="text-black font-semibold text-lg">Imagenes</p>
            </div>
            <div className="overflow-x-hidden" ref={emblaRef}>
                <div className="flex flex-row">
                    {objects.map((object) => (
                        <ImageBox key={object.Key} src={getPublicUrl(object.Key)} />
                    ))}
                </div>
            </div>
            <ImageBarComp handlePrev={scrollPrev} handleNext={scrollNext}/>
        </div>
    )
}