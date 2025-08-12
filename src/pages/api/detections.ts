import type { APIRoute } from 'astro';
import { getPublicUrl, listObjectsDetection, listObjectsDetectionbyTracePath } from '../../utility/s3';
import type { Detections } from '../../utility/types';

export const GET: APIRoute = async ({ request }) => {
    const url = new URL(request.url)
    const searchParams = url.searchParams
    const [date, hour] = searchParams.get("dateAndHour")!.split("/")
    const tracePath = searchParams.get("tracePath") 
    try {
        let s3Detections: any[] = []
        if(tracePath === "-1") {
            s3Detections = await listObjectsDetection(date, hour)
        } else {
            s3Detections = await listObjectsDetectionbyTracePath(date, hour, Number(tracePath))
        }
        const data = s3Detections.map(async (detection) => {
            const response = await fetch(getPublicUrl(detection.Key))
            return {
                Key: detection.Key,
                data: await response.json()
            }
        })
        return new Response(JSON.stringify(await Promise.all(data)) , {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({
            error: 'Failed to fetch detections'
        }), {
            status: 500
        });
    }
};
