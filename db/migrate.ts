import { migrate } from "drizzle-orm/planetscale-serverless/migrator";
import { db } from "~/db";

migrate(db, { migrationsFolder: "db/drizzle" });
