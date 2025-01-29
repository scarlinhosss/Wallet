"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = __importDefault(require("../repositories/user-repository"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const errors_1 = require("../errors");
async function createUser(data) {
    const hash_password = await bcrypt_1.default.hash(data.password, 12);
    await checkEmailExist(data.email);
    return user_repository_1.default.createUser({ ...data, password: hash_password });
}
async function checkEmailExist(email) {
    const user = await user_repository_1.default.findUseryByEmail(email);
    if (user)
        throw (0, errors_1.existingEmail)();
}
const userServices = {
    createUser,
};
exports.default = userServices;
