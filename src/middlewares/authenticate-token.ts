import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { errorMessages } from "../utils/error-utils";
import { prisma } from "../config"

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const authHeader = req.header("Authorization");
    if(!authHeader) {
        res.status(httpStatus.UNAUTHORIZED).send(errorMessages.unauthorized);
        return;
    }

    const token = authHeader.replace("Bearer ", "");

    if(!token) {
        res.status(httpStatus.UNAUTHORIZED).send(errorMessages.unauthorized);
        return;
    }
    try{
        const session = await prisma.session.findFirst({
            where: {
                token,
                closedAt: null,
            },
        });
        if(!session) {
            res.status(httpStatus.UNAUTHORIZED).send(errorMessages.unauthorized);
            return;
        }

        req.userId = session.userId;

        next();
        return;
    } catch(error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(errorMessages.generic);
        return;
    }
}
export type AuthenticatedRequest = Request & { userId: number };