import { Response, Request } from "express";
import httpStatus from "http-status";
import transactionServices from "../services/transaction-service";
import { transactionParams } from "../protocols";
import { errorMessages } from "../utils/error-utils";

export async function getTransaction(req: Request, res: Response) {
    try {
    const allTransactions = await transactionServices.getTransaction();
    res.status(httpStatus.OK).send(allTransactions);
    } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send("Não foi possível realizar o Get.")
    }
}

export async function createTransaction(req: Request, res: Response) {
    const { id,description, value, type, userId } = req.body as transactionParams;

    try {
        await transactionServices.createTransaction({ id, description, value, type, userId });
        res.status(httpStatus.OK).send("Transação registrada com sucesso");
    } catch (error: any) {
        console.log(error);
        res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send(errorMessages.generic);

        return;
    }
}