import { useState } from "preact/hooks";
import { LeftArrow, RightArrow } from "./Arrows.tsx";
import { DayButton } from "./DayButton.tsx";

const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const weekNames = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
const weekDays = [0, 1, 2, 3, 4, 5, 6];

export function DaySlider() {   
    const [day, setDay] = useState(new Date())
    
    const changeDay = (num: number) => {
        let date = day.getDate()
        let newDate = new Date(day)
        newDate.setDate(date + num)
        setDay(newDate)
    }
    
    return (
        <>
            <h1 class="text-gray-300 font-semibold text-xl">{monthNames[day.getMonth()]}</h1>
            <nav class="flex flex-row bg-gray-800 rounded-lg">
                <LeftArrow changeDay={changeDay} change={-7}/>
                <div class="flex flex-row overflow-x-scroll">
                    <DayButton day={day} changeDay={changeDay} change={-2} selected={false}/>
                    <DayButton day={day} changeDay={changeDay} change={-1} selected={false}/>
                    <DayButton day={day} changeDay={changeDay} change={0} selected={true}/>
                    <DayButton day={day} changeDay={changeDay} change={1} selected={false}/>
                    <DayButton day={day} changeDay={changeDay} change={2} selected={false}/>
                </div>
                <RightArrow changeDay={changeDay} change={7}/>
            </nav>
        </>
    )
}