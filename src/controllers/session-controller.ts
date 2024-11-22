import { Response, Request, response } from "express";
import httpStatus, { BAD_REQUEST, OK } from "http-status";
import sessionServices from "../services/session-service";
import { SessionParams } from "../protocols";

export async function upsertSession(req: Request, res: Response) {
    const { id, email, password } = req.body as SessionParams;

    if ((!id && id !== 0 || !email || isNaN(id)))
        return response.status(httpStatus.BAD_REQUEST).send("Parâmetros não encontrados ou incorretos");
    
    try {
        await sessionServices.upsertSession({ id, email, password });
        return res.status(httpStatus.OK).send(id ? "Sessão encerrada com sucesso" : "Sessão criada com sucesso");
    } catch (error) {
        console.log(error);
        
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Ocorreu um erro inesperado");
    }
}