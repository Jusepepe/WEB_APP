import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

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
    return (
        <div className="w-full h-full p-2 bg-gray-100 rounded-lg">
            <details open>
                <summary>Plantas sanas vs enfermas</summary>
                <ResponsiveContainer width="100%" height={height}>
                    <PieChart margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                        <Pie data={mockData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label>
                            {mockData.map((entry, index) => (
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
