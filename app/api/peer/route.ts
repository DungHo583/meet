import { db } from "~/db";
import { withTryCatch } from "~/utils";

export const dynamic = "force-dynamic";

export const GET = withTryCatch(async (req) => {
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

  const promises = endpoints.map(async (endpoint) => {
    const resp = await fetch(endpoint, { cache: "no-store" });
    const json = await resp.json();

    if (json.online) {
      return json.viewerCount ? json.viewerCount : 0;
    }

    return 0;
  });

  const results = await Promise.allSettled(promises);
  const peerCount = results.reduce((acc, cur) => {
    if (cur.status === "fulfilled") {
      return acc + cur.value;
    }
    return acc;
  }, 0);

  console.log(results);
  console.log("===================");

  return Response.json({ peerCount });
});

async function getDelta() {
  try {
    const configs = await db.query.configs.findFirst();
    if (configs) {
      return configs.delta ? configs.delta : 0;
    }
    return 0;
  } catch (error) {
    return 0;
  }
}
