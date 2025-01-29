import { Response, Request } from "express";
import httpStatus from "http-status";
import sessionServices from "../services/session-service";
import { userParams } from "../protocols";
import { errorMessages } from "../utils/error-utils";
import userServices from "../services/user-service";

export async function createUser(req: Request, res: Response) {
    const { name, email, password, password_confirmation } = req.body as userParams

    try {
        await userServices.createUser({ name, email, password, password_confirmation });
        res.status(httpStatus.OK).send("Usuário criado com sucesso");
    } catch (error: any) {
        console.log(error);
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(errorMessages.duplicatedEmail);
    }
}