import { Response, Request } from "express";
import httpStatus from "http-status";
import transactionServices from "../services/transaction-service";
import { transactionParams } from "../protocols";
import { errorMessages } from "../utils/error-utils";

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

export async function getIdTransaction(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
        const transaction = await transactionServices.getIdTransaction(id);
        res.status(httpStatus.OK).send(transaction);
    } catch (error) {
        res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send("Não foi possível realizar o Get.")
        
        return;
    }
}

export async function getUserTransaction(req: Request, res: Response) {
    const userId = Number(req.params.userId);

    //if(!userId && !isNaN(userId)) return res.status(httpStatus.BAD_REQUEST).send(errorMessages.missingValues);

    try {
        const transactions = await transactionServices.getUserTransaction(userId);
        res.status(httpStatus.OK).send(transactions)
    } catch (error) {
        res
        .status(httpStatus.INTERNAL_SERVER_ERROR).send(errorMessages.generic)
        
        return;
    }
}