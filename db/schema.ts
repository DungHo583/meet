import {
  boolean,
  int,
  mysqlTable,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const peers = mysqlTable("peers", {
  id: int("id", { unsigned: true }).primaryKey().autoincrement(),
  name: varchar("name", { length: 200 }).unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const configs = mysqlTable("configs", {
  id: int("id", { unsigned: true }).primaryKey().autoincrement(),
  allowJoin: boolean("allow_join"),
  delta: int("delta").default(0),
});
