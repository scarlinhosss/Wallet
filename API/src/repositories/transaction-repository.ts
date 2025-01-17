import { prisma } from "../config"
import { TransactionParams } from "../protocols/transaction-protocols"

async function createTransaction(data: TransactionParams) {
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