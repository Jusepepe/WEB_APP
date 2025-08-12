import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useUserStore } from "../../store/userStore";
import { useEffect, useState } from "react";

const randomValue = () => {
    let healthy = Math.floor(Math.random() * 100)
    let diseased = Math.floor(Math.random() * 100)
    return { healthy, diseased }
}

const mockData = [
    { name: "Healthy", value: randomValue().healthy },
    { name: "Diseased", value: randomValue().diseased },
];

const COLORS = ["#10b981", "#f59e0b"];

interface PieGraphProps {
    height: number
}

export function PieGraph({ height }: PieGraphProps) {
    const { detections } = useUserStore()
    const [data, setData] = useState<{ name: string; value: number }[]>([])
    useEffect(() => {
        let healthy = 0
        let diseased = 0
        detections.forEach(detection => {
            const isHealthy = detection.data.length === 0
            if(isHealthy) healthy++
            else diseased += detection.data.length
        })
        if(healthy === 0 && diseased === 0) {
            healthy = 1
            diseased = 0
        }
        setData([{ name: "Healthy", value: healthy }, { name: "Diseased", value: diseased }])
    }, [detections])
    
    return (
        <div className="w-full h-full p-2 bg-gray-100 rounded-lg">
            <details open>
                <summary>Plantas sanas vs enfermas</summary>
                <ResponsiveContainer width="100%" height={height}>
                    <PieChart margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </details>
        </div>
    )
}
