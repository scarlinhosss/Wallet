import Joi from "joi";
import { SessionParams } from "../protocols";
import passwordComplexity from "joi-password-complexity";

export const sessionSchema = Joi.object<SessionParams>({
    email: Joi.string().email().required(),
    password: passwordComplexity({
        min: 8,
        max: 50,
        symbol: 2,
        numeric: 1,
        upperCase: 1,
        lowerCase: 1,
    }),
    token: Joi.string(),
    userId: Joi.number(),
})