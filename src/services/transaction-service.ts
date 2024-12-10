import { transactionParams } from "../protocols";
import transactionRepository from "../repositories/transaction-repository";

async function createTransaction(data: transactionParams) {
    return transactionRepository.createTransaction(data)
}

const transactionServices = {
    createTransaction,
}

export default transactionServices;