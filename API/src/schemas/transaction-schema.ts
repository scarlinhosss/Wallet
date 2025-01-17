import Joi from "joi";
import { TransactionParams } from "../protocols";

export const transactionSchema = Joi.object<TransactionParams>({
    id: Joi.number().allow(0),
    description: Joi.string().min(1).required().pattern(/^[a-zA-Záàâãéèêíïóôõöúçñ ]+$/),
    value: Joi.number().required(),
    type: Joi.string().required(),
    userId: Joi.number().required(),
});