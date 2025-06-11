import type { Data } from "../types"
import { mockObjects } from "../consts"

export function useGetS3Objects() {

    return (baseUrl: string, type: string, tracePath: number, date: string, hour: string, setObjects: (objects: Data) => void) => {
        fetch(`${baseUrl}/api/s3-list/${type}?dateAndHour=${date}/${hour}&tracePath=${tracePath}`)
        .then((res) => res.json())
        .then((data: Data) => {
            data.length === 0 ? setObjects(mockObjects) : setObjects(data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
