import { Router } from "express";

import { HealthProvider } from "./providers";

export class HealthController {
  public router = Router();

  private healthProvider = new HealthProvider();

  constructor() {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get("/", this.healthProvider.checkHealth);
  }
}
