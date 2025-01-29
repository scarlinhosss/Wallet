"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const session_repository_1 = __importDefault(require("../repositories/session-repository"));
const user_repository_1 = __importDefault(require("../repositories/user-repository"));
const errors_1 = require("../errors");
const not_found_error_1 = require("../errors/not-found-error");
async function upsertSession(data) {
    const user = await user_repository_1.default.findUseryByEmail(data.email);
    if (!user)
        throw (0, not_found_error_1.notFoundError)();
    if (!data.id)
        await validatePasswordOrFail(data.password, user?.hash_password);
    const token = data.id ? data.token : jsonwebtoken_1.default.sign({ userId: user.id }, process.env.JWT_SECRET || "");
    const session = await session_repository_1.default.upsertSession({ ...data, token }, user.id);
    return {
        userId: user.id,
        sessionId: session.id,
        token: session.token,
        name: user.name,
        email: user.email,
    };
}
async function validatePasswordOrFail(password, hash_password) {
    const isPasswordValid = await bcrypt_1.default.compare(password, hash_password);
    if (!isPasswordValid)
        throw (0, errors_1.invalidCredentialsError)();
}
const sessionServices = {
    upsertSession,
};
exports.default = sessionServices;
