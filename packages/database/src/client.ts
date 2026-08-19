import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { powerchainPrisma?: PrismaClient };

export const prisma = globalForPrisma.powerchainPrisma ?? new PrismaClient({
  log: process.env.POWERCHAIN_ENV === "development" ? ["warn", "error"] : ["error"],
});

if (process.env.NODE_ENV !== "production") globalForPrisma.powerchainPrisma = prisma;
