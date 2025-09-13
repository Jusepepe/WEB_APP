import type { APIRoute } from 'astro';
import { listObjectsProcessed, listObjectsProcessedbyTracePath } from '../../../utility/s3';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url)
  const searchParams = url.searchParams
  const [date, hour] = searchParams.get("dateAndHour")!.split("/")
  const tracePath = searchParams.get("tracePath")

  try {
    const s3Images = tracePath === "-1"
      ? await listObjectsProcessed(date, hour)
      : await listObjectsProcessedbyTracePath(date, hour, Number(tracePath))

    return new Response(JSON.stringify(s3Images), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: 'Failed to fetch processed images' }), {
      status: 500
    });
  }
};