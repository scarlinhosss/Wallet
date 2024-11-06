import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import jwt from "jsonwebtoken";
import { env } from 'node:process';


import { prisma } from "../config/databases";
import { ErrorMessages } from "../protocols"
import { errorMessages } from "../utils/error-utils";

export async function authenticateToken(req: AuthenticatedRequest, res: Response, Next: NextFunction) {
    const authHeader = req.header("Authorization");
    if (!authHeader) return generateUnauthorizedResponse(res);

    const token = authHeader.split(" ")[1];

    try {
        const { userId } = jwt.verify(token,process.env.JWT_SECRET) as JwtPayload;
        const session = await prisma.session.findFirst({
          where: {
            token: token,
            closedAt: null,
          },
        });
        
        if (!session) return generateUnauthorizedResponse(res);
    
        req.userId = userId;
    
        return Next();
      } catch (err) {
        return generateUnauthorizedResponse(res);
      }
}

function generateUnauthorizedResponse(res: Response) {
    res.status(httpStatus.UNAUTHORIZED).send(errorMessages.unauthorized);
  }  

export type AuthenticatedRequest = Request & JWTPayload;

type JWTPayload = {
    userId: number;
  };
  