"use server";

import { count, eq } from "drizzle-orm";
import { db } from "~/db";
import { peers } from "~/db/schema";

export async function assertPeer(name: string) {
  const [{ peerCount }] = await db
    .select({ peerCount: count() })
    .from(peers)
    .where(eq(peers.name, name));

  if (peerCount === 0) {
    await db.insert(peers).values({ name });
  }
}
