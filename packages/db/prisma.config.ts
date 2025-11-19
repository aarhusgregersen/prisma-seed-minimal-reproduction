import path from "node:path";
import type { PrismaConfig } from "prisma";
import "dotenv/config";

export default {
  schema: path.join("prisma", "schema"),
  migrations: {
    seed: "pnpm exec tsx packages/seed/src/index.ts",
  },
  datasource: {
    url: process.env.DATABASE_URL as string,
  },
} satisfies PrismaConfig;
