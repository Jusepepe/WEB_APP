import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState } from "react";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";

export const useImageCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true , align: "center"} as EmblaOptionsType);
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
    }, [emblaApi, updateSlidesInView])

    const scrollPrev = () => {
        if (!emblaApi) return
        emblaApi.scrollPrev();
    }

    const scrollNext = () => {
        if (!emblaApi) return
        emblaApi.scrollNext();
    }

    return { emblaRef, scrollPrev, scrollNext, slidesInView }
}
