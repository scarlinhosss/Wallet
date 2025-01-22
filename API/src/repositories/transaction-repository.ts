import { prisma } from "../config"
import { TransactionParams } from "../protocols/transaction-protocols"

async function createTransaction(data: TransactionParams) {
    await prisma.transaction.upsert({
        where: {
            id: data.id,
        },
        create: {
            description: data.description,
            value: data.value,
            type: data.type,
            userId: data.userId, 
        },
        update: {
            description: data.description,
            value: data.value,
            updatedAt: new Date(),
        }
    })
}

async function getTransactionById(id: number) {
    return prisma.transaction.findUnique({
        where: {
            id,
        },
    });
}

async function getUserTransactions(userId: number) {
    return prisma.transaction.findMany({
        where: {
            userId: userId,
        },
    })
}

const transactionRepository = {
    createTransaction,
    getTransactionById,
    getUserTransactions
}

export default transactionRepository;