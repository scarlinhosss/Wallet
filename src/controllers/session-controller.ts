import { Response, Request } from "express";
import httpStatus from "http-status";
import sessionServices from "../services/session-service";

export async function upsertSession(req: Request, res: Response) {
    const id = Number(req.params.id);
    const {
        token,
    } = req.body;
    try {
        const session = await sessionServices;
        upsertSession(id,{token})
    }
}