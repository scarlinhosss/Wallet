import Joi from "joi";
import { SessionParams } from "../protocols";
import passwordComplexity from "joi-password-complexity";

export const sessionSchema = Joi.object<SessionParams>({
    id: Joi.number().allow(0),
    email: Joi.string().email().required(),
    token: Joi.string().allow(null, ""),
    password: passwordComplexity({
        min: 8,
        max: 50,
        symbol: 2,
        numeric: 1,
        upperCase: 1,
        lowerCase: 1,
    }).allow(null),
});
