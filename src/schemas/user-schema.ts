import Joi from "joi";
import { userParams } from "@/protocols";
import  passwordComplexity  from "joi-password-complexity";

export const userSchema = Joi.object<userParams>({
    name: Joi.string().min(1).required().pattern(/^[a-zA-Záàâãéèêíïóôõöúçñ ]+$/),
    email: Joi.string().email().required(),
    password: passwordComplexity({
        min: 8,
        max: 50,
        symbol: 2,
        numeric: 1,
        upperCase: 1,
        lowerCase: 1,
    }),
    password_confirmation: Joi.ref("password")
})