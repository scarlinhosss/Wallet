"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTransaction = exports.getUserTransaction = exports.getTransactionById = exports.createTransaction = void 0;
const http_status_1 = __importDefault(require("http-status"));
const transaction_service_1 = __importDefault(require("../services/transaction-service"));
const error_utils_1 = require("../utils/error-utils");
async function createTransaction(req, res) {
    const { id, description, value, type, userId } = req.body;
    try {
        await transaction_service_1.default.createTransaction({ id, description, value, type, userId });
        res.status(http_status_1.default.OK).send("Transação registrada com sucesso");
    }
    catch (error) {
        console.log(error);
        return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send(error_utils_1.errorMessages.generic);
    }
}
exports.createTransaction = createTransaction;
async function getTransactionById(req, res) {
    const id = Number(req.params.id);
    try {
        const transaction = await transaction_service_1.default.getTransactionById(id);
        res.status(http_status_1.default.OK).send(transaction);
    }
    catch (error) {
        return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send("Não foi possível realizar o Get.");
    }
}
exports.getTransactionById = getTransactionById;
async function getUserTransaction(req, res) {
    const { userId } = req;
    if (!userId && !isNaN(userId))
        return res.status(http_status_1.default.BAD_REQUEST).send(error_utils_1.errorMessages.missingValues);
    try {
        const response = await transaction_service_1.default.getUserTransactions(userId);
        return res.status(http_status_1.default.OK).send(response);
    }
    catch (error) {
        return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send(error_utils_1.errorMessages.generic);
    }
}
exports.getUserTransaction = getUserTransaction;
async function deleteTransaction(req, res) {
    const id = Number(req.params.id);
    if (!id || isNaN(id))
        return res.status(http_status_1.default.BAD_REQUEST).send(error_utils_1.errorMessages.missingValues);
    try {
        await transaction_service_1.default.deleteTransaction(id);
        res.status(http_status_1.default.OK).send("Transação deletada com sucessos");
    }
    catch (error) {
        console.log(error);
        return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send(error_utils_1.errorMessages.generic);
    }
}
exports.deleteTransaction = deleteTransaction;
