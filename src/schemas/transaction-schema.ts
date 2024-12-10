import Joi from "joi";
import { transactionParams } from "@/protocols";

export const transactionSchema = Joi.object<transactionParams>({
    id: Joi.number().allow(0),
    description: Joi.string().min(1).required().pattern(/^[a-zA-Záàâãéèêíïóôõöúçñ ]+$/),
    value: Joi.number().required(),
    type: Joi.string().required(),
});