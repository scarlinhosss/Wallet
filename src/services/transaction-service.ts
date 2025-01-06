import { prisma } from "../config";
import { notFoundError } from "../errors/not-found-error";
import { transactionParams } from "../protocols";
import transactionRepository from "../repositories/transaction-repository";

export function multiplyValues(transactions: transactionParams[]): transactionParams[] {
    return transactions.map(transaction => ({
        ...transaction,
        value: transaction.value * 100,
    }));
}

export async function calculateBalance(userId: number) {
    const transactions: transactionParams[] = await transactionRepository.getUserTransaction(userId);

    const balance = transactions.reduce((total, transaction) => {
        return transaction.type === "income"
            ? total + transaction.value
            : total - transaction.value;
    }, 0);

    const result = {
        transactions,
        balance: balance / 100,
    };

    return result;
}

async function createTransaction(data: transactionParams) {
    transactionRepository.createTransaction(data)
    // isso não funcionou
    data: data.value * 100;
    return;
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