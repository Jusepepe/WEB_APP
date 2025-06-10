import { Rail } from "./Rail.tsx"

export function ImageBox({src, name, date, objectKey}: {src: string, name: string, date: string, objectKey: string}) {
    const track = Number(objectKey.split("_")[2].split("/")[0])
    return (
        <div className="relative group hover:cursor-pointer w-[384px] min-w-[384px] h-[216px] min-h-[216px] p-0 snap-center">
            <img className="w-[384px] h-[216px] rounded-lg aspect-[16/9] inset-shadow-md" src={src} alt="" />
            <Rail selected={track+1}/>
            <button className="absolute top-2 right-2 bg-black/20 rounded-lg p-1 hover:bg-black/50">
                {/*svg three dots*/}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
            </button>
            <div className="absolute bottom-2 left-2">
                <p className="text-white text-md font-semibold">{name}</p>
                <p className="text-white text-md font-semibold">{date}</p>
            </div>
        </div>
    )
}