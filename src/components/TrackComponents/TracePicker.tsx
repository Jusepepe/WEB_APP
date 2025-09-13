import { useUserStore } from "../../store/userStore.tsx";
import { TracePickerButton } from "./TracePickerButton.tsx";

export function TracePicker() {
    const { setSelectedTrace, tracePath } = useUserStore(store => ({setSelectedTrace: store.setSelectedTrace, tracePath: store.tracePath}))
    
    const handleClick = (id : number) => {
        setSelectedTrace(id)
    }

    return (
        <div className="h-8 flex flex-row items-center p-0 gap-0.5 flex-nowrap">
            <TracePickerButton id={-1} selected={-1 === tracePath} handleClick={handleClick}/>
            {Array.from({ length: 6 }, (_, index) => index + 1).map((id) => (
                <TracePickerButton key={id} id={id} selected={id === tracePath} handleClick={handleClick}/>
            ))}
        </div>
    )
}