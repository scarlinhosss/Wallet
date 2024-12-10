import { Router } from "express";

import { validateBody } from "../middlewares";
import { transactionSchema} from "../schemas"
import { createTransaction } from "../controllers";

const transactionRouter = Router();

transactionRouter.post("/", validateBody(transactionSchema), createTransaction);

export { transactionRouter };

