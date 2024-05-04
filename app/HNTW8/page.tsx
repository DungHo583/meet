/* eslint-disable @next/next/no-img-element */
import { Main } from "~/app/HNTW8/main";

export const dynamic = "force-dynamic";

export default async function Home() {
  await sleep(1000);

  return <Main />;
}

function sleep(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
