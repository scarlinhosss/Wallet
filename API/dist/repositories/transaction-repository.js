"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
async function createTransaction(data) {
    await config_1.prisma.transaction.upsert({
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
    });
}
async function getTransactionById(id) {
    return config_1.prisma.transaction.findUnique({
        where: {
            id,
        },
    });
}
async function getUserTransactions(userId) {
    return config_1.prisma.transaction.findMany({
        where: {
            userId,
        },
    });
}
async function deleteTransaction(id) {
    return config_1.prisma.transaction.delete({
        where: {
            id,
        }
    });
}
const transactionRepository = {
    createTransaction,
    getTransactionById,
    getUserTransactions,
    deleteTransaction,
};
exports.default = transactionRepository;
