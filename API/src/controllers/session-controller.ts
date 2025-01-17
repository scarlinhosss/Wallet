import { Response, Request } from "express";
import httpStatus from "http-status";
import sessionServices from "../services/session-service";
import { SessionParams } from "../protocols";
import { errorMessages } from "../utils/error-utils";
import dotenv from "dotenv";

export async function upsertSession(req: Request, res: Response) {
    const { id, email, password } = req.body as SessionParams;

    if ((!id && id !== 0 || !email || isNaN(id)) || (!id && !password)) 
        return res.status(httpStatus.BAD_REQUEST).send("Parâmetros não encontrados ou incorretos");

    try {
        const response = await sessionServices.upsertSession(req.body);

        res.status(httpStatus.OK).send(response);
    } catch (error: any) {
        console.log(error);
        if (error.name === "NotFoundError")
            return res.status(httpStatus.NOT_FOUND).send(errorMessages.userNotFound);
            
        if (error.name === "InvalidCredentialsError") 
            return res.status(httpStatus.UNAUTHORIZED).send(errorMessages.loginFail)
             
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(errorMessages.generic);
    }
}