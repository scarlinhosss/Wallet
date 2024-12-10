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