import { prisma } from "../config"
import { transactionParams } from "../protocols/transaction-protocols"

async function createTransaction(data: transactionParams) {
    return prisma.transaction.create({
        data,
    })
}


const transactionRepository = {
    createTransaction,    
}

export default transactionRepository;