import type { APIRoute } from 'astro';
import { listObjectsbyDate } from '../../../utility/s3';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url)
  const searchParams = url.searchParams
  const date = searchParams.get("date")!

  try {
    const s3Images = await listObjectsbyDate(date)
    let hours: Set<string> = new Set()
    s3Images.forEach((item: any) => {
        hours.add(item.Key!.split("/")[2])
    })
    return new Response(JSON.stringify(Array.from(hours)), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: 'Failed to fetch hours' }), {
      status: 500
    });
  }
};