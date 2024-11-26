import express from "express";
import cors from "cors";

import { loadEnv,connectDB, disconnectDB } from "./config/index";
import { sessionRouter } from "./routers";


loadEnv();

const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => { res.send("OK!") })
  .use("/session", sessionRouter);

  export function init() {
    connectDB();
    return Promise.resolve(app);
  }

  export async function close() {
    await disconnectDB();
  }

  export default app;