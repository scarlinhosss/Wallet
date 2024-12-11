import { Router } from "express";

import { validateBody } from "../middlewares";
import { transactionSchema} from "../schemas"
import { createTransaction, getTransaction } from "../controllers";

const transactionRouter = Router();

transactionRouter.post("/", validateBody(transactionSchema), createTransaction);
transactionRouter.get("/", getTransaction);

export { transactionRouter };

