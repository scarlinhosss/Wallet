"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_password_complexity_1 = __importDefault(require("joi-password-complexity"));
exports.userSchema = joi_1.default.object({
    name: joi_1.default.string().min(1).required().pattern(/^[a-zA-Záàâãéèêíïóôõöúçñ ]+$/),
    email: joi_1.default.string().email().required(),
    password: (0, joi_password_complexity_1.default)({
        min: 8,
        max: 50,
        symbol: 2,
        numeric: 1,
        upperCase: 1,
        lowerCase: 1,
    }),
    password_confirmation: joi_1.default.ref("password")
});
