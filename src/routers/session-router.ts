import { Router } from "express";

import { validateBody } from "../middlewares";
import { sessionSchema } from "../schemas";
import { upsertSession } from "../controllers";

const sessionRouter = Router();

sessionRouter.post("/", validateBody(sessionSchema), upsertSession);

export { sessionRouter };

