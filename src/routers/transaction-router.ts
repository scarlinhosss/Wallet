import { Router } from "express";

import { validateBody } from "../middlewares";
import { transactionSchema} from "../schemas"
import { createTransaction, getIdTransaction, getUserTransaction } from "../controllers";

const transactionRouter = Router();

transactionRouter.post("/", validateBody(transactionSchema), createTransaction);
transactionRouter.get("/:id", getIdTransaction);
transactionRouter.get("/user/:userId", getUserTransaction);

export { transactionRouter };

