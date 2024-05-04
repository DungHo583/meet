import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "db/schema.ts",
  out: "db/drizzle",
  driver: "mysql2",
  dbCredentials: {
    uri: 'mysql://ogoqwo1v00rl40gogp0s:pscale_pw_lHsw6SUnaiXJeoiaRTnGdv5PBx3TLmzgAWS7qUWGJzJ@aws.connect.psdb.cloud/meet-tgtw?ssl={"rejectUnauthorized":true}',
  },
});
