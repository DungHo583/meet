import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import { configs, peers } from "~/db/schema";

const connection = connect({
  host: "aws.connect.psdb.cloud",
  username: "ogoqwo1v00rl40gogp0s",
  password: "pscale_pw_lHsw6SUnaiXJeoiaRTnGdv5PBx3TLmzgAWS7qUWGJzJ",
});

export const db = drizzle(connection, { schema: { peers, configs } });
