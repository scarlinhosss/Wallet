import { prisma } from "../config"
import { transactionParams } from "../protocols/transaction-protocols"

async function createTransaction(data: transactionParams) {
    return prisma.transaction.create({
        data,
    })
}

async function getTransactionById(id: number) {
    return prisma.transaction.findUnique({
        where: {
            id,
        },
    });
}

async function getUserTransaction(userId: number) {
    return prisma.transaction.findMany({
        where: {
            userId: userId,
        },
    })
}

const transactionRepository = {
    createTransaction,
    getTransactionById,
    getUserTransaction
}

export default transactionRepository;