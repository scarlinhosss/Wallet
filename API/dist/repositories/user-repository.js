"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../config/index");
function createUser(data) {
    return index_1.prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            hash_password: data.password,
        },
    });
}
function findUseryByEmail(email) {
    return index_1.prisma.user.findFirst({
        where: {
            email,
        },
    });
}
function findUserById(id) {
    return index_1.prisma.user.findUnique({
        where: {
            id,
        },
    });
}
const userRepository = {
    createUser,
    findUseryByEmail,
    findUserById,
};
exports.default = userRepository;
