//Importar results0.jpg y results1.jpg
import results0 from "../../public/images/muestras/results0.jpg"
import results1 from "../../public/images/muestras/results1.jpg"

const imageUrls : ImageMetadata[] = [
    results0,
    results1,
    results0,
    results1,
    results0,
    results1,
    results0,
    results1,
    results0,
    results1,
    results0,
    results1,
    results0,
    results1,
    results0
];

export function ImageLayout() {
    return (
        <div class="flex flex-row w-full gap-2 flex-wrap justify-center">
            {imageUrls.map((image, index) => (
                <img key={index} src={image.src} alt={`Image ${index + 1}`} class="w-28 h-20 rounded-lg hover:scale-105 transition-all duration-200 cursor-pointer" />
            ))}
        </div>
    )
}
