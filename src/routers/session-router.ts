import { Router } from "express";

import { upsertSession } from "../controllers";
import { validateBody } from "../middlewares";
import { sessionSchema } from "../schemas";

const sessionRouter = Router();

sessionRouter.post("/:id", validateBody(sessionSchema), upsertSession);

export { sessionRouter };

