import { Router } from "express";

import { validateBody } from "../middlewares";
import { sessionSchema } from "../schemas";
import { upsertSession } from "../controllers";
import { authenticateToken } from "../middlewares/authenticate-token";

const sessionRouter = Router();

sessionRouter
    .post("/", validateBody(sessionSchema), upsertSession)
    .post("/logout", authenticateToken, validateBody(sessionSchema), upsertSession);

export { sessionRouter };

