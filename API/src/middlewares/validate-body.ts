import { NextFunction, Request, Response } from "express";
import joi, { ObjectSchema } from "joi";
import httpStatus from "http-status";
import { errorMessages } from "../utils/error-utils";

export function validateBody<T>(schema:ObjectSchema<T>): ValidationMiddleware {
    return validate(schema, "body");
}

export function validateParams<T>(schema:ObjectSchema<T>): ValidationMiddleware {
    return validate(schema, "params");
}

export function validate(schema: ObjectSchema, type: "body" | "params") {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req[type], {
            abortEarly: false,
        });

        if (!error) {
            next();
        } else {
            console.log(error);
          res.status(httpStatus.BAD_REQUEST).send(errorMessages.generic);
        }
    }
}

type ValidationMiddleware = (req: Request, res: Response, next: NextFunction)=> void;