import { Response, Request } from "express";
import httpStatus from "http-status";
import sessionServices from "../services/session-service";
import { SessionParams } from "../protocols";
import { errorMessages } from "../utils/error-utils";

export async function upsertSession(req: Request, res: Response) {
    const { id, email, password } = req.body as SessionParams;

    if ((!id && id !== 0 || !email || isNaN(id))) {
        res.status(httpStatus.BAD_REQUEST).send("Parâmetros não encontrados ou incorretos");
        return;
    }   
    try {
        await sessionServices.upsertSession({ id, email, password });
        res.status(httpStatus.OK).send(id ? "Sessão encerrada com sucesso" : "Sessão criada com sucesso");
    } catch (error: any) {
        console.log(error);
        if (error.name === "NotFoundError")
            res.status(httpStatus.NOT_FOUND).send(errorMessages.userNotFound);
        if (error.name === "InvalidCredentialsError")
            res.status(httpStatus.UNAUTHORIZED).send(errorMessages.loginFail)
            
        res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send(errorMessages.generic);
    }
}