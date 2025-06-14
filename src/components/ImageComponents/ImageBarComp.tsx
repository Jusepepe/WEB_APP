import { LeftRowIcon } from "../../assets/icons/LeftRowIcon";
import { RightRowIcon } from "../../assets/icons/RightRowIcon";
import { VisibilityOffIcon, VisibilityOnIcon } from "../../assets/icons/VisibilityIcon";
import { useUserStore } from "../../store/userStore";

export function ImageBarComp({handlePrev, handleNext}: {handlePrev: () => void, handleNext: () => void}) {
    const { type } = useUserStore()
    return (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[70%] flex flex-row justify-between gap-2 bg-black/50 backdrop-blur-xs p-2 rounded-full">
            <button onClick={handlePrev} className="rounded-full m-0 p-2 cursor-pointer hover:bg-black/50">
                <LeftRowIcon/>
            </button>
            <button className={`rounded-full m-0 p-2 cursor-pointer ${type === "processed" ? "bg-black/50 hover:VisibilityOnIcon" : "hover:VisibilityOffIcon"}`} onClick={() => useUserStore.setState({ type: type === "processed" ? "raw" : "processed" })}>
                {type === "processed" ? <VisibilityOnIcon/> : <VisibilityOffIcon/>}
            </button>
            <button onClick={handleNext} className="rounded-full m-0 p-2 cursor-pointer hover:bg-black/50">
                <RightRowIcon/>
            </button>
        </div>
    )
}