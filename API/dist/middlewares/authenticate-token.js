"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const http_status_1 = __importDefault(require("http-status"));
const error_utils_1 = require("../utils/error-utils");
const config_1 = require("../config");
async function authenticateToken(req, res, next) {
    const authHeader = req.header("Authorization");
    if (!authHeader)
        return res.status(http_status_1.default.UNAUTHORIZED).send(error_utils_1.errorMessages.unauthorized);
    const token = authHeader.replace("Bearer ", "");
    if (!token)
        return res.status(http_status_1.default.UNAUTHORIZED).send(error_utils_1.errorMessages.unauthorized);
    try {
        const session = await config_1.prisma.session.findFirst({
            where: {
                token,
                closedAt: null,
            },
        });
        if (!session)
            return res.status(http_status_1.default.UNAUTHORIZED).send(error_utils_1.errorMessages.unauthorized);
        req.userId = session.userId;
        next();
        return;
    }
    catch (error) {
        return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send(error_utils_1.errorMessages.generic);
    }
}
exports.authenticateToken = authenticateToken;
