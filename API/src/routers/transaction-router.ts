import { Router } from "express";

import { validateBody } from "../middlewares";
import { transactionSchema} from "../schemas"
import { createTransaction, getTransactionById, getUserTransaction } from "../controllers";
import { authenticateToken } from "../middlewares/authenticate-token";


const transactionRouter = Router();

transactionRouter
    .all("/*", authenticateToken)
    .post("/", validateBody(transactionSchema), createTransaction)
    .get("/:id", getTransactionById)
    .get("/user/:userId", getUserTransaction);

export { transactionRouter };

