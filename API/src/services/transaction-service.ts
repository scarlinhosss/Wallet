import { prisma } from "../config";
import { notFoundError } from "../errors/not-found-error";
import { transactionParams, transactionResponse } from "../protocols";
import transactionRepository from "../repositories/transaction-repository";

export function transactionValueHandle(transactions: transactionParams[]): transactionResponse[] {
    return transactions.map(transaction => ({
        ...transaction,
        value: (transaction.value / 100).toFixed(2).replace(".", ","),
    }));
}

export async function calculateBalance(userId: number) {
    const transactions: transactionParams[] = await transactionRepository.getUserTransaction(userId);

    const balance = (transactions.reduce((total, transaction) => {
        return transaction.type === "income"
            ? total + transaction.value
            : total - transaction.value;
    }, 0) / 100).toFixed(2).replace(".", ",");

    const result = {
        transactions: transactionValueHandle(transactions),
        balance,
    };

    return result;
}

async function createTransaction(data: transactionParams) {
    return transactionRepository.createTransaction({ ...data, value: data.value * 100 })
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