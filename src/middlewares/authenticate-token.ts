import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { errorMessages } from "../utils/error-utils";
import { prisma } from "../config"

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const authHeader = req.header("Authorization");
    if(!authHeader) 
        return res.status(httpStatus.UNAUTHORIZED).send(errorMessages.unauthorized);

    const token = authHeader.replace("Bearer ", "");

    if(!token)
        return res.status(httpStatus.UNAUTHORIZED).send(errorMessages.unauthorized);

    try{
        const session = await prisma.session.findFirst({
            where: {
                token,
                closedAt: null,
            },
        });
        if(!session)
            return res.status(httpStatus.UNAUTHORIZED).send(errorMessages.unauthorized);

        req.userId = session.userId;

        next();
        return;
    } catch(error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(errorMessages.generic);
    }
}
export type AuthenticatedRequest = Request & { userId: number };