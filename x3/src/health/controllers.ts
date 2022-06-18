import { Router } from "express";

import { checkHealth } from "./providers";


export const healthController: Router = Router();

healthController.get("/", checkHealth)
