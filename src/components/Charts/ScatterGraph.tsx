import { ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, ZAxis, ResponsiveContainer } from "recharts";
import carrilImage from "../../assets/images/carril.png"

const randomDetections = (y: number, xDisplace: number) => {
    const detections = []
    for (let i = 0; i < 3; i++) {
        const x = (0.9 + xDisplace) + i * 0.1
        const z = Math.random() * 5
        detections.push({x, y, z})
    }
    return detections
}

const mockData: { name: string; detections: object[]; color: string }[] = [
    { name: "Trace 1", detections: [...randomDetections(1, 0), ...randomDetections(-1, 0)], color: "#8884d8" },
    { name: "Trace 2", detections: [...randomDetections(1, 1), ...randomDetections(-1, 1)], color: "#812" },
    { name: "Trace 3", detections: [...randomDetections(1, 2), ...randomDetections(-1, 2)], color: "#923" },
    { name: "Trace 4", detections: [...randomDetections(1, 3), ...randomDetections(-1, 3)], color: "#213" },
    { name: "Trace 5", detections: [...randomDetections(1, 4), ...randomDetections(-1, 4)], color: "#213" },
    { name: "Trace 6", detections: [...randomDetections(1, 5), ...randomDetections(-1, 5)], color: "#213" },
]

interface ScatterGraphProps {
    height: number
}

export function ScatterGraph({ height }: ScatterGraphProps) {
    return (
        <div className="relative w-full h-full p-2 bg-gray-100 rounded-lg">
            <details open>
                <summary>Representación del campo</summary>
                <figure className="absolute top-4/10 left-1/2 -translate-x-365/1000 w-full h-full z-10">
                    <img src={carrilImage.src} className="w-[74.7%] h-[20%]" alt="" />
                </figure>
                <ResponsiveContainer width="100%" height={height}> 
                    <ScatterChart margin={{ top: 20, right: 30, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="5 10"/>
                        <XAxis dataKey="x" type="number" domain={[0, 7]} tickCount={8}/>
                        <YAxis dataKey="y" type="number" domain={[-1.15, 1.15]} tick={false} tickLine={false}/>
                        <ZAxis dataKey="z" type="number" domain={[0, 10]} range={[0, 200]}/>
                        {mockData.map((trace, index) => (
                            <Scatter key={index} name={trace.name} data={trace.detections} stroke={trace.color} strokeWidth={2} fill={trace.color} />
                        ))}
                    </ScatterChart>
                </ResponsiveContainer>
            </details>
        </div>
    )
}
