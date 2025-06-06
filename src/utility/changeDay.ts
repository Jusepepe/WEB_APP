import { useUserStore } from "../store/userStore";

export function useChangeDay() {
    const { day, setDay } = useUserStore()

    return (num: number) => {
        let date = day.getDate()
        let newDate = new Date(day)
        newDate.setDate(date + num)
        setDay(newDate)
    }
}
