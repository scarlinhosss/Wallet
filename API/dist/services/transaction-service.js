"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateBalance = exports.transactionValueHandle = void 0;
const transaction_repository_1 = __importDefault(require("../repositories/transaction-repository"));
function transactionValueHandle(transactions) {
    return transactions.map(transaction => ({
        id: transaction.id,
        description: transaction.description,
        date: transaction.createdAt,
        type: transaction.type,
        value: (transaction.value / 100),
    }));
}
exports.transactionValueHandle = transactionValueHandle;
async function calculateBalance(transactions) {
    const balance = (transactions.reduce((total, transaction) => {
        return transaction.type === "income"
            ? total + transaction.value
            : total - transaction.value;
    }, 0) / 100);
    const result = {
        transactions: transactionValueHandle(transactions),
        balance,
    };
    return result;
}
exports.calculateBalance = calculateBalance;
async function createTransaction(data) {
    await transaction_repository_1.default.createTransaction({ ...data, value: data.value * 100 });
}
async function getTransactionById(id) {
    return transaction_repository_1.default.getTransactionById(id);
}
async function getUserTransactions(userId) {
    const transactions = await transaction_repository_1.default.getUserTransactions(userId);
    const result = calculateBalance(transactions);
    return result;
}
async function deleteTransaction(id) {
    await transaction_repository_1.default.deleteTransaction(id);
}
const transactionServices = {
    createTransaction,
    getTransactionById,
    getUserTransactions,
    deleteTransaction,
};
exports.default = transactionServices;
