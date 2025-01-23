import { Router } from "express";

import { validateBody } from "../middlewares";
import { transactionSchema} from "../schemas"
import { createTransaction, deleteTransaction, getTransactionById, getUserTransaction } from "../controllers";
import { authenticateToken } from "../middlewares/authenticate-token";


const transactionRouter = Router();

transactionRouter
    .all("/*", authenticateToken)
    .post("/", validateBody(transactionSchema), createTransaction)
    .get("/:id", getTransactionById)
    .get("/user/:userId", getUserTransaction)
    .delete("/:id", deleteTransaction)

export { transactionRouter };

