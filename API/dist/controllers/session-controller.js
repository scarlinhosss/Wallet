"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsertSession = void 0;
const http_status_1 = __importDefault(require("http-status"));
const session_service_1 = __importDefault(require("../services/session-service"));
const error_utils_1 = require("../utils/error-utils");
async function upsertSession(req, res) {
    const { id, email, password } = req.body;
    if ((!id && id !== 0 || !email || isNaN(id)) || (!id && !password))
        return res.status(http_status_1.default.BAD_REQUEST).send("Parâmetros não encontrados ou incorretos");
    try {
        const response = await session_service_1.default.upsertSession(req.body);
        res.status(http_status_1.default.OK).send(response);
    }
    catch (error) {
        console.log(error);
        if (error.name === "NotFoundError")
            return res.status(http_status_1.default.NOT_FOUND).send(error_utils_1.errorMessages.userNotFound);
        if (error.name === "InvalidCredentialsError")
            return res.status(http_status_1.default.UNAUTHORIZED).send(error_utils_1.errorMessages.loginFail);
        return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send(error_utils_1.errorMessages.generic);
    }
}
exports.upsertSession = upsertSession;
