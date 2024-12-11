import { prisma } from "../config";
import { notFoundError } from "../errors/not-found-error";
import { transactionParams } from "../protocols";
import transactionRepository from "../repositories/transaction-repository";

async function createTransaction(data: transactionParams) {
    return transactionRepository.createTransaction(data)
}

async function getTransaction() {
    const list = await prisma.transaction.findMany();
    
    if (!list || !list[0]) throw notFoundError();

    return list;
}

const transactionServices = {
    createTransaction,
    getTransaction,
}

export default transactionServices;