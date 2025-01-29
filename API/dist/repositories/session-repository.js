"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
async function upsertSession(data, userId) {
    return config_1.prisma.session.upsert({
        where: {
            id: data.id,
        },
        create: {
            userId: userId,
            token: data.token,
        },
        update: {
            closedAt: new Date(),
        },
    });
}
const sessionRepository = {
    upsertSession,
};
exports.default = sessionRepository;
