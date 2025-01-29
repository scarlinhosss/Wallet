"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const http_status_1 = __importDefault(require("http-status"));
const error_utils_1 = require("../utils/error-utils");
const user_service_1 = __importDefault(require("../services/user-service"));
async function createUser(req, res) {
    const { name, email, password, password_confirmation } = req.body;
    try {
        await user_service_1.default.createUser({ name, email, password, password_confirmation });
        res.status(http_status_1.default.OK).send("Usuário criado com sucesso");
    }
    catch (error) {
        console.log(error);
        return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send(error_utils_1.errorMessages.duplicatedEmail);
    }
}
exports.createUser = createUser;
