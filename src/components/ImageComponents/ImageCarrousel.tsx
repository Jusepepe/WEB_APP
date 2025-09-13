import { ImageBox } from "./ImageBox";
import { useUserStore } from "../../store/userStore";
import { getPublicUrl } from "../../utility/s3";
import { ImageBarComp } from "./ImageBarComp";
import { useS3 } from "../../utility/hooks/useS3";
import { LoadSpinner } from "../LoadSpinner";
import { useImageCarousel } from "../../utility/hooks/useImageCarousel";

export function ImageCarrousel() {
    const { images } = useUserStore(store => ({ images: store.images }))
    const { emblaRef, scrollPrev, scrollNext, slidesInView } = useImageCarousel();

    // Triggers S3 refresh via its own internal effect when store values change
    useS3()

    return (
        <div className="relative flex flex-col gap-2 w-[100%] bg-gray-300 p-1.5 rounded-lg">
            <div className="flex flex-row justify-start">
                <p className="text-black font-semibold text-lg">Imagenes</p>
            </div>
            <div className="overflow-x-hidden" ref={emblaRef}>
                {images.length === 0 ? (
                    <div className="flex flex-row relative group hover:cursor-pointer grow-0 shrink-0 basis-[90%] min-w-0 mx-[5%] pl-2 snap-center aspect-video">
                        <LoadSpinner/>
                    </div>
                ) : (
                    <div className="flex flex-row">
                        {images.map((image) => (
                            <ImageBox key={image.Key} src={getPublicUrl(image.Key)} inView={slidesInView.includes(images.indexOf(image))}/>
                        ))}
                    </div>
                )}
            </div>
            <ImageBarComp handlePrev={scrollPrev} handleNext={scrollNext}/>
        </div>
    )
}