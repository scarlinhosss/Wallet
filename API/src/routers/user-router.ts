import { Router } from "express";

import { createUser } from "../controllers/user-controller";
import { validateBody } from "../middlewares";
import { userSchema } from "../schemas/user-schema";

const userRouter = Router();

userRouter.post("/", validateBody(userSchema), createUser);

export { userRouter };