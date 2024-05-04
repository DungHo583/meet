import { take } from "lodash";
import { useEffect, useState } from "react";

const sources = [
  // "https://meeting10.mobifone.vn/hls/stream.m3u8",
  // "https://meeting18.mobifone.vn/hls/stream.m3u8",
  // "https://meeting19.mobifone.vn/hls/stream.m3u8",
  // "https://meeting41.mobifone.vn/hls/stream.m3u8",
  // "https://meeting42.mobifone.vn/hls/stream.m3u8",
  "https://meeting43.mobifone.vn/hls/stream.m3u8",
  // "https://meeting50.mobifone.vn/hls/stream.m3u8",
  // "https://meeting51.mobifone.vn/hls/stream.m3u8",
  // "https://meeting52.mobifone.vn/hls/stream.m3u8",
];

export function useStreamSource() {
  const [streamSource, setStreamSource] = useState<string | undefined>();

  useEffect(() => {
    async function run() {
      const latencies = await Promise.all(sources.map(tryLatency));
      const sorted = latencies.toSorted((a, b) => a.latency - b.latency);
      const selected = randomSelect(take(sorted, 6));
      console.log("options", sorted);
      console.log("selected", selected);
      setStreamSource(selected.url);
    }

    run().catch((error) => {
      console.log(error);
      setStreamSource(randomSelect(sources).url);
    });
  }, []);

  return streamSource;
}

function random(mn: number, mx: number) {
  return Math.random() * (mx - mn) + mn;
}

function randomSelect(list: any[]) {
  return list[Math.floor(random(1, list.length)) - 1];
}

async function tryLatency(serverUrl: string) {
  const startTime = performance.now();
  await fetch(serverUrl, { method: "HEAD" });
  const latency = performance.now() - startTime;
  return { latency, url: serverUrl };
}
