import useEmblaCarousel from "embla-carousel-react";
import { ImageBox } from "./ImageBox";
import { useUserStore } from "../../store/userStore";
import { getPublicUrl } from "../../utility/s3";
import { useEffect, useCallback, useState } from "react";
import { ImageBarComp } from "./ImageBarComp";
import { useS3 } from "../../utility/hooks/useS3";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import { LoadSpinner } from "../LoadSpinner";

export function ImageCarrousel() {
    const { day, tracePath, type, selectedEvent, images } = useUserStore()
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true , align: "center"} as EmblaOptionsType);
    const { refreshS3Images } = useS3()

    const [slidesInView, setSlidesInView] = useState<number[]>([])

    const updateSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
        setSlidesInView((slidesInView) => {
            if (slidesInView.length === emblaApi.slideNodes().length) {
                emblaApi.off('slidesInView', updateSlidesInView)
            }
            const inView = emblaApi
            .slidesInView()
            .filter((index) => !slidesInView.includes(index))

            return slidesInView.concat(inView)
        })
      }, [emblaApi?.slideNodes()])

    useEffect(() => {
        if(!emblaApi) return

        updateSlidesInView(emblaApi)
        emblaApi.on('slidesInView', updateSlidesInView)
        emblaApi.on('reInit', updateSlidesInView)

        refreshS3Images()
    }, [day, selectedEvent, type, tracePath, emblaApi, updateSlidesInView])

    const scrollPrev = () => {
        if (!emblaApi) return
        emblaApi.scrollPrev();
    }

    const scrollNext = () => {
        if (!emblaApi) return
        emblaApi.scrollNext();
    }

    return (
        <div className="relative flex flex-col gap-2 w-[100%] bg-gray-300 p-1.5 rounded-lg">
            <div className="flex flex-row justify-start">
                <p className="text-black font-semibold text-lg">Imagenes</p>
            </div>
            <div className="overflow-x-hidden" ref={emblaRef}>
                {images.length === 0 ? <div className="flex flex-row relative group hover:cursor-pointer grow-0 shrink-0 basis-[90%] min-w-0 mx-[5%] pl-2 snap-center aspect-video"><LoadSpinner/></div> : <div className="flex flex-row">
                    {images.map((image) => (
                        <ImageBox key={image.Key} src={getPublicUrl(image.Key)} inView={slidesInView.includes(images.indexOf(image))}/>
                    ))}
                </div>}
            </div>
            <ImageBarComp handlePrev={scrollPrev} handleNext={scrollNext}/>
        </div>
    )
}