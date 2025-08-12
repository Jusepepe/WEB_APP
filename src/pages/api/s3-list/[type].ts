import type { APIRoute } from 'astro';
import { listObjectsProcessed, listObjectsProcessedbyTracePath, listObjectsRaw, listObjectsRawbyTracePath } from '../../../utility/s3';

export const GET: APIRoute = async ({ params, request }) => {
  const { type } = params
  const url = new URL(request.url)
  const searchParams = url.searchParams
  const [date, hour] = searchParams.get("dateAndHour")!.split("/")
  const tracePath = searchParams.get("tracePath")
  try {
    let s3Images: Object[] = []
    if(type === "processed") {
      if(tracePath === "-1") {
        s3Images = await listObjectsProcessed(date, hour)
      } else {
        s3Images = await listObjectsProcessedbyTracePath(date, hour, Number(tracePath))
      }
    } else if(type === "raw") {
      if(tracePath === "-1") {
        s3Images = await listObjectsRaw(date, hour)
      } else {
        s3Images = await listObjectsRawbyTracePath(date, hour, Number(tracePath))
      }
    }
    
    return new Response(JSON.stringify(s3Images), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({
      error: 'Failed to fetch images'
    }), {
      status: 500
    });
  }
};