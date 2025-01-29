"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionRouter = void 0;
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const schemas_1 = require("../schemas");
const controllers_1 = require("../controllers");
const authenticate_token_1 = require("../middlewares/authenticate-token");
const transactionRouter = (0, express_1.Router)();
exports.transactionRouter = transactionRouter;
transactionRouter
    .all("/*", authenticate_token_1.authenticateToken)
    .post("/", (0, middlewares_1.validateBody)(schemas_1.transactionSchema), controllers_1.createTransaction)
    .get("/:id", controllers_1.getTransactionById)
    .get("/user/:userId", controllers_1.getUserTransaction)
    .delete("/:id", controllers_1.deleteTransaction);
