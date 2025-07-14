const baseUrl = import.meta.env.DEV 
? 'http://localhost:4321' 
: '';

export const getDetections = async (date: string, hour: string) => {
    const res = await fetch(`${baseUrl}/api/s3-list/detection?dateAndHour=${date}/${hour}`)
    const data = await res.json()
    return data.length === 0 ? [] : data
}