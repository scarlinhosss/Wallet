"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionRouter = void 0;
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const schemas_1 = require("../schemas");
const controllers_1 = require("../controllers");
const authenticate_token_1 = require("../middlewares/authenticate-token");
const sessionRouter = (0, express_1.Router)();
exports.sessionRouter = sessionRouter;
sessionRouter
    .post("/", (0, middlewares_1.validateBody)(schemas_1.sessionSchema), controllers_1.upsertSession)
    .post("/logout", authenticate_token_1.authenticateToken, (0, middlewares_1.validateBody)(schemas_1.sessionSchema), controllers_1.upsertSession);
