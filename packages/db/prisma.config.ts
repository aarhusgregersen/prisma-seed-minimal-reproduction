import path from "node:path";
import type { PrismaConfig } from "prisma";

export default {
  schema: path.join("prisma", "schema"),
  migrations: {
    seed: "pnpm exec tsx packages/seed/src/index.ts",
  },
} satisfies PrismaConfig;
