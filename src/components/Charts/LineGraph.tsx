import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from "recharts";

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
    return (
        <div className="w-full h-full p-2 bg-gray-100 rounded-lg">
            <details open>
                <summary>Detecciones por traza</summary>
                <ResponsiveContainer width="100%" height={height}>
                    <LineChart data={mockData} margin={{ top: 20, right: 30, left: -20, bottom: 0 }}>
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
