import express from "express";
import cors from "cors";

import { loadEnv,connectDB, disconnectDB } from "./config/index";
import { sessionRouter } from "./routers";


loadEnv();

sessionRouter