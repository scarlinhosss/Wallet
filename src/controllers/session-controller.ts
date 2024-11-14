import { Response, Request } from "express";
import httpStatus from "http-status";
import sessionServices from "../services/session-service";

/*export async function upsertSession(req: Request, res: Response) {
    const id = Number(req.params.id);
    const {
        token,
    } = req.body;
    try {
        const session = await sessionServices.upsertSession(id, { token });
        return res.status(httpStatus.OK).send(session)
    } catch (error) {
        console.log(error);
        return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send("Não foi possível realizar a operação.")
    }
}
*/

/* export async function upsertSession(req: Request, res: Response) {
    const id = Number(req.params.id);
    const {
        token,
    } = req.body;
    try {
        const session = await sessionServices.upsertSession(id, { token });
        return res.status(httpStatus.OK).send(session);
    } catch(error) {
        console.log(error);
        return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send("Não foi possível concluir a operação.")
    }
} */

export async function upsertSession(req: Request, res: Response) {
    const SessionParams = req.body;
    try {
        const session = await sessionServices.upsertSession(SessionParams.id, SessionParams.token);
        return res.status(httpStatus.OK).send(session);
    } catch(error) {
        console.log(error);
        return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send("Não foi possível concluir a operação.")
    }
}