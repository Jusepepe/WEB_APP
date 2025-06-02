import { useState } from "preact/hooks";
import { LeftArrow, RightArrow } from "./Arrows.tsx";
import { DayButton } from "./DayButton.tsx";

const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

export function DaySlider() {   
    const [day, setDay] = useState(new Date())
    
    const changeDay = (num: number) => {
        let date = day.getDate()
        let newDate = new Date(day)
        newDate.setDate(date + num)
        setDay(newDate)
    }
    
    return (
        <section class="flex flex-col gap-2">
            <h1 class="text-black font-semibold text-xl">{monthNames[day.getMonth()]}</h1>
            <nav class="flex flex-row bg-white rounded-lg">
                <div class="flex flex-row overflow-x-auto">
                    <DayButton day={day} changeDay={changeDay} change={-5} selected={false}/>
                    <DayButton day={day} changeDay={changeDay} change={-4} selected={false}/>
                    <DayButton day={day} changeDay={changeDay} change={-3} selected={false}/>
                    <DayButton day={day} changeDay={changeDay} change={-2} selected={false}/>
                    <DayButton day={day} changeDay={changeDay} change={-1} selected={false}/>
                    <DayButton day={day} changeDay={changeDay} change={0} selected={true}/>
                    <DayButton day={day} changeDay={changeDay} change={1} selected={false}/>
                </div>
            </nav>
        </section>
    )
}