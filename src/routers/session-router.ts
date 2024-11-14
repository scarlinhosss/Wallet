import { Router } from "express";

import { upsertSession } from "../controllers";

const sessionRouter = Router();

sessionRouter.post("/", upsertSession);

export { sessionRouter };

