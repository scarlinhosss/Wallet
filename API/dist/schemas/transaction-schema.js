"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.transactionSchema = joi_1.default.object({
    id: joi_1.default.number().allow(0),
    description: joi_1.default.string().min(1).required().pattern(/^[a-zA-Záàâãéèêíïóôõöúçñ ]+$/),
    value: joi_1.default.number().required(),
    type: joi_1.default.string().required(),
    userId: joi_1.default.number().required(),
});
