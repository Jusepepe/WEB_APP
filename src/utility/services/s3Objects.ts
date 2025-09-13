import { mockObjects } from "../consts"

const baseUrl = import.meta.env.DEV 
? 'http://localhost:4321' 
: '';

export const getS3Images = async (type: string, tracePath: number, date: string, hour: string) => {
    const res = await fetch(`${baseUrl}/api/s3-list/${type}?dateAndHour=${date}/${hour}&tracePath=${tracePath}`)
    const data = await res.json()
    data.sort((a: any, b: any) => {
        return a.LastModified.localeCompare(b.LastModified)
    })
    return data.length === 0 ? mockObjects : data
}

export const getHoursbyDate = async (date: string) => {
    const res = await fetch(`${baseUrl}/api/s3-list/hours?date=${date}`)
    const data = await res.json()
    return data.length === 0 ? [] : data
}

export const getS3Detections = async (tracePath: number, date: string, hour: string) => {
    const res = await fetch(`${baseUrl}/api/detections?dateAndHour=${date}/${hour}&tracePath=${tracePath}`)
    const data = await res.json()
    return data.length === 0 ? [] : data
}
