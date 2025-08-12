import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { useUserStore } from "../../store/userStore";
import { useEffect, useState } from "react";

const randomDetections = () => {
    return Math.floor(Math.random() * 100)
}

const mockData: { name: string; detections: number }[] = [
    { name: "Trace 1", detections: randomDetections() },
    { name: "Trace 2", detections: randomDetections() },
    { name: "Trace 3", detections: randomDetections() },
    { name: "Trace 4", detections: randomDetections() },
    { name: "Trace 5", detections: randomDetections() },
    { name: "Trace 6", detections: randomDetections() },
    { name: "Trace 7", detections: randomDetections() },
]

interface LineGraphProps {
    height: number
}

export function LineGraph({ height }: LineGraphProps) {
    const { detections } = useUserStore()
    const [data, setData] = useState<{ name: string; detections: number }[]>([])
    useEffect(() => {
        const tracks: any[] = []
        let lastTrack = 1
        let accDetections = 0
        detections.forEach(detection => {
            const tracePath = detection.Key.match(/Track_(\d+)/)
            if (!tracePath) return
            const tracePathNumber = Number(tracePath[1])
            if(tracePathNumber === lastTrack) {
                accDetections += detection.data.length
            } else {
                tracks.push({ name: `Track_${lastTrack}`, detections: accDetections })
                lastTrack = tracePathNumber
                accDetections = detection.data.length
            }
            
        })
        tracks.push({ name: `Track_${lastTrack}`, detections: accDetections })
        setData(tracks)
    }, [detections])

    return (
        <div className="w-full h-full p-2 bg-gray-100 rounded-lg">
            <details open>
                <summary>Detecciones por traza</summary>
                <ResponsiveContainer width="100%" height={height}>
                    <LineChart data={data} margin={{ top: 20, right: 30, left: -20, bottom: 0 }}>
                        <CartesianGrid />
                        <Line type="monotone" dataKey="detections" stroke="#8884d8" strokeWidth={2} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Legend />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </details>
        </div>
    )
}
