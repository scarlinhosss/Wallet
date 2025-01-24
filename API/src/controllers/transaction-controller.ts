import { Response, Request } from "express";
import httpStatus from "http-status";
import transactionServices from "../services/transaction-service";
import { TransactionParams } from "../protocols";
import { errorMessages } from "../utils/error-utils";
import { AuthenticatedRequest } from "../middlewares/authenticate-token";

export async function createTransaction(req: Request, res: Response) {
    const { id, description, value, type, userId } = req.body as TransactionParams;

    try {
        await transactionServices.createTransaction({ id, description, value, type, userId });
        res.status(httpStatus.OK).send("Transação registrada com sucesso");
    } catch (error: any) {
        console.log(error);
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(errorMessages.generic);
    }
}

export async function getTransactionById(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
        const transaction = await transactionServices.getTransactionById(id);
        res.status(httpStatus.OK).send(transaction);
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Não foi possível realizar o Get.");
    }
}

export async function getUserTransaction(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;
    if(!userId && !isNaN(userId)) return res.status(httpStatus.BAD_REQUEST).send(errorMessages.missingValues);

    try {
        const response = await transactionServices.getUserTransactions(userId);

        return res.status(httpStatus.OK).send(response);
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(errorMessages.generic);
    }
}

export async function deleteTransaction(req: AuthenticatedRequest, res: Response) {
    const id = Number(req.params.id);

    if (!id || isNaN(id)) return res.status(httpStatus.BAD_REQUEST).send(errorMessages.missingValues);

    try {
        await transactionServices.deleteTransaction(id);
        res.status(httpStatus.OK).send("Transação deletada com sucessos")
    } catch(error: any) {
        console.log(error);
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(errorMessages.generic)
    }
}