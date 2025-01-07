import { PrismaClient } from "@prisma/client";

export let prisma: PrismaClient;
export function connectDB() {
    prisma = new PrismaClient();
}

export async function disconnectDB() {
    await prisma?.$disconnect();
}