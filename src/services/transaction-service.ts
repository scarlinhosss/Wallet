import { prisma } from "../config";
import { notFoundError } from "../errors/not-found-error";
import { transactionParams } from "../protocols";
import transactionRepository from "../repositories/transaction-repository";

async function createTransaction(data: transactionParams) {
    return transactionRepository.createTransaction(data)
}

async function getTransactionById(id: number) {
    return transactionRepository.getTransactionById(id);
}

async function getUserTransaction(userId: number) {
    return transactionRepository.getUserTransaction(userId);
}

const transactionServices = {
    createTransaction,
    getTransactionById,
    getUserTransaction,
}

export default transactionServices;