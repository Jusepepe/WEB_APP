import { useUserStore } from "../store/userStore";
import { useEffect } from "react";
import { useS3 } from "../utility/hooks/useS3";

export function Detections() {
    const { day, tracePath, type, selectedEvent, detections } = useUserStore()
    const { refreshS3Detections } = useS3()
    useEffect(() => {
        refreshS3Detections()
    }, [day, tracePath, type, selectedEvent])
    return (
        <div>
            <p>Detections</p>
            {detections.map((detection, index) => (
                <div key={index}>
                    <p>{detection.Key}</p>
                    <p>{JSON.stringify(detection.data)}</p>
                </div>
            ))}
        </div>
    )
}