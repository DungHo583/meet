import { sum } from "lodash";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const endpoints = [
      // "https://meeting10.mobifone.vn/api/status",
      // "https://meeting18.mobifone.vn/api/status",
      // "https://meeting19.mobifone.vn/api/status",
      "https://meeting41.mobifone.vn/api/status",
      // "https://meeting42.mobifone.vn/api/status",
      // "https://meeting43.mobifone.vn/api/status",
      // "https://meeting50.mobifone.vn/api/status",
      // "https://meeting51.mobifone.vn/api/status",
      // "https://meeting52.mobifone.vn/api/status",
    ];

    const counts = await Promise.all(
      endpoints.map((endpoint) =>
        fetch(endpoint, { cache: "no-store" })
          .then((resp) => resp.json())
          .then((json) => {
            if (json.online) {
              return json.viewerCount ? json.viewerCount : 0;
            }
            return 0;
          })
      )
    );

    console.log(counts);

    return Response.json(
      { peerCount: sum(counts) },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ error: error.toString() });
    }
    return Response.json({ error: "unexpected" });
  }
}
