"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.init = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = require("./config/index");
const routers_1 = require("./routers");
(0, index_1.loadEnv)();
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
app
    .use((0, cors_1.default)())
    .use(express_1.default.json())
    .get("/health", (_req, res) => { res.send("OK!"); })
    .use("/session", routers_1.sessionRouter)
    .use("/user", routers_1.userRouter)
    .use("/transaction", routers_1.transactionRouter);
function init() {
    (0, index_1.connectDB)();
    return Promise.resolve(app);
}
exports.init = init;
async function close() {
    await (0, index_1.disconnectDB)();
}
exports.close = close;
exports.default = app;
