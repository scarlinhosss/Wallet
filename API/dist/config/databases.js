"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectDB = exports.connectDB = exports.prisma = void 0;
const client_1 = require("@prisma/client");
function connectDB() {
    exports.prisma = new client_1.PrismaClient();
}
exports.connectDB = connectDB;
async function disconnectDB() {
    await exports.prisma?.$disconnect();
}
exports.disconnectDB = disconnectDB;
