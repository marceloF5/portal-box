import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-unused-vars
  var prisma: PrismaClient | undefined;
}

// eslint-disable-next-line no-undef
const prismadb = globalThis.prisma || new PrismaClient();
// eslint-disable-next-line no-undef, turbo/no-undeclared-env-vars
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;
