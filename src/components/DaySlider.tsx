import { DayButton } from "./DayButton.tsx";
import { useUserStore } from "../store/userStore.tsx";

const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

export function DaySlider() {   
    const { day } = useUserStore()
    
    return (
        <section className="flex flex-col gap-2">
            <h1 className="text-black font-semibold text-xl">{monthNames[day.getMonth()]}</h1>
            <nav className="flex flex-row bg-white rounded-lg">
                <div className="flex flex-row overflow-x-auto">
                    <DayButton change={-5} selected={false}/>
                    <DayButton change={-4} selected={false}/>
                    <DayButton change={-3} selected={false}/>
                    <DayButton change={-2} selected={false}/>
                    <DayButton change={-1} selected={false}/>
                    <DayButton change={0} selected={true}/>
                    <DayButton change={1} selected={false}/>
                </div>
            </nav>
        </section>
    )
}